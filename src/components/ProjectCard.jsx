import React from 'react';

function ProjectCard({projectName, projectDescription, usedTechnologies, projectLink, githubLink}) {
    return (
        <div className={'JojoProject flex p-3 bg-gray-400 shadow shadow-black'}>
            <div className={'flex flex-col justify-between'}>
                <div>
                    <h1 className={"text-2xl font-bold font-serif mb-2"}>{projectName}</h1>
                    <p className={'text-sm mb-2'}>{projectDescription}
                    </p>
                </div>

                <div>
                    <i className={'italic text-gray-900 underline'}>Used Languages/Framework</i>
                    <p className={'text-2xl mb-2'}> {usedTechnologies}</p>
                    <div className="flex justify-between"><a href={`${projectLink}`}
                                                             className={'underline underline-offset-8 hover:text-green-800'}
                                                             target={"blank"}>View Site</a><a
                        href={`${githubLink}`} className={'underline underline-offset-8 hover:text-green-800'}
                        target={'blank'}>View Code</a></div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
