# bth012-js-exercises
Learn javascript by solving programming exercises and get instant feedback by running the unit tests that define each exercise.


## Introduction
In this repo you'll find a number of predefined javascript exercises, that each has an associated set of unit tests. Complete the code as instructed in each exercise function definition, and run the tests. If the tests pass, congratulations, you completed that exercise. Did the test fail, try again by re-reading the instructions anb review relevant information sources (course book, Mozilla Development Network, js-standard).

## Pre-requisites

These instructions assumes that you have Node.js and Visual Code installed on your computer. Goto their respective web-pages and follow instructions there to download and install.

* [Node.js](https://nodejs.org)
* [Visual Code](https://code.visualstudio.com/Download)

## Where to find this repo and future updates
This repository is provided as part of the BTH012 javascript programming course and updates will be made during the life-time of the course.

This repository can found on a number of public services:

| Service | Git-url | webb-page |
|-------- | ------- | ------- |
| GitHub (main repo) | git@github.com:pobengtsson/bth012-js-exercises.git | https://github.com/pobengtsson/bth012-js-exercises |
| Bitbucket | |
| Gitlab | |
| Jetbrains Space | |

## Getting started


1 **Start a command line terminal**
  Start a comand line terminal and go to the folder where you want to keep your code repositories. If you don't have one or know which one to use, goto to the home-directory of your user and create (`mkdir`) a `projects` folder and change into that directory (`cd`)

  On a mac:
   Start the Terminal application. Then:
  ```bash
    DavesMac:~  dave$ cd projects
    cd: no such file or directory: projects
    DavesMac:~  dave$ mkdir projects
    DavesMac:~  dave$ cd projects
  ```

2 **Clone this repository to your local computer.**
  Choose the repo you prefer to clone from. If you need instruction for how to clone, see visit the webb-page for the service you chose (see links in table above).
  When successful you should now have a new folder named `bth012-js-exercises` when you list the contents of your current working directory (`ls`).

  Assuming you clone from github:
  ```bash
  DavesMac:~  dave$ git clone git@github.com:pobengtsson/bth012-js-exercises.git
  ```

3 **Run npm install.**
  Change working directory to `bth012-js-exercises` (`cd`) and install the dependencies needed to work with theis project () to  step 2 you shouldstart watching for changes and run the jest unit tests.

  On a mac:
  ```bash
  DavesMac:~  dave$ npm install
  ```

4 **Open the project in Visual Code**
  On Mac:
  ```bash
  DavesMac:~  dave$ code .
  ```

5 **Start a terminal in Visual Code**
  In the Visual code menu, start a terminal.

6 **Run the tests**
  In the terminal, run the tests:

  To run the tests a single time:

  ```bash
  DavesMac:~  dave$ npm run test
  ```

  However, the recommended way is to run the tests automatically on every change you save to a file in a project. This is what is known as watch mode and the jest test runner supports this really well. Start jest test runner in watch mode like this:

  ```bash
  DavesMac:~  dave$ npm run watch
  ```

  When running you will find that only the tests for the first exercise is run and they fail. There are more tests in the repo for the following exercise, but they have been skipped to allow you to focus on one exercise at a time.

7 **Start exercising!**
  Go to the the `src` folder and open the `exercise-1.js` file. At the top of the file you find a function that is named exercise-1-1. The instructions for the exercise is found as a comment inside the function. Read them and complete the code as instructed. Save your changes (`Ctrl-S`) and see the results as the tests are run automatically. When tests all pass, its time to move to the next exercise.

8 **Next exercise**
  Open the `exercise-1.tests.js` in the `tests`-folder and find the line that reads `describe.skip('exercise 1.2', () =>{`. Remove the `.skip` after `describe` then save the file.
  Now, the tests should be run again and in addition to the first set of tests that still pass, a new set of tests should be run and fail. This means you are all set to complete the next exercise (`exercise-1-2`) that you find in the `exercise-1.js`-file.

9 **Next chapter of exercises**
  When you have completed all the exercises in `exercises-1.js` you'll find the next chapter of exercises in `exercises-2.js` and more exercises are found by the same pattern. Don't forget to remove the `.skip`-extension on the describe of the exercises before you start coding the exercise.

## When you find errors and bugs
  If you find errors in the test code or instructions, please register an issue on the Github repo.
