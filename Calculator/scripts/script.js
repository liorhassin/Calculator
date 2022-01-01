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
            document.getElementById('presentation').value = "";
            if (stackArr[0] === "Infinity" || stackArr[0] === "-Infinity"){
                document.getElementById("answerDisplay").getElementsByTagName("span")[0].innerHTML = "Error division with zero!";
            }
            else{
                document.getElementById("answerDisplay").getElementsByTagName("span")[0].innerHTML = stackArr[0];
            }
            return;
    }

}

function swapTheme(buttonNum){
    switch(buttonNum){
        case "One":
            let one = document.getElementById('one');
            one.addEventListener('click', function(){
                document.querySelector('body').classList.remove('theme2');
                document.querySelector('body').classList.remove('theme3');
                document.getElementById('dot').classList.remove('theme2');
                document.getElementById('dot').classList.remove('theme3');
                document.getElementById('calcScreen').classList.remove('theme2');
                document.getElementById('calcScreen').classList.remove('theme3');
                document.getElementById('calcBody').classList.remove('theme2');
                document.getElementById('calcBody').classList.remove('theme3');
                for (i=0; i < 15; i++){
                    if (i<3){
                        let temp = 'buttonSpecial' + String(i);
                        document.getElementById(temp).classList.remove('theme2');
                        document.getElementById(temp).classList.remove('theme3');
                    }
                    let temp = 'buttonStandard' + String(i);
                    document.getElementById(temp).classList.remove('theme2');
                    document.getElementById(temp).classList.remove('theme3');
                }
                document.getElementById('topLeftTitle').classList.remove('theme3');
                document.getElementById('topLeftTitle').classList.remove('theme2');
                document.getElementById('topRightButtonTitle').classList.remove('theme3');
                document.getElementById('topRightButtonTitle').classList.remove('theme2');
                document.getElementById('one').classList.remove('theme2');
                document.getElementById('one').classList.remove('theme3');
                document.getElementById('two').classList.remove('theme2');
                document.getElementById('two').classList.remove('theme3');
                document.getElementById('three').classList.remove('theme2');
                document.getElementById('three').classList.remove('theme3');
                document.getElementById('presentation').classList.remove('theme2');
                document.getElementById('presentation').classList.remove('theme3');
                document.getElementById('answerText').classList.remove('theme2');
                document.getElementById('answerText').classList.remove('theme3');
                document.getElementById('backOfSlider').classList.remove('theme2');
                document.getElementById('backOfSlider').classList.remove('theme3');
                document.getElementById('dot').classList.remove('theme2');
                document.getElementById('dot').classList.remove('theme3');

            })
        case "Two":
            let two = document.getElementById('two');
            two.addEventListener('click', function(){
                document.querySelector('body').classList.remove('theme3');
                document.querySelector('body').classList.add('theme2');
                document.getElementById('dot').classList.remove('theme3');
                document.getElementById('dot').classList.add('theme2');
                document.getElementById('calcScreen').classList.remove('theme3');
                document.getElementById('calcScreen').classList.add('theme2');
                document.getElementById('calcBody').classList.remove('theme3');
                document.getElementById('calcBody').classList.add('theme2');
                for (i=0; i < 15; i++){
                    if (i<3){
                        let temp = 'buttonSpecial' + String(i);
                        document.getElementById(temp).classList.remove('theme3');
                        document.getElementById(temp).classList.add('theme2');
                    }
                    let temp = 'buttonStandard' + String(i);
                    document.getElementById(temp).classList.remove('theme3');
                    document.getElementById(temp).classList.add('theme2');
                }
                document.getElementById('topLeftTitle').classList.remove('theme3');
                document.getElementById('topLeftTitle').classList.add('theme2');
                document.getElementById('topRightButtonTitle').classList.remove('theme3');
                document.getElementById('topRightButtonTitle').classList.add('theme2');
                document.getElementById('one').classList.remove('theme3');
                document.getElementById('one').classList.add('theme2');
                document.getElementById('two').classList.remove('theme3');
                document.getElementById('two').classList.add('theme2');
                document.getElementById('three').classList.remove('theme3');
                document.getElementById('three').classList.add('theme2');
                document.getElementById('presentation').classList.remove('theme3');
                document.getElementById('presentation').classList.add('theme2');
                document.getElementById('answerText').classList.remove('theme3');
                document.getElementById('answerText').classList.add('theme2');
                document.getElementById('backOfSlider').classList.remove('theme3');
                document.getElementById('backOfSlider').classList.add('theme2');
                document.getElementById('dot').classList.remove('theme3');
                document.getElementById('dot').classList.add('theme2');
            })
        default:
            let three = document.getElementById('three');
            three.addEventListener('click', function(){
                document.querySelector('body').classList.remove('theme2');
                document.querySelector('body').classList.add('theme3');
                document.getElementById('dot').classList.remove('theme2');
                document.getElementById('dot').classList.add('theme3');
                document.getElementById('calcScreen').classList.remove('theme2');
                document.getElementById('calcScreen').classList.add('theme3');
                document.getElementById('calcBody').classList.remove('theme2');
                document.getElementById('calcBody').classList.add('theme3');
                for (i=0; i < 15; i++){
                    if (i<3){
                        let temp = 'buttonSpecial' + String(i);
                        document.getElementById(temp).classList.remove('theme2');
                        document.getElementById(temp).classList.add('theme3');
                    }
                    let temp = 'buttonStandard' + String(i);
                    document.getElementById(temp).classList.remove('theme2');
                    document.getElementById(temp).classList.add('theme3');
                }
                document.getElementById('topLeftTitle').classList.remove('theme2');
                document.getElementById('topLeftTitle').classList.add('theme3');
                document.getElementById('topRightButtonTitle').classList.remove('theme2');
                document.getElementById('topRightButtonTitle').classList.add('theme3');
                document.getElementById('one').classList.remove('theme2');
                document.getElementById('one').classList.add('theme3');
                document.getElementById('two').classList.remove('theme2');
                document.getElementById('two').classList.add('theme3');
                document.getElementById('three').classList.remove('theme2');
                document.getElementById('three').classList.add('theme3');
                document.getElementById('presentation').classList.remove('theme2');
                document.getElementById('presentation').classList.add('theme3');
                document.getElementById('answerText').classList.remove('theme2');
                document.getElementById('answerText').classList.add('theme3');
                document.getElementById('backOfSlider').classList.remove('theme2');
                document.getElementById('backOfSlider').classList.add('theme3');
                document.getElementById('dot').classList.remove('theme2');
                document.getElementById('dot').classList.add('theme3');
            })
    }
}


