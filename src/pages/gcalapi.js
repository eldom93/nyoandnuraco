import React from 'react'

const GoogleCalendarApi = () => {

  {/*  function authenticate() {
        return gapi.auth2.getAuthInstance()
            .signIn({scope: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.readonly"})
            .then(function() {console.log("Sign-in successful"); },
                    function(err) {console.error("Error signing in", err); });
    }
    function loadClient() {
        gapi.client.setApiKey("YOUR_API_KEY");
        return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
        .then(function() {console.log("GAPI client loaded for API"); },
        function(err) {console.error("Error loading GAPI client for API", err); });
    }
    function execute() {
        return gapi.client.calendar.calendars.get({})
            .then(function(response) {
                        // Handle the results here (response.result has the parsed body).
                        console.log("Response", response);
                  },
                  function(err) {console.error("Execute error", err); });
      }
      gapi.load("client:auth2", function() {
                        gapi.auth2.init({ client_id: "YOUR_CLIENT_ID" });
      });
    return (
        <div>
        <script src="https://apis.google.com/js/api.js"></script>
            <script src="https://apis.google.com/js/api.js"></script>
            <button onClick={authenticate().then(loadClient)}>authorize and load</button>
            <button onClick={execute()}>execute</button>
        </div>
    )*/}
}

export default GoogleCalendarApi