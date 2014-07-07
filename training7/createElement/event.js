function OK(){
    var text = document.getElementById('txt_in').value;
    document.getElementById('out').innerHTML = text;
    }
    var push = document.getElementById('btn');
    push.onclick = OK;