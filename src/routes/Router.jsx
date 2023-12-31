import { createBrowserRouter } from "react-router-dom";
import Management from "../layouts/Management";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default Router;
