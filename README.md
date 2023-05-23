# Style/Me

Style/Me is a web-application that allows users to organize their wardrobe digitally. The app provides a platform to store clothes and outfits in an organized manner, allowing users to easily browse and choose what to wear. Users can also share their looks with others and browse through a feed of posts from other users, interacting with them.

## Technologies Used

- Front-end: React.js, TypeScript, Redux, Tailwind CSS, Daisy UI
- Back-end: Express, Node.js, MongoDB, Mongoose, Google Cloud Storage for storing user-generated content

### Deployed Application

The Style/Me web application is deployed and accessible at [https://style-me-plum.vercel.app/](https://style-me-plum.vercel.app/). You can visit the deployed application to explore its features and functionality.

Please note that the link provided is the live deployment of the Style/Me web application.

## Installation

To run Style/Me on your local machine, you need to follow these steps:

1. Clone this repository.
2. Install dependencies using the following command:
   ```bash
   npm install
Backend Setup
To set up the backend for the Style/Me application, follow these steps:

Make sure you have MongoDB installed and running on your local machine.

Create a new database named styleme in MongoDB.

bash
Copy code
$ mongo
> use styleme
> exit
In the backend codebase, locate the database configuration file (e.g., config/db.js, config/database.js).

Update the DATABASE_URL environmental variable with your MongoDB connection URL.

DATABASE_URL=mongodb://localhost:27017/styleme
Replace localhost:27017 with your MongoDB host and port configuration if needed.

Environmental Variables
To set up the environmental variables for the Style/Me application, follow these steps:

Create a .env file in the root directory of the backend application.

Add the following environmental variables to the .env file:

NODE_ENV=development
PORT=3000
DATABASE_URL=mongodb://localhost:27017/styleme
JWT_SECRET=secret
GCLOUD_PROJECT_ID=YOUR_Google_Cloud_Project_Id
BUCKET_NAME=styleme-YOUR_GOOGLE_BUCKET_NAME
Modify the values according to your specific configuration or preferences.

Save the .env file.

Frontend Setup
To set up the frontend for the Style/Me application, follow these steps:

Open a new terminal and navigate to the frontend directory: cd client.
Install frontend dependencies using the following command:
bash
npm install

Make sure to replace `YOUR_Google_Cloud_Project_Id` and `YOUR_GOOGLE_BUCKET_NAME` with your actual Google Cloud project ID and bucket name.

With this update, the installation section now includes information about setting up the backend, configuring environmental variables, and setting up the frontend.

### Dependencies

#### Backend

- `@google-cloud/storage`: ^6.9.5
- `bcrypt`: ^5.1.0
- `cors`: ^2.8.5
- `dotenv`: ^16.0.3
- `express`: ^4.18.2
- `mongoose`: ^7.0.4
- `multer`: ^1.4.5-lts.1

#### Frontend

- `@reduxjs/toolkit`: ^1.9.5
- `@testing-library/jest-dom`: ^5.16.5
- `@testing-library/react`: ^13.4.0
- `@testing-library/user-event`: ^13.5.0
- `@types/jest`: ^27.5.2
- `@types/node`: ^16.18.24
- `@types/react`: ^18.0.38
- `@types/react-dom`: ^18.0.11
- `@types/react-redux`: ^7.1.25
- `daisyui`: ^2.51.5
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-hook-form`: ^7.43.9
- `react-redux`: ^8.0.5
- `react-router-dom`: ^6.10.0
- `react-scripts`: ^5.0.1
- `typescript`: ^4.9.5

### API

The following API routes are available in the application:

#### User Routes

- `POST /api/register`: Register a new user.
- `POST /api/login`: Log in a user.
- `GET /api/profile/:id`: Get the profile of a user.
- `PUT /api/profile/:id`: Update the profile of a user.
- `DELETE /api/profile/:id`: Delete the profile of a user.
- `POST /api/wardrobe/:id`: Add an item to the user's wardrobe.
- `GET /api/logout`: Log out the user.

#### Look Routes

- `GET /api/looks/:id/likes`: Get the likes for a specific look.
- `GET /api/looks`: Get all the looks.
- `POST /api/looks/:id`: Add a new look.
- `PUT /api/looks/:lookId/:userId`: Handle the like action for a look.

#### Upload Routes

- `POST /api/upload`: Upload a file.

#### Wardrobe Routes

- `POST /api/wardrobe/:id`: Add an item to the user's wardrobe.

## Features

- Users can create an account and log in to Style/Me.
- Users can add clothes and outfits to their digital wardrobe.
- Users can browse their wardrobe and choose what to wear.
- Users can share their outfits with others and browse through a feed of posts from other users.
- Users can interact with other users by liking and commenting on their posts.

## Usage

After installing Style/Me, you can open it in your web browser by navigating to `http://localhost:3000`. You can create an account, add clothes and outfits to your wardrobe, and browse through your feed and other users' posts.

## Contributing

If you would like to contribute to Style/Me, please follow these steps:

1. Fork this repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

## License

Style/Me is released under the [MIT License](https://opensource.org/licenses/MIT).

## Contact Information

If you have any questions or feedback about Style/Me, you can reach out to us at [contact@styleme.com](mailto:contact@styleme.com).

## Acknowledgments

We would like to thank the following individuals and resources for their inspiration and guidance:

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Express Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
