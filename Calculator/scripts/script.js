function removeLast(){
    let value = document.getElementById('presentation').value;
    document.getElementById('presentation').value=value.substr(0,value.length-1);
}

function CalculateString(){
    let stackArr = [];
    let inputString = document.getElementById('presentation').value;
}