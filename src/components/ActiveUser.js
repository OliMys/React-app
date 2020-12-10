import React from 'react';

export default function ActiveUser({data, active}){
    if (!data || !data[active]) { return <h3>Nothing found :(</h3>; }
    const activeUser = data[active];
    return (
        
            <div className="info">
                <h2>{activeUser.id} Name: {activeUser.firstName} {activeUser.lastName}</h2>
                <p>Email: {activeUser.email}, phone: {activeUser.phone}</p>
                <p>Address: {activeUser.address.streetAddress}, {activeUser.address.city}, {activeUser.address.state}</p>
                <h3>Description: {activeUser.description}</h3>
            </div>
       
    );
}