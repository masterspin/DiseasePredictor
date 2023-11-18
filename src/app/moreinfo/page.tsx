import { useEffect, useState } from 'react';
import openai from 'openai'; // Make sure to install openai package

const MoreInfo = () => {
  const [responseContent, setResponseContent] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { OpenAIAPI } = require('openai');
        const API_KEY = 'YOUR_OPENAI_API_KEY';
        const openai = new OpenAIAPI({ key: API_KEY });
        openai.setApiBase('https://api.umgpt.umich.edu/azure-openai-api/ptu'); // Use the correct API endpoint
        openai.setApiVersion('2023-03-15-preview');

        const response = await openai.ChatCompletion.create({
          engine: 'gpt-4',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: 'Who won the world series in 2020?' },
          ],
        });

        if (response && response.data && response.data.choices && response.data.choices.length > 0) {
          const content = response.data.choices[0].message.content;
          setResponseContent(content);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>OpenAI Chat Response:</h1>
      <p>{responseContent}</p>
    </div>
  );
};

export default MoreInfo;