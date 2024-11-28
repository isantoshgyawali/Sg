import { RouteObject } from "react-router-dom";
import Home from "./Home";
import Projects from "../components/projects"
import ReadLogs from "../components/readLogs"

const routes: RouteObject[] = [
    {path: '/', element: <Home/>},
    {path: '/projects', element: <Projects/>},
    {path: '/readLogs', element: <ReadLogs/>},
]

export default routes;
