const questions = [
    {
        question: "What is capital of pakistan",
        a: "Islamabad",
        b: "Karachi",
        c: "Lahore",
        d: "Quetta",
        answer: 'a',
    },
    {
        question: "what is capital of uk",
        a: "london",
        b: "Manchester",
        c: "liverpool",
        d: "southHampton",
        answer: 'a',
    },
    {
        question: "what is capital of austrlia",
        a: "sydney",
        b: "camberra",
        c: "melberne",
        d: "perth",
        answer: 'b',
    },
    {
        question: "what is capital of India",
        a: "NewDehli",
        b: "Mumbai",
        c: "karnatwak",
        d: "amritsar",
        answer: 'a',
    },
    {
        question: "what is capital of afghanistan",
        a: "mazar sharif",
        b: "kabul",
        c: "fgfsfg",
        d: "Quefgtta",
        answer: 'b',
    }

]
let questionCount = 0;
let marks = 0;



const optionA = document.getElementById('a_text');
const optionB = document.getElementById('b_text');
const optionC = document.getElementById('c_text');
const optionD = document.getElementById('d_text');


const answerA = document.getElementById('a');
const answerB = document.getElementById('b');
const answerC = document.getElementById('c');
const answerD = document.getElementById('d');
const questiontext = document.getElementById('question');
const submitBtn = document.getElementById("submit")
const quiz = document.getElementById("quiz");

var elementsAnswer

submitBtn.addEventListener("click", () => {
    if (questionCount == 5) {
        quiz.innerHTML = (`your score ${marks} out of 5`)
        return;
    }
    elementsAnswer = document.getElementsByName("answer");
    console.log(elementsAnswer);
    for (i = 0; i < 4; i++) {
        if (elementsAnswer[i].checked) {
            if (elementsAnswer[i].id == questions[questionCount].answer) {
                marks++
                console.log(marks)
                questionCount++
                loadQuiz()
            
            }else{
                questionCount++
                loadQuiz()
            
            };


            
        }
    }

    deseleact()
})
function deseleact(){
    for (i = 0; i < 4; i++) {
        if (elementsAnswer[i].checked){
            elementsAnswer[i].checked = false;
        }}
}

loadQuiz()

function loadQuiz() {

    questiontext.innerText = questions[questionCount].question;
    optionA.innerText = questions[questionCount].a;
    optionB.innerText = questions[questionCount].b;
    optionC.innerText = questions[questionCount].c;
    optionD.innerText = questions[questionCount].d;
}