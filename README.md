# Word Counter

A Javascript application that takes a text file and outputs the individual words of that file, the amount of times that they appear and wether that number is prime or not. 

## Installation

- Run ```npm install``` to install dependencies
- Run the app with ```node src/run.js``` from the root.

### Run tests

- To run the tests simply run ```npm test```

## Technologies

- Javascript
- Node JS
- Jasmine for testing

## Successes

- Fully functional app
- Follows OOP principles with clear separation of responsibilities
- Good test coverage

## Struggles

Once i'd got the logic sorted I decided to try to make this into a node app with a front end for use in the browser.
I ran into a few problems with this, some which I overcame and some which I didn't due to time constraints. One of the issues I battled with was how to get the file to store on a local disk and then how to access it from the user request. I used Multer, a middleware for handling multipart/form-data, to store the file and managed to get the Object to display on the results page. It was here I ran into more issues, how to print the object in a readable way. This was where I unfortunately ran out of time.

I have very little Node experience but I enjoyed learning about it. If I had more knowledge, I think i'd have been able to complete the front-end. I have removed the front-end design from the master but kept it [on a branch](https://github.com/ledleds/word-counter/tree/with-front-end).

I would have liked to implement error handling as I haven't managed to cover as much of this as i'd like.

