# Myntra Hacker-Ramp Project

#### **Track**: Socialize and Gamify Track

**Tech Stack Used :-**
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

