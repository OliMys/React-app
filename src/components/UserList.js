import React from 'react';
import UserData from './UserData';

export default function UserList (props) {
    //if (!data) { return (<p>Loading...</p>); }
    const data = props.data;
    const updateData = props.updateData;
    const users = data.map((user, index) => {
        return (<UserData user = {user}  index={index} key={`user-${index}`} updateData={updateData}/>)
    });
    return (
        <table className="container__table">
            <thead>
                <tr >
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {users}
            </tbody>
        </table>
    )
}