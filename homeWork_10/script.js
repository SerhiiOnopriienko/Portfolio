// Task 1
function createBuffer(){
    let text = '';
    return function buffer(value){
        if(typeof value !== 'string' && typeof value !== 'undefined'){
            return 'Error';
        } else if (typeof value === 'string'){
            text += value;
            return
        }
        return text;  
    }
}
const buffer = createBuffer();
console.log(buffer("A"));
console.log(buffer("XYZ")); 
console.log(buffer()); 

// Task 2
function signUp(userName, password){
    return obj = {
        userName: userName,
        signIn: function(newPassword){
            if(password === newPassword){
                return `Sign in success for ${userName}`;
            } else {
                return `Password is incorrect`;
            }
        }
    }
}
let user = signUp("billy", "qwerty");
console.log(user.signIn("a"));
console.log(user.signIn("qwerty"));