const Picture=(props)=>{
    return(
        <>
            <img src={props.urls.small} alt={props.description}/>
        </>
    )
}

export default Picture