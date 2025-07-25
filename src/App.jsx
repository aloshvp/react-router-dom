import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import AppLayout from './layout/appLayout';
import Home from './pages/Home';
import PostList from './pages/PostList';
import PostComments from './pages/PostComments';
import Header from './components/Header';
import Error from './components/Error';
import Login from './components/Login';
import SignUp from './components/SignUp';
import RequiredAuth from './components/RequiredAuth';
import Product from './pages/Product';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "auth",
        element: <Home />,
        children: [
          {
            path: "login",
            element: <Login />
          },
          {
            path: "signup",
            element: <SignUp />
          }
        ]
      },
      {
        path: "/post",
        element: (<RequiredAuth>
          <PostList />
        </RequiredAuth>)
      },
      {
        path: "/posts/:postId",
        element: <PostComments />
      },
      {
        path: "/product",
        element: <Product />
      }
    ]
  }
]);

function App() {

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

// Traditional way
// function App() {

//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route element={<Home />} index />
//         <Route element={<PostList />} path="/post" />
//         <Route element={<PostComments />} path="/posts/:postId" />
//       </Routes>
//     </BrowserRouter>
//   )
// }

export default App
