from flask import Flask, jsonify, request
from flask_cors import CORS
import joblib
import ast
import numpy as np
import json 

app = Flask(__name__)
CORS(app)

@app.route("/gpt", methods=['GET', 'POST'])
def gptfunction():
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