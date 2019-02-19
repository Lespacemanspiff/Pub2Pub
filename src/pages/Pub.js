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
    window.scrollTo(0, 0)
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
      <>
      <Navbar/>
      <div className="pub">

        <div className="plate y">
          <p className="script"><span>Welcome to</span></p>
          <p className="shadow z">{pub.name}</p>
          <p className="shadow c">Phone:</p>
          <p className="shadow b">{this.numberToPhone(pub.phone)}</p>
          <p className="shadow c">Address:</p>
          <p className="shadow e">{pub.street},</p>
          <p className="shadow e">{pub.city}, {pub.state}</p>
          <p className="shadow f">{pub.postal_code}</p>
          <p className="script d"><span><a href={pub.website_url} target="_blank">Visit site!</a></span></p>
        </div>
      </div>
      </>
    )
  }
}

export default Pub
