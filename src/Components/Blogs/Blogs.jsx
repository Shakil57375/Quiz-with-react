const Blogs = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <h2 className="font-Montserrat text-2xl font-bold px-6 py-4 bg-gradient-to-r from-green-400 to-green-600 text-white">
            1. What is the purpose of the useState hook in React?
          </h2>
          <div className="p-6">
            <p className="text-gray-800 font-Poppins">
              <span className="font-bold text-xl">Answer:</span> Access tokens
              are The useState hook is used in React to add state to functional
              components. It allows you to declare state variables and provides
              a function to update them.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <h2 className="font-Montserrat text-2xl font-bold px-6 py-4 bg-gradient-to-r from-green-400 to-green-600 text-white">
            2. Explain the concept of closures in JavaScript
          </h2>
          <div className="p-6">
            <p className="text-gray-800 font-Poppins">
              <span className="font-bold text-xl">Answer:</span> Closures in
              JavaScript refer to the ability of a function to retain access to
              variables from its outer (enclosing) scope, even after the outer
              function has finished execution.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <h2 className="font-Montserrat text-2xl font-bold px-6 py-4 bg-gradient-to-r from-green-400 to-green-600 text-white">
            3. What is the key difference between let, const, and var in
            JavaScript for declaring variables?
          </h2>
          <div className="p-6">
            <p className="text-gray-800 font-Poppins">
              <span className="font-bold text-xl">Answer:</span> let and const
              are block-scoped, while var is function-scoped. const is used for
              constant values that cannot be reassigned, while let allows
              variable reassignment.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <h2 className="font-Montserrat text-2xl font-bold px-6 py-4 bg-gradient-to-r from-green-400 to-green-600 text-white">
            4. How does the CSS Box Model work?
          </h2>
          <div className="p-6">
            <p className="text-gray-800 font-Poppins">
              <span className="font-bold text-xl">Answer:</span> The CSS Box
              Model describes the layout of elements on a web page. It consists
              of content, padding, border, and margin. The total width and
              height of an element are calculated by adding these components.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <h2 className="font-Montserrat text-2xl font-bold px-6 py-4 bg-gradient-to-r from-green-400 to-green-600 text-white">
            5. What is the purpose of the map function in JavaScript?
          </h2>
          <div className="p-6">
            <p className="text-gray-800 font-Poppins">
              <span className="font-bold text-xl">Answer:</span> The map
              function is used to iterate over an array and transform each
              element using a provided function. It returns a new array with the
              transformed elements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
