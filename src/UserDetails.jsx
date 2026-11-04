export const UserDetails = ({name, isOnline, hideOffline}) => {
if (hideOffline && !isOnline){
    return null;
}
    return (
    <div>
        <h3> {name} </h3>
        <span> {isOnline ? "Online " : "Offline"} </span>
        <p> {isOnline ? "Available for chat " : "No available"} </p>
        {isOnline ? (
        <button>Send Message</button>)
        : (
            <small> Check back later </small>
        )
    }
    </div>
);
};
