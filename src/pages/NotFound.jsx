import React from 'react'
import {FaHome} from "react-icons/fa"
import {Link} from "react-router-dom"

function NotFound() {
  return (
    <div className="hero-content text-center">
      <div>
            <div className="text-6xl m-4">Page not found</div> 
            <Link to="/" className="btn btn-primary m-4">
              <FaHome className="mr-2" />
                Back Home
              
            </Link>
            </div>
    </div>
  )
}

export default NotFound