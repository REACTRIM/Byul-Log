import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/home";
import Layout from "./components/layout/layout";
import PostDetail from "./routes/post-detail";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "trending",
        element: <Home />,
        children: [
          {
            path: "day",
            element: <Home />,
          },
          {
            path: "week",
            element: <Home />,
          },
        ],
      },
      {
        path: "recent",
        element: <Home />,
      },
      {
        path: "feed",
        element: <Home />,
      },
      {
        path: "/:userId/:postTitle",
        element: <PostDetail />,
      },
    ],
  },
]);

export default Router;
