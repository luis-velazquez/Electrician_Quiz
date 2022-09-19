// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question: "How is conduit classified?",
        imgSrc: "img/html.png",
        choiceA: "Wall Thickness",
        choiceB: "Mechanical Stiffness",
        choiceC: "Material Used",
        choiceD: "All Of The Above",
        correct: "D"
    }, {
        question: "How many wires are inside of a 12-2 MC",
        imgSrc: "img/css.png",
        choiceA: "2",
        choiceB: "3",
        choiceC: "4",
        choiceD: "None of the above.",
        correct: "B"
    }, {
        question: "How many wires are inside of a 12-3 MC",
        imgSrc: "img/js.png",
        choiceA: "2",
        choiceB: "3",
        choiceC: "4",
        choiceD: "None of the above.",
        correct: "C"
    }, {
        question: "What does MC mean?",
        imgSrc: "",
        choiceA: "Metal Clad",
        choiceB: "Multi-Contact",
        choiceC: "Master of Ceremonies",
        choiceD: "None of the above.",
        correct: "A"
    }, {
        question: "What are the 3 phase colors in a 120/240 volt pannel?",
        imgSrc: "",
        choiceA: "Brown, Orange, Yellow",
        choiceB: "Black, Red, Blue",
        choiceC: "Black, Red, White",
        choiceD: "Red, White, blue.",
        correct: "B"
    }, {
        question: "What are the 3 phase colors in a 277/480 volt pannel?",
        imgSrc: "",
        choiceA: "Brown, Orange, Yellow",
        choiceB: "Black, Red, Blue",
        choiceC: "Black, Red, White",
        choiceD: "Red, White, blue.",
        correct: "A"
    }, {
        question: "According to section 358.30 of the NEC code book, What are the minimum requirements for Securing & supporting EMT?",
        imgSrc: "",
        choiceA: "Strap within 1 feet of any box, panel, or termination point.",
        choiceB: "Strap within 3 feet of any box, panel, or termination point.",
        choiceC: "Stap Every 10 feet.",
        choiceD: "Both A & C",
        correct: "D"
    }, {
        question: "What are the maximum amount of 90 degree bends allowed in a conduit run?",
        imgSrc: "",
        choiceA: "3",
        choiceB: "4",
        choiceC: "5",
        choiceD: "6",
        correct: "B"
    }, {
        question: "When reaming the end of a conduit, what tool does the code book say that you should use?",
        imgSrc: "",
        choiceA: "Conduit Reamer",
        choiceB: "Channel Locks",
        choiceC: "Needle Nose",
        choiceD: "The code book does not say you have to ream with any specific tool.",
        correct: "D"
    }, {
        question: "According to NEW Article 330.30, MC cable must be supported and secured at intervals of how many feet",
        imgSrc: "",
        choiceA: "10 feet or less & 3 feet from every termination",
        choiceB: "6 feet of less & 12 inches from every termination",
        choiceC: "5 feet or less & 6 inches from every termination",
        choiceD: "4 feet or less & 1 foot from every termination",
        correct: "B"
    }, {
        question: "What material do you use strap MC cable to ceiling wire?",
        imgSrc: "",
        choiceA: "Conduit Hanger",
        choiceB: "Electrical Tape",
        choiceC: "Bat Wing",
        choicedD: "One-Hole Strap",
        correct: "C"
    }, {
        question: "What Mansory anchor is primaly used to attach items to concrete, brick, or block?",
        imgSrc: "",
        choiceA: "Self-Tapper",
        choiceB: "Tapcon",
        choiceC: "Toggle Bolt",
        choicedD: "All of the above",
        correct: "B"
    }, {
        question: "What is the primary function of a beam clamp?",
        imgSrc: "",
        choiceA: "To securly fasten Threaded Rod on to a ceiling beam",
        choiceB: "",
        choiceC: "",
        choicedD: "All of the above",
        correct: "B"
    }, {
        question: "In a commercial setting what wires will you find inside of an Emergency light fixure that allows dimming",
        imgSrc: "",
        choiceA: "Switch Leg, Emergency, Neutral, Ground, Dimming Positive, Dimming Neutral",
        choiceB: "",
        choiceC: "",
        choicedD: "None of the above",
        correct: "A"
    }
    

];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 20; //20s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

// counter render

function renderCounter() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    } else {
        count = 0;
        // change progress color to red
        answerIsWrong();
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    } else {
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender() {
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score / questions.length);

    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
        (scorePerCent >= 60) ? "img/4.png" :
            (scorePerCent >= 40) ? "img/3.png" :
                (scorePerCent >= 20) ? "img/2.png" :
                    "img/1.png";

    scoreDiv.innerHTML = "<img src=" + img + ">";
    scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
}