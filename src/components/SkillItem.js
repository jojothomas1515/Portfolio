import React from 'react';
import {Link, useMatch, useResolvedPath} from "react-router-dom";

function SkillItem({to, children}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: `${resolvedPath.pathname}` , end: true})

    return (
        <Link to={to} className={`h-10 p-2  ${isActive ? 'bg-gray-900 text-white':'bg-slate-300 text-black'} transition-colors duration-500 m-2 `}>{children}</Link>
    );
}

export default SkillItem;
