import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 flex flex-col items-center justify-center text-center px-6 py-20">
            <img
                src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg"
                alt="404 Illustration"
                className="w-70 max-w-sm md:max-w-md lg:max-w-lg mb-10 drop-shadow-xl"
            />
            <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-600 mb-4">
                Oops! Page Not Found
            </h1>
            <p className="text-gray-600 text-base md:text-lg mb-8 max-w-xl">
                Sorry, we couldn't find the page you were looking for. It might have been moved or deleted.
            </p>
            <Link to="/" className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 shadow-lg transition">
                Back to Home
            </Link>
        </div>
    );
};

export default Error;

