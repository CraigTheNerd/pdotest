## About PDO Connection Test

This is a very simple web app that tests database connections.
It uses PDO instead of Mysqli so that multiple databases can be tested.

It's not a sophisticated app with a API for a backend, but it doesn't need to be.
This is intended as a small utility for your local dev environment.

Feel free to adapt the code in any way you might need.
Please respect the Creative Commons Attribution license.

## Adding additional database drivers

For my purposes I've got only the two(2) ports available.

However, in the HTML list, I've commented out the MsSQL and Oracle ports just to show how additional drivers are added in the frontend.
Feel free to add the ports you might need.

This app supports any database connection that is supported by PDO.

https://www.php.net/manual/en/pdo.drivers.php

You will also need to add these drivers and ports in the backend.

## Adding additional database drivers in the backend

In the PHP script, there's an if statement to check which driver is selected.
Simply add your required port and driver name according to the PDO docs.
Refer to the PDO docs for available drivers.

https://www.php.net/manual/en/pdo.drivers.php

## Connecting to a Local or Remote Host

This app is able to connect to any host, local or remote, as long as that host is running and accepting connections.

## Making code changes

This app uses vite for the frontend.
The app has already been built, and you can use exactly what is in the dist directory, if you need only MySQL and or PostgreSQL.

If you make any changes, build the app using Vite.
See Vite sections below.

Vite will build the app into the dist directory and overwrite anything in the dist directory, as well as the php directory.

Simply copy the entire php directory back to the dist directory, so that you have /dist/php/connect.php
Or make any changes you need to the code in the dist directory.

## Vite Initial Setup

When you first download the project, you will need to run npm install, to install all project dependencies.
There is a package.json file that will pull in all the dependencies.

In your terminal, change directory into project root.

Run the following command:

npm install

## Project Setup and Hosting

I have added a dns entry on my local network to resolve pdotest.lan to MAMP on my dev machine.

## The Front End

As mentioned, the front end uses vite.
During dev, I resolve the dev url to my macbook using dns on my lan.
Setup on your side as you need.

In the Vite config, vite.config.js, change the host as you need.

The front end connects to the backend php script via AJAX.
Look at /js/connect.js

At the top of the file there is a variable called api.

const api = 'http://pdotest.lan/php/connect.php'

I've used my dev url as the endpoint.
Change this to the url you will need.

## The Back End

The app will not work if the php directory is not in the project root directory.

When building the front end using vite, vite will overwrite everything in the dist directory, so make sure to copy the php directory back to the dist directory, or ultimately, your project root directory after building the app.

## Vite Watch

When making code changes, you will need to use Vite to watch your code changes and compile the SASS and Javascript.

Run the following command:

npm run dev

Once your code changes are complete, build the app.

## Vite Build

From the project root directory, run the following command in your terminal.

npm run build

Vite will build the app to the dist directory.
Vite will overwrite everything in the dist directory, including the php directory.

Without the php directory in the dist directory, the app will not work.

Simply copy the entire php directory to the dist directory, so that you have the connect.php script at the following path.

/dist/php/connect.php

## Deploy the App

Deploy everything in the dist directory to your desired environment.

## License

Shield: [![CC BY 4.0][cc-by-shield]][cc-by]

This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg