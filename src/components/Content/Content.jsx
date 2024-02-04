import React, { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home/Home';
import Layout from '../../layouts/Layout';
const myRoutes = [
    {
        path: '/', element: <Layout />, children: [
            { path: '', element: <Home /> },
            // { path: '*', element: <NotFound /> }
        ]
    }
];


function Content() {
    return (

        <Routes>
            {myRoutes.map(route => (
                <Route key={route.path} path={route.path} element={route.element}>
                    {route.children.map(child => (
                        <Route key={child.path} path={child.path} element={child.element} />
                    ))}
                </Route>
            ))}
        </Routes>
    )
}

export default Content