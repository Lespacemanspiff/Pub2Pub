import React, { Component } from 'react'
import axios from 'axios';
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import './PubList.css'

class PubList extends Component {
  state = { query:'', pubs: [] }

  handleSearch = event => {
    console.log(event)
    const query = event.target.value
    this.setState({ query })
  }

  handleClick = async event => {
    const { query } = this.state
    const { data } = await axios.get(`https://api.openbrewerydb.org/breweries/?by_state=${query}`)
    this.setState({ pubs: data })
  }



  render(){
    console.log(this.state.pubs)
    return(
      <div>
        <Navbar/>
          <h1> This is the Pub List</h1>
          <input
          placeHolder='Search your State'
          type='search'
          value={this.state.query}
          onChange={this.handleSearch}
          />
          <button onClick={this.handleClick}>Search!</button>
            <div className='results'>
            {
              this.state.pubs.map(result => {
                return(
                  <div key={result.name} className="result">
                  <h3>{result.name}</h3>
                  <a href={result.website_url} target="_blank">
                      <p>{result.website_url}</p> 
                  </a>
                </div>
                )
              })
            }
            </div>
      </div>
    )
  }
}

export default PubList
