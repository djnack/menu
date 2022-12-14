import { useRecoilState } from 'recoil';
import { AddProduct, OffBtnAddItemPlus } from '../../Atoms';

const useAddProduct = () => {

    const [product, setProduct] = useRecoilState(AddProduct);
    const [productCount, setProductCount] = useRecoilState(OffBtnAddItemPlus);

    const AddProductConnt = (id) => {
        let arr = [...productCount]
        arr = arr.concat([id]);
        arr = arr.filter((v, i, a) => a.indexOf(v) === i)
        window.localStorage.setItem('product-count', JSON.stringify(arr));
        setProductCount(arr)

        console.log('alert in page')
    }

    const changeProduct = (even, count = 1) => {


        if (!even.disable) {
            const id = even.id;
            if ((product[id] === undefined || even.count > product[id].count) && even.count >= count) {
                let item = {}
                if (!!product[id]) {
                    item = { ...product[id] }
                    item.count += count
                    item = { ...product, [id]: { ...item } }

                } else
                    item = { [id]: { count, path: even.url } }

                setProduct({ ...product, ...item })
                window.localStorage.setItem('product', JSON.stringify({ ...product, ...item }));

                if ((product[id] !== undefined && product[id].count + 1 === even.count) || 1 === even.count) {
                    AddProductConnt(id)
                }
            } else {
                AddProductConnt(even.id)
            }
        }
    }

    return changeProduct;
}

export default useAddProduct;