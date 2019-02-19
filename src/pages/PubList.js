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
      <div className="pubList">
        <Navbar/>
        <div className="plate">
              <p className="script"><span>What</span></p>
              <p className="shadow text1">STATE</p>
              <p className="shadow text2">ARE</p>
              <p className="shadow text3">YOU IN?</p>
              <p className="script"><span>Search below</span></p>
              </div>
              <input className="searchBox"
              placeHolder='Search your State'
              type='search'
              value={this.state.query}
              onChange={this.handleSearch}/>
            <button className="button" onClick={this.handleClick}>
                              Show me Pubs!
                    </button>

         <div className='results'>
        {
          this.state.pubs.map(result => {
            return(
                      <div className="result" key={result.name}>
                        <Link to={`/pub/${result.id}`}>{result.name}</Link>
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
