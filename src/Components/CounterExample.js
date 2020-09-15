import React, { useState } from 'react';

function CounterExample() {
    const [count, setCount] = useState(0);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Add
            </button>
            <button onClick={() => setCount(count - 1)}>
                Minus
            </button>
        </div>
    );
}

export default CounterExample
