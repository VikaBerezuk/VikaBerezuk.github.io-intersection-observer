import React from 'react';

const IndividualTask = () => {
    return (
        <aside
            className='lg:absolute -bottom-14 right-0 bg-white border-2 border-[#947EFF] max-w-[300px] rounded-2xl p-5 mx-auto my-10'>
            <h3 className='text-[#947EFF]'>Индивидуальные проекты</h3>
            <p className='py-3'>Чтобы свободно чуствовать себя на позиции junior необходим опыт разработки.
                Вы создадите 3 проекта изучая материал от простого к сложному:</p>
            <ul>
                <li>1. Проект корзина с товарами для интернет-магазин.</li>
                <li>2.Социальная сеть для поиска и знакомств</li>
                <li>3.Дипломный проект на выбранную вами тему:
                    <li>- Учет доходов и рассходов</li>
                    <li>- Бронирование отелей</li>
                    <li>- Интернет-магазин или схожий по сложности проект, которым вы выберети и
                        утвердите с куратором
                    </li>
                </li>
                <li></li>
            </ul>
        </aside>
    );
};

export default IndividualTask;