// this is for the authentication that will be used to validate the form section

function Authen(){

    //variables
    let userName = document.queryselector("#name");
    let userPhoneNumber = document.querySelector("#phone");
    let userEmail = document.querySelector("#email");
    let userMessage = document.querySelector("#message");
    
    // for the name
    function nameChecker(userName){
        if(userName === ""){
            alert("Input your name");
        }else{
            return;
        }
    }

    //for the phone
    function phoneChecker(userPhoneNumber){
        if(userPhoneNumber === ""){
            alert("Input your phone number");
        }else{
            return
        }
    }

    //for the email address
    function emailChecker(userEmail){
        if(userEmail === ""){
            alert("Please enter your email address");
        }else if(userEmail === "[a-zA-Z0-9][a-zA-Z]s/.[a-zA-Z]"){
            alert("please remember to enter @ in your email");
        }else{
            return;
        }
    }

    // for message
    function messageChecker(userMessage){
        if(userMessage === ""){
            return;
        }else{
            return;
        }
    }
    // in the css we will say on active we will put if it is optional, the moment the user click the text area it will show it is optional, the we will have to know how to handle the data coming in.
}


// for submit button
