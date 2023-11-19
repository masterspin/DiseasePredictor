## DiseasePredictor

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

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

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]




[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
<div>
Diseases can be found at <a href='https://github.com/masterspin/DiseasePredictor/blob/main/src/diseases.txt'>this link</a>
</div>
<div>
Symptoms can be found at <a href='https://github.com/masterspin/DiseasePredictor/blob/main/src/symptoms.txt'>this link</a>
</div>
