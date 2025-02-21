import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
      layout("./components/layout/mainlayout.tsx",[
            index("routes/home.tsx"),
            route("about","routes/about.tsx"),
            route("info","routes/info.tsx")
      ]),
      layout("./components/layout/authlayout.tsx",[
            route("log-in","routes/login.tsx"),
            route("register","routes/register.tsx")
      ]),

] satisfies RouteConfig;
