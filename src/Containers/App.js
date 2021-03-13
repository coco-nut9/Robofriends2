import React, {Component} from 'react';
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import {robots} from '../robots'
import './App.css';
import Scroll from '../Components/Scroll'
import ErrorBoundary from '../Components/ErrorBoundary'
const state = {
    robots: robots,
    searchfield: ''
}



class App extends Component{
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
       console.log('1');
    }

componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response=> {
            return response.json();
        })
        .then(users => {
            this.setState({ robots: users}) 
        });
}

    OnSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
       
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        console.log('3');
    return (
        <div className = 'tc'>
            <h1 className= 'f1' > RoboFriends</h1>
            <SearchBox searchChange = {this.OnSearchChange} />
            <Scroll>
                <ErrorBoundary>
                <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
        </div>
    );
}
}

export default App