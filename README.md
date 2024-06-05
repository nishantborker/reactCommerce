
# ReactCommerce

React web app with authentication and product management functionality perfect for any developer! This API-powered application will allow users to register, list all products, search/filter products, and view the details of an individual product using API endpoints created with DummyJSON. The application uses Material UI to ensure a professional-looking responsive design that can be used on multiple devices.

**credentials for Login**
- username : emilys
- password: emilyspass


## Table of Contents

- Introduction
- Features
- Technologies Used
- Setup and Installation
- Usage
- API Integration
- State Management
- Responsiveness
- Deployment
- Snapshots
## Introduction

This is a WebApp with React, the webapp which has user authentication and a product section with only users authenticated. We use DummyJSON APIs for user sign in as well as fetching product data. A user can sign in, see a list of products, search, filter and review product details.
## Features

- User Authentication: Log in functionality with session handling using DummyJSON's API.

- Product Section: Authenticated users can view, search, filter, and see details of products.

- Responsive Design: Ensures a seamless experience across various devices and screen sizes.

- State Management: Efficient state management using React Context API or Redux.

- Material UI: Styled with Material UI framework for a modern look and feel.
## Technologies Used

- **React.js:** Front-end library for building user interfaces.
- **React Router:** For routing and navigation.
- **React Context API:** For state management.
- **Material UI:** For UI components and styling.
- **DummyJSON API:** For user authentication and product data.
## Setup and Installation

1.  Clone the repository

```bash
  git clone https://github.com/yourusername/ReactCommerce.git
cd ReactCommerce
```
2.  Install dependencies:

```bash
 npm install
```

3.  Start the development server:

```bash
 npm start
```
## Usage

- **Login:** Use the login form to authenticate with the DummyJSON API. Upon successful login, the user session is handled and maintained.

- **View Products:** Once authenticated, navigate to the product section to view a list of products.

- **Search and Filter:** Use the search bar and filters to find specific products.

- **View Product Details:** Click on a product to view its details.



## API Integration

- **Authentication:** Uses DummyJSON's login API to verify user credentials.

- **Product Data:** Fetches product list, search, and filter products using DummyJSON's product APIs.

- **Error Handling:** Implements error handling for API calls, showing appropriate messages to the user.
## State Management

- **React Context API:** The application uses React Context API or Redux to manage the global state, including user authentication status and product data
## Responsiveness

- The application is designed to be responsive using Material UI's Grid system and responsive utilities to ensure it looks good on all devices.
## Screenshots

Login Page

![Alt text](https://github.com/nishantborker/ReactCommerce/assets/98690341/ae47cd41-6690-4755-9d0d-678c8292dd28)

Home Page

![Alt text](https://github.com/nishantborker/ReactCommerce/assets/98690341/303dadc2-77a7-4028-850f-c0339ac8aecd)


Product Page

![Alt text](https://github.com/nishantborker/ReactCommerce/assets/98690341/595b8aa5-23c1-4cb5-8381-00482e29d981)


Product Detail Page

![Alt text](https://github.com/nishantborker/ReactCommerce/assets/98690341/963467e7-21fa-4026-9887-1b420f0d8d52)

#
