## About The Project

Using data scraped from the user's insulin pump manufacturer, Bolus Buddy is able to learn patterns based on multiple factors including food intake and current Blood Glucose (BG) to estimate the optimal amount of insulin to take to reduce the effect of Type 1 Diabetes.



<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->


### Built With

[![React][React]][React-url] [![Python][Python]][Python-url] [![Tensorflow][TF]][TF-url] [![Flask][Flask]][Flask-url]



<!-- GETTING STARTED -->
## Getting Started (Client App)

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Since the ``package.json`` file contains the dependencies, you will need npm installed.
* npm
  ```sh
  npm install npm@latest -g
  ```
  

### Installation

_Below are the steps to install and run the client locally on your machine._

1. Clone the repo
   ```sh
   git clone https://github.com/brenwick64/Bolus-Buddy.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Set your local API port in your `.env` file
    ```js
   REACT_APP_BOLUS_BUDDY_API=https://localhost:5000
   ```
4. Run npm start
    ```sh
   npm start
   ```
 


<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [x] Add "info" section to explain form inputs
- [ ] Add accurate BG predictions to bolus recommendations 
- [ ] Add scoring for recommended bolus events to evaluate performance
- [ ] Convert to PWA for enhanced mobile experience 




<!-- CONTACT -->
## Demo

Project Demo: [bolus-buddy.herokuapp.com](https://bolus-buddy.herokuapp.com/)



<!-- MARKDOWN LINKS & IMAGES -->

<!-- Shields -->
[Python]:https://img.shields.io/badge/Python-20232A?style=for-the-badge&logo=python&logoColor=f2bb30
[Python-url]:https://www.python.org/downloads/
[TF]:https://img.shields.io/badge/Tensorflow-20232A?style=for-the-badge&logo=tensorflow&logoColor=ff6f00
[TF-url]:https://www.tensorflow.org/install
[React]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Flask]: https://img.shields.io/badge/Flask-20232A?style=for-the-badge&logo=flask&logoColor=white
[Flask-url]: https://flask.palletsprojects.com/en/2.2.x/installation/

