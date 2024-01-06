import PortfolioPage from "./components/PortfolioPage";
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Home></Home>
    ),
  },
  {
    path: '/portfolio',
    element: (
      <PortfolioPage></PortfolioPage>
    ),
  }
]);

const App = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
