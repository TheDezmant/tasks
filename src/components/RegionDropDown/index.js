import React from 'react';
import DropDown from './DropDown/DropDown';
const DATA = [
    { id: 1, item: 'Краснодар' },
    { id: 2, item: 'Дзержинск' },
    { id: 3, item: 'Анапа' },
    { id: 4, item: 'Москва' },
    { id: 5, item: 'Нижний Новгород' },
    { id: 6, item: 'Пенза' },
    { id: 7, item: 'Чкаловск' },
    { id: 8, item: 'Тула' },
    { id: 9, item: 'Рязань' },
    { id: 10, item: 'Кстово' },
    { id: 11, item: 'Сочи' },
    { id: 12, item: 'Казань' }
];

const RegionDropDown = () => {
    return (
        <>
            <DropDown
                text={'Выберите регион:'}
                data={DATA}
                errorEmptyState={'Объектов не найдено'}
                emptyValue={'Москва'}
                inputPlaceholder={'Введите город'}
            />
        </>
    );
};

export default RegionDropDown;
