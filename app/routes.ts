import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./components/layout/mainlayout.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("info", "routes/info.tsx"),
  ]),
  layout("./components/layout/authlayout.tsx", [
    route("log-in", "routes/login.tsx"),
    route("register", "routes/register.tsx"),
  ]),
  ...prefix("cart", [index("routes/protectroute.tsx")]),
] satisfies RouteConfig;
