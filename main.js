import { userName, setName, questions,getOutPut } from "./program_data/programdata.js"

window.onload = setName(new URLSearchParams(window.location.search).get('name'));
document.getElementById('name').innerText = userName

let count = 1;
let output = getOutPut(questions, count);

document.getElementById('outdisplay').innerHTML = output;

let correctCount = 0;
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
            <h1 class="text-6xl text-center mt-10">Correct Answers</h1>`
        document.getElementById('outdisplay').innerHTML = output;
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

        document.getElementById('outdisplay').innerHTML = output;
    }
}