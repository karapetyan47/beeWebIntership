import React, { Component } from "react";
import Navbar from "../navbar";
import { messaging } from "../../firebase/init-fcm";

export default class LoggedInPage extends Component {
  async componentDidMount() {
    messaging
      .requestPermission()
      .then(async function() {
        const token = await messaging.getToken();
        return token;
      })
      .then(token => {
        console.log("token", token);
      })
      .catch(function(err) {
        console.log("Unable to get permission to notify.", err);
      });
    navigator.serviceWorker.addEventListener("message", message =>
      console.log(message)
    );
  }
  render() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("../../../public/firebase-messaging-sw.js")
        .then(function(registration) {
          console.log("Registration successful, scope is:", registration.scope);
        })
        .catch(function(err) {
          console.log("Service worker registration failed, error:", err);
        });
    }
    return (
      <>
        <Navbar />
        <div className="visible-place">{this.props.children}</div>
      </>
    );
  }
}
