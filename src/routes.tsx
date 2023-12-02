import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/App';
import Artist from './pages/Artist';
import Album from './pages/Album';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/artist/:id", 
    element: <Artist/>
  },
  {
    path: "/album/:id",
    element: <Album/>
  }

])

const Routes = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default Routes;