export const ButtonWrapper = ({onClick, value}) => {
  return (<div>
      <button className="px-2 rounded text-white text-3xl bg-sky-500 font-semibold w-[50px] h-full" onClick={onClick}>{value}</button>
  </div>)
}