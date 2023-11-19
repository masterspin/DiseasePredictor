## Inspiration
Our motivation to create a disease prediction model is driven by the imperative need to enhance proactive healthcare.

## What it Does
Our model employs machine learning to analyze data, aiming to predict diseases early. Paired with an intuitive frontend, the model's output is presented in a user-friendly interface, offering clear insights and predictions. This frontend facilitates seamless interaction for both individuals and healthcare providers, empowering them with accessible and actionable information. The combination of accurate disease predictions and a user-friendly interface enhances early intervention, improves patient outcomes, and contributes to overall public health.
## How we Built it
Our model consisted of a Random Forest Classifier in conjunction with a GridSearchCV. We built our frontend using NextJS and TailwindCSS and had a flask backend. We also used the U-M GPT api in our backend.
## Challenges we Ran into to
We ran into many obstacles with our backend implmentation. We first had to figure out how to integrate flask with NextJS. We did this due to our model being trained using scikit-learn, and we could not find any documentation to use the model in NextJS. We also had trouble getting the U-M GPT api to work. The relevant documentaion was outdated, so we had to downgrade our version of the openai library to get the api to work. 
## Accomplishments That we are Proud of
## What we Learned
## What's Next
