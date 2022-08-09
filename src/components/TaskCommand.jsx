import React from 'react';

const TaskCommand = () => {
    return (
        <aside className='lg:absolute top-8 -left-10 bg-white border-2 border-[#947EFF] max-w-[300px] rounded-2xl p-5 mx-auto my-10'>
            <h3 className='text-[#947EFF]'>2 Командных проекта</h3>
            <p className='py-3'>Симуляция комерческого проекта - получаете ТЗ и организовываете командную разработку. Прокачивая навыки
                для будущей работы.</p>
            <h3 className='font-bold'>Проекты на тему:</h3>
            <ul>
                <li>- JavaScript плагин "Контекстное меню"</li>
                <li>- Cайт на React, презентующий команду участников</li>
            </ul>
        </aside>
    );
};

export default TaskCommand;