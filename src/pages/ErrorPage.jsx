import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error.message.toLocaleString());
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#1c1c1c] text-white text-center p-4">
      <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />
      <h1 className="text-4xl font-bold  mb-2">
        Oops! Some Error Occured
      </h1>
      <p className="text-gray-300 mb-6">
        Error : { error&& error.message.toLocaleString()}
      </p>
      <Link
        to="/"
        className="px-6 py-2 text-whiterounded-lg hover:bg-gray-500 transition duration-300 bg-gray-400 border-1 border-white rounded-2xl"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
