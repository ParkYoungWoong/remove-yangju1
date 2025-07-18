import { createBrowserRouter, RouterProvider } from 'react-router'
import Default from '@/routes/layouts/Default.jsx'
import Home from '@/routes/pages/Home.jsx'
import About from '@/routes/pages/About.jsx'
import Todos from '@/routes/pages/Todos.jsx'
import Movies from '@/routes/pages/Movies.jsx'
import SignIn from '@/routes/pages/SignIn.jsx'

const router = createBrowserRouter([
  {
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/signin',
        element: <SignIn />
      },
      {
        path: '/todos',
        element: <Todos />
      },
      {
        path: '/movies',
        element: <Movies />
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
