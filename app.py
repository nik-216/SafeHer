# app.py

# Import necessary libraries
from flask import jsonify, request
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn import svm
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
# Your code using TfidfVectorizer goes here


# Define API endpoint for sentiment analysis
@app.route('/predict-sentiment', methods=['POST'])
def predict_sentiment():
    try:
        # Receive text data from the request body
        data = request.json
        text = data['text']

        # Transform the text using the TF-IDF vectorizer
        text_tfidf = tfidf_vectorizer.transform([text])

        # Predict sentiment for the text
        predicted_sentiment = svm_classifier.predict(text_tfidf)

        # Send the predicted sentiment back to the client
        return jsonify({'sentiment': predicted_sentiment[0]})

    except Exception as e:
        print("Error:", e)
        return jsonify({'error': 'Internal Server Error'}), 500
