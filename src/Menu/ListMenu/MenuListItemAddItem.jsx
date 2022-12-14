import { useEffect, useState } from "react";
import { AddProduct, OffBtnAddItemPlus } from "../../Atoms";
import useRemoveProduct from "../Use/useRemoveProduct";
import useAddProduct from './../Use/useAddProduct';
import { useRecoilValue } from 'recoil';

const MenuListItemAddItem = ({ even }) => {
    
    const product = useRecoilValue(AddProduct);
    const productCount = useRecoilValue(OffBtnAddItemPlus);
    const [count, setCount] = useState(typeof product[even.id] === 'object' ? product[even.id].count : 0);
    const setAddProduct = useAddProduct();
    const setRemoveProduct = useRemoveProduct();
    
    useEffect(() => {
        typeof product[even.id] === 'object' ?
            setCount(product[even.id].count) : setCount(0)
    }, [product, even])

    return (<>
        <div data-add-disbale className="link-div-add">
            <i data-add-disbale onClick={() => {
                if (!productCount.includes(even.id)) {
                    setAddProduct(even)
                }
            }
            } className={`fa-solid fa-plus link-add link-plus${even.disable || productCount.includes(even.id) ? ' bg-disable text-muted' : ''}`}></i>
            {!!count && <p data-add-disbale className='link-add mb-0'>{count}</p>}
            {!!count && <i data-add-disbale onClick={() => {
                setRemoveProduct(even.id)
            }} className='fa fa-minus link-add link-minus'></i>}
        </div>
    </>);
}

export default MenuListItemAddItem;