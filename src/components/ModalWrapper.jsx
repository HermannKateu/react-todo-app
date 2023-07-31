export const ModalWrapper = ({product, onDelete, onCancel}) => {

    const deleteItems = (event) => {
        event.preventDefault();
        onDelete(false)
    }
    const cancelDeletion = (event) => {
        event.preventDefault();
        onCancel(false)
    }

    return (
        <div className="absolute bg-black w-full h-screen bg-opacity-70 top-0 left-0 flex justify-center items-center">
            <div className="w-[300px] h-[200px] bg-white rounded p-4 font-semibold flex flex-col justify-between">
                <h1>{`Are you sure you want to Delete the Product ${product}`}</h1>
                <div className="flex gap-x-4 justify-between">
                    <button className="px-2 rounded text-white bg-gray-400 font-semibold py-2" onClick={cancelDeletion}>Cancel</button>
                    <button className="px-2 rounded text-white bg-red-700 font-semibold py-2" onClick={deleteItems}>Delete</button>
                </div>
            </div>
        </div>
    )
}