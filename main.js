function subscribe(e) {
  e.preventDefault();
  var newXHR = new XMLHttpRequest();

  // bind our event listener to the "load" event.
  // "load" is fired when the response to our request is completed and without error.
  newXHR.addEventListener( 'load', subscribedEvent );

  // go to http://requestb.in/1k6rql51?inspect to view your request!
  newXHR.open( 'POST', 'https://m1w51fzk26.execute-api.us-west-2.amazonaws.com/Prod' );
  //             ^-- IMPORTANT: to send data to the server with it appearing in the url use 'POST'


  // the object below can be crafted in any fashion. In the end you want an Object Literal with your data stored on it.
  var jsonData = { email: e.target[0].value}

  // HTTP Protocol can only work with strings when transmitting data over the internet.
  // JSON is a class and .stringify is a class-method. We use it to format
  // the Javascript Data, which lives in memory, to JSON string.
  var formattedJsonData = JSON.stringify( jsonData  );

  // INSPECT WHAT YOU EXPECT, compare the two.

  // send it off
  newXHR.send( formattedJsonData );
  e.target[0].value = "";
  document.getElementById("subscribed").classList.remove("hidden")
}

function subscribedEvent() {
  console.log('subscribed');
}
