<a name="readme-top"></a>

<div align="center">
  <img src="./public/icons/GeckoCoin-logo.jpg" alt="logo" width="120"  height="auto" />
  <br/>

  <h3><b>CoinStats</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
    <!-- - [🚀 Live Demo](#live-demo) -->
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 Hello Microverse <a name="about-project"></a>

**CoinStats** is a React/Redux SPA that fetches and renders data from the [CoinGecko API](https://www.coingecko.com/en/api).
It allows users to see market data for each of the top 100 coins in the crypto Market and Features a Convertion Filter that alows you to see te value of each coin in different currencies, as well as converting different amounts (filter works in a two way fashion).
To easily find a coin you are interested, use the search bar filter in the main page.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://www.w3.org/html/">HTML</a></li>
    <li><a href="https://www.w3.org/Style/CSS/Overview.en.html">SCSS</a></li>
    <li><a href="https://react.dev/">React</a></li>
    <li><a href="https://redux.js.org/">Redux</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://render.com/">render</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- Market data for:
  - **Global Market Cap**
  - **24hr Volume**
  - **Top 100 cryptocurrencies**
- Main Market data for each of the Top 100 criptocurrencies
- **Price convertion filter** to multiple currencies for each of the Top 100 coins. **Filter handles different amounts in both sides**.

<!-- LIVE DEMO -->
<!--
## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo Link](https://hello-microverse.netlify.app/) -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

Want to build up from this project?

### Prerequisites

In order to run this project you need:

- Have [npm](https://www.npmjs.com/package/npm) installed in your project:
  `curl -qL https://www.npmjs.com/install.sh | sh`

- Have [Node.js](https://nodejs.org/en) installed.
  Run:

```sh
node -v
```

to check if you have Node installed and what vertion it is. If not, follow the steps in the official website.

### Setup

Clone this repository to your desired folder:

```sh
git clone https://github.com/astroboyReloaded/CoinStats.git
```

or

`git clone git@github.com:astroboyReloaded/CoinStats.git` <-- _Only if you have [SSH keys configured](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) on your GitHub account_.

### Install:

run the `npm install` command in your console.

### Usage

Users can look for their favorite coin using the searchbar or escrolling on the **All Coins** section and see basic market data about it. On click on any coin, users go to a **Coin Details** page where they can see Critical market data about the specific coin, as well as using the convertion filter to convert different amounts of the coin into many other currencies, currently only supportin many fiat currencies and a few cryptocurrencies, the amounts can be changed on both sides of the filter.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

> 👤 **AstroboyReloaded**

- GitHub: [@astroboyReloaded](https://github.com/astroboyReloaded)
- Twitter: [@astroboyReload](https://twitter.com/astroboyReload)
- LinkedIn: [Alex Muñoz](https://www.linkedin.com/in/astroboyreloaded/)

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- Top 100 cryptocurrencies in convertion filter.
- Critical Market data in differents currencies for each coin.
- Price charts for each coin.
- Data about each of the top 3 coins for each category in **Categories**

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

> If you like this project please give me a star on GitHub.

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank [Microverse](https://www.microverse.org/) for teaching me these tools, my teammates who share great advice.
[CoinGecko API](https://www.coingecko.com/en/api)
Copilot and Chat GPT used for cleanValue function in convertion filter. (lines 31-35 of PriceConvertion.js).
[NightCafé](https://nightcafe.studio/) AI Art Generator for creating the logo for this app.
App design inspired on [Ballhead App](https://www.behance.net/gallery/31579789/Ballhead-App-%28Free-PSDs%29) by Nelson Saka.

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

_NOTE: we recommend using the [MIT license](https://choosealicense.com/licenses/mit/) - you can set it up quickly by [using templates available on GitHub](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository). You can also use [any other license](https://choosealicense.com/licenses/) if you wish._

<p align="right">(<a href="#readme-top">back to top</a>)</p>
