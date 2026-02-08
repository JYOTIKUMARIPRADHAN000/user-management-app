
# User Management CRUD Application

A React + TypeScript CRUD application for managing users.  
The application supports creating, viewing, updating, and deleting users with proper validation and a scalable architecture that allows adding new fields with minimal code changes.

----------

## Live Application

[(will update after deployment)]

## Source Code

will updated soon

----------

## Tech Stack

-   React (Vite)
    
-   TypeScript
    
-   React Hook Form
    
-   Zod Validation
    
-   Material UI (MUI)
    
-   Axios
    
-   React Router
    
-   JSON Server (Mock API)
    

----------

## Setup Instructions

### 1. Install dependencies

```bash  
yarn  
```

### 2. Start Mock API

```bash  
yarn server  
```

API will run at:  
[http://localhost:4000/users](http://localhost:4000/users)

### 3. Start Frontend

```bash  
yarn dev  
```

Open in browser:  
[http://localhost:5173](http://localhost:5173/)

----------

## Features

-   Create user
    
-   View user details
    
-   Update user
    
-   Delete user
    
-   Form validation
    
-   Loading indicators during API calls
    
-   Clean UI using Material UI
    
-   Configuration-driven dynamic form
    

----------

## Validation Rules

Field

Rule

First Name

Required

Last Name

Required

Phone Number

Must be exactly 10 numeric digits

Email

Must be valid email format

----------

## How to Add a New Field (Extensibility)

The form is generated dynamically using a configuration array and schema validation.

### Step 1 — Update Schema

Edit `user.schema.ts`

```ts  
dob: z.string().min(1, "This field is required")  
```

### Step 2 — Update Form Configuration

Edit `user-form.data.ts`

```ts  
{ name: "dob", label: "Date of Birth", type: "date", required: true }  
```

No component changes required.  
Form UI automatically renders the new field.

----------

## Mock API Setup

The project uses **json-server** as a mock backend.

Run:  
```bash  
yarn server  
```

Database file:  
db.json

Example endpoints:  
GET [http://localhost:4000/users](http://localhost:4000/users)  
POST [http://localhost:4000/users](http://localhost:4000/users)  
PUT [http://localhost:4000/users/:id](http://localhost:4000/users/:id)  
DELETE [http://localhost:4000/users/:id](http://localhost:4000/users/:id)

----------

## Assumptions / Design Decisions

-   Phone number must contain exactly 10 digits
    
-   Email must follow standard email format
    
-   Form built dynamically using configuration-driven approach for extensibility
    
-   Validation handled using React Hook Form + Zod
    
-   API calls separated into service layer for maintainability
    
-   Loading indicators added for better user experience
    
-   TypeScript used for type safety
    

----------

## Author

Jyoti Kumari Pradhan