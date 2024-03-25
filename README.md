# Movie Theatre Web App
This is our Movie Theatre Web App group project for ENSF 614 - Advanced Systems Analysis and Software Design.

## To start server
1. Start a new database by running an SQL script "create database movie_theatre"

### Two options to run server
1. To run with jar file:  
Run the jar file with "Java -jar web-api/target/movie-theatre-0.0.1-SNAPSHOT.jar --spring.datasource.username={YOUR_USERNAME} --spring.datasource.password={YOUR_PASSWORD}" with your MySQL username and password instead of {YOUR_USERNAME} and {YOUR_PASSWORD}
2. To run with java:   
Edit application.properties file in web-api\src\main\resources to update your MySQL database and password, then run
web-api\src\main\java\com\ensf614project\movietheatre\MovieTheatreApplication.java

## To start frontend,
- Navigate to frontendreact, run yarn, npm start
