# Implement JWT Authentication in a Node.js App

## Introduction

JSON Web Token (JWT) is a secure way to handle authentication in web applications. It allows you to verify the identity of users without storing session data on the server but on client.This is what i focused on


### Step 1: Initialize a Node.js Project


- npm init -y

This will generate a `package.json` file.

where in here go to scripts and put , 
    `"dev": "nodemon server.js"` .
    
- In terminal `npm install nodemo`

nodemon is a tool that helps develop Node.js based app by automatically restarting the server.

### Step 2: Install Required Dependencies

Install the necessary packages:

```sh
npm install express dotenv jsonwebtoken
```

- `express`: Web framework of Node.js
- `dotenv`: To manage environment variables
- `jsonwebtoken`: To generate and verify JWTs

### Step 3: Create Environment Variables

Create a `.env` file in the project root to store secret keys:

```sh
ACCESS_TOKEN_SECRETc=cmy_secret_key // randomly generated 64bit key.
```

### Step 4: Set Up the Express Server

Create an `server.js` file and set up the server:

```javascript

dotenv.config(); // for telling server.js to use .env file.

```
```
// Middleware to authenticate token
function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    
    if (!token) {
        return res.sendStatus(401);
    }
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    });
}

```


```
// Login route to generate JWT
app.post("/login", (req, res) => {
    const username = req.body.username;
    if (!username) {
        return res.status(400).json({ error: "Username is required" });
    }
    
    const user = { name: username };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken });
});


```

## Step 5: Run the Server

Start the server by running:

```sh
npm run dev
```

The server will run on port 3000.

## Step 6: Testing JWT Authentication

Use a tool like Postman to test the API.

1. **Generate a Token:**

   - Send a POST request to `http://localhost:3000/login` with a JSON body:

   ```json
   {
       "username": "John"
   }
   ```

   - You will receive a response with an access token.
   - this is a JWT.

2. **Login:**

   - Send a GET request to `http://localhost:3000/posts` with the token in the `Authorization` header:

   ```
   Authorization: Bearer YOUR_ACCESS_TOKEN
   ```

   - If the token is valid, you will receive posts.

   

after jwt, moving back to FRONT-END back.
We started to create my project an disney+ web app.
Before that we need to test the omdb api.

###

\
\*\*On Integrating OMDb API in an Angular Project\*\*



---

## **1. Project Setup**

Create a project using Angular CLI. \
The `HttpClientModule` is integrated into the project via `provideHttpClient()` in `main.ts` to enable HTTP requests.

---

## **2. OMDb API Integration**

A  service (`OmdbService`) is created to handle API communication.\
&#x20;This service uses Angular’s `HttpClient` to fetch movie data from the OMDb API using an API key stored in an environment configuration file.&#x20;

---

## **3. Environment Configuration**

An environment file is introduced to store the API key securely. This avoids hardcoding  information directly in the service file. 

---

## **4. Component Implementation**

The `AppComponent` is modified to call the `OmdbService` during initialization i.e ngOnInIt(){}.

The component subscribes to the API response and stores the retrieved movie data in data which is then used for showing on html.

The HTML template is updated to display movie information.

&#x20;The retrieved data, including the movie title, plot, and poster.

---

## **5. Running app.**

The application starts to  run using `ng serve`, Debugging on  console logs to verify the correctness of the retrieved data.

---

### **Conclusion**

The integration of OMDb API into the Angular project follows best practices by keeping API communication through a service, securing the API key with environment .ts file and exporting, and  displaying data in the UI. 

Further improvements are to be made include adding a search functionality, diffrent movies to be displayed, and smooth ui & ux for better user experience.


