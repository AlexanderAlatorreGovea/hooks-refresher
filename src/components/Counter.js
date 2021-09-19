import {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    const countHandler = () => {
        setCount(count + 1)
    }



    return (
        <div>
            <button onClick={countHandler}>Count: {count}</button>
        </div>
    )
}

export default Counter;