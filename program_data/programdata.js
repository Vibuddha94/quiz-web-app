export let userName = '';

export let setName =  (name) => {
    userName = name;
}

export const questions = [];

export function getOutPut(arr,count) {
    return  `<h1 class="font-semibold text-2xl mb-10">${count}.${arr[count-1].ques}</h1>
                <div class=" has-checked:bg-green-100 inline-flex items-center w-full p-2 rounded-lg">
                    <label for="a1"
                        class="w-5 h-5 rounded-full border-2 border-green-500 cursor-pointer relative flex items-center justify-center peer-checked:border-green-500">
                        <input type="radio" id="a1" value="${arr[count-1].ans1}" name="answers" class="peer hidden">
                        <span
                            class="w-2.5 h-2.5 bg-green-500 rounded-full scale-0 peer-checked:scale-120 transition-transform duration-300">
                        </span>
                    </label>
                    <label for="a1" class="ml-5 text-lg cursor-pointer">${arr[count-1].ans1}</label>
                </div>
                <div class=" has-checked:bg-green-100 inline-flex items-center w-full p-2 rounded-lg">
                    <label for="a2"
                        class="w-5 h-5 rounded-full border-2 border-green-500 cursor-pointer relative flex items-center justify-center peer-checked:border-green-500">
                        <input type="radio" id="a2" value="${arr[count-1].ans2}" name="answers" class="peer hidden">
                        <span
                            class="w-2.5 h-2.5 bg-green-500 rounded-full scale-0 peer-checked:scale-120 transition-transform duration-300">
                        </span>
                    </label>
                    <label for="a2" class="ml-5 text-lg cursor-pointer">${arr[count-1].ans2}</label>
                </div>
                <div class=" has-checked:bg-green-100 inline-flex items-center w-full p-2 rounded-lg">
                    <label for="a3"
                        class="w-5 h-5 rounded-full border-2 border-green-500 cursor-pointer relative flex items-center justify-center peer-checked:border-green-500">
                        <input type="radio" id="a3" value="${arr[count-1].ans3}" name="answers" class="peer hidden">
                        <span
                            class="w-2.5 h-2.5 bg-green-500 rounded-full scale-0 peer-checked:scale-120 transition-transform duration-300">
                        </span>
                    </label>
                    <label for="a3" class="ml-5 text-lg cursor-pointer">${arr[count-1].ans3}</label>
                </div>
                <div class=" has-checked:bg-green-100 inline-flex items-center w-full p-2 rounded-lg">
                    <label for="a4"
                        class="w-5 h-5 rounded-full border-2 border-green-500 cursor-pointer relative flex items-center justify-center peer-checked:border-green-500">
                        <input type="radio" id="a4" value="${arr[count-1].ans4}" name="answers" class="peer hidden">
                        <span
                            class="w-2.5 h-2.5 bg-green-500 rounded-full scale-0 peer-checked:scale-120 transition-transform duration-300">
                        </span>
                    </label>
                    <label for="a4" class="ml-5 text-lg cursor-pointer">${arr[count-1].ans4}</label>
                </div>` ;
}

const ques1 = {
    ques: "What does HTML stand For ?",
    ans1: "Hyper Text Markup Language",
    ans2: "Hyper Text Preprocessor",
    ans3: "Hyper Text Multiple Language",
    ans4: "Hyper Tool Multi Language",
    correct: "Hyper Text Markup Language"
};
questions.push(ques1);

const ques2 = {
    ques: "What does CSS stand for?",
    ans1: "Common Style Sheet",
    ans2: "Colorful Style Sheet",
    ans3: "Computer Style Sheet",
    ans4: "Cascading Style Sheets",
    correct: "Cascading Style Sheets"
};
questions.push(ques2);

const ques3 = {
    ques: "What does JS stand for?",
    ans1: "Java Source",
    ans2: "JavaScript",
    ans3: "Just Script",
    ans4: "Jumbled Script",
    correct: "JavaScript"
};
questions.push(ques3);

const ques4 = {
    ques: "Which HTML attribute is used to define inline styles?",
    ans1: "class",
    ans2: "style",
    ans3: "font",
    ans4: "styles",
    correct: "style"
};
questions.push(ques4);

const ques5 = {
    ques: "Which property is used to change the background color in CSS?",
    ans1: "color",
    ans2: "bgcolor",
    ans3: "background-color",
    ans4: "background",
    correct: "background-color"
};
questions.push(ques5);
