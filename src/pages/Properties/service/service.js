import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    properties: []
  }

  componentDidMount() {
    axios.get(`https://my-json-server.typicode.com/ValianaJosic/property-api-mock/properties`)
      .then(res => {
        const properties = res.data;
        this.setState({ properties });
        console.log(properties[0]);
      })
  }

  render() {
    return (
      <ul>
        { this.state.properties.map(properties => <li>{properties.price}</li>)}
      </ul>
    )
  }
}