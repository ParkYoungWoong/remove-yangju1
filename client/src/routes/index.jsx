import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Home page!</h1>
  },
  {
    path: '/about',
    element: <h1>About page!</h1>
  },
  {
    path: '/signin',
    element: <h1>Log In page!</h1>
  },
  {
    path: '/todos',
    element: <h1>Todos page!</h1>
  },
  {
    path: '/movies',
    element: <h1>Movies page!</h1>
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
