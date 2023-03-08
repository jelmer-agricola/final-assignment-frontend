# Welcome to the application of my final project Frontend at Novi.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Below you will find information on how to use the application and what is needed


## Scripts

In the project Terminal, you can run:

### `npm start` to start the application
### `npm build` to build the application

Though there are more available scripts the scripts above are necessary to run the application.

## Requirements
- Webstorm
- Node.js needs to be installed
- A zipfile or clone of this project.
- Api key. The Api key is listed in the pdf of the full installation guide.


## Installation steps
For a more detailed overview I refer to the full installations guide. 

* Install webstorm
* Install node.js
* Open the zipfile you downloaded or clone form the repository
* Install npm
* Use the API key


Install webstorm
1. Visit the JetBrains website: www.jetbrains.com.
2. Click "Download" in the menu and select "WebStorm". 
3. Choose the operating system you are using and click "Download". 
4. Follow the on-screen instructions to complete the installation.
5. Fire up WebStorm and you're ready to go!

* Install node.js
1. Visithttps://nodejs.org/en/download/ and choose the appropriate file to download. On this website you then choose the 64 bit version of the windows installer, macOS installer or Linus Binaries. 
2. With the command node -v you can check in the terminal whether the installation was successful if node is present you will see a version number. The terminal can be found at the bottom of your webstorm ide.

Open the zipfile you downloaded or clone form the repository

Option A via Zipfile
1. Open the project Via zip file
2. Download the zip file
3. Click on extract in the folder and choose the folder in which you want to save the project.
4. Open webstorm click on file → open → at the top left and then on the folder in which the project has been extracted.

Optie B cloning the project from github
1. Clone the zipfile from the repository
2. Go to https://github.com/jelmer-agricola/final-assignment-frontend
   Just like the image below, click code.
3. Then click on local and choose Https, SSH or GithubCLI depending on your git account.
Copy the link and open webstorm and click on: file → new → Project from version control
Copy the url in the red box as below and click clone
4. Run the following command in the terminal: “git remote remove origin”.


Install npm
1. Now that you have opened the project, you can proceed with the installation of npm.
2. Open the terminal and run "npm install".
3. To check if the website is working, you can run the command "npm start".
4.  The application will automatically open in your browser. If it doesn't, you can use the following link: http://localhost:3000. However, the page will not function properly yet because you still need to add the API key.
5. Press the "ctrl" key and the "c" key simultaneously in the terminal.
6. Type "y" to stop the application.

Use the API key
1. Create a ".env" file int the root folder. 
2. Add the api key which is provided in the Installation guide.
3. Run the command "npm run build" in the terminal to ensure that the application works.
4. Then run the command "npm start" again.

Good luck now you can start using the application!

## Description of the most important pages 
Below the most important pages are described. These being:
1. Homepage
2. Register page
3. Login page
4. Add page with searchbar
5. Watchlist page
6. Genre and Mood page

1: Home page
On the homepage you can click on “Register” at the top right to register and “Sign in” to log in. In addition, you can see the top 5 trending films and trending movies of the day, which are called via the tmdb api. On all pages, an inner-content container with a width of 1200 pixels has been chosen. The outer container stretches across the entire page.

2: Register page
On this page, the user can fill in his details to register. to login you can click on “Sign in” in the navigation bar or on  "click here" to log in.

3: Login page
On the login page you can log in with username and password. If you do not have an account yet, you can click on the link under the “sign in” button or click on “Register” in the navigation bar. In the case of an incorrect username or password, you will receive error messages.

4: Add page with search bar
On this page you can enter a movie or series in the search bar. By clicking on “Add to watchlist” you add a title to the watchlist and when you click on “Add to Favorites” it will be added to the favorites. Clicking on watchlist or favorites in the navigation bar will take you to the page.

5: Watchlist page
You will find your watchlist on the watchlist page. Clicking on the link “click here” would take you to the genre/mood page. Hovering over a title from the watchlist brings up the controls for these titles. With the cross you remove a title and with a heart the title is added to the favorites list. The favorites page works about the same. On this page you can remove a title from the favorites array by clicking on the cross. You can use the arrow to the left on the favorites page to move a title to the array of the watchlist and thus also the watchlist page.

6: Genre and mood search page
On this page you can choose one of the five moods that will lead you to a page of the mood in question. This page lists the top ten that best fit this mood. This is based on the different genres associated with the mood. In addition, the user can click on genres. After this, the user can choose a genre from a drop-down menu. The user can choose from 18 different genres. The ten highest rated by genre appear on the page.

