import React from 'react';

export default function UserData ({user, updateData, index}) {
    return (
        <tr onClick = {()=> updateData({active: index})}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
        </tr>
    );
}
