import React, {useEffect, useRef} from 'react';
import LinkButton from "./LinkButton";
import {Link} from "react-router-dom";

function Navbar(props) {
    const NavbarRef = useRef(null)

    useEffect(()=>{
        window.onscroll = () =>{

            if (window.scrollY >= 80){
                NavbarRef.current.style.opacity =.5
            }
            else {NavbarRef.current.style.opacity = 1};
        }
    })

    return (
        <div className={ 'navbar flex justify-between align-items-center p-4 bg-black sticky top-0 transition transition-opacity duration-200'} ref={NavbarRef}>
            <Link to={""}><h1 className={'text-white text-2xl font-bold font-serif'}>Jojo Thomas</h1></Link>

            <nav>
                <ul className={'inline-flex gap-3'}>
                    <LinkButton to={"Project"}>Project</LinkButton>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
