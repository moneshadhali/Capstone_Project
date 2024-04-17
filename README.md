## Table of Contents
1. [Introduction](#introduction)
2. [Technology](#technology)
3. [Installation Instruction](#installation)
4. [MVP](#mvp)
5. [Extension](#extension)
6. [Wireframe and Component Diagram](#wireframe)
7. [Class Diagram and ERD](#class-erd-diagram)
8. [Data Dictionary](#data-dictionary)
9. [API Route Table](#api-routes-table)
10. [Credits and Acknowledgements](#credits-and-acknowledgements)
11. [Licences](#licences)

    
<a id="introduction"></a>
## Introduction
In response to the growing need for efficient delivery systems within RainforestRetail's expanding warehouse network, our project aims to develop a versatile delivery application. This project aims to enhance operational efficiency by implementing a versatile application capable of seamlessly integrating across various warehouses, thereby eradicating logistical bottlenecks within the distribution network. By optimizing the delivery system on a regional basis, the application seeks to amplify the order capacity, resulting in reduced delivery times for customers and ensuring prompt updates on delivery schedules, thereby enhancing overall customer satisfaction and loyalty.
With this in mind, we have envisioned the delivery drivers as our end user and will approach our design with a mobile-first methodology.

<a id="technology"></a>
## Technology
Purpose of Technology usage:
The objective is to enhance learning and skill development as an integral component of the bootcamp experience hence why the following technologies were used.

### Front-End

Shot Put Delivery is built on the following technologies:

**Tech Stack:**
- JavaScript + React: For building interactive UIs and managing state.
- HTML: The standard markup language for creating web pages.
- CSS: For styling and presenting the content elegantly.

**React Libraries Used:**
- React Router DOM
- React
  
**React Hooks Used:**
- useState
- useEffect
- Link
- Outlet
- useNavigate
- createBrowserRouter
- RouterProvider

### Back-End

**Tech Stack:**
- Java
- SpringBoot
- PostgreSQL Database
  
**The Spring Boot Libraries used:**
- Maven Project
- Spring Boot: Ver. 3.2.3
- Spring Boot Dev Tools
- Spring Web
- PostgreSQL Driver
- Spring Data JPA
  
**Tools Used:**
- POSTMAN
- Intellij
- Trello
- Excalidraw
- Zoom
- Slack
- Git

<a id="installation"></a>
## Installation Instructions

### Client-side

1. Install Node.js.
2. In terminal or Gitbash, navigate to the directory you want to copy the repository into.
3. Run the command `git clone git@github.com:moneshadhali/Capstone_Project.git`.
4. Run the command `git pull` to ensure you have the latest version.
5. Open the React project in your preferred IDE such as Visual Studio Code.
6. Open the integrated terminal and run the command `npm install` followed by `npm start`.

### Server-side

1. Install Postman, Postico, PostgreSQL, and your preferred IDE.
2. In terminal or Gitbash, navigate to the directory you want to copy the repository into.
3. Run the command `git clone git@github.com:moneshadhali/Capstone_Project.git`.
4. In the terminal or Gitbash, create the database called `delivery_db` by running the command `createdb delivery_db`.
5. In the terminal, run the command `./mvnw spring-boot:run`.



<a id="mvp"></a>
## MVP

### Backend:
1. Create a Spring application and define models with table relationships.
2. Implement CRUD routes in controllers and corresponding service layer.
3. Integrate transactional methods in the service layer for order fulfillment process.
4. Populate the database using a data loader and store data in PostgreSQL named "deliverydb".

### Frontend:
1. User can log in.
2. User can view their profile.
3. User can edit their profile information.
4. User can view Delivery Jobs in a list.
5. User can accept a job from the Delivery Jobs List.
6. User can view their own delivery jobs.
7. User can mark their own delivery jobs as complete.


<a id="extension"></a>
## Extension

### Backend:
1. Track order cost and duration.
2. Implement a user page with a separate navigation route to track order status.

### Frontend:
1. User can view a map of the order address.
2. User can customize the background color of the app.
3. Customers can view their order status.
4. User can check the history of orders.



<a id="wireframe"></a>
## Wireframe and Component Diagram
![image](https://github.com/moneshadhali/Capstone_Project/assets/99983599/ee33e2db-84d5-444a-a3d8-6a58322643e4)

<a id="class-erd-diagram"></a>
## Class Diagram and ERD
![image](https://github.com/moneshadhali/Capstone_Project/assets/99983599/624ec6ff-3977-4543-b0c9-e5d0b142d297)

![image](https://github.com/moneshadhali/Capstone_Project/assets/99983599/af33b94f-d007-46de-8de8-f534c505efbe)


## Retro ##

Link: https://metroretro.io/BOTRKBDV2K7N
![Screenshot 2024-04-12 at 11 14 05](https://github.com/moneshadhali/Capstone_Project/assets/148503750/5bec7282-a78b-4608-b76a-1c0ff7cd1b7f)



<a id="data-dictionary"></a>
## Data Dictionary

Warehouse Table

| No.| Column       | Data Type   | Description           |
|----|--------------|-------------|-----------------------|
| 1  | warehouse_id | Serial      | Primary Key           |
| 2  | name         | VARCHAR(255)| Name of the warehouse |
| 3  | location     | VARCHAR(255)| Location of the warehouse |
| 4  | area         | Double      | Area of the warehouse |

User Table

| No.| Column       | Data Type   | Description           |
|----|--------------|-------------|-----------------------|
| 1  | user_id      | Serial      | Primary Key           |
| 2  | warehouse_id | INT         | Foreign Key to Warehouse Table |
| 3  | name         | VARCHAR(255)| Name of the user      |
| 4  | region       | VARCHAR(255)| Region of the user    |
| 5  | maxVolume    | Double      | Maximum volume allowed for the user |

Order Table

| No.| Column        | Data Type   | Description           |
|----|---------------|-------------|-----------------------|
| 1  | order_id      | Serial      | Primary Key           |
| 2  | user_id       | INT         | Foreign Key to User Table |
| 3  | postcode      | VARCHAR(255)| Postcode of the order |
| 4  | address       | VARCHAR(255)| Address of the order  |
| 5  | isAccepted    | BOOLEAN     | Order acceptance status |
| 6  | isDelivered   | BOOLEAN     | Order delivery status |
| 7  | customerName  | VARCHAR(255)| Name of the customer  |
| 8  | volume        | Double      | Volume of the order   |

Package Table

| No.| Column       | Data Type   | Description           |
|----|--------------|-------------|-----------------------|
| 1  | package_id   | Serial      | Primary Key           |
| 2  | order_id     | INT         | Foreign Key to Order Table |
| 3  | productName  | VARCHAR(255)| Name of the product   |
| 4  | volume       | Double      | Volume of the package |
| 5  | weight       | INT         | Weight of the package |


<a id="api-routes-table"></a>
## API Route Table



### Users

| No. | Route                                   | Description                                    | Link                                   |
|-----|-----------------------------------------|------------------------------------------------|----------------------------------------|
| 1   | GET /users                              | Retrieve all users                             | http://localhost:8080/users           |
| 2   | GET /users/:id                          | Retrieve user profile by ID                     | http://localhost:8080/users/:id       |
| 3   | PATCH /users/:id                        | Edit user profile by ID                        | http://localhost:8080/users/:id       |
| 4   | GET /users/:userId/orders               | Retrieve orders by user ID                     | http://localhost:8080/users/:userId/orders |
| 5   | GET /users/:userId/notDeliveredOrders   | Retrieve orders not delivered by user ID       | http://localhost:8080/users/:userId/notDeliveredOrders |
| 6   | GET /users/:userId/deliveredOrders      | Retrieve orders delivered by user ID           | http://localhost:8080/users/:userId/deliveredOrders |
| 7   | PATCH /users/:userId/orders/:orderId    | Edit order by user ID and order ID             | http://localhost:8080/users/:userId/orders/:orderId |

### Orders

| No. | Route                                   | Description                                    | Link                                   |
|-----|-----------------------------------------|------------------------------------------------|----------------------------------------|
| 1   | GET /orders                             | Retrieve all orders                            | http://localhost:8080/orders          |
| 2   | GET /orders/:orderId                    | Retrieve order by order ID                     | http://localhost:8080/orders/:orderId |
| 3   | PATCH /orders/:orderId                  | Edit order by order ID                         | http://localhost:8080/orders/:orderId |
| 4   | GET /not-accepted                       | Retrieve orders that are not yet accepted      | http://localhost:8080/not-accepted    |



## Credits and Acknowledgements

The Capstone Collaborators:
- Harun Walizadeh - GitHub: https://github.com/harunwa
- Vivian - Github: https://github.com/viviann-1
- Monesha Dhali - Github: https://github.com/moneshadhali
- Ralphael Obadiaru - Github: https://github.com/osamui01

## Licences

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
