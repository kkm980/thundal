const CenterBox = ({children, className}: {children:any, className?:any}) => {
    return (
        <div className={`relative mt-[150px] mx-8 max-w-[475px] text-center ${className}`}>
          {children}
        </div>
    )
}

export default CenterBox;