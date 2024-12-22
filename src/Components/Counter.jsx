import { useEffect, useState } from "react";

function Counter(){

    const [count, setCount] = useState(0);

    useEffect(() => {
document.title = `Current count: ${count}`;
    },[count])

    return (<>
    <h2>Counter</h2>
    <p>Current count: {count}</p>
    <button onClick = {() => {setCount(count + 1)}}>Add 1</button>
    </>)
}

export default Counter;