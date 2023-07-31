import { TextInput } from "./TextInput";
import {ProductItem} from "./ProductItem";
import {useState} from "react";
import {ModalWrapper} from "./ModalWrapper";

export const FormWrapper = () => {
    const [productsLength, setProductsLength] = useState(0);
    const [products, setProducts] = useState([]);
    const [shouldDelete, setShouldDelete] = useState(false);

    const removeSelectedItem = (product) => {
        setShouldDelete(!shouldDelete)
        if (shouldDelete){
            setProducts(products.filter((item) => item !== product))
            setProductsLength(products.length - 1)
        }
    }

    const allProduct = products.map((product, index) => {
        return <div key={index}>
            <ProductItem product={product} onClick={() => removeSelectedItem(product)}/>
        </div>
    });

    const getItemState = (state) => {
        setShouldDelete(state)
    }

    const getData = (data, state) => {
        allProduct.push(data);
        setProductsLength(products.push(data))
        setProductsLength(allProduct.length)
    };

    const clearAllData = () => {
      setProducts([])
        setProductsLength(0)
    }

    const IsModalOn = () => {
      if (shouldDelete) {
          return <ModalWrapper onCancel={getItemState} onDelete={getItemState} product={products}/>
      }
      return <></>
    }

    return (<div>
        <form className="bg-white h-[510px] w-[450px] rounded-lg flex px-4 flex-col gap-y-3">
            <h1 className="text-xl font-bold py-3">TODO APP</h1>

            <IsModalOn />
            <TextInput onSendData={getData}/>

            <div  className="flex flex-col gap-y-3 py-2 h-[320px] overflow-y-scroll shadow-inner scrollbar pr-2">
                { allProduct }
            </div>

            <div className="flex justify-between items-center">
                <span className="font-semibold">{`You have ${productsLength} pending Products`}</span>
                <button className="px-2 rounded text-white bg-sky-500 font-semibold py-2" onClick={clearAllData}>Clear All</button>
            </div>
        </form>
    </div>)
}