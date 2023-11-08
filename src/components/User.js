import { useState } from 'react';
const User = (props) => {
    const { name, location } = props;
    
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(2);
    return (
        <div className="user-card">
            <h1>Count:{count}</h1>
            <button onClick={() => {
                setCount(count => count + 1)
            }}>Count updates</button>
            <h2>Name:{name}</h2>
            <h3>Location: {location}</h3>
        </div>
    )
}
export default User;