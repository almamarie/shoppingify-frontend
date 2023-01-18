<!-- Please update value in the {}  -->

<h1 align="center">Shoppingify</h1>

![screenshot](public/resources/screenshots/Screenshot%202023-01-16%20at%2009.18.21.png)

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://shoppingify-frontend-jet.vercel.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/almamarie/shoppingify-frontend">
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
- [Questions](#questions)

<!-- OVERVIEW -->

## Overview

- Where can I see your demo?

[Link to app site](https://shoppingify-frontend-jet.vercel.app/). The application was deployed on vercel with firebase as the backend.
Vercel gives a different ip address to each build. I have configured the application to rebuild whenever there is a puch in the master branch.Because I am still developing, there is not 1 link I can give for the project. I will therefore share the latest build here.

- What was your experience and What have you learned/improved?

  In order to improve my skills, I always learn a new thing after every project and use it to build the next project which is always tougher than the previous project (this project's difficulty is rated 5/6 on devchallenge ).

  - The previous projects were built with:

    - Frontend: React.js.
    - Backend: Flask + postgres.
    - Python was built with types included.

  - New skills after previous project:

    - Typescript
    - Next.js

  It has been very challenging, many Typescript errors to deal with expecially with the React.js types but i have been able to pull through.
  The toughest eror I faced was `Text content does not match server-rendered HTML` which occures when I tried pushing cart data to firebase.
  It has been 3 days and I have not fixed it. I have not gotten a solution from the question I posted on [stackoverflow](https://stackoverflow.com/questions/75127799/how-do-i-fix-text-content-does-not-match-server-rendered-html-in-nextjs-typesc).

  I have grown tremendously in my typescript and Next.js skills.

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Firebase](https://firebase.google.com/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/mGd5VpbO4JnzU6I9l96x) was to build an application to complete the following user stories:

- User story: When I select the items tab, I can see a list of items under different categories
- User story: I can add a new item with name, category, note, and image.
- User story: When I add a new item, I can select one from the existing categories or add a new one if the category does not exist
- User story: When I select an item, I can see its details and I can choose to add the current list or delete the item.
- User story: I can add items to the current list
- User story: I can increase the number of item in the list
- User story: I can remove the item from the list
- User story: I can save/update the list with a name (user can have only one active list at a time)
- User story: I can toggle between editing state and completing state
- User story: When I am at completing state, I can save my progress by selecting the item
- User story: I can cancel the active list
- User story: When I try to cancel a list, I can see a confirmation notification
- User story: I can see my shopping history and I can see the details of it
- User story: I can see some statistics: top items, top categories, and monthly comparison. (Tips: use libraries like recharts for the graph)
- User story (optional): I can search for items

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.
Note that the project was created with node 18. You must have it installed in order to run the application successfully. The right Typescript and Next.js versions are automatically downloaded when ypu install the dependencies as outlined below.
From your command line:

```bash
# Clone this repository
$ git clone https://github.com/almamarie/shoppingify-frontend

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

- Frontend: The application has been deployed on [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. It has been configured to automatically deploy when there is an update on the master branch.
- Backend: [firebase](https://firebase.google.com/)

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example -->

- [Deep copying arrays and objects](<https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/#:~:text=8.%20JSON.parse%20and%20JSON.stringify%20(Deep%20copy)>). I had to deep copy state items so I could manipulate the data. This came in handy.
- [Progamatically index objects in typescript](https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b#:~:text=const%20someObj%3A,keyof%20typeof%20someObj%5D).

- Hydration error which i faced a lot has two solutions:
  - [Import the component using `dynamic` from `{next/dynamic}`](https://stackoverflow.com/questions/72311188/i-get-a-hydration-failed-error-while-trying-to-use-recharts-in-nextjs-has-any)
  - Fixing invalid HTML such as div inside p

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

## TODO

- In order to move the duplicate codes in the cart (searching for a catgory or item) create a function that searches for the location of the item and returns its category.
  - One should find the category and returns approprietely if no category is found
  - another searches for the item and returns approprietely if no category is found
  - I will also have to modify the helper functions in the cart to receive logic from the helper functions and act accordingly
  - I wil have to modify the cart actions to accept the locations and act accordingly

## Questions

- How is the top categories and top items calculated ?
  1. using the current cart? -> I will go with this.
  2. using all carts?

## Contact

<!-- - Website [your-website.com](https://{your-web-site-link}) -->

- GitHub [@almamarie](https://github.com/almamrie)
- Twitter [@marieloumar](https://{twitter.com/your-username})
- LinkedIn [Louis marie Atoluko Ayariga](https://www.linkedin.com/in/marieloumar/)

## Pictures
