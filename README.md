## Little Lemon Booking App

A React-based table reservation application for the fictional **Little Lemon** restaurant.

This project was built as part of the Meta Front-End Developer coursework and focuses on React fundamentals, routing, state management, accessibility, and testing.

---

## Features
- Table reservation form

- Dynamic available booking times

- Date-based time updates

- Form validation using native HTML validation

- Confirmation page after successful booking

- React Router navigation

- Reducer-based state management

- Responsive layout

- Unit and integration testing with Jest and React Testing Library

---

## Tech Stack

- React

- React Router

- JavaScript

- CSS

- Jest

- React Testing Library

- Create React App


---

  

## Project Structure

  

```txt

src/

│

├── api/

│ └── api.js

│

├── components/

│ ├── BookingForm/

│ ├── Main/

│ └── ...

│

├── pages/

│ ├── Home/

│ ├── Booking/

│ └── Confirmation/

│

├── App.js

└── index.js

  
```

---

  


## Available Scripts

In the project directory, you can run:

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm start
```

Runs the app in development mode.

Open:

```txt
http://localhost:3000
```

### Run tests

```bash
npm test
```

Launches the Jest test runner in interactive watch mode.

### Create production build

```bash
npm run build
```

Builds the app for production in the `build` folder.

---

## Booking Flow

1. User selects a date
2. Available times are fetched dynamically
3. User completes reservation details
4. Form validation is performed
5. Reservation is submitted
6. User is redirected to the confirmation page

---

## State Management

The project uses `useReducer` for handling available booking times.

Example:

```js
export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(new Date(action.payload));
    default:
      return state;
  }
}
```

---

## Testing

The application includes tests for:

- Component rendering
- Form validation
- User interactions
- Reducer behavior
- Booking submission flow

Testing libraries used:

- Jest
- React Testing Library

Example:

```js
expect(screen.getByLabelText(/date/i)).toBeRequired();
```

---

## Accessibility

The project includes accessibility best practices such as:

- Semantic HTML
- Associated labels for form controls
- Native form validation
- Keyboard-accessible interactions

---

## Learning Objectives

This project was used to practice:

- React component architecture
- State lifting
- Reducers
- Routing
- Controlled forms
- Testing strategies
- Accessibility
- Front-end project organization

---

## Author

Roberto Villanueva

Software Developer focused on React, TypeScript, testing, and modern frontend development.