from flask import Flask, jsonify, request
from flask_cors import CORS
import joblib
import ast
import numpy as np
import json 
import os
import openai

app = Flask(__name__)
CORS(app)

@app.route("/gpt", methods=['GET', 'POST'])
def gptfunction():
    openai.api_type = "azure"
    openai.api_key = "4c5dd928da50479daa212d07285c952e"

    openai.api_base = 'https://api.umgpt.umich.edu/azure-openai-api/ptu'
    openai.api_version = '2023-03-15-preview'

    dict_str = request.data.decode('UTF-8')
    print('hello')
    print(dict_str)
    message = []
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
        'message' :  response
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
    probabilities = model.predict_proba(feature_matrix)
    top = np.sort(probabilities[0])[-3:]
    top = {idx: round(word*100, 2) for idx, word in enumerate(top)}
    print(top)
    scores = probabilities.argsort()
    predictions = scores[:,-3:]
    predictions = classes[predictions]
    outputs = {idx: word for idx, word in enumerate(predictions[0])}
    print(outputs)
    openai.api_type = "azure"
    openai.api_key = "4c5dd928da50479daa212d07285c952e"

    openai.api_base = 'https://api.umgpt.umich.edu/azure-openai-api/ptu'
    openai.api_version = '2023-03-15-preview'
    messages = []
    for idx, word in outputs.items():
        messages.append({"role": "user", "content": "give me a 20 word explanation about " + word})
    responses = []
    for message in messages:
        try:
            response = openai.ChatCompletion.create(
            engine='gpt-4',
            messages=[message]
            )
            # print the response
            responses.append(response['choices'][0]['message']['content'])

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

        except Exception as e:
            # Handles all other exceptions
            print("An exception has occured.")
    return jsonify({
        'message' : outputs,
        'responses' : responses,
        'percentages' : top
    })

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))