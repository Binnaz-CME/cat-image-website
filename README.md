# Cats! Cats! Cats!

A website that lets you browse through cat-images for hours and hours.

## Pre-requisites if you want to work on the website.

Before you proceed to install, you need to have the following tools installed:
- [Node](https://nodejs.org/en/)

## How to install:

In order to install you need to run:

```
npm install
```

## How to run project locally (on your computer)

To setup a local development server, run:

````
npm start
````

## How to build a production bundle

To build the app for production, run:

```
npm run build
````

## How to activate your API key

1- Get an API-key from - [The Cat API](https://thecatapi.com/).

2- To install snowpack dotenv plugin, run: 

````
npm install --save-dev @snowpack/plugin-dotenv
````

3- Create a .env file. Add following code to your .env and replace the template "YOUR_API_KEY":

````
SNOWPACK_PUBLIC_ENABLE_FEATURE=true

SNOWPACK_PUBLIC_API_KEY=YOUR_API_KEY
````