import { useState } from 'react';
import {ButtonWrapper} from "./ButtonWrapper";
export const TextInput = ({onSendData}) => {
    const [valueType, setEnteredValue] = useState("");
    const sendData = (event) => {
        event.preventDefault();
        if (valueType){
            onSendData(valueType);
            setEnteredValue("")
        }
    }
  return (
      <div className="flex gap-x-3">
            <input type="text"
                   onChange={(event) => setEnteredValue(event.target.value)}
                   className="outline-none border-2 border-gray rounded placeholder:text-sm h-12 pl-2 text-sm w-full"
                   placeholder="Enter the Product"
                   value={valueType}
            />
            <ButtonWrapper value={"+"} onClick={sendData}/>
      </div>
  )
}