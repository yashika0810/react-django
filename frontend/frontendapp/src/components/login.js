import React, { Component } from 'react';
import './style.css';

class  Login extends Component {

    state = {
        credentials : {
            username: '', password:''
        }
    }


        
    login = event => {
        console.log(this.state.credentials)

    }

    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name]=event.target.value;
        this.setState({credentials:cred})

    }

    render(){

        return (
            <div className="login">
              <h1>Login page </h1>
              <label><b>
                  Username</b></label>
                  <input type="text" name="username" id="Uname" placeholder="Username" 
                  value={this.state.credentials.username}
                  onChange={this.inputChanged}
                  />
                  <label><b>
                      <br/>
                      <br/>
                  Password</b></label>
                  <input type="Password" name="password" id="Pass" placeholder="Password"
                  value={this.state.credentials.password}
                  onChange={this.inputChanged}/>

                  <br/>
                  <br/>
                <button onClick={this.login} name='log' id="log">Log In Here</button>

            </div>
          );
        }
    }
 

export default Login;