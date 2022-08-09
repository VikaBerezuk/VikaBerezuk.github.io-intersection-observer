import React from 'react';

const TableUsers = () => {
    return (
        <table className='w-full block max-w-[56vw] md:max-w-full overflow-x-hidden'>
            <tr className='font-bold'>
                <td>Имя</td>
                <td className='md:pl-3'>Качества</td>
                <td className='md:pl-3'>Професия</td>
                <td className='md:pl-3'>Встретился, раз</td>
                <td className='md:pl-3'>Оценка</td>
                <td className='md:pl-3'>Избраное</td>
            </tr>
            <tr>
                <td>Username</td>
                <td className='md:pl-3'>
                    <div
                        className='text-[#407f81] rounded-sm border-[#407f81] w-fit text-center border-2 font-bold rounded-lg py-1 px-3 my-1'>
                        тег 1
                    </div>
                </td>
                <td className='md:pl-3'>Доктор</td>
                <td className='md:pl-3'>13</td>
                <td className='md:pl-3'>4</td>
                <td className='md:pl-3'>Добавить в изибранное</td>
            </tr>
            <tr>
                <td>Username2</td>
                <td className='md:pl-3'>
                    <div
                        className='text-[#ED7138] rounded-sm border-[#ED7138] w-fit text-center border-2 font-bold rounded-lg py-1 px-3 my-1'>
                        тег 3
                    </div>
                </td>
                <td className='md:pl-3'>Физик</td>
                <td className='md:pl-3'>56</td>
                <td className='md:pl-3'>5</td>
                <td className='md:pl-3'>Добавить в изибранное</td>
            </tr>
            <tr>
                <td>Username5</td>
                <td className='md:pl-3'>
                    <div
                        className='text-[#ED7138] rounded-sm border-[#ED7138] w-fit text-center border-2 font-bold rounded-lg py-1 px-3 my-1'>
                        тег 3
                    </div>
                </td>
                <td>Официант</td>
                <td className='md:pl-3'>2</td>
                <td className='md:pl-3'>5</td>
                <td className='md:pl-3'>Добавить в изибранное</td>
            </tr>
            <tr>
                <td>Username12</td>
                <td className='md:pl-3'>
                    <div
                        className='text-[#407f81] rounded-sm border-[#407f81] w-fit text-center border-2 font-bold rounded-lg py-1 px-3 my-1'>
                        тег 1
                    </div>
                </td>
                <td className='md:pl-3'>Доктор</td>
                <td className='md:pl-3'>9</td>
                <td className='md:pl-3'>3</td>
                <td className='md:pl-3'>Добавить в изибранное</td>
            </tr>
            <tr>
                <td>Username9</td>
                <td className='md:pl-3'>
                    <div
                        className='text-[#ED7138] rounded-sm border-[#ED7138] w-fit text-center border-2 font-bold rounded-lg py-1 px-3 my-1'>
                        тег 3
                    </div>
                </td>
                <td className='md:pl-3'>Официант</td>
                <td className='md:pl-3'>3</td>
                <td className='md:pl-3'>3</td>
                <td className='md:pl-3'>Добавить в изибранное</td>
            </tr>
            <tr>
                <td>Username6</td>
                <td className='md:pl-3'>
                    <div
                        className='text-[#ED7138] rounded-sm border-[#ED7138] w-fit text-center border-2 font-bold rounded-lg py-1 px-3 my-1'>
                        тег 3
                    </div>
                </td>
                <td className='md:pl-3'>Физик</td>
                <td className='md:pl-3'>11</td>
                <td className='md:pl-3'>4</td>
                <td className='md:pl-3'>Добавить в изибранное</td>
            </tr>
            <tr>
                <td>Username8</td>
                <td className='md:pl-3'>
                    <div
                        className='text-[#407f81] rounded-sm border-[#407f81] w-fit text-center border-2 font-bold rounded-lg py-1 px-3 my-1'>
                        тег 1
                    </div>
                </td>
                <td className='md:pl-3'>Актер</td>
                <td className='md:pl-3'>2</td>
                <td className='md:pl-3'>5</td>
                <td className='md:pl-3'>Добавить в изибранное</td>
            </tr>
            <tr>
                <td>Username7</td>
                <td className='md:pl-3'>
                    <div
                        className='text-[#ED7138] rounded-sm border-[#ED7138] w-fit text-center border-2 font-bold rounded-lg py-1 px-3 my-1'>
                        тег 3
                    </div>
                </td>
                <td className='md:pl-3'>Доктор</td>
                <td className='md:pl-3'>9</td>
                <td className='md:pl-3'>3</td>
                <td className='md:pl-3'>Добавить в изибранное</td>
            </tr>
            <tr>
                <td>Username1</td>
                <td className='md:pl-3'>
                    <div
                        className='text-[#ED7138] rounded-sm border-[#ED7138] w-fit text-center border-2 font-bold rounded-lg py-1 px-3 my-1'>
                        тег 3
                    </div>
                </td>
                <td className='md:pl-3'>Официант</td>
                <td className='md:pl-3'>3</td>
                <td className='md:pl-3'>3</td>
                <td className='md:pl-3'>Добавить в изибранное</td>
            </tr>
        </table>
    );
};

export default TableUsers;