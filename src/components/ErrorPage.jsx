import { useRouteError } from "react-router-dom";
import notFound from '../assets/error.svg';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 ">
        <img src= {notFound} alt="error" className="mx-auto mb-4 w-72 h-72 object-contain" />
        <h1 className="text-4xl font-bold text-black mb-4">Oops!</h1>
        <p className="text-lg text-gray-700 mb-2">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-sm text-gray-500 italic">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
