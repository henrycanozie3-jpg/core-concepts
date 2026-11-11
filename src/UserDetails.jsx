export const UserDetails = ({name, 
    isOnline, 
    hideOffline, 
    isPrenium,
     isNewUser,
    role}) => {
if (hideOffline && !isOnline){
    return null;
}
let roleBadge = null;
if (role === "admin") {
    roleBadge = <span> (Admin) </span>
}
else     if (role === "moderator") {
    roleBadge = <span> (Moderator) </span>
}
else if (role === "vip") {
    roleBadge = <span> (VIP) </span>
}
return (
    <div>
        <h3> {name}
            {isPrenium && <span> (Premium)  </span>} 
            {isNewUser && <span> (New User) </span>}
            {roleBadge}
        </h3>
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
