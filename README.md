##DiseasePredictor

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

## Inspiration
Our motivation to create a disease prediction model is driven by the imperative need to enhance proactive healthcare.

## What it Does
Our model employs machine learning to analyze data, aiming to predict diseases early. Paired with an intuitive frontend, the model's output is presented in a user-friendly interface, offering clear insights and predictions. This frontend facilitates seamless interaction for both individuals and healthcare providers, empowering them with accessible and actionable information. The combination of accurate disease predictions and a user-friendly interface enhances early intervention, improves patient outcomes, and contributes to overall public health.
## How we Built it
Our model consisted of a Random Forest Classifier in conjunction with a GridSearchCV. We built our frontend using Next.js and TailwindCSS and had a Flask backend. We also used the U-M GPT api in our backend.
## Challenges we Ran into to
We ran into many obstacles with our backend implmentation. We first had to figure out how to integrate Flask with Next.js. We did this due to our model being trained using scikit-learn, and we could not find any documentation to use the model in Next.js. We also had trouble getting the U-M GPT api to work. The relevant documentaion was outdated, so we had to downgrade our version of the openai library to get the api to work. 
## Accomplishments That we are Proud of
We are proud of our models accuracy, achieveing a 100% top-3 accuracy and 94.3% top-1 accuracy on testing data. We are also proud of getting the U-M GPT api to work, as we had to deal with older versions of the openai library. 
## What we Learned
We learned how to utitlize different machine learning models to train data, and how to choose the best one. We also learned how to integrate Flask and Next.js to make api calls. This allowed us to make api calls without having to redirect from the page. 
## What's Next
We will collect user data with consent to train our model on more disease and symptoms to increase our accuracy and repertoire. We plan to add a feature where users can upload there data to our firebase storage. Overall, we want people to have access to quick diagnosis from the click of a button to improve overall public health. 
