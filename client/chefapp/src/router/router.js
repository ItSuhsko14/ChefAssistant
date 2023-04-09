import { createBrowserRouter } from 'react-router-dom';
import AllCards from '../pages/AllCards/AllCards.js'
import Login from '../pages/Login/Login.js'
import ErrorPage from '../pages/Error/ErrorPage.js'
import Registration from '../pages/Registration/Registration.js'
import Navbar from '../pages/Navbar/Navbar.js'
import Card from '../pages/Card/Card.js';
import AddCard from '../pages/Card/AddCard.js';
import OneCard from '../pages/OneCard/OneCard.js';
import EditCard from '../pages/Card/EditCard.js';
import { Training } from '../pages/training/training.js';
import { Home } from '../pages/Home/home';
import Root from './root.jsx'
import Todo from '../pages/todo/Todo.js';

export const router = createBrowserRouter([
      {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <AllCards />,
            errorElement: <ErrorPage />
          },
          {
            path: "login",
            element: <Login />,
            errorElement: <ErrorPage />
          },
          {
            path: "/getAll",
            element: <AllCards />,
            errorElement: <ErrorPage />
          },
          {
            path: "/registration",
            element: <Registration />,
            errorElement: <ErrorPage />
          },
          {
            path: "navbar",
            element: <Navbar />,
            errorElement: <ErrorPage />
          },
          {
            path: "/Card/:id",
            element: <Card />,
            errorElement: <ErrorPage />
          },
          {
            path: "/onecard/:id",
            element: <OneCard />,
            errorElement: <ErrorPage />
          },
          {
            path: "training",
            element: <Training />,
            errorElement: <ErrorPage />
          },
          {
            path: "addCard",
            element: <AddCard />,
            errorElement: <ErrorPage />
          },
          {
            path: "/addCard/:id/",
            element: <AddCard />,
            errorElement: <ErrorPage />
          },
          {
            path: "/todo",
            element: <Todo />,
            errorElement: <ErrorPage />
          },
        ]
      }
  ])