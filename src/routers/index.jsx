import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import NotFound from "../pages/errors/NotFound";
import Galeria from "../pages/galeria/Galeria";
import Contacto from "../pages/contacto/Contacto";
import LayoutPaginas from "../layout/LayoutPaginas";
import Ejercicios from "../pages/paginas/Ejercicios";
import Notas from "../pages/paginas/Notas";
import Otras from "../pages/paginas/Otras";
import Ejercicio1 from "../pages/paginas/ejercicos/Ejercicio1";
import Ejercicio2 from "../pages/paginas/ejercicos/Ejercicio2";


export const router = createBrowserRouter([

    {
        index: true,
        element: <Login />,
    },

    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children:[

        {
            path: "/Home",
            element: <Home />,
        },
     
        {
            path: "/Galeria",
            element: <Galeria />,
        },
        {
            path: "/Sobre-mi",
            element: <Contacto />,
        },

       ]
    },

    {
        path: "/",
        element: <LayoutPaginas />,
        errorElement: <NotFound />,
        children:[
        {
            path: "/Ejercicios",
            element: <Ejercicios />,
        },
        {
            path: "/Notas",
            element: <Notas />,
        },
        {
            path: "/Otras",
            element: <Otras />,
        },
        {
            path: "/Ejercicio1",
            element: <Ejercicio1 />,
        },
        {
            path: "/Ejercicio2",
            element: <Ejercicio2 />,
        },



       ]
    },




    
]);