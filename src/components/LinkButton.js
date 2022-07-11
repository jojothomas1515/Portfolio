import React from 'react';
import {Link, useMatch, useResolvedPath} from "react-router-dom";

function LinkButton({children, to, useHref}) {
    const resolvedPath = useResolvedPath('project')
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (

        useHref === false ? <Link to={to}
                                  className={`inline-block p-2 rounded hover:shadow-md hover:scale-105 transition-shadow transition-transform duration-200 ${isActive ? "bg-gray-600 hover:shadow-gray-400" : "bg-gray-400 hover:shadow-gray-600"}`}>{children}</Link> :
            <a href={to}
                  className={`inline-block p-2 rounded hover:shadow-md hover:scale-105 transition-shadow transition-transform duration-200 ${isActive ? "bg-gray-600 hover:shadow-gray-400" : "bg-gray-400 hover:shadow-gray-600"}`}>{children}</a>
    );
}

export default LinkButton;
