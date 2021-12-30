# Experimental Gmail Exporter

An experimental deno script to export emails from GMail

## Folder Structure 

- `.vscode` = A folder, containing a `settings.json` which activates the deno language server for this workspace
- `dist` = A folder containing the output artefacts, like a bundled js file or even an executable for windows or mac 
- `playground` = a location used as cwd for running main.ts 
                 (this allows a clean testing space and avoids problems with the source-code files, like accidental deletion)
- `src` = A folder containing more source files which are used by `main.ts`
- `.env` = A file with environment variables being used with the `bonnie` script running tool
- `.gitignore` = A normal gitingore file 
- `bonnie.toml` = A file defining the workspace scripts, like `bonnie start` & `bonnie build`
- `main.ts` = the entrypoint for this deno script
- `Readme.md` = A normal Readme file

## Step Log 

1. Do `Getting Started` Section for Developing on Google Workspace: https://developers.google.com/workspace/guides/get-started
   Useful Resources & Tipps: 
   - https://console.cloud.google.com/
   - My Project ID: experimental-gmail-exporter
   - Activate the Gmail API here: https://console.cloud.google.com/apis/library?project=experimental-gmail-exporter
   - GMail API Reference: https://developers.google.com/gmail/api/reference/rest?apix=true
   - GMail API Quickstart: https://developers.google.com/gmail/api/quickstart/js
   - Quickstart Github Repo: https://github.com/googleworkspace/browser-samples/blob/master/gmail/quickstart/index.html
2. Setting Up App Credentials (API_KEY & (OAuth) CLIENT_ID)
    1. General Help on how to "Create Access Credentials": https://developers.google.com/workspace/guides/create-credentials
    2. Get an API_KEY: https://developers.google.com/workspace/guides/create-credentials
       & Restrict API_Key to using the Gmail API
3. Prompt from GCP: Configure OAuth consent screen for my application (needed for CLIENT_ID Retrieval)
    1. User Type: External (needs verification before release)
    2. Website URL used: experimental-gmail-exporter.codemonument.com
    3. Follow all on-screen instructions 
4.  Create second credentials: OAuth Client ID: 
    1. Application Type: 
5. Use the OAuth 2.0 Playground to produce OAuth Access token & Refresh Token for testing for my own user: 
    1. https://developers.google.com/oauthplayground/ & How to use OAuth with Google : https://developers.google.com/identity/protocols/oauth2
    2. Choose the scope for which to authenticate. 
       - For Testing: https://mail.google.com/
       - For Prod (guess): https://www.googleapis.com/auth/gmail.readonly and https://www.googleapis.com/auth/gmail.labels

## Step Log - Switch to Snowpack 

=> Switch from deno (cli app) to a snowpack html webapp, since having a browser client environment is easier in this case than a cli environment, becuase of existing exampels for nodejs & with an index.html, as well as easier OAuth Authentication flow.

