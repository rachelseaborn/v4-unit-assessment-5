import React, { Component } from 'react';
import axios from 'axios';

import { Link, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import { Auth } from './../Auth/Auth';
import { Dash } from './../Dash/Dash';

import homeLogo from './../../assets/home_logo.png';
import newLogo from './../../assets/new_logo.png';
import logoutLogo from './../../assets/shut_down.png';
import './Nav.css';
import reducer, { updateUser, logout } from '../../redux/reducer';
// import updateUser, logout from '../../redux/reducer';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    this.getUser()
  }

  getUser() {
    axios.get('/api/auth/me')
      .then(res => updateUser(res.data))
  }

  logout() {
    axios.post('/api/auth/logout')
      .then(_ => logout(this.getUser))
  }

  render() {
    console.log(this.props)
    return this.props.location.pathname !== '/' &&
      <div className='nav'>
        <div className='nav-profile-container'>
          <div className='nav-profile-pic' style={{ backgroundImage=`url('${REDUX_STATE_PIC}')` }}></div>
          <p>{this.getUser}</p>
        </div>
        <div className='nav-links'>
          <Link to="/dash">< img className='nav-img' src={homeLogo} alt='home' /></Link>
          <Link to="/form"><img className='nav-img' src={newLogo} alt='new post' /></Link>
          <Link to="/" onClick={this.logout}><img className='nav-img logout' src={logoutLogo} alt='logout' /></Link>
        </div >
      </div>
  }
}

// const mapStateToProps = state => reduxState;

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

//Gives Nav access to this.props.history so it can redirect the user

// export default withRouter(Nav);

// export default connect(mapStateToProps, { updateUser, logout }(Nav))

export default withRouter(connect(mapStateToProps, { updateUser, logout }(Nav)))