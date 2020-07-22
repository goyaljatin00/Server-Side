import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAdmins} from '../actions';
import requireAuth from '../components/hocs/requireAuth';



function mapStateToProps({admins}) {
    return {
        admins
    };
}

class AdminsListPage extends Component {

    componentDidMount(){
        this.props.fetchAdmins();
    }

    renderAdmins(){
        return this.props.admins.map(admin => {
        return <li key={admin.id}>{admin.name}</li>
        });
    }

    render(){
        return (
            <div>
                Here is a big list of Protected Admins: 
                <ul>
                    {this.renderAdmins()}
                </ul>
            </div>
            
        )
    }
}



export default {
   component: connect(mapStateToProps, {fetchAdmins}) (requireAuth(AdminsListPage)),
   loadData: ({dispatch}) => dispatch(fetchAdmins())
};
