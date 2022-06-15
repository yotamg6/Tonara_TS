# Tonara Music Assignment List - All your assignments in one place

## Description

Music Assignment List allows the user, music student of Tonara, to view all music assignments given by the teacher, or added independently, in one list. The list shows the assignment as a card, including all details about it, including title, genre, practice time, and progress made. By clicking on a designated button, user adds more assignments, that are added to the assignment list. The student is thus able to see all the assignments in one place, in one simple view, on her/his iPhone SE.

This project is coded with React and Typescript on the client side, using axios for the server requests (GET and POST), MUI for the form design (creating a new list Item) and react-router-dom for navigating between the form and the main view. The server side is written in Node.js and Typescript using the Express framework, and the database (storing and inserting new assignments) is managed with PostgreSQL. Sequelize is used as the ORM for modeling and using the database.

The design of the project is meant to be "pixel-perfect", modeled after a "Figma" file. As the file is designed for iphone 8, and the project is written for iPhone SE, I adjusted elements size with percentage, rather then pixels, adjusting further several other components and properties, such as the progress bar, menu, search bar image and font. The description field, present on the form and handled into the database, is not added on the assignment items, as the Figma file did not contain this field, and I tried to match the origin as much as possible.

## setting up

node.js version: v16.13.0

in pg admin, postgreSQL server add the following:
new database - tonara
create new table -
CREATE TABLE assignments (
id serial NOT NULL PRIMARY KEY,
title varchar(255),
description varchar(255),
music_genre varchar(255),
practice_time varchar(255),
days varchar(255),
days_practiced varchar(255),
createdat timestamp,
updatedat timestamp
)

In addition, in the .env file where it says DB_PASS, please insert your password for pg admin (instead of the one that is written there now).

Thank you for reading <br/>
Yotam Gaton
