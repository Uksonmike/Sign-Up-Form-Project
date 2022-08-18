// get create account button
const button = document.querySelector('.btn');

// add and event listener to listen to a click event
button.addEventListener('click', function(){
    // get inputs values
    const password = document.getElementById('pwd').value;
    const passwordComfirm = document.getElementById('pwd-2').value;
    // use if statement to compare both values
    if(password !== passwordComfirm){
        document.getElementById('pwd').style.border = '2px solid rgba(255, 21, 21, 0.712)';
        document.getElementById('pwd-2').style.border = '2px solid rgba(255, 21, 21, 0.712)';
        document.querySelector('.error').style.display = "block"
        setTimeout(function(){
            const error = document.querySelector('.error');
            error.style.display = "none";
        },3000)
}
})