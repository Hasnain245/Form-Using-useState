import React, {useState} from 'react';

function CountingUsingUseState() {
    // State Variable 'count' with an initial value of 0
    const [count, setCount] = useState(0);
    const [minus, setMinus] = useState(0);


  return (
    <div>
    <p>Click To Add 2 Number: {count}</p>
    <button onClick={() => setCount(count + 2)}>Add Two</button>


    <p>Click To Minus 2 Number: {minus}</p>
    <button onClick={() => setMinus(minus - 2)}>Minus Two</button>

    </div>
  );
}

export default CountingUsingUseState
