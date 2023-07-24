import { Fragment } from 'react'
import { Link } from 'react-router-dom'

const AuthLayout = ({ title, children }) => {
  return (
    <Fragment>
      <div className=" h-screen w-full flex justify-center gap-2 items-center  bg-slate-100">
        <div className="w-full max-w-xs ">
          <h2 className="text-blue-600 font-bold text-3xl mb-2">{title}</h2>
          <p className="font-md text-slate-500 mb-8">
            Welcome Please enter for your detail's
          </p>
          {children}
          {title === 'Login' ? (
            <p className=" text-sm mt-3 text-center">
              Don't have an acoun't?{' '}
              <Link to="/register" className="font-bold text-blue-600">
                Sign Up
              </Link>
            </p>
          ) : (
            <p className=" text-sm mt-3 text-center">
              Have an acoun't?{' '}
              <Link to="/login" className="font-bold text-blue-600">
                Login
              </Link>
            </p>
          )}
        </div>
      </div>
    </Fragment>
  )
}

export default AuthLayout
