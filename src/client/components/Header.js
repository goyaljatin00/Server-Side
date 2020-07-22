import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function mapStateToProps ({auth}) {
return {auth};
};

const Header = ({auth}) => {

    console.log('My auth status is:' , auth);
    const authButton = auth ? (<a href="/api/logout">LogOut</a>) : (<a href="/api/auth/google">Login</a>)
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">React SSR</Link>
                <ul className="right">
                   <li> <Link to="/users">Users</Link></li>
                   <li> <Link to="/admins">Admins</Link> </li>
                   <li> {authButton} </li>
                </ul>
            </div>
        </nav>
    )
}

export default connect(mapStateToProps)(Header);