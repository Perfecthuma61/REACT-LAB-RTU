import React, { useState, useEffect } from 'react';

const Exp6 = () => { 

 const [time, setTime] = useState(new Date().toLocaleTimeString());

 useEffect(() => { 

 const timer = setInterval(() => { 

 setTime(new Date().toLocaleTimeString());

 }, 1000);

 return () => clearInterval(timer);

 }, []);

 return ( 

 <div className="DigitalClock"> 

 <header className="DigitalClock-header"> 

 <h1>Digital Clock</h1> 

 <h1>{time}</h1> 

 <h2>Name: D Suresh</h2> 

 <h2>UEN: RTU24101IT019</h2> 

 </header> 

 </div> 

 );

};
export default Exp6;
