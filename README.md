# React Portfolio Platform

A responsive personal portfolio application built with React and Vite.

This application allows users to view projects, add new projects, and search for projects by title.

## Features

- Display an initial list of projects
- Add new projects using a form
- Prevent empty or whitespace-only project submissions
- Search and filter projects by title
- Case-insensitive search functionality
- Responsive design for desktop and mobile devices

## Technologies Used

- React
- JavaScript
- Vite
- CSS
- Vitest
- React Testing Library

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:a-gbatie/React-Portfolio-Platform.git
   ```

2. Navigate into the project directory:

   ```bash
   cd React-Portfolio-Platform
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## Running Tests

To run the automated tests:

```bash
npm test -- --run
```

To check for code errors:

```bash
npm run lint
```

To create a production build:

```bash
npm run build
```

## Project Structure

```text
src/
├── components/
│   ├── ProjectCard.jsx
│   ├── ProjectForm.jsx
│   ├── ProjectList.jsx
│   └── SearchBar.jsx
├── __tests__/
│   └── App.test.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## How It Works

### Viewing Projects

When the application loads, users can see a list of existing projects. Each project displays a title and description.

### Adding Projects

Users can enter a project title and description in the form and click the **Add** button.

The new project is immediately displayed in the project list.

### Searching Projects

Users can type into the search bar to filter projects by title.

The search is case-insensitive, so searching for `weather` will match `Weather App`.

### Form Validation

The application prevents users from submitting projects with empty or whitespace-only titles or descriptions.

## Testing

The application includes automated tests using Vitest and React Testing Library.

The tests verify:

1. Initial projects render correctly.
2. Users can add new projects.
3. Whitespace-only submissions are rejected.
4. Projects are filtered correctly by title.

## Author

a-gbatie