// import React from "react";
// import About from "./About";

// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   render() {
//     const { name, age } = this.props;
//     const { count } = this.state;
//     const changeHandler = () => {
//       this.setState({
//         count: this.state.count + 1,
//       });
//     };
//     return (
//       <div className="user-name">
//         <h1>Count={count}</h1>
//         <button onClick={changeHandler}>count increse</button>
//         <div>Name: {name}</div>
//         <div>Location: India</div>
//         <div>Age: {age}</div>
//       </div>
//     );
//   }
// }
// export default UserClass;

import React, { use } from "react";


class UserClass extends React.Component {
    constructor(props) {
        super(props);

         
        this.state = {
            userInfo: {
                name: "Dummy Name",
                avatar_url: "https://dummy-photo.com",
            },
        };
    
        //console.log(this.props.name+" Child Constructor");
    } 
    async componentDidMount() {
        //console.log(this.props.name+" Child Component Did Mount");
        //Api calls can be made here

        const data = await fetch("https://api.github.com/users/akanksha9688"); 
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
        console.log(json);
    }

    componentDidUpdate() {
        console.log ("componentDidUpdate called");
    }
    render() {
        //const {name, location, contact  } = this.props;
        const {name, avatar_url} = this.state.userInfo;
        //console.log(this.props.name+"Child Render"); 

        return (
            <div className="user-card"> 
                <img src={avatar_url} />
                <h2>Name : {name}</h2>
                <h3>Location : India </h3>
                <h4>Contact : @akanksha9688</h4>
            </div>
        );
    }
}
 
export default UserClass;
