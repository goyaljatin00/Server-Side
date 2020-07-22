import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import {Helmet} from 'react-helmet';

class UserList extends Component {
    componentDidMount(){
        this.props.fetchUsers();
    }

    renderUsers(){
        return this.props.users.map(user => {
        return <li key={user.id}>{user.name}</li>
        });
    }

    head(){
        return (
                <Helmet>
                    <title>{`${this.props.users.length} Users Loaded`}</title>
                    <meta property="og:title" content="Users App"></meta>
                </Helmet>

        );
    }

    render(){
        return (
            <div>
                {this.head()}
                Here is a big list of Users: 
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>

            
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function loadData(store){
    return store.dispatch(fetchUsers());
}

export {loadData};

export default {
    loadData,
   component: connect(mapStateToProps, {fetchUsers}) (UserList)
};