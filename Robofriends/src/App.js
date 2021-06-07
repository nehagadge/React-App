import React, { Component } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import { robots } from './robots'
import './App.css'

class App extends Component {   //class syntax helps in using constructr function such as this.state
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield : ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield:event.target.value })     //to update state in react so that search field will always get updated
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots} />
            </div>
        )
    }
}

export default App
