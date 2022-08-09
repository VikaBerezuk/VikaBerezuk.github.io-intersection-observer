import React from 'react';
import platform from './svg/platform.svg';
import TaskCommand from "./TaskCommand";
import IndividualTask from "./IndividualTask";

const Instruction = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='flex justify-center mb-8 align-middle'>
                <div className='text-center w-5 h-5 rounded-full bg-[#7B72FE] my-2 mx-5 text-white'>?</div>
                <div className='font-extrabold text-2xl lg:text-4xl'>Как именно ты станешь разработчиком</div>
            </h2>
            <div className='mx-6 lg:mx-72 mb-14 text-center lg:text-lg'>На курсе ты не просто изучаешь теоретический материал.
                В процессе изучения ты повторяете за действующим разработчиком, после чего
                <span className='font-bold'> закрепляешь знания на заданиях и проектах.</span>
            </div>
            <div className='flex py-4 bg-gray-100 rounded-t-3xl mb-1 w-[800px] m-auto'>
                <div className='w-2 h-2 bg-gray-300 rounded-full ml-3 mr-1'></div>
                <div className='w-2 h-2 bg-gray-300 rounded-full mr-1'></div>
                <div className='w-2 h-2 bg-gray-300 rounded-full'></div>
            </div>
            <div className='relative'>
                <img className='w-[800px] m-auto' src={platform} alt='platform'/>
                <div className='bg-gray-100 rounded-b-3xl pb-8 w-[800px] m-auto'></div>
                <div className='md:flex xl:block'>
                    <TaskCommand />
                    <IndividualTask />
                </div>
            </div>
            <div className='text-center mb-8 lg:mb-14 lg:mt-5'>Проекты учеников</div>
        </div>
    );
};

export default Instruction;