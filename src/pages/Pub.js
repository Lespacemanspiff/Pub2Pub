import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import './Pub.css';

class Pub extends Component {
  constructor(props) {
    super(props)
    this.state = { pub: [] }
  }

  async componentDidMount() {
    const url = this.props.match.params.id
    const { data } = await axios.get(`https://api.openbrewerydb.org/breweries/${url}`)
    this.setState({ pub: data })
  }

  numberToPhone = number => {
    if(number) {
      return number.replace( /\D+/g, "" ).replace( /([0-9]{1,3})([0-9]{3})([0-9]{4}$)/gi, "($1)-$2-$3" );
    }
    return String();
  };

  render() {
    const { pub } = this.state;
    console.log(pub)
    return (
      <div className="pub">
        <Navbar/>
        <div class="plate">
          <p class="shadow a">{pub.name}</p>
          <p class="shadow c">Phone:</p>
          <p class="shadow b">{this.numberToPhone(pub.phone)}</p>
          <p class="shadow c">Address:</p>
          <p class="shadow b">{pub.street},</p>
          <p class="shadow b">{pub.city}, {pub.state}</p>
          <p class="shadow b">{pub.postal_code}</p> */}
          <p class="script d"><span><a href={pub.website_url}>Visit site!</a></span></p>
        </div>
      </div>
    )
  }
}

export default Pub
