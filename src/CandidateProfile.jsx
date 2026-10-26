export const CandidateProfile = () => {
    const name = "Peter Parker"
    const role = "Web Develop"
    const yearOfExperience = 5
    const isAvailable = true
   return(
   <>
    <h2>{name}</h2>
    <p> {role} with {yearOfExperience} years of experience</p>
    <p>Started in {2026 - yearOfExperience}</p>
    <p>Status: {isAvailable ? "Available for hire" : "Not available"} </p>
    <p>Contact {name.toLowerCase().replace(" ", ".") } @email.com </p>
    </>);
}