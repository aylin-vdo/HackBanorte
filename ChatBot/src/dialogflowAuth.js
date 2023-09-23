const dialogflow = require('dialogflow');

const sessionClient = new dialogflow.SessionsClient({
  keyFilename: 'path/to/your/service-account-key.json',
});

const sessionPath = sessionClient.sessionPath('your-project-id', 'unique-session-id');

export { sessionClient, sessionPath };
