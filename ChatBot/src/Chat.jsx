import React, { useState } from 'react';
import { sessionClient, sessionPath } from './dialogflowAuth';

const Chat = () => {
  const [userMessage, setUserMessage] = useState('');
  const [botResponse, setBotResponse] = useState('');

  const handleInputChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    try {
      const request = {
        session: sessionPath,
        queryInput: {
          text: {
            text: userMessage,
            languageCode: 'en-US',
          },
        },
      };

      const [response] = await sessionClient.detectIntent(request);
      const botReply = response.queryResult.fulfillmentText;

      setBotResponse(botReply);
      setUserMessage('');
    } catch (error) {
      console.error('Error communicating with Dialogflow:', error);
    }
  };

  return (
    <div>
      <div>
        <div>Bot: {botResponse}</div>
        <div>
          <input
            type="text"
            value={userMessage}
            onChange={handleInputChange}
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
