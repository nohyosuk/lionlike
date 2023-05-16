var text = document.getElementById('Input');
var button = document.getElementById('button1');
var creat = document.getElementById('creat');

button.addEventListener('click', function() {
    if(text.value == "") {
        alert("Please input your text");
        return;
    }
    else{
        var crt =  document.createElement('li');   
        console.log(text.value);
        crt.innerText = text.value;
        creat.appendChild(crt);    
    }
 
});

