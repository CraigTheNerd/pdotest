## About PDO Connection Test

This is a very simple web app that tests database connections.
It uses PDO instead of Mysqli so that multiple databases can be tested.

It's not a sophisticated app with a API for a backend, but it doesn't need to be.
This is intended as a small utility for your local dev environment.

## Adding additional database drivers

For my purposes I've got only the two(2) ports available.

However, in the HTML list, I've commented out the MsSQL and Oracle ports just to show how additional drivers are added in the frontend.
Feel free to add the ports you might need.

This can support any database that is supported by PHP PDO.

https://www.php.net/manual/en/pdo.drivers.php

You will also need to add these drivers and ports in the backend

## Adding additional database drivers in the backend

In the PHP script, there's an if statement to check which driver is selected.

Simply add your required port and driver name according to the PDO docs.

https://www.php.net/manual/en/pdo.drivers.php

## Connecting to a Local or Remote Host

This app is able to connect to any host, local or remote, as long as that host is running and accepting connections.

## Building the app

This app uses vite for the frontend.
The app has already been built and you can use exactly what is in the dist directory, if you need only MySQL and or PostgreSQL.

If you make any changes, build the app using Vite.
Vite will build the app into the dist directory and overwrite anything in the dist directory, as well as the php directory.

Simply copy the entire php directory back to the dist directory, so that you have /dist/php/connect.php
Or make any changes you need to the code in the dist directory.

Feel free to adapt the code in any way you might need.
Please respect the Creative Commons Attribution license.

## License

Shield: [![CC BY 4.0][cc-by-shield]][cc-by]

This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg