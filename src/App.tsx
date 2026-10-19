import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import ErrorPage from "./routes/Error";
import NotFound from "./routes/NotFound";
import { lazy, Suspense } from "react";
import Loading from "./routes/Loading";
import MorePortfolio from "./routes/portfolio/more";
import Blog from "./routes/blog";
import BlogPost from "./routes/blog/more";
const Root = lazy(() => import("./routes"));

/**
 * The main app component. It creates a router and wraps it with the RouterProvider from react-router-dom.
 */
function App() {
  /**
   * The router definition. In this case, it just has one route: the root route.
   */
  const router = createBrowserRouter([
    {
      path: "/",
      /**
       * The element to render when the route is matched.
       */
      element: (
        <Suspense fallback={<Loading />}>
          <Root />
        </Suspense>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/portfolio",
          element: <MorePortfolio />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/blog/:slug",
          element: <BlogPost />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  /**
   * The App component just renders the RouterProvider with the router.
   */
  return <RouterProvider router={router} />;
}

export default App;
