console.debug(`gapi_event_handler.js loaded!`);

// Client ID and API key from the Developer Console
const API_KEY = 'AIzaSyB2OMvsdT4YuyVWn1jR4dCfEG9k16kTzj0';
const CLIENT_ID = '98254015530-qan55nhejpag0bdhed7q4nfpjj14ece8.apps.googleusercontent.com';

// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';

const authorizeButton = document.getElementById('authorize_button');
const signoutButton = document.getElementById('signout_button');

// const gapiScriptTag = document.getElementById(`google_api_client`);
// if (!gapiScriptTag) throw new Error(`Script tag missing for google_api_client`);

// gapiScriptTag.addEventListener(`onload`, handleClientLoad);
// gapiScriptTag.addEventListener(`onreadystatechange`, (event) => {
// 	if (event.readyState === 'complete') this.onload();
// });

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
	console.debug(`handleCLientLoad was called`);
	// gapi.load('client:auth2', initClient);
}
