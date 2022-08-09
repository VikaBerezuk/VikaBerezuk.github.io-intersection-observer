import React, {useState} from 'react';
import reactSvg from './svg/reactSvg.svg';
import fileSvg from './svg/file.svg';
import nodeSvg from './svg/node.svg';
import puzzleSvg from './svg/puzzle.svg';
import terminalSvg from './svg/terminal.svg';
import {useOnScreen} from "./hooks/useOnScreen";

const Possibility = () => {
    const [refTitle, visibleTitle] = useOnScreen({threshold: 1})
    const [refUpgrade, visibleUpgrade] = useOnScreen({threshold: 0.3});
    const [refHardSkills, visibleHardSkills] = useOnScreen({threshold: 0.5})
    const [upgrade, setUpgrade] = useState(true);
    const [hardSkills, setHardSkills] = useState(true);
    function openUpgrade() {
        setUpgrade(true);
        setHardSkills(false);
    }
    function openHardSkills() {
        setUpgrade(false);
        setHardSkills(true);
    }

    return (
        <section className='bg-black text-white mx-7 rounded-2xl'>
            <div className='max-w-screen-xl m-auto'>
                <div ref={refTitle} style={{opacity: visibleTitle ? 1 : 0, transitionDelay: visibleTitle ? '1s' : '0s'}}
                     className='sticky top-0 lg:top-16 z-1'>
                    <h2 className='font-bold  text-center text-2xl pt-10'>Что тебе даст прохождение
                        курса?</h2>
                    <div style={{opacity: visibleTitle ? 1 : 0, transitionDelay: visibleTitle ? '1.5s' : '0s'}}
                         className='font-bold text-base flex mt-3 justify-center ml-5'>
                        <button onClick={openUpgrade} style={{color: visibleHardSkills ? "grey" : "white"}}
                                className='cursor-pointer'>Skills upgrade
                        </button>
                        <button onClick={openHardSkills} style={{color: visibleHardSkills ? 'white' : 'grey'}}
                                className='ml-5 cursor-pointer'>Strong hard skills
                        </button>
                    </div>
                </div>
                {upgrade &&
                    <div className='h-screen md:h-[75vh] sticky top-48' ref={refUpgrade}>
                        <div ref={refUpgrade}
                             className='flex mt-10 justify-around text-center flex-col md:flex-row'
                             style={{
                                 visibility: visibleHardSkills ? 'hidden' : 'visible',
                                 msTransitionDelay: visibleHardSkills ? '1s' : '0s'
                             }}>
                            <div
                                style={{
                                    opacity: visibleUpgrade ? 1 : 0,
                                    transitionDelay: visibleUpgrade ? '2s' : '0s',
                                    visibility: visibleHardSkills ? 'hidden' : 'visible',
                                    msTransitionDelay: visibleHardSkills ? '1s' : '0s'
                                }}
                                className='translate-y-6'>
                                <img className='m-auto mb-7' src={terminalSvg} alt='terminal'/>
                                <p className='w-3/4 m-auto mb-10'>Научишься понимать терминологию, документацию и писать
                                    код на уровне востребованных разработчикив</p>
                            </div>
                            <div style={{
                                opacity: visibleUpgrade ? 1 : 0,
                                transitionDelay: visibleUpgrade ? '2.5s' : '0s',
                                visibility: visibleHardSkills ? 'hidden' : 'visible',
                                msTransitionDelay: visibleHardSkills ? '1.5s' : '0s'
                            }}>
                                <img className='m-auto mb-7' src={puzzleSvg} alt='puzzle'/>
                                <p className='w-3/4 m-auto mb-10'>Твои знания превратятся в систему, ты не просто
                                    изучишь технологии, но и поймешь как развиваться дальше</p>
                            </div>
                            <div style={{
                                opacity: visibleUpgrade ? 1 : 0,
                                transitionDelay: visibleUpgrade ? '3s' : '0s',
                                visibility: visibleHardSkills ? 'hidden' : 'visible',
                                msTransitionDelay: visibleHardSkills ? '2s' : '0s'
                            }}>
                                <img className='m-auto mb-7' src={fileSvg} alt='file'/>
                                <p className='w-3/4 m-auto mb-10'>Создашь Fullstack приложение, которое покажет что твои
                                    навыки выше чем у стандартного junior</p>
                            </div>
                        </div>
                    </div>}
                {hardSkills &&
                    <div className='h-screen md:h-[65vh] sticky top-48' ref={refHardSkills}>
                        <div ref={refHardSkills}
                             className='flex mt-10 justify-around text-center flex-col md:flex-row'
                             style={{transitionDelay: visibleHardSkills ? '2.5s' : '0s'}}>
                            <div style={{
                                opacity: visibleHardSkills ? 1 : 0,
                                transitionDelay: visibleHardSkills ? '3s' : '0s'
                            }}>
                                <img className='m-auto mb-7' src={reactSvg} alt='react'/>
                                <p className='w-3/4 m-auto mb-10'>
                                    Создашь с помощью фреймворка React визуальную часть приложения: елементы,
                                    анимация</p>
                            </div>
                            <div style={{
                                opacity: visibleHardSkills ? 1 : 0,
                                transitionDelay: visibleHardSkills ? '3.5s' : '0s'
                            }}>
                                <img className='m-auto mb-7' src={nodeSvg} alt='node'/>
                                <p className='w-3/4 m-auto mb-10'>Изучишь NodeJS на достаточном уровне чтобы связывать
                                    frontend и backend</p>
                            </div>
                            <div style={{
                                opacity: visibleHardSkills ? 1 : 0,
                                transitionDelay: visibleHardSkills ? '4s' : '0s'
                            }}>
                                <img className='m-auto mb-7' src={puzzleSvg} alt='puzzle'/>
                                <p className='w-3/4 m-auto mb-10'>Овладеешь базой, от которого можно отталкиваться и
                                    учить любую технологию на JavaScript</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </section>
    );
};

export default Possibility;