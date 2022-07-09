import React from 'react';
import PropTypes from 'prop-types';

SkillComp.propTypes= {
    imgBg :PropTypes.string,
    children:PropTypes.string
}
function SkillComp({imgSrc, imgBg, children}) {
    return (
        <div className={'flex flex-col items-center gap-5 pt-2 md:flex-row'}>
            <div className={'h-72 flex item-center p-3'}>
                <img className={`h-full object-contain aspect-square ${imgBg} rounded  shadow shadow-black p-4`}
                     src={imgSrc}/>
            </div>
            <div className="pb-5">
                {children}
            </div>
        </div>
    );
}

export default SkillComp;

