const bcrypt = require('bcryptjs');
const { getQueriesForElement } = require("@testing-library/react");



module_exports = {

    register: async (req, res) => {
        const { username, password } = req.body;
        const profile_pic = `https://robohash.org/${username}.png`;
        const db = req.app.get('db');

        const foundUser = await db.check_user({ username });
        if (foundUser[0]) {
            return res.status(400).send('Username already registered');
        }
        let salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = await db.register_user({ username, hash, profile_pic });

        req.session.user = newUser[0];
        res.status[201].send(req.session.user);
    },

    login: async (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get('db');

        const foundUser = await db.check_user({ username });
        if (!foundUser[0]) {
            return res.status(404).send('Username not found');
        }

        const authenticated = bcrypt.compareSync(password, foundUser[0].password);
        if (!authenticated) {
            return res.status(401).send('Incorrect password');
        }

        delete foundUser[0].password;

        req.session.user = foundUser[0];
        res.status[202].send(req.session.user);
    },

    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },

    getUser: (req, res) => {
        req.session.user = foundUser[0];
        if (foundUser[0]) {
            return res.status(302).send(req.session.user);
        } else {
            return res.sendStatus(404);
        }
    }
}

