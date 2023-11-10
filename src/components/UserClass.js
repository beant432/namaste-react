import React from 'react';
import UserContext from '../utils/UserContext';

class UserClass extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            userInfo: {
                name:"beant"
            }
        }
        console.log(this.props.name +  'child constructor called');
    };
    async componentDidMount() {
        // use to call api call
        console.log(this.props.name + 'child comoponent did mount called');
        const data = await fetch('https://jsonplaceholder.typicode.com/users/2');
        const json = await data.json();
        this.setState({
            userInfo: json
        })

    }

    componentDidUpdate() {
        console.log('child comoponent did updated called');
    }
    componentWillUnmount() {
        console.log('child comoponent will unmount called');
    }
    render() {
         console.log(this.state + 'child render called');
        const { name, username } = this.state.userInfo;
        return (
            <div className="user-card">
                {/* <h1>Count:{count}</h1>
                <button type="button" onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Count increase</button> */}
                <h1>Name:{name}</h1>
                <h1>User Name:{username}</h1>
                <UserContext.Consumer>{({loggedInUser})=>(<h1>Logged In User: {loggedInUser}</h1>)}</UserContext.Consumer>

                {/* <h2>Location:{location}</h2> */}
            </div>
        )
    }
}
export default UserClass;