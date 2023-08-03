import { useRouteError } from 'react-router-dom'

export default function ErrorPages() {
  const error = useRouteError()
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col gap-2">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="text-md font-semibold">
        Sorry, an unexpected error has occured
      </p>
      <p className="text-red-600 font-semibold">
        {error.statusText || error.message}
      </p>
    </div>
  )
}
