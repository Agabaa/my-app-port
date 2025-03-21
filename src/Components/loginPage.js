// <!DOCTYPE html>
// <html lang="en">    
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Login</title>
//         <link rel="stylesheet" href="loginPage.css">
//         <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
//     </head>
//     <body>
//         <div class="wrapper">
//             <form action="">
//                 <h1>Login</h1>
//                 <div class="input-box">
//                     <input type="text" placeholder="Username">
//                     <i class='bx bxs-user'></i>
//                 </div>
                
//                 <div class="input-box">
//                     <input type="password"placeholder="password"
//                     required>
//                     <i class='bx bxs-lock-alt' ></i>
                    
//                 </div>
//                 <div class="remember-forgot">
//                     <label><input type ="checkbox"> remember me</label>
//                     <a href="#">Forgot password?</a>
//                 </div>
//                 <button type="submit" class="btn">Login</button>
//                 <div class="register-link">
//                     <p>Don't have an account? <a href="#">Register</a></p>
//                 </div>


//             </form>
//             <div class="form">
//                 <form class="login-form
// </html>

// Create a new HTML document
const htmlDoc = document.implementation.createHTMLDocument('Login');

// Create HTML elements
const html = `
<!DOCTYPE html>
<html lang="en">    
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="loginPage.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
<body>
    <div class="wrapper">
        <form action="">
            <h1>Login</h1>
            <div class="input-box">
                <input type="text" placeholder="Username">
                <i class='bx bxs-user'></i>
            </div>
            
            <div class="input-box">
                <input type="password" placeholder="password" required>
                <i class='bx bxs-lock-alt'></i>
            </div>
            <div class="remember-forgot">
                <label><input type="checkbox"> remember me</label>
                <a href="#">Forgot password?</a>
            </div>
            <button type="submit" class="btn">Login</button>
            <div class="register-link">
                <p>Don't have an account? <a href="#">Register</a></p>
            </div>
        </form>
    </div>
</body>
</html>
`;

// Open the document for writing
htmlDoc.open();
htmlDoc.write(html);
htmlDoc.close();

// Append the newly created HTML document to the current document's body
document.body.appendChild(htmlDoc.documentElement);
