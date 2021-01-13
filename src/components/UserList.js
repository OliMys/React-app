import React from 'react';
import DataSort from './DataSort'
import UserData from './UserData';

export default function UserList (props) {
    //if (!data) { return (<p>Loading...</p>); }
    const data = props.data;
    const totalData = props.totalData;
    const updateData = props.updateData;
    const users = data.map((user, index) => {
        return (<UserData user = {user}  index={index} key={`user-${index}`} updateData={updateData}/>)
    });
    const headCaption = [{label: 'id'}, {label: 'firstName'}, {label: 'lastName'}, {label: 'email'}, {label: 'phone'}];
    const tableHead = headCaption.map((elem, index) => <th key={index}><DataSort data={totalData} updateData={updateData} type={elem.label} label={elem.label}/></th>);
    return (
        <table className="container-table table">
            <thead>
                <tr className="table-caption">{tableHead}</tr>
            </thead>
            <tbody>
                {users}
            </tbody>
        </table>
    )
}
