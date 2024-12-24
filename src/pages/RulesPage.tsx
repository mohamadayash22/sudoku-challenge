export const RulesPage = () => {
  return (
    <div className="container">
      <section className="mb-8">
        <h1 className="mb-4 text-4xl font-bold text-slate-900">Sudoku Rules</h1>
        <div className="mt-6">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            What is Sudoku and what are the rules of this game?
          </h2>
          <p className="text-gray-700">
            Sudoku is a popular logic puzzle with numbers. Its rules are quite simple, so
            even beginners can handle the simple levels.
          </p>
        </div>
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          What are the basic rules of Sudoku?
        </h2>
        <ul className="list-inside list-disc space-y-2 text-gray-700">
          <li>Sudoku grid consists of 9x9 spaces.</li>
          <li>You can use only numbers from 1 to 9.</li>
          <li>Each 3×3 block can only contain numbers from 1 to 9.</li>
          <li>Each vertical column can only contain numbers from 1 to 9.</li>
          <li>Each horizontal row can only contain numbers from 1 to 9.</li>
          <li>
            Each number in the 3×3 block, vertical column or horizontal row can be used
            only once.
          </li>
          <li>
            The game is over when the whole Sudoku grid is correctly filled with numbers.
          </li>
        </ul>
        <div className="mt-6 w-3/4 space-y-4">
          <p className="text-gray-700">
            There are already many numbers filled in on the grid in the simple Sudoku
            puzzles. Therefore it’s not so difficult to cope with the solution if you are
            familiar with the basic rules. However, in order to solve difficult levels and
            deal with them quickly, you need to use some tricks and learn advanced Sudoku
            techniques.
          </p>
          <p className="text-gray-700">
            Our Sudoku guide has a lot of tutorial videos for players of all skill levels:
            from Sudoku absolute beginners to experts. Watch the videos to check out all
            the rules, tips and strategies of Sudoku and enjoy the game!
          </p>
        </div>
      </section>
    </div>
  );
};

export default RulesPage;
