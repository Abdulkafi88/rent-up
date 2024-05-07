import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import UserRouter from '@/components/UserRouter';
import HomePage from '@/pages/HomePage';
import ListingDetailsPage from '@/pages/ListingDetailsPage';
import ListingFavoritesPage from '@/pages/ListingFavoritesPage';
import NotFoundPage from '@/pages/NotFoundPage';
import SignInPage from '@/pages/SignInPage';

import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/signin',
        element: (
          <UserRouter>
            <SignInPage />
          </UserRouter>
        ),
      },
      {
        path: '/',
        element: (
          <UserRouter isProtected>
            <HomePage />
          </UserRouter>
        ),
      },
      {
        path: '/listings/:listingId',
        element: (
          <UserRouter isProtected>
            <ListingDetailsPage />
          </UserRouter>
        ),
      },
      {
        path: '/favorites',
        element: (
          <UserRouter isProtected>
            <ListingFavoritesPage />
          </UserRouter>
        ),
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;