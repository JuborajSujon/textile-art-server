# Textile Art

### Live Site URL:

Firebase Hosting : [https://textile-art-ta.web.app/](https://textile-art-ta.web.app/)

Netlify Hosting : [https://textile-art.netlify.app/](https://textile-art.netlify.app/)

## Features and Characteristics:

- Create, Read, Update, and Delete (CRUD) operations
- Uses Express.js for routing and middleware
- Integrates MongoDB for data storage
- Utilizes CORS for Cross-Origin Resource Sharing
- Supports environment variables with dotenv

## Prerequisites

- Node.js installed on your machine
- MongoDB installed and running locally or accessible remotely
- npm or yarn package manager installed

## Installation: :computer:

1. Clone the repository from GitHub:

```
git clone https://github.com/programming-hero-web-course-4/b9a10-server-side-JuborajSujon

```

2. Navigate to the project directory:

```
cd textile-art-server
```

3. Install dependencies using npm or yarn:

```
npm install
```

or

```
yarn install
```

4. Set up environment variables:Create a .env file in the root directory and add the following variables:

```
PORT=5000
MONGODB_URI=<your-mongodb-uri>
```

## Usage: :book:

1. Start the development server:

```
npm run dev
```

The server should now be running on http://localhost:5000

## API Endpoints

- GET /api/products

Get all products from the database

- GET /api/products/:id

Get a specific product from the database

- GET /api/categories

Get all categories from the database

- GET /api/userproducts/:email

Get all products associated with a specific user from the database

- GET /api/subcategory/:name

Get a specific subcategories from the database

- GET /api/artisans

Get all artisans from the database

- GET /api/teamMember

Get all team members from the database

- GET /api/faq

Get all FAQs from the database

- POST /api/addProduct

Add a new product to the database

- PUT /api/updateProduct/:id

Update a specific product in the database

- DELETE /api/productdelete/:id

Delete a specific product from the database

## Conclusion: :rocket:

Enjoy exploring and discovering your favorite art crafts with Textile Art! :rocket:::rocket:::rocket:
