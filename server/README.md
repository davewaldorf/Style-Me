# Style/Me - Backend

This is the backend part of the Style/Me web application.

## Technologies Used

- Express
- Node.js
- MongoDB
- Mongoose
- Google Cloud Storage (for storing user-generated content)

## Installation

To run the backend on your local machine, follow these steps:

1. Clone this repository.
2. Install dependencies: `npm install`.
3. Set up your MongoDB database and provide the connection URL.
4. Configure the environmental variables in a `.env` file.
5. Start the server: `npm start`.

The backend will be accessible at `http://localhost:3001`.

## Environmental Variables

Set up the following environmental variables in the `.env` file:

- NODE_ENV=development
- PORT=3001
- DATABASE_URL=YOUR_MongoDB_URL
- JWT_SECRET=secret
- GCLOUD_PROJECT_ID=YOUR_Google_Cloud_Project_Id
- BUCKET_NAME=styleme-YOUR_GOOGLE_BUCKET_NAME

## API Routes

The following API routes are available in the application:

- POST /register
- POST /login
- GET /profile/:id
- PUT /profile/:id
- DELETE /profile/:id
- POST /wardrobe/:id
- GET /logout
- GET /looks/:id/likes
- GET /looks
- POST /looks/:id
- PUT /looks/:lookId/:userId
- POST /upload
- POST /wardrobe/:id

## Dependencies

- @google-cloud/storage
- bcrypt
- cors
- dotenv
- express
- mongoose
- multer
- nodemon

## Contributing

If you want to contribute to the backend development of Style/Me, please follow the standard steps for contributing to open-source projects.

## License

The backend code is released under the MIT License.
