export const checkValidData = (email,password) =>  {
   const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)

   const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

   if(!isEmailValid) {
    return "Email is not valid"
   }

   if(!isPasswordValid) {
    return "Password must be at least 8 characters,at least one uppercase and lowercase letters and one number."
   }

   return null;
}
export const checkValidSignUpData = (name,email,password) =>  {

    const isNameValid = /^.{3,}$/.test(name)

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
 
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
 

    if(!isNameValid || name.trim() === '') {
        return "Please enter valid name"
       }
    
    if(!isEmailValid) {
     return "Email is not valid"
    }
 
    if(!isPasswordValid) {
     return "Password must be at least 8 characters,at least one uppercase and lowercase letters and one number."
    }

    return null;
 }