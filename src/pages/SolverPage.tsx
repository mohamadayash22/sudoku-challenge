import { SudokuSolver } from "@/components";

export const SolverPage = () => {
  return (
    <div>
      <SudokuSolver />
      <div className="mb-12 mt-20 space-y-12">
        <section>
          <h1 className="mb-2 text-4xl font-bold text-slate-900">
            Introducing Sudoku Solver
          </h1>
          <p className="mb-4 text-gray-700">
            Every Sudoku player has ever got stuck on the same puzzle for hours. If you
            are tired of looking at an unfinished Sudoku puzzle without ideas how to
            proceed, our Sudoku Solver can help you! The Sudoku Solver tool lets you find
            a solution for every, even the most challenging puzzle with ease.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            How Sudoku Solver Works
          </h2>
          <p className="mb-4 text-gray-700">
            Our Sudoku Solver tool is a powerful calculator that uses cutting-edge
            algorithms to solve any Sudoku puzzle quickly and accurately. If you don't
            know what number to put in, just enter the numbers you have already filled in
            the cells of the Sudoku grid. The Solver will provide you with the right
            solutions in seconds. Sudoku Solver allows you to save time and finish any
            game without stress by taking the guesswork out of puzzle-solving.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            What You Get from Sudoku Solver
          </h2>
          <p className="mb-4 text-gray-700">
            Get all the benefits of using our Sudoku Solver:
          </p>
          <ul className="mb-4 list-inside list-disc space-y-2 text-gray-700">
            <li>Solve Sudoku puzzles faster and more successfully</li>
            <li>Check yourself if you are not sure about the Sudoku solution</li>
            <li>Master your skills and gain confidence in Sudoku-solving</li>
            <li>Save your time finding the correct Sudoku solutions</li>
          </ul>
        </section>
        <section>
          <h2 className="mb-2 text-2xl font-bold text-slate-900">Don't Spoil Your Fun</h2>
          <p className="mb-4 text-gray-700">
            Although our tool allows you to solve any Sudoku puzzle, we encourage you
            enjoy solving Sudoku on your own. We created the Sudoku Solver to be used
            primarily as a learning tool, not a spoiler. Improve your own Sudoku skills
            and have fun solving puzzles on your own more efficiently.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            Find Sudoku Solutions Quickly and Easily
          </h2>
          <p className="mb-4 text-gray-700">
            Whether you're a beginner or an advanced Sudoku player, our Sudoku Solver will
            definitely help improve your skills and solve the more challenging puzzles
            then you have ever solved before. If you get stucked, with our Sudoku
            calculator you'll have access to accurate Sudoku solutions and answers
            anytime! Ready to start solving Sudoku puzzles like a pro? Try our Sudoku
            Solver tool and see how it can help you take your puzzle-solving skills to the
            next level!
          </p>
        </section>
      </div>
    </div>
  );
};
