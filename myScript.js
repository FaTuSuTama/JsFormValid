function userIdValidation(uid,mx,my){   
    var uidLen = uid.value.length;  
    if (uidLen == 0 || uidLen >= my || uidLen < mx){  
        return true;
    }else{
        return false;
    }  
}
function uidSubmit(){  
     var uid = document.registration.userid;
     var mx = 3;
     var my = 12;
     if(userIdValidation(uid,mx,my)){
            document.getElementById("userIdNotice").innerHTML = "*User Id should not be empty / length be between "+mx+" to "+my;
            document.getElementById("userIdNotice").style.color = "red";
     }else{
            document.getElementById("userIdNotice").innerHTML = " OK";  
            document.getElementById("userIdNotice").style.color = "Green";
     }
}
/*Password*/
function passIdValidation(passid,mx,my){  
    var passidLen = passid.value.length;
    var letters = /[A-Z]/; 
    var passValue = passid.value
    
    //console.log(letters.test(passValue) == -1);
    console.log(letters.test(passValue));
    
    if (passidLen == 0 || passidLen >= my || passidLen < mx || !letters.test(passValue)){  
        return false;  
    }else{
        return true;
    }     
}
function passSubmit(){
    var pid = document.registration.passid;
    var mx = 3;
    var my = 12;
    if(passIdValidation(pid,mx,my)){
            document.getElementById("passNotice").innerHTML = " OK";  
            document.getElementById("passNotice").style.color = "Green";
     }else{
            document.getElementById("passNotice").innerHTML = "*Password should not be empty / length be between "+mx+" to "+my;
            document.getElementById("passNotice").style.color = "red";
            
     }
     
}
/*Password Varification*/
function submitPassword(){
    console.log(document.getElementById('passid').value);
    if(document.getElementById("passid").value === document.getElementById("conPassid").value){
            document.getElementById("alartMassage").innerHTML = "Match";
    } else {
            document.getElementById("alartMassage").innerHTML = "Not Match";
    }
}
