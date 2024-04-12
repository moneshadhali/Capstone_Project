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
    
<a id="introduction"></a>
## Introduction
In response to the growing need for efficient delivery systems within RainforestRetail's expanding warehouse network, our project aims to develop a versatile delivery application. This project aims to enhance operational efficiency by implementing a versatile application capable of seamlessly integrating across various warehouses, thereby eradicating logistical bottlenecks within the distribution network. By optimizing the delivery system on a regional basis, the application seeks to amplify the order capacity, resulting in reduced delivery times for customers and ensuring prompt updates on delivery schedules, thereby enhancing overall customer satisfaction and loyalty.

<a id="technology"></a>
## Technology
Purpose of Technology usage:
The objective is to enhance learning and skill development as an integral component of the bootcamp experience hence why the following technologies were used.

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

**Retro**

Link: https://metroretro.io/BOTRKBDV2K7N
![Screenshot 2024-04-12 at 11 14 05](https://github.com/moneshadhali/Capstone_Project/assets/148503750/5bec7282-a78b-4608-b76a-1c0ff7cd1b7f)


<a id="installation"></a>
## Installation Instruction
Back-end
1. Have a Java IDE, POSTMAN, Postico, PostgreSQL Installed
2. Fork Project to your GitHub/Clone Project to your local computer
3. Open the project in an IDE
4. Create database 'capstone_db' in your terminal/Gitbash (local computer)
5. Run the application and server
5. Use POSTMAN to use or test the endpoints (use the provided postman collection found in GitHub repo)


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

### Frontend:
1. User can view a map of the order address.
2. User can customize the background color of the app.
3. Customers can view their order status.
4. User can check the history of orders.

### Backend:
1. Track order cost and duration.
2. Implement a user page with a separate navigation route to track order status.

