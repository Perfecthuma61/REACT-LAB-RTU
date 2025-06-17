import React, { useState } from 'react';

export default function Exp2() { 

 const [count, setCount] = useState(0);

 return ( 

 <div > 

 <h2>Counter</h2> 

 <p>Name: BHARATH JR</p> 

 <p>UEN: RTU24101CS020</p> 

 <div className="button-group"> 

 <button onClick={() => setCount(count + 1)}>Increase Count ({count})</button> 

 <button onClick={() => setCount(count - 1)}>Decrease Count ({count})</button> 

 </div> 

 </div> 

 );

}
