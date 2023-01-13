<!-- Please update value in the {}  -->

<h1 align="center">{Your project name}</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://{your-demo-link.your-domain}">
      Demo
    </a>
    <span> | </span>
    <a href="https://{your-url-to-the-solution}">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/mGd5VpbO4JnzU6I9l96x">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)
- [Things to Note](#note)
- [Todo](#todo)

<!-- OVERVIEW -->

## Overview

![screenshot](https://user-images.githubusercontent.com/16707738/92399059-5716eb00-f132-11ea-8b14-bcacdc8ec97b.png)

Introduce your projects by taking a screenshot or a gif. Try to tell visitors a story about your project by answering:

- Where can I see your demo?
- What was your experience?
- What have you learned/improved?
- Your wisdom? :)

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://reactjs.org/)
- [Vue.js](https://vuejs.org/)
- [Tailwind](https://tailwindcss.com/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/mGd5VpbO4JnzU6I9l96x) was to build an application to complete the given user stories.

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/almamarie/shoppingify-frontend

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example -->

- [Steps to replicate a design with only HTML and CSS](https://devchallenges-blogs.web.app/how-to-replicate-design/)
- [Node.js](https://nodejs.org/)
- [Marked - a markdown parser](https://github.com/chjj/marked)

## Note

- I am having problems with importing svgs so I will use them directly when needed
- For situations where I am forced to use a component for the svg like in the shopping cart icon which is shown when there is no item in the cart, I wrap the component with a div element so i can style it. This is because I am having problems with passing styles in REACT with Typscript.
- I am having problems with passing className Props with typescript so I will try to ignore it. I have faced this most with the Button Component.
- In Typescript, res.json() returns any which causes and error. This prevents me from using one function for all http requests. I an therefore going to have to repeat myself (fetch) whenever I need to do any http request.

  - code snippet

    - ```Typescript
      const data = await res.json();
      if (!res.ok) throw new Error(`${data.message} (${res.status})`);
      ```

      response is the underlined part

  - error output

    - ```Typescript
        const res: unknown
        Object is of type 'unknown'.
      ```

## TODO:

- In order to move the duplicate codes in the cart (searching for a catgory or item) create a function that searches for the location of the item and returns its category.
  - One should find the category and returns approprietely if no category is found
  - another searches for the item and returns approprietely if no category is found
  - I will also have to modify the helper functions in the cart to receive logic from the helper functions and act accordingly
  - I wil have to modify the cart actions to accept the locations and act accordingly

## Contact

- Website [your-website.com](https://{your-web-site-link})
- GitHub [@your-username](https://{github.com/your-usermame})
- Twitter [@your-twitter](https://{twitter.com/your-username})
