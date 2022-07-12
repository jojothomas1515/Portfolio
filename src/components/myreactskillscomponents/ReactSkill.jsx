import React from 'react';
import SkillComp from "../SkillComp";

function ReactSkill(props) {
    return (


            <>
                <SkillComp imgBg={'bg-black'} imgSrc={require('../../images/Reacticon.png')} alt={'React.js Logo'}>
                    <p className="text-xl "><b>React.js</b> is a frontend web library(some people it a framework) , use to
                        make SPA web apps </p>
                    <p> It is main technology used on the creation of this portfolio website</p>
                </SkillComp>
            </>

    );
}

export default ReactSkill;
