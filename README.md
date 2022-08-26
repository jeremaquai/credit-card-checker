<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/jeremaquai/credit-card-checker">
    <img src="js-logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Credit Card Number Validator</h3>

  <p align="center">
    Second off platform project in the Javascript sections of Front-End Engineer Career Path
    <br />
    <a href="https://github.com/jeremaquai/credit-card-checker"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jeremaquai/credit-card-checker">View Demo</a>
    ·
    <a href="https://github.com/jeremaquai/credit-card-checker/issues">Report Bug</a>
    ·
    <a href="https://github.com/jeremaquai/credit-card-checker/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://github.com/jeremaquai/credit-card-checker/)


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node.js](https://nodejs.org/en/)
* [JavaScript](https://www.javascript.com/)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

You will need to have Node.js installed on your computer in order to use this code.

### Prerequisites

- Node.js

### Installation

1. Make sure that you have Node.js installed on your computer
    ```sh
    node -v
    ```
2. If Node.js is not already installed on your computer it can be downloaded and installed from [Nodejs.org](https://nodejs.org/en/)

3. Clone the repo
   ```sh
   git clone https://github.com/jeremaquai/credit-card-checker.git
   ```
4. Open main.js with your text editor to inspect the code and play around with it

5. Enjoy or change the code to suite your own purposes   

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

This file of javascript code can be used to test credit card numbers or suspected credit card numbers to determine if they pass the Luhn Algorithm to determine if they are valid or not.

The functions can be run from the terminal or the terminal console in your tet editor.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] **validateCred()**
    - takes in a single array as a parameter and returns true if the number could be valid credit card number based on the Luhn algorithm
- [x] **findInvalidCards()**
    - takes in a nested array of credit card nubers as a parameter and runs validateCred the nested array to return another nested array of the invalid card numbers
- [x] **idInvalidCardCompanies()**
    - takes in a nested array of credit card numbers as a parameter and returns another nested array of the issuing Credit Card company based on the first number of the card number without - if the nested array were to include three Visa card numbers the returned array will only list Visa once
    - [x] **checkCompaniesArray()**
        - takes in an array and a string as parameters and checks if the string is already in the array, if the string is not already in the array it is added to the array
        - this function is used in the switch statement of idInvalidCardCompanies function to save time and keep from rewriting multiple lines of code
- [x] **cardNumberStringToArray()**
    - takes in a string of numbers as a parameter and returns an array of intergers in order to create your own varibles of credit card numbers to tested with the rest of the code availble in the file

See the [open issues](https://github.com/jeremaquai/credit-card-checker/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Jeremiah Sparks - jeremaquai@gmail.com.com

Project Link: [https://github.com/jeremaquai/credit-card-checker](https://github.com/jeremaquai/credit-card-checker)

<p align="right">(<a href="#top">back to top</a>)</p>







<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jeremaquai/credit-card-checker.svg?style=for-the-badge
[contributors-url]: https://github.com/jeremaquai/credit-card-checker/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jeremaquai/credit-card-checker.svg?style=for-the-badge
[forks-url]: https://github.com/jeremaquai/credit-card-checker/network/members
[stars-shield]: https://img.shields.io/github/stars/jeremaquai/credit-card-checker.svg?style=for-the-badge
[stars-url]: https://github.com/jeremaquai/credit-card-checker/stargazers
[issues-shield]: https://img.shields.io/github/issues/jeremaquai/credit-card-checker.svg?style=for-the-badge
[issues-url]: https://github.com/jeremaquai/credit-card-checker/issues
[license-shield]: https://img.shields.io/github/license/jeremaquai/credit-card-checker.svg?style=for-the-badge
[license-url]: https://github.com/jeremaquai/credit-card-checker/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/jeremiah-sparks
[product-screenshot]: screenshot.png
