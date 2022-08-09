import React from 'react';

const AmountOfTraining = () => {
    return (
        <section className='max-w-7xl mx-auto my-10'>
            <ul className='flex flex-col lg:flex-row list-decimal items-baseline'>
                <li className='flex mx-10 my-4'>
                    <div className='w-2 h-2 bg-[#E0E6E9] mt-4 mr-4 rounded-full' />
                    <spn className='text-4xl font-extrabold text-[#ED7138] pr-3'>293</spn>
                    <div className='leading-4 mt-1'> HD видеоурока длительностью 3 - 15 минут</div>
                </li>
                <li className='flex mx-10 my-4'>
                    <div className='w-2 h-2 bg-[#E0E6E9] mt-4 mr-4 rounded-full' />
                    <spn className='text-4xl font-extrabold text-[#ED7138] pr-3'>6</spn>
                    <div className='leading-4 mt-1'>Мероприятий на курсе (Хакатоны, мастер классы, разборы и т.д.)</div>
                </li>
                <li className='flex mx-10 my-4'>
                    <div className='w-2 h-2 bg-[#E0E6E9] mt-4 mr-4 rounded-full' />
                    <spn className='text-4xl font-extrabold text-[#ED7138] pr-3'>193</spn>
                   <div className='leading-4 mt-1'> заданий и тестов для закрепления</div>
                </li>
            </ul>
        </section>
    );
};

export default AmountOfTraining;