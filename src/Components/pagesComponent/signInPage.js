import React, { Component } from 'react';

//client key: 726378705143-l78f4sv20a1itvmovf9gab7uq5a7b4ni.apps.googleusercontent.com
class SignInPage extends Component {
    signOut() {
        var auth2 = window.gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          console.log('User signed out.');
          document.getElementById('leave').style.display = 'none';
          document.getElementById('name').style.display = 'none';
          document.getElementById('gSignInWrapper').style.display = 'block'; 
        });
    }

    render() {
        return (
            <div className="container">
                <center>
                    <h1>Sign In</h1>
                    <div id="gSignInWrapper">
                        <div id="customBtn" className="customGPlusSignIn">
                            <span className="icon"></span>
                            <span className="buttonText">Sign in with Google</span>
                        </div>
                    </div>
                    <div id="name"></div>
                    <div id="leave"><a href="#" onClick={this.signOut}>Sign out</a></div>                                       
                </center>
            </div>
        );
    }
}

export default SignInPage;