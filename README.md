# Addition-Skills
Provide a README.md detailing:

- What your application does:
This is a single-page web application for 2nd graders to test their math addition skills.

The 2nd grader is prompted with an addition expression generated from a function with numbers ranging from 1-999, the 2nd grader will type his answer in the input box, hit submit so the application can receive his answer then the application will check if the answer is correct or not comparing it to the API'S response (https://api.mathjs.org), if it is the application displays a "right answer" message, if it's not it displays a "wrong answer" message, in both cases the app renders another addition problem for the student to solve.

- How other developers could contribute to your code base (installing dependencies, spinning up a development server, running tests, etc.):
Other developers could contribute to my code base if said project is shared via any code collaboration platform like Bitbucket or Github, clone the repository to their computer, run `npm i` command inside the `addition-skills` folder to install needed dependencies and then once again in the `addition-skills` folder run `npm start` command to launch the development server, after all this has been done, other developers could test the project to their wishes.

- How to build and deploy your application. 

To build the application we first need to install the neccessary dependencies in the `addition-skills` folder by running `npm i`, once this has been done we've succesfully built the application and to deploy it we run in the same folder `npm start`.