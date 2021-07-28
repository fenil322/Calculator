
const gethistory = () => {
    { return document.getElementById('history-value').innerHTML; }
}
function printhistory(num) {
    { document.getElementById('history-value').innerHTML = num; }
}



function printoutput(num) {
    if (num == "") { document.getElementById('output-value').innerHTML = num; }
    else { document.getElementById('output-value').innerHTML = getFormattedNumber(num); }
}
const getoutput = () => {
    return document.getElementById('output-value').innerHTML;
}



function getFormattedNumber(num) {
    if (num == "-") {
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function getreversNumber(num) {
    return Number(num.replace(/,/g, ''));
}




let operator = document.getElementsByClassName('operator');
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', () => {
        if (operator[i].id == 'clear')
           { 
               printoutput('');
               printhistory('');

           }

        else if (operator[i].id == 'backapace') {
            var output = getreversNumber(getoutput()).toString();
            if (output) {
                output = output.substr(0, output.length - 1);
                printoutput(output);
            }
        }
        else {
            var output = getoutput();
            var history = gethistory();
            if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }
            }
            if (output != ""|| history!="") {
                output= output==""?output: getreversNumber(output);
				history=history+output;
                if (operator[i].id == '=') {
                    var result = eval(history);
                    printoutput(result);
                    printhistory("");
                }
                else {
                    history = history + operator[i].id;
                    printhistory(history);
                    printoutput("");
                }
            }
        }
    });
}

let number = document.getElementsByClassName('number');
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', () => {
        let outputnum = getreversNumber(getoutput());
        if (outputnum != NaN) {
            outputnum = outputnum + number[i].id;
            printoutput(outputnum);
        }

    });
}
