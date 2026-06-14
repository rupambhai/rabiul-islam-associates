import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";
import { PageLoader } from "@/components/PageLoader";

// Pages are code-split so each route ships only what it needs.
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const PracticeAreas = lazy(() => import("@/pages/PracticeAreas"));
const PracticeAreaDetail = lazy(() => import("@/pages/PracticeAreaDetail"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));

/** Wrap lazy pages in a Suspense boundary with a quiet fallback. */
const withSuspense = (element: React.ReactNode) => (
  <Suspense fallback={<PageLoader />}>{element}</Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: withSuspense(<Home />) },
      { path: "about", element: withSuspense(<About />) },
      { path: "practice-areas", element: withSuspense(<PracticeAreas />) },
      {
        path: "practice-areas/:slug",
        element: withSuspense(<PracticeAreaDetail />),
      },
      { path: "contact", element: withSuspense(<Contact />) },
      { path: "*", element: withSuspense(<NotFound />) },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
