from flask import Flask, jsonify, request
from flask_cors import CORS
import joblib
import ast
import numpy as np
import json
import os
import openai
import json

app = Flask(__name__)
CORS(app)

@app.route("/gpt", methods=['GET', 'POST'])
def gptfunction():
    openai.api_type = "azure"
    openai.api_key = '4c5dd928da50479daa212d07285c952e'

    openai.api_base = 'https://api.umgpt.umich.edu/azure-openai-api/ptu'
    openai.api_version = '2023-03-15-preview'

    try:
        response = openai.ChatCompletion.create(
            engine='gpt-4',
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": "Who won the world series in 2020?"}
            ]
        )

        # print the response
        print(response['choices'][0]['message']['content'])

    except openai.error.APIError as e:
        # Handle API error here, e.g. retry or log
        print(f"OpenAI API returned an API Error: {e}")

    except openai.error.AuthenticationError as e:
        # Handle Authentication error here, e.g. invalid API key
        print(f"OpenAI API returned an Authentication Error: {e}")

    except openai.error.APIConnectionError as e:
        # Handle connection error here
        print(f"Failed to connect to OpenAI API: {e}")

    except openai.error.InvalidRequestError as e:
        # Handle connection error here
        print(f"Invalid Request Error: {e}")

    except openai.error.RateLimitError as e:
        # Handle rate limit error
        print(f"OpenAI API request exceeded rate limit: {e}")

    except openai.error.ServiceUnavailableError as e:
        # Handle Service Unavailable error
        print(f"Service Unavailable: {e}")

    except openai.error.Timeout as e:
        # Handle request timeout
        print(f"Request timed out: {e}")

    except:
        # Handles all other exceptions
        print("An exception has occured.")

    return jsonify({
        'message' : "Hello, GPT!"
    }) 

@app.route("/model", methods=['GET', 'POST'])
def modelfunction():
    dict_str = request.data.decode('UTF-8')
    input_values = ast.literal_eval(dict_str)['feature_matrix']
    input_values = input_values[1:]
    feature_matrix = np.zeros((1,131))
    model = joblib.load('forest.joblib')
    features = model.feature_names_in_
    classes = model.classes_
    word_to_idx = {word.lower() : idx for idx, word in enumerate(features)}
    for input in input_values:
        feature_matrix[0,word_to_idx[input.replace(' ', '_')]] = 1
    scores = model.predict_proba(feature_matrix)
    scores = scores.argsort()
    predictions = scores[:,-3:]
    predictions = classes[predictions]
    message = {idx: word for idx, word in enumerate(predictions[0])}
    return jsonify({
        'message' : message
    }) 

if __name__ == "__main__":
    app.run(debug=True, port=8080)