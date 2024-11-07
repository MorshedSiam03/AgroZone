import React from 'react'

function ErrorPage() {
  return (
    <>
      <div className="text-center py-28">
            <IoIosWarning className="text-8xl text-red-600 mx-auto" />
            <h2 className="text-5xl font-bold text-red-600 mt-4">Oops! 404</h2>
            <p className="text-2xl text-gray-700 mt-4">Sorry, the page you are looking for does not exist.</p>
            <p className="text-xl text-gray-500 mt-2">Please check the URL or return to the homepage.</p>
            <Link to="/" className="text-blue-500 hover:underline mt-6 inline-block text-lg">
                Go Back Home
            </Link>
        </div>
    </>
  )
}

export default ErrorPage
