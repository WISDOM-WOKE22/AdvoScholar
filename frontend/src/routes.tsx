import { lazy, Suspense } from "react";
import { type RouteObject } from "react-router-dom";

const Index = lazy(() => import("@/pages/index"));
const Notfound = lazy(() => import("@/pages/404"));
const Login = lazy(() => import("@/pages/auth/login"))

export const routes: Array<RouteObject> = [
  {
    index: true,
    element: (
      <Suspense>
        <Index />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense>
        <Notfound />
      </Suspense>
    ),
  },
  
];

export default routes;
