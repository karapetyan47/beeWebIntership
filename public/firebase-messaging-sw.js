if ("serviceWorker" in navigator) {
  navigator.serviceWorkerContainer
    .register("../firebase-messaging-sw.js")
    .then(registration => {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function(err) {
      console.log("Service worker registration failed, error:", err);
    });
}
