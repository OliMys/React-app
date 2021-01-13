import React, { Component } from 'react';

export default class DataSort extends Component {
   constructor(props) {
      super(props);
      this.sorted = { id: true, firstName: true, lastName: true, email: true, phone: true };
      //this.sort = this.sort.bind(this);
    }
    sort(type) {
      const { updateData, data } = this.props;
      const isSorted = this.sorted[type];
      let direction = isSorted ? 1 : -1;
      const sorted = [].slice.call(data).sort((a, b) => {
         if (a[type] === b[type]) { return 0; }
         return a[type] > b[type] ? direction : direction * -1; 
      });
      this.sorted[type] = !isSorted;
      updateData({
         data: sorted,
         active: null
       });
    }
   
   render(){ 
   return (
    
         <div onClick={() => this.sort(this.props.type)}>{this.props.label}</div>
        
    
   );
   }
}