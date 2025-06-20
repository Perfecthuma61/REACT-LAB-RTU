import React, { Component } from 'react';

export default class User extends Component { 

 state = { 

 users: [] 

 };

 componentDidMount() { 

 fetch(`https://jsonplaceholder.typicode.com/albums`) 

 .then(response => response.json()) 

 .then(res => { 

 console.log(res);

 this.setState({ 

 users: res 

 });

 }) 

 .catch(err => { 

 console.log(err);

 });

 } 

 render() { 

 return ( 

 <div className="container"> 

 <h2>Name: D Suresh</h2> 

 <h3>UEN: RTU24101IT019</h3> 

 <div className="row">

   {this.state.users.map(item => ( 

 <div className="album-card" key={item.id}> 

 {item.title} 

 </div> 

 ))} 

 </div> 

 </div> 

 );

 } 

}
