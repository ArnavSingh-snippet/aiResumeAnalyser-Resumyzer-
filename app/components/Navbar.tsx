import React from 'react'
import { Link } from 'react-router';
import { usePuterStore } from '~/lib/puter';

const Navbar = () => {
  const { auth } = usePuterStore();
  return (
    <nav className="navbar">
      <Link to ="/">
      <p className="text-2xl font-bold text-gradient">Resumyzer</p>
      </Link>
      <div className="flex gap-4">
        {!auth.isAuthenticated && (
          <Link to="/auth?next=/upload" className="primary-button w-fit">
            Sign In
          </Link>
        )}
        <Link to="/upload" className="primary-button w-fit">
          Upload Resume
        </Link>
      </div>
    </nav>
  )
}

export default Navbar