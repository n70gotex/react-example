import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import Mans from "../pages/publications/pages/mans";
import Search from "../pages/publications/pages/Search";
import Womans from "../pages/publications/pages/Womans";



export const routerdos =Routerdos([

    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children:[

        {
            path: "/Mans",
            element: <Mans />,
        },
        {
            path: "/Womans",
            element: <Womans />,
        },
        {
            path: "/buscar",
            element: <Search />,
        },

       ]

        
    },

]);