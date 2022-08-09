import React from 'react';
import points from "./svg/points.svg";
import Round from "./Round";
import dropdown from './svg/dropdown.svg';
import user from './svg/user.svg';
import terminal from './svg/terminalRound.svg';
import TableUsers from "./TableUsers";

const StartProfession = () => {
    return (
        <section className='bg-[#7B72FE] my-10 pt-8 rounded-bl-3xl rounded-tl-3xl relative flex flex-col
        lg:pt-14 lg:mb-20 lg:ml-14  lg:flex-row'>
            <section className='text-white text-center lg:text-left z-0 lg:w-1/2 px-5 lg:pr-0 lg:pl-16 relative'>
                <div className='lg:mr-24'>
                    <h2 className='text-3xl lg:text-5xl pb-2 lg:pb-4 font-bold'>Профессия Frontend — разработчик</h2>
                    <p className='text-xl lg:text-3xl font-bold my-4 lg:my-6'>Стань с нуля продвинутым Junior
                        разработчиком за 7 месяцев с знанием технологий больше, чем у других кандидатов
                    </p>
                    <div className='lg:text-xl text-left'>Начиная с основ изучишь JavaScript, разберешься с самыми
                        популярными технологиями, научишься писать Frontend на фреймворке и связывать его с Backend.
                        Навыки после курса оцениваются от 100 т.р.
                    </div>
                    <button className='px-5 py-3 my-6 lg:my-10 rounded-3xl bg-[#ED7138] mb-5 lg:mb-0'>
                        Задать вопрос об обучении
                    </button>
                    <Round/>
                </div>
            </section>
            <section className='w-full relative z-0 lg:w-1/2'>
                <div className='z-1 bg-white w-full border rounded-tl-2xl border-none'>
                    <div className='text-center relative my-2 pt-2'>
                        Safari
                        <div className='flex rounded-t-3xl absolute top-2'>
                            <div className='w-2 h-2 bg-gray-300 rounded-full ml-3 mr-1'></div>
                            <div className='w-2 h-2 bg-gray-300 rounded-full mr-1'></div>
                            <div className='w-2 h-2 bg-gray-300 rounded-full'></div>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <ul className='flex'>
                            <li className='mx-4'>Main</li>
                            <li>Users</li>
                        </ul>
                        <div className='flex align-baseline h-5'>
                            <p>Kirill Babich</p>
                            <img className='mx-4' src={user} alt='user'/>
                            <button><img src={dropdown} alt='dropdown'/></button>
                        </div>
                    </div>
                    <main className='flex mt-3'>
                        <aside>
                            <ul>
                                <li className='p-2 bg-[#F2F5F9] mb-1 ml-2 w-32'>Физик</li>
                                <li className='p-2 bg-[#F2F5F9] mb-1 ml-2 w-32'>Доктор</li>
                                <li className='p-2 bg-[#F2F5F9] mb-1 ml-2 w-32'>Официант</li>
                                <li className='p-2 bg-[#F2F5F9] mb-1 ml-2 w-32'>Инженер</li>
                                <li className='p-2 bg-[#F2F5F9] mb-1 ml-2 w-32'>Актер</li>
                                <li className='p-2 bg-[#F2F5F9] mb-1 ml-2 w-32'>Повар</li>
                                <li className='mb-1 ml-2'>
                                    <button className='bg-[#F2F5F9] w-32 p-2 rounded-md'>Очистить</button>
                                </li>
                            </ul>
                        </aside>
                        <section className='w-full ml-4'>
                            <h2 className='mt-2 font-bold text-xl'>17 человек в списке</h2>
                            <input placeholder='Поиск'
                                   className='bg-[#F2F5F9] w-[98%] mr-10 my-2 px-2 py-1 rounded-md mr-4'/>
                            <TableUsers/>
                        </section>
                    </main>
                </div>
                <img className='z-[-1] absolute -top-9 -left-8' src={points} alt='points'/>
                <div
                    className='lg:absolute bg-white md:bg-inherit m-auto -left-20 -bottom-12 md:w-[325px] lg:rounded-3xl'>
                    <img className='text-teal-800 p-2 rounded-xl bg-[#7F76FF] w-12 lg:absolute left-14 -top-8 m-auto'
                         src={terminal} alt='terminal'/>
                    <p className='p-5 pt-2 lg:pt-5 bg-white rounded-2xl shadow-2xl text-gray-400'>
                        <span className='text-[#ED7138]'>Обучение</span>
                        <span className='font-bold text-black'> для тех, </span>
                        кто готов учится 10 часов в неделю,
                        <span className='text-[#ED7138]'> чтобы получить результат</span>.
                        <span className='font-bold text-black'> Мы даем</span> необходимые навыки
                        <span className='font-bold text-black'> на продвинутом уровне, </span> убирая все лишнее
                    </p>
                </div>
            </section>
            <img className='z-[-1] absolute lg:-bottom-10 lg:-left-10' src={points} alt='points'/>
        </section>
    );
};

export default StartProfession;