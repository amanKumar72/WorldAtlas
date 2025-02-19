import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  const error=useRouteError()
  console.log(error)
  return (  
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
    <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />
    <h1 className="text-4xl font-bold text-gray-800 mb-2">Oops! Page Not Found</h1>
    <p className="text-gray-600 mb-6">The page you are looking for doesn&apos;t exist.</p>
    <Link
      to="/"
      className="px-6 py-2 text-whiterounded-lg hover:bg-blue-700 transition duration-300 bg-[#363636] border-1 border-white rounded-2xl"
    >
      Go Back Home
    </Link>
  </div>
  )
}

export default ErrorPage
