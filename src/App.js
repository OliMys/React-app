
import React, {Component} from 'react';
import ActiveUser from './components/ActiveUser';
import UserList from './components/UserList'
import SearchBar from './components/SearchBar'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filterText: '',
            isLoaded: false,
            active: null
            
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
         
    
    render() {
        const {isLoaded} = this.state;
        if (!isLoaded) { return (<p>Loading...</p>); }
        return (
            <div className="container">
                <SearchBar data={this.initilData} filterText={this.state.filterText} updateData={this.updateData}/>
                <UserList data={this.state.data} updateData={this.updateData}/>
                <div className="active-user-block">
                    <ActiveUser data={this.state.data} active={this.state.active} />
                </div>
            </div>
            
            
        )}
    }
    