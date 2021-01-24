import { Switch, Route } from 'react-router-dom';
import { Auth, Dash, Form, Post } from './Components';


export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route exact path='/dash' component={Dash} />
        <Route exact path='post/:id' component={Post} />
        <Route exact path='/form' component={Form} />
    </Switch>
)

