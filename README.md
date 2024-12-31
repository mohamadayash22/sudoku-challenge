# Sudoku Game

A Sudoku game built with React and TypeScript, offering multiple difficulty levels, a user-friendly interface, and puzzle-solving tools.

## Demo

Check out the live demo: <a href="https://sudoku-challenge-three.vercel.app/" target="_blank">Sudoku Game Demo</a>

## Features

- **Multiple Difficulty Levels:** Easy, Medium, and Hard
- **Timer:** Track your solving time
- **Hint System:** Get hints to assist in solving puzzles
- **Mistake Checking:** Validate your solution and highlight mistakes
- **Sudoku Generator:** Generate new sudoku puzzles with unique solutions
- **Manual Solver:** Input an incomplete Sudoku board and solve it

## Project Structure

```
src/
├── components/       # Contains all the React components used in the application
├── hooks/            # Custom hooks for reusable logic
├── lib/              # Business logic and algorithms
├── pages/            # Page components for different routes
├── state/            # Redux state management
├── utils/            # Utility functions for UI and other helpers
├── App.tsx           # Main application component
├── index.css         # Global CSS styles
├── main.tsx          # Entry point of the application
```

## Getting Started

1. Clone the repository: `git clone https://github.com/mohamadayash22/sudoku-challenge`
2. Navigate to the project directory: `cd sudoku-challenge`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open the browser and navigate to `http://localhost:5173` to view the application.

## Technologies Used

- **React** for building user interface
- **Typescript** for type safety
- **Redux** for state management
- **Tailwind CSS** for styling
