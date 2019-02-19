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

  handleSubmit = async event => {
    event.preventDefault()
    const { query } = this.state
    const { data } = await axios.get(`https://api.openbrewerydb.org/breweries/?by_state=${query}`)
    this.setState({ pubs: data })
  }

  render(){
    console.log(this.state.pubs)
    return(
      <div className="pubList">
        <Navbar/>
        <div class="plate">
<p class="script"><span>What</span></p>
<p class="shadow text1">STATE</p>
<p class="shadow text2">ARE</p>
<p class="shadow text3">YOU IN?</p>
<p class="script"><span>Search below</span></p>
</div>
        <form onSubmit={this.handleSubmit}>
          <input className="searchBox" size="50"
            placeHolder='Search your State'
            type='search'
            value={this.state.query}
            onChange={this.handleSearch}
          />
          <button type="submit" className="button">
            Show me Pubs!
          </button>
        </form>
        <div className='results'>
        {
          this.state.pubs.map(result => {
            return(
              <div className="result" key={result.name}>
                <Link to={`/pub/${result.id}`} target="_blank">{result.name}</Link>
                <a href={result.website_url} target="_blank"></a>
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
