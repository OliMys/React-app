import React, {Component} from 'react';
import Pagination from './components/Pagination';
import ActiveUser from './components/ActiveUser';
import UserList from './components/UserList';
import SearchBar from './components/SearchBar';
//import AddUser from './components/AddUser';
import './index.css'
//import DataSort from './components/DataSort';



export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filterText: '',
            isLoaded: false,
            active: null,
            currentPage: 1,
            rowsPerPage: 10,    
        };
        //this.componentDidMount();
        this.updateData = this.updateData.bind(this);
       
        
    }
   
    componentDidMount() {
        fetch(this.props.url)
        .then(response => response.json()) 
        .then((result) => {
            this.initilData = result;
              this.setState({
                data: this.initilData,
                isLoaded: true
              });
            })
                
    }
    // callback for inverse data flow
    updateData(config) {
        this.setState(config);
      } 
    
    getCurrentRows() {
        const indexOfLastRow = this.state.currentPage * this.state.rowsPerPage;
        const indexOfFirstRow = indexOfLastRow - this.state.rowsPerPage; 
        const currentRows = this.state.data.slice(indexOfFirstRow, indexOfLastRow);
        return currentRows;
    }
    
    render() {
        const {isLoaded} = this.state;
        if (!isLoaded) { return (<p>Loading...</p>); }
        return (
            <div className="container">
                <div><SearchBar data={this.initilData} filterText={this.state.filterText} updateData={this.updateData}/></div>
                
                <UserList data={this.getCurrentRows()} updateData={this.updateData} totalData={this.initilData}/>
                <div className="active-user-block">
                    <ActiveUser data={this.state.data} active={this.state.active} />
                </div>
                <Pagination rowsPerPage={this.state.rowsPerPage} data={this.state.data} updateData={this.updateData} />
            </div>
            
        )}
    }
    
