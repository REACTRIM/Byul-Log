import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/home";
import Layout from "./components/layout/layout";
import PostDetail from "./routes/post-detail";
import Profile from "./routes/profile";
import Search from "./routes/search";

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
      {
        path: "/:userId",
        element: <Profile />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

export default Router;
