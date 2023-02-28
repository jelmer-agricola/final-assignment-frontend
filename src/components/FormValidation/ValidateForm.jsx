// import React, {useState} from "react";
// import Button from "../../components/Button/Button";
// import '../../pages/Login/Login.css'
//
// function ValidateForm({onChange}) {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [email, setEmail] = useState("");
//     const [usernameError, setUsernameError] = useState("");
//     const [passwordError, setPasswordError] = useState("");
//     const [emailError, setEmailError] = useState("");
//
//     function validateForm() {
//         let isValid = true;
//         if (username.length < 6) {
//             setUsernameError("Username needs to be at least 6 characters");
//             isValid = false;
//         } else {
//             setUsernameError("");
//         }
//         if (password.length < 6) {
//             setPasswordError("Password must be at least 6 characters long.");
//             isValid = false;
//         } else {
//             setPasswordError("");
//         }
//         if (password.indexOf(" ") !== -1) {
//             setPasswordError("Password cannot contain spaces.");
//             isValid = false;
//         }
//         if (email.indexOf("@") === -1) {
//             setEmailError("Email needs to contain '@' symbol");
//             isValid = false;
//         } else {
//             setEmailError("");
//         }
//         return isValid;
//     }
//
//     function handleChange(e) {
//         e.preventDefault();
//         if (validateForm()) {
//             onChange({username, password, email});
//         }
//     }
//
//     return (
//         <form onChange={handleChange} className="login-form">
//             <label htmlFor="email-field">Email:</label>
//             <br/>
//             <input
//                 className="login-form-input"
//                 type="text"
//                 id="email-field"
//                 name="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//             />
//             <div className="error-message">{emailError}</div>
//
//             <label htmlFor="username-field">Username:</label>
//             <br/>
//             <input
//                 className="login-form-input"
//                 type="text"
//                 id="username-field"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//             />
//             <div className="error-message">{usernameError}</div>
//
//             <label htmlFor="password-field">Password:</label>
//             <br/>
//             <input
//                 className="login-form-input"
//                 type="password"
//                 id="password-field"
//                 name="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <div className="error-message">{passwordError}</div>
//
//             <Button
//                 type="submit"
//                 className="submit-btns"
//                 children="Register"
//             />
//
// </form>
// )
//     ;
// }
//
//
// export default ValidateForm;
//
