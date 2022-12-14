import { useRecoilState } from 'recoil';
import { AddProduct, OffBtnAddItemPlus } from '../../Atoms';

const useRemoveProduct = () => {

    const [product, setProduct] = useRecoilState(AddProduct);
    const [productCount, setProductCount] = useRecoilState(OffBtnAddItemPlus);

    const removeProductCount = (id) => {
        let f = [...productCount];
        if (f.indexOf(id) >= 0) {
            f.splice(f.indexOf(id), 1);
            setProductCount(f)
            window.localStorage.setItem('product-count', JSON.stringify(f));
        }
    }


    const changeProduct = (id, all = false) => {
        if (product[id].count === 1 || all) {
            const temp = { ...product }
            delete temp[id]
            setProduct(temp)
            window.localStorage.setItem('product', JSON.stringify(temp));

            removeProductCount(id)

        } else {

            removeProductCount(id)

            let item = {}
            item = { ...product[id] }
            item.count--
            item = { ...product, [id]: { ...item } }

            setProduct({ ...product, ...item })
            window.localStorage.setItem('product', JSON.stringify({ ...product, ...item }));
        }
    }

    return changeProduct;
}

export default useRemoveProduct;