
// Below function Executes on click of login button.

$nameErr = $emailErr = $usernameErr = $passwordErr = $DateOfBirthErr = $departmentErr = $ageErr = "";

function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    if ( username == "user1" && password == "pass1"){
        alert ("Login successfully");
        window.location = "Dashboard.html"; // Redirecting to other page.
        return false;
    }
    if(username == "") {
        document.getElementById("error2").innerHTML
            = ("Error: Username cannot be blank!");

    }

        if (password == "") {
            document.getElementById("error2").innerHTML
                = ("Error: Password cannot be blank!");
        }


    else{

            document.getElementById("error").innerHTML
                = "Wrong username or password!";


// Disabling fields after 3 attempts.
        if( attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }


        }

    }




