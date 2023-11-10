const Tweet = (props) =>{
    return (
        <div className="tweet">
            <span>Username: {props.username} | </span>
            <span>Name: {props.name} | </span>
            <span>Date: {props.date}</span>
            <p>Tweet: {props.message}</p>
        </div>
    )

}