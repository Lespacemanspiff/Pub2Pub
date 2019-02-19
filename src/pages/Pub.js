import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import './Pub.css';

class Pub extends Component {
  state = { pub: {} }
  async componentDidMount() {
    const url = this.props.match.params.id
    const { data } = await axios.get(`https://api.openbrewerydb.org/breweries/${url}`)
    this.setState({ pub: data })
  }

  render() {
    const { pub } = this.state
    return (
      <div id="pub">
      <Navbar/>
        <h1>{pub.name}</h1>
        <p>{pub.street}, {pub.city}, {pub.state}</p>
        <a href={pub.website_url}>Visit site!</a>
      </div>
    )
  }
}

export default Pub

// {id: 1794, name: "Alcatraz Brewing", brewery_type: "micro", street: "20 Ocean Vista Ln", city: "Palm Coast", …}
// brewery_type: "micro"
// city: "Palm Coast"
// country: "United States"
// id: 1794
// latitude: "29.6178119569148"
// longitude: "-81.1928702816799"
// name: "Alcatraz Brewing"
// phone: "3866278909"
// postal_code: "32137-2743"
// state: "Florida"
// street: "20 Ocean Vista Ln"
// tag_list: []
// updated_at: "2018-08-24T00:26:25.449Z"
// website_url: "http://www.alcatraz.beer"
// __proto__: Object
