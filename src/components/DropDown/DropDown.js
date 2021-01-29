import React, { useState } from 'react';
import { InputDropDown, MenuDropDown, Region } from './UnitsDropDown';
import City from './City/City';

const DropDown = () => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [enterCity, setEnterCity] = useState('');
    const [region, setRegion] = useState('Москва');

    const menuCity = [
        { id: 1, city: 'Краснодар' },
        { id: 2, city: 'Дзержинск' },
        { id: 3, city: 'Анапа' },
        { id: 5, city: 'Москва' },
        { id: 6, city: 'Нижний Новгород' },
        { id: 7, city: 'Пенза' },
        { id: 8, city: 'Чкаловск' },
        { id: 9, city: 'Тула' },
        { id: 10, city: 'Рязань' },
        { id: 11, city: 'Кстово' },
        { id: 12, city: 'Сочи' },
        { id: 13, city: 'Казань' }
    ];

    let cityElements = menuCity.map((x) =>
        x.city.includes(enterCity) ? <City onClick={() => setRegion(x.city)} key={x.id} city={x.city} /> : ''
    );
    return (
        <div>
            Выберите регион:<Region onClick={() => setShowDropDown(!showDropDown)}>{region}</Region>
            {showDropDown && (
                <MenuDropDown>
                    <InputDropDown
                        placeholder={'Введите регион'}
                        value={enterCity}
                        onChange={(e) => setEnterCity(e.target.value)}
                    />
                    {cityElements}
                </MenuDropDown>
            )}
        </div>
    );
};

export default DropDown;
