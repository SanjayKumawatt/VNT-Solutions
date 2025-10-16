import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import Error404 from "./ErrorPage/ErrorPage";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import SeoServicePage from "./Pages/SeoServicePage";
import PpcServicePage from "./Pages/PpcServicePage";
import SocialMediaMarketingPage from "./Pages/SocialMediaMarketingPage";
import ContentMarketingPage from "./Pages/ContentMarketingPage";
import EmailMarketingPage from "./Pages/EmailMarketingPage";
import WebDesignPage from "./Pages/WebDesignPage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error404 />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about-us",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        }
        , {
          path: "services/seo",
          element: <SeoServicePage/>
        }
        , {
          path: "services/ppc",
          element: <PpcServicePage/>
        }
        , {
          path: "services/social-media-marketing",
          element: <SocialMediaMarketingPage/>
        }
        , {
          path: "services/content-marketing",
          element: <ContentMarketingPage/>
        }
        , {
          path: "services/email-marketing",
          element: <EmailMarketingPage/>
        }
        , {
          path: "services/web-design",
          element: <WebDesignPage/>
        }
      ]
    }
  ])



  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;