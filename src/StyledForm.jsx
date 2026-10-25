export const  StyleForm = () => {
    return (
    <form className="contact-form"> 
    <label htmlFor="username">Username</label>
    <input type="text" id="username" class="form-input" />
    <br />
    <label htmlFor="email">Email</label>
     <input type="email" id="email" class="form-input" tabIndex= "1" />
    <br />
    </form> )

}