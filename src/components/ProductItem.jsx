import {TrashIcon} from "./icons/Trash";

export const ProductItem = ({product, onClick}) => {
  return (<div className="flex gap-x-3">
          <div className="border rounded px-2 py-3 shadow-md hover:shadow-xl cursor-pointer bg-gray-100 w-full">
              { product?.toUpperCase() }
          </div>
          <div className="bg-red-600 rounded shadow-md hover:shadow-2xl" onClick={onClick}>
              <TrashIcon />
          </div>
  </div>
  )
}