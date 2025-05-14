import { userName, setName, questions, getOutPut } from "./program_data/programdata.js"
//import timer from "./program_data/timer.js";


window.onload = setName(new URLSearchParams(window.location.search).get('name'));
document.getElementById('name').innerText = userName

let startSeconds = 20;
let count = 1;
let correctCount = 0;
let output = getOutPut(questions, count);

document.getElementById('outdisplay').innerHTML = output;

window.nextQues = () => {
    const answer = document.querySelector('input[name="answers"]:checked')
    if (count > questions.length) { 
        window.location.href = `index.html`
        return;
    }
    if (!answer) { 
        alert("Please select an answer before next..");
        return;
    }
    if (answer.value === questions[count-1].correct) {
        correctCount++;
    }
    
    if (count === questions.length) { 
        output = `<h1 class="text-7xl text-center font-bold">${correctCount}</h1>
            <h1 class="text-6xl text-center mt-10">Correct Answers</h1>`;
        document.getElementById('outdisplay').innerHTML = output;
        document.getElementById("time").innerText = '';
        if (correctCount === 5) {
            document.getElementById('next').textContent = "Logout";
            count++;
        } else {
            document.getElementById('next').textContent = "Try Again";
            count++;
        }
    } else {
        count++;
        output = getOutPut(questions, count);
        startSeconds = 20;
        document.getElementById('outdisplay').innerHTML = output;
    }
}

setInterval(timer, 1000); 

function timer() {
    if (startSeconds < 0 ) {
        nextQues();
        startSeconds = 20
        return
    }
    const timerEliment = document.getElementById("time");
    let seconds = startSeconds < 10 ? '0' + startSeconds : startSeconds;
    timerEliment.innerText = count <= questions.length || startSeconds < 6 ? `00:${seconds}` : '';
    startSeconds--;
}