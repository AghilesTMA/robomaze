import { Link } from "react-router";
import { FaGithub, FaRobot, FaSearch, FaRandom } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-6 text-center">
          <div className="flex justify-center mb-4">
            <FaRobot className="text-6xl text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">RoboMaze</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            An interactive maze pathfinding simulator featuring BFS, DFS, and A*
            algorithms
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/game">
              <button className="px-6 py-3 bg-blue-600 cursor-pointer text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg">
                Play Now
              </button>
            </Link>
            <a
              href="https://github.com/AghilesTMA/robomaze"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium text-lg flex items-center"
            >
              <FaGithub className="mr-2" /> Star on GitHub
            </a>
          </div>
        </div>

        {/* Project Information */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
            About the Project
          </h2>
          <p className="text-gray-700 mb-4">
            This website is an assignment for the Introduction to AI course
            taught by Professor Soumaia Lekhali. It demonstrates practical
            applications of fundamental AI search algorithms through an
            interactive maze solver.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
            Developers
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-gray-700">
              <span className="font-medium">Tamendjari Mohamed Aghilas</span>{" "}
              and <span className="font-medium">Kara Mortada</span> from Group
              1CS6
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
            Features
          </h3>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <FaSearch className="text-blue-600 mr-2" />
                <h4 className="font-semibold text-gray-800">
                  Random Maze Generation
                </h4>
              </div>
              <p className="text-gray-700">
                Create perfect mazes with guaranteed solutions using procedural
                generation
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <FaRandom className="text-green-600 mr-2" />
                <h4 className="font-semibold text-gray-800">
                  Multiple Algorithms
                </h4>
              </div>
              <p className="text-gray-700">
                Compare different pathfinding approaches: BFS, DFS, and A*
                algorithms
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <FaRobot className="text-red-600 mr-2" />
                <h4 className="font-semibold text-gray-800">
                  Visual Simulation
                </h4>
              </div>
              <p className="text-gray-700">
                Watch the algorithms in action with step-by-step visual
                representation
              </p>
            </div>
          </div>
        </div>

        {/* Algorithm Details */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
            Algorithm Overview
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Breadth-First Search (BFS)
            </h3>
            <p className="text-gray-700">
              BFS explores all neighboring cells at the present depth before
              moving to nodes at the next depth level. It guarantees the
              shortest path in unweighted graphs but may explore more cells than
              necessary.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Depth-First Search (DFS)
            </h3>
            <p className="text-gray-700">
              DFS explores as far as possible along each branch before
              backtracking. It's memory efficient but doesn't guarantee the
              shortest path.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              A* Algorithm
            </h3>
            <p className="text-gray-700">
              A* combines the advantages of Dijkstra's algorithm and greedy
              best-first search using heuristics. It finds the shortest path
              while exploring fewer nodes than BFS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;