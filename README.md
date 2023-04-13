
# Eat Up Review

This is a web application for rating and reviewing restaurants. Users can sign up, upload pictures and leave comments on various restaurants. This app is built using Node.js and Express with MongoDB as the database.


## Features

- User authentication and authorization using passport.js.
- Ability to add, edit and delete restaurants and reviews.
- Flash messages for successful and unsuccessful operations.
- Error handling with custom error messages.
- HTTPS connection using SSL certificate.


## Usage

- Visit the homepage.
- Sign up or log in to add a new restaurant or review.
- Click on a restaurant to view more details.
- Edit or delete a restaurant or review if you are the owner.
- Logout when you are done.


## Tech Stack

- Node.js
- Express
- MongoDB
- EJS
- Passport.js
- Bootstrap


## API Reference

- [MapBox](https://www.mapbox.com)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file.

You can set the PORT variable to any port number you prefer. 

`PORT=8080` 

The variables should be set to the corresponding values from your Mapbox and Cloudinary accounts.

`MAPBOX_TOKEN=<your Mapbox API token>`

`CLOUDINARY_CLOUD_NAME=<your Cloudinary cloud name>`

`CLOUDINARY_KEY=<your Cloudinary API key>`

`CLOUDINARY_SECRET=<your Cloudinary API secret>`

## Run Locally

1. Download the project

2. Create a new file in the root directory of the project called **.env**.

3. Inside the **.env** file, add your environment variables.

4. Generate SSL certificates for local development using [OpenSSL](https://www.digitalocean.com/community/tutorials/openssl-essentials-working-with-ssl-certificates-private-keys-and-csrs).

```bash
  openssl req -nodes -new -x509 -keyout server.key -out server.cert
```

5. Install dependencies

```bash
  npm install
```

6. Start the server

```bash
  nodemon app.js
```
Runs the app in the development mode.
Open https://localhost:8080 to view it in your browser.

Please note that because the SSL certificates are self-signed, you may receive a warning in your web browser indicating that the connection is not secure. This is expected when working with self-signed SSL certificates and can be safely ignored for local development purposes.

