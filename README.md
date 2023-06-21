# Lord of the Rings SDK

 *Mellon* , this is the one API ([What the hell is an Application Programming Interface?](https://the-one-api.dev/documentation#1))  *to rule them all* . No really, it serves your needs regarding data about  **The Lord of the Rings** , the epic books by J. R. R. Tolkien and the official movie adaptions by Peter Jackson.

There are many endpoints available, but you need to [sign up](https://the-one-api.dev/sign-up) to obtain an access key. Get a glimpse into the [documentation](https://the-one-api.dev/documentation) to check out all accessible datasets.

## Installation

### NPM

To install via [NPM](https://www.npmjs.com/):

npm install @gitonga/sdk_test --save

If you're using a bundler (like [Rollup](https://rollupjs.org/) or [webpack](https://webpack.js.org/)), you can import the Appwrite module when you need it:

```js
import RingsSDK from "@gitonga/sdk_test";
```

## Getting Started

### Init your SDK

Initialize your SDK with your Appwrite server API endpoint and project ID which can be found in your project settings page.

```js
// Init your Web SDK
const client: RingsSDK = new RingsSDK({
    apiKey: "Your API Key",
  });
```

### Make Your Requests

Once your SDK object is set, access any of the SDK services and choose any request to send. 

The request currently available are :

1. get all the movies `${baseUrl}/movies`
2. get movie details `${baseUrl}/movies/$${id}`
3. get movie quotes `${baseUrl}/movies/$${id}/quote`
4. get all the quotes `${baseUrl}/quote`
5. get a qoute details `${baseUrl}/quote/$${id}`

```js
//Get all the quotes
client.getQoutes().then((p: any) => {
    console.log(p);
}); 

// Get a quote by id 
  client.getQuoteById("testId").then((p: any) => {
    console.log(p);
  });

// Get all the movies 

client.getMovies().then((p: any) => {
    console.log(p);
}); 

// Get Movie Detail by Id

client.getMovieById("testid").then((p: any) => {
    console.log(p);
}); 

// Get movie quotes

client.getMovieQuotes("testid").then((p: any) => {
    console.log(p);
}); 

```

### Full Example

```js
// Init your Web SDK
//import the package
import RingsSDK from "@gitonga/sdk_test";

// Init your Web SDK
const client: RingsSDK = new RingsSDK({
    apiKey: "testAPIKey",
  });
  
client.getQoutes().then((p: any) => {
    console.log(p);
}); 
```

### Learn more

You can use the following resources to learn more and get help

- 🚂 [Appwrite Nodejs Playground](https://github.com/Gabkings/sdk_test)

## License

MIT
