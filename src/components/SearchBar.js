import React from 'react';

export default function SearchBar({data, filterText, updateData}) {
function dataSearch(e) {
    const value = e.target.value.toLowerCase();
    const filter = data.filter(user => {return (user.firstName.toLowerCase().includes(value) || user.lastName.toLowerCase().includes(value) || user.email.toLowerCase().includes(value) || user.phone.includes(value) || (user.id + '').includes(value));})
    updateData({
          data: filter,
          active: null,
          filterText: value
    });
}
    return (
        <div className="search-bar">
            <input 
                value = {filterText}
                type="text"
                placeholder="Search people"
                onChange={dataSearch}
            />
        </div>
    );
}