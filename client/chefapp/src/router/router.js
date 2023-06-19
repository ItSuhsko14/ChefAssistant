import { createBrowserRouter } from 'react-router-dom';
import AllCards from '../pages/AllCards/AllCards.js'
import Login from '../pages/Login/Login.js'
import ErrorPage from '../pages/Error/ErrorPage.js'
import Registration from '../pages/Registration/Registration.js'
import Navbar from '../pages/Navbar/Navbar.js'
import Card from '../pages/Card/Card.js';
import AddCard from '../pages/Card/AddCard.js';
import Root from './root.jsx'
import { DynamicCardBreadcrumb } from '../router/DynamicCardBreadcrumb.js'


export const router = createBrowserRouter([
      {
        path: "/",
        basename: "/ChefAssistant",
        element: <Root />,
        exact: true,
        errorElement: <ErrorPage />,
        breadcrumb: "Home",
        children: [
          {
            path: "ChefAssistant/",
            element: <AllCards />,
            errorElement: <ErrorPage />,
            breadcrumb: "All cards"
          },
          {
            path: "login",
            element: <Login />,
            errorElement: <ErrorPage />,
            breadcrumb: "Login"
          },
          {
            path: "/getAll",
            element: <AllCards />,
            errorElement: <ErrorPage />,
            breadcrumb: "All cards"
          },
          {
            path: "/registration",
            element: <Registration />,
            errorElement: <ErrorPage />,
            breadcrumb: "Registration"
          },
          {
            path: "navbar",
            element: <Navbar />,
            errorElement: <ErrorPage />
          },
          {
            path: "/Card/:id",
            element: <Card />,
            errorElement: <ErrorPage />,
            breadcrumb: DynamicCardBreadcrumb
          },
          {
            path: "addCard",
            element: <AddCard />,
            errorElement: <ErrorPage />,
            breadcrumb: "Add card"
          },
          {
            path: "/addCard/:id/",
            element: <AddCard />,
            errorElement: <ErrorPage />
          },
        ]
      }
  ])

  console.log(router.routes);