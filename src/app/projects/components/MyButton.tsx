interface MyButton {
    name?: string;
    tooltipName?: string;
    icon: JSX.Element;
    className?: string;
    action: () => void;
}

export const MyButton = ( { name,icon, className, tooltipName, action }:MyButton ) => {
  return (
    <div className={`relative group ${className}`}>
        <button onClick={()=>action} className='text-gray-500 hover:text-white flex items-center gap-2'>
            { icon }
            { name && <p> name </p> }
        </button>

        {
            <span className='absolute bottom-full mb-2 hidden w-max px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:block group-hover:opacity-100'>
                { tooltipName }
            </span>
        }
    </div>
  )
}
