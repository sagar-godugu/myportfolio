import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements, } from "react-router";
import './App.css'
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App
