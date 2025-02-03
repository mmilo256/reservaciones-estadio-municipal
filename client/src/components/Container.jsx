const Container = ({ children, className }) => {
    return (
        <div className={`w-[94%] max-w-[1200px] mx-auto ${className}`}>{children}</div>
    )
}

export default Container