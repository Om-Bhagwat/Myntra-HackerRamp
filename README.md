# Myntra Hacker-Ramp Project

[TOC]

This project for built for Myntra Hacker-Ramp Hackathon with two tracks in mind; namely, Socialize and Gamify Track. We mainly aim to increase the customer involvement, satisfaction and convenience increasing features.

## Project Sub-Components

1. **Swipe Feature** 

   <p style="color:#ff905a"> (for like and dislike products selected daily randomly, and so that customer spend more time on myntra) </p>

2. **Friends Feature** 

   <p style="color:#ff905a"> (to have friends and send & accept friend requests) </p>

3. **View Friend's Wishlist**

4. **Search Friends**

5. **Chat with friends**

6. **View your own profile**

7. **Top like products based on**

8. **Authentication** 

   <p style="color:#ff905a"> (login, register and logout system using JWT) </p>

## Tech Stack Used :-

**M**: MongoDB
**E**: Express JS
**R**: React JS
**N**: Node JS

<p style="color: #5ecc1b">
For setting up Development Based environment to run our project, follow the instructions given below. 
</p>
## Get The Files

Download the code zip file from [our GitHub repository](https://github.com/Om-Bhagwat/Myntra-HackerRamp) or run the following command in the folder you want to save our files in, using any terminal or command prompt

```bash
git clone https://github.com/Om-Bhagwat/Myntra-HackerRamp
```

## Starting the Servers

#### Starting Backend Server (NODEJS)

change the directory to ` ./backend ` and run the following command

```bash
npm i
nodemon server.js
```

if you don't have nodemon install it via `npm i -g nodemon`

#### Starting Frontend Server (React)

change the directory to ` ./client ` and run the following command

```bash
npm i
npm start
```

#### Starting WebSocket Server (Provides Chat Facilities)

change the directory to `./websocket` and run the following command

```bash
npm i
node server.js
```

#### Setup `dev.env` file in Backend Directory

create a `dev.env` file in `./backend` directory.

In `dev.env` file define the `PORT` value for backend to start, `TOKEN_SECRET` for storing jwt authentication, `DB_URL` to store your MongoDB database server address.

```shell
# as an example
PORT=3003
TOKEN_SECRET=thisisyou
DB_URL=<here goes your MongoDB server address, local or online> 
```



## Screenshots

