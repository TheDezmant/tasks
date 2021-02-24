import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { Pictures, PicturesViewOnly } from './Pictures';
import { Header, InputForGallery, SetOfPictures, StyledTabs } from './units';
import Tabs from './Tabs';

const MENUTABS = [
    { item: 'Все', id: 0 },
    { item: 'Природа', id: 1 },
    { item: 'Животные', id: 2 },
    { item: 'Птицы', id: 3 }
];
const DATA = [
    {
        id: 0,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvhSC2LRnhC6MJLSSp2i0W2mD2bqdzlxvcQ&usqp=CAU',
        description: 'Nature'
    },
    {
        id: 1,
        url: 'https://img4.goodfon.ru/wallpaper/nbig/1/7c/kartinka-loshadi-liubov-serdechki.jpg',
        description: 'Animals'
    },
    {
        id: 2,
        url: 'https://www.hvoost.ru/upload/iblock/4a6/4a6f3ccb48c24a11885b9852d5ab8e36.jpg',
        description: 'Birds'
    },
    {
        id: 3,
        url: 'https://images.wbstatic.net/wbkids/641/fef3ea54-2962-4ac5-9989-277d81c23873.jpg',
        description: 'Animals'
    },
    {
        id: 4,
        url: 'https://habrastorage.org/webt/dc/p0/_v/dcp0_vjkc1npqbzb7f18rufava4.jpeg',
        description: 'Birds'
    },
    {
        id: 5,
        url: 'https://vjoy.cc/wp-content/uploads/2019/10/1-90.jpg',
        description: 'Nature'
    },
    {
        id: 6,
        url: 'https://klike.net/uploads/posts/2018-07/1531483091_1.jpg',
        description: 'Animals'
    },
    {
        id: 7,
        url: 'http://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2019-11/TASS_13996782.jpg?itok=JYo0rYEE',
        description: 'Birds'
    },
    {
        id: 8,
        url:
            'https://static.mk.ru/upload/entities/2019/06/28/11/articles/detailPicture/84/24/4c/92/d37dbc4d9ddf010e01e8736a6d68b5cf.jpg',
        description: 'Animals'
    }
];

const Gallery = () => {
    const [enteredUrl, setEnteredUrl] = useState('');
    const [update, setUpdate] = useState(true);
    const [tabs, setTabs] = useState(0);
    const [addData, setAddData] = useState([]);
    const [data, setData] = useState(DATA);

    const menuTabs = MENUTABS.map(({ item, id }) => <Tabs onClick={() => setTabs(id)} key={id} {...{ item }} />);

    const menuFilter = (name) => {
        return data
            .filter(({ description }) => description === name)
            .map(({ id, url }) => <PicturesViewOnly url={url} key={id} />);
    };
    const menuMap = () => {
        return data.map(({ id, url }, index) => (
            <Pictures
                url={url}
                key={index}
                onClick={() => {
                    deletePictures(index);
                }}
            />
        ));
    };

    const gallery =
        tabs === 0
            ? menuMap()
            : tabs === 1
            ? menuFilter('Nature')
            : tabs === 2
            ? menuFilter('Animals')
            : tabs === 3
            ? menuFilter('Birds')
            : '';

    const addPictures = () => {
        setUpdate(!update);
        const id = data.length + 1;
        if (enteredUrl.length !== 0) {
            data.push({
                id,
                url: enteredUrl
            });
        }
    };

    const downloadPictures = () => {
        setUpdate(!update);
        addData.map(({ id, url }) =>
            data.push({
                id,
                url
            })
        );
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then((response) => response.json())
            .then((json) => setAddData(json));
    }, []);

    const deletePictures = (index) => {
        setData((prevArray) => [...prevArray].filter((el, i) => index !== i));
    };
    return (
        <>
            <Header>
                <InputForGallery
                    onChange={(e) => setEnteredUrl(e.target.value)}
                    value={enteredUrl}
                    placeholder={'Ввеите URL адресс'}
                />
                <Button
                    onClick={() => {
                        addPictures();
                    }}>
                    Добавить
                </Button>
                <button onClick={() => downloadPictures()}>Загрузить</button>
            </Header>
            <StyledTabs>{menuTabs}</StyledTabs>
            <SetOfPictures>{gallery}</SetOfPictures>
        </>
    );
};

export default Gallery;
