import React from 'react';
import SkillItem from "../components/SkillItem";
import {Route, Routes} from "react-router-dom";
import ReactSkill from "../components/myreactskillscomponents/ReactSkill";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHomeLgAlt} from "@fortawesome/free-solid-svg-icons";
import SkillIntro from "../components/myreactskillscomponents/SkillIntro";
import PythonSkill from "../components/myreactskillscomponents/PythonSkill";
import JavascriptSkill from "../components/myreactskillscomponents/JavascriptSkill";
import DjangoSkill from "../components/myreactskillscomponents/DjangoSkill";
import ProjectCard from "../components/ProjectCard";

function Home(props) {
    return (<>

            <section className="intro bg-gray-800 h-72 flex flex-col items-end justify-center text-white p-3 ">
                <div className={'md:w-2/3 flex flex-col justify-center gap-3 sm:text-center md:text-start'}>
                    <h1 className={'text-4xl'}> Hello I'm <b>Joseph Thomas</b></h1>
                    <p> I am a programming enthusiast and i'm aspiring to become a professional fullstack web
                        developer.</p>
                    <p> Currently I'm going in-depth in <b>Frontend Web Development</b> and i'm hoping to get a job as a
                        junior frontend developer </p>
                </div>
            </section>
            <section className={'skills my-4 p-4 bg-slate-600 text-white'}>
                <h1 className={'text-2xl font-extrabold text-center p-4 bg-slate-700 shadow shadow-md shadow-black'}
                    id={'skill'}>Skills</h1>
                <div className={'grid mt-5 gap-5'}>
                    <div
                        className="max-h-fit bg-transparent text-white flex  md:flex-col p-3 md:justify-center md:p-4 text-center shadow shadow-md shadow-black  overflow-y-hidden ">
                        <SkillItem to={'/'}><FontAwesomeIcon icon={faHomeLgAlt}/></SkillItem>
                        <SkillItem to={'react'}> React.js</SkillItem>
                        <SkillItem to={'javascript'}> javascript</SkillItem>
                        <SkillItem to={'django'}> Django</SkillItem>
                        <SkillItem to={'python'}> Python</SkillItem>
                    </div>
                    <div className="max-h-fit bg-slate-700 text-white shadow shadow-md shadow-black ">
                        <Routes>
                            <Route path={''} element={<SkillIntro/>}></Route>
                            <Route path={'react'} element={<ReactSkill/>}></Route>
                            <Route path={'javascript'} element={<JavascriptSkill/>}></Route>
                            <Route path={'django'} element={<DjangoSkill/>}></Route>
                            <Route path={'python'} element={<PythonSkill/>}></Route>
                        </Routes>
                    </div>
                </div>

            </section>
            <section className={'my-4 py-4 bg-gray-700 text-center '}>
                <h1 className={"p-4 bg-gray-500 text-white shadow shadow-md shadow-black text-2xl font-extrabold"}> Education </h1>

                <p className={'text-white w-3/4 md:w-1/2 mx-auto p-2'}> I am a student of the University of Benin. My
                    major is Statistics, I got admitted to the 2016/2017
                    academic session, I'm suppose to be a graduate by now , but due to the numerous academic strikes
                    with an indefinite strike currently ongoing i'm still not a graduate yet </p>
            </section>
            <section className={'project-intro bg-gray-800 justify-center items-center p-4 mb-2'}>

                <h2 className={"text-2xl font-extrabold text-center p-4 bg-slate-700 shadow shadow-md shadow-black text-white"}
                    id={"projects"}>Projects</h2>

                <p className={'text-center mx-auto text-white text-center font-extralight font-mono md:w-3/5 mix-blend-difference p-4'}>
                    Below are the various project of which i have worked on and completed
                </p>

                <div className={'projects grid md:grid-cols-3 md:grid-rows-2  gap-2 '}>

                    <ProjectCard projectName={'JojoProject'}
                                 projectDescription={'This is one of the first project i completed, JojoProject is a fullstack project\n' +
                                     '                            implementing CRUD, this was solely built using Django , in this project only people with\n' +
                                     '                            admin\n' +
                                     '                            access can make a blogpost,\n' +
                                     '                            i also built in authentication, so only authenticated users can view post'}
                                 usedTechnologies={'Django'}
                                 projectLink={'https://jojopage.herokuapp.com'}
                                 githubLink={"https://github.com/jojothomas1515/JojoProject"}

                    />
                    <ProjectCard projectName={'JojoFrontend'}
                                 projectDescription={'This project is a remake of my first project as an SPA , ' +
                                     'here I used jwt authentication with an api i made using DRF( Django Rest Framework), it saves the token using localstorage, the Web App implement CRUD ' +
                                     'fetching posts from the api when the dom loads, it has got more features'}
                                 usedTechnologies={'React.js'}
                                 projectLink={'https://jojoreact.herokuapp.com'}
                                 githubLink={"https://github.com/jojothomas1515/JojoFrontend "}

                    />
                    <ProjectCard projectName={'JojoProject'}
                                 projectDescription={'This is one of the first project i completed, JojoProject is a fullstack project\n' +
                                     '                            implementing CRUD, this was solely built using Django , in this project only people with\n' +
                                     '                            admin\n' +
                                     '                            access can make a blogpost,\n' +
                                     '                            i also built in authentication, so only authenticated users can view post'}
                                 usedTechnologies={'Django'}
                                 projectLink={'https://jojoreact.herokuapp.com'}
                                 githubLink={"https://github.com/jojothomas1515/JojoFrontend"}

                    />

                </div>
            </section>

        </>
    );
}

export default Home;
