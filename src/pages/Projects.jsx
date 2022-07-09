import React from 'react';

function Projects(props) {
    return (
        <>
            <section className={'project-intro bg-gray-800 h-72 flex justify-center items-center p-4 mb-2'}>
                <p className={'text-4xl text-white text-center font-extralight font-mono md:w-3/5 mix-blend-difference p-4'}>

                    Below are the various project which i have worked on and completed

                </p>
            </section>
            <section className={'projects grid md:grid-cols-3 md:grid-rows-2  gap-2 '}>
                <div className={'JojoProject flex p-3 bg-gray-400 shadow shadow-black'}>
                    <div>
                        <h1 className={"text-2xl font-bold font-serif"}>JojoProject</h1>
                        <p className={'text-sm'}>This is one of the first project i completed, JojoProject is a fullstack project
                            implementing CRUD, this was solely built using Django , in this project only people with
                            admin
                            access can make a blogpost,
                            i also built in authentication, so only authenticated users can view post
                        </p>

                        <i className={'italic text-gray-900'}>Technologies used</i>
                        <p className={'text-2xl'}> Django</p>
                        <div className="flex justify-between"><a href="https://jojopage.herokuapp.com" className={'underline underline-offset-8 hover:text-green-800'} target={"blank"}>View Site</a><a
                            href="https://github.com/jojothomas1515/JojoProject" className={'underline underline-offset-8 hover:text-green-800'} target={'blank'}>View Code</a></div>
                    </div>
                </div><div className={' flex p-3 bg-gray-400 shadow shadow-black'}>
                <div>
                    <h1 className={"text-2xl font-bold font-serif"}>JojoProject</h1>
                    <p className={'text-sm'}>This is one of the first project i completed, JojoProject is a fullstack project
                        implementing CRUD, this was solely built using Django , in this project only people with
                        admin
                        access can make a blogpost,
                        i also built in authentication, so only authenticated users can view post
                    </p>

                    <i className={'italic text-gray-900'}>Technologies used</i>
                    <p className={'text-2xl'}> Django</p>
                    <div className="flex justify-between"><a href="https://jojopage.herokuapp.com" className={'underline underline-offset-8 hover:text-green-800'} target={"blank"}>View Site</a><a
                        href="https://github.com/jojothomas1515/JojoProject" className={'underline underline-offset-8 hover:text-green-800'} target={'blank'}>View Code</a></div>
                </div>
                </div>
                <div className={' flex p-3 bg-gray-400 shadow shadow-black'}>
                    <div>
                        <h1 className={"text-2xl font-bold font-serif"}>JojoProject</h1>
                        <p className={'text-sm'}>This is one of the first project i completed, JojoProject is a fullstack project
                            implementing CRUD, this was solely built using Django , in this project only people with
                            admin
                            access can make a blogpost,
                            i also built in authentication, so only authenticated users can view post
                        </p>

                        <i className={'italic text-gray-900'}>Technologies used</i>
                        <p className={'text-2xl'}> Django</p>
                        <div className="flex justify-between"><a href="https://jojopage.herokuapp.com" className={'underline underline-offset-8 hover:text-green-800'} target={"blank"}>View Site</a><a
                            href="https://github.com/jojothomas1515/JojoProject" className={'underline underline-offset-8 hover:text-green-800'} target={'blank'}>View Code</a></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;
