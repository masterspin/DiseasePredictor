from flask import Flask, jsonify
# from flask_cors import CORS

app = Flask(__name__)
# CORS(app)

@app.route("/gpt", methods=['GET'])
def gptfunction():
    return jsonify({
        'message' : "Hello, GPT!"
    }) 

@app.route("/model", methods=['GET'])
def modelfunction():
    return jsonify({
        'message' : "Hello, MODEL!"
    }) 