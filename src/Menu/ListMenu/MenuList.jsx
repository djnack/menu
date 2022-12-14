import { useEffect } from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';

import { AtomData, HeaderName } from '../../Atoms';
import MenuListItem from './MenuListItem';
import EmtpyMenu from './../EmptyMenu/index';
import StringMoreHeader from '../../Other/StringMoreHeader';

const MenuList = () => {

    const data = useRecoilValue(AtomData);
    const path = window.location.pathname.split('/')[3];
    const products = Object.values(data.products).filter(e => { return e.category === path })

    const setNameHader = useSetRecoilState(HeaderName);

    let objToJson = JSON.stringify(data.categores);
    let start = objToJson.indexOf(path);
    objToJson = objToJson.substring(start);

    start = objToJson.indexOf('title');
    let end = objToJson.indexOf('}');
    objToJson = objToJson.substring(start, end);
    objToJson = objToJson.split('"');

    useEffect(() => {
        setNameHader(StringMoreHeader(objToJson[2]))
    }, [])


    return (<>
        <div className="pb-4 container animate__slideInRight">
            <div className='row mb-4'>

                {!!products.length && Object.values(products).map(e => <MenuListItem even={e} key={Math.random()} />)}
                {!products.length && <EmtpyMenu />}

            </div>
        </div>
    </>);
}

export default MenuList;