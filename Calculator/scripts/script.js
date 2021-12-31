function removeLast(){
    let value = document.getElementById('presentation').value;
    document.getElementById('presentation').value=value.substr(0,value.length-1);
}

function reset(){
    document.getElementById('presentation').value="";
    document.getElementById("answerDisplay").getElementsByTagName("span")[0].innerHTML="";
}

// ValidateStringAndBuildArray
function validateString(inputString){
    const mathOperators = ["+", "-", ".", "/", "*"];
    let newArr = [];
    let index = 0;
    if(mathOperators.includes(inputString[0]) || mathOperators.includes(inputString[-1])){
        return 0;
    }
    for (let i = 1; i < inputString.length - 1; i++){
        if (mathOperators.includes(inputString[i]) && mathOperators.includes(inputString[i+1])){
            return 0;
        }
    }
    mathOperators.splice(2,1);
    // Build the array.
    for (let j = 0; j<inputString.length -1; j++){
        if (mathOperators.includes(inputString[j])){
            newArr.push(inputString.slice(index, j))
            newArr.push(inputString[j])
            index = j+1;
        }
    }
    newArr.push(inputString.slice(index,inputString.length));
    return newArr;
}

function CalculateString(){
    let stackArr = [];
    let inputString = document.getElementById('presentation').value;
    const multDiv = ["*", "/"];
    let temp = "";
    switch(inputString){
        case "":
            document.getElementById('presentation').value = "";
            document.getElementById("answerDisplay").getElementsByTagName("span")[0].innerHTML = "Empty string nothing to calculate!";
        default:
            stackArr = validateString(inputString);
            if (stackArr === 0){
                document.getElementById("answerDisplay").getElementsByTagName("span")[0].innerHTML = "Invalid input error!";
                document.getElementById('presentation').value = "";
                return 0;
            }
            // Calculate mult and divide first.
            for (let i=1; i<stackArr.length-1; i++){
                if (stackArr[i] === "*"){
                    temp = Number(stackArr[i-1]) * Number(stackArr[i+1]);
                    stackArr.splice(i+1, 1);
                    stackArr.splice(i, 1);
                    stackArr.splice(i-1, 1,String(temp));
                    i = 0;
                        
                }
                else if (stackArr[i] === "/"){
                    temp = Number(stackArr[i-1]) / Number(stackArr[i+1]);
                    stackArr.splice(i+1, 1);
                    stackArr.splice(i, 1);
                    stackArr.splice(i-1, 1,String(temp));
                    i = 0;
                }
            }
            for (let i=1; i<stackArr.length-1; i++){
                if (stackArr[i] === "+"){
                    temp = Number(stackArr[i-1]) + Number(stackArr[i+1]);
                    stackArr.splice(i+1, 1);
                    stackArr.splice(i, 1);
                    stackArr.splice(i-1, 1,String(temp));
                    i = 0;
                }
                else if (stackArr[i] === "-"){
                    temp = Number(stackArr[i-1]) - Number(stackArr[i+1]);
                    stackArr.splice(i+1, 1);
                    stackArr.splice(i, 1);
                    stackArr.splice(i-1, 1,String(temp));
                    i = 0;
                }
            }
            if (stackArr[0] !== Infinity){
                document.getElementById('presentation').value = "";
                document.getElementById("answerDisplay").getElementsByTagName("span")[0].innerHTML = "Error division with zero!"; 
            }
            else{
                document.getElementById('presentation').value = "";
                document.getElementById("answerDisplay").getElementsByTagName("span")[0].innerHTML = stackArr[0];
            }
            return;
    }

}
