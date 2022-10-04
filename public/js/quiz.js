// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const qNumber = document.getElementById("qNumber");
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
const prevQuestion = document.getElementById('prevQuestion');
const nextQuestion = document.getElementById('nextQuestion');

// create our questions

let questions = [
    {
        _id: "1",
        question: "What is the name of this material?",
        imgSrc: "./material/12-mc.jpeg",
        choiceA: "12-3 MC",
        choiceB: "12-2 MC",
        choiceC: "12-3 Romex",
        choiceD: "12-2 Romex",
        correct: "B",
    }, {
        _id: "2",
        question: "What is the name of this material?",
        imgSrc: "./material/90-degree-liquid-tight-connector.png",
        choiceA: "90 EMT Connector",
        choiceB: "90 Romex Connector",
        choiceC: "90 MC Connector",
        choiceD: "90 Liquid Tight Connector",
        correct: "D"
    }, {
        _id: "3",
        question: "What is the name of this material?",
        imgSrc: "./material/90-degree-mc-connector.jpeg",
        choiceA: "90 Liquid Tight Connector",
        choiceB: "90 Romex Connector",
        choiceC: "90 MC Connector",
        choiceD: "90 EMT Connector",
        correct: "C"
    }, {
        _id: "4",
        question: "What is the REAL name of this material?",
        imgSrc: "./material/all-thread.jpeg",
        choiceA: "Screw Thread",
        choiceB: "Twist Thread",
        choiceC: "Threaded Rod",
        choiceD: "Steel Rod",
        correct: "C"
    }, {
        _id: "5",
        question: "What is the name of this material?",
        imgSrc: "./material/bat-wing.png",
        choiceA: "Bird Wing",
        choiceB: "M Bracket",
        choiceC: "Ceiling Strap",
        choiceD: "Bat Wing",
        correct: "D"
    }, {
        _id: "6",
        question: "What is the name of this material?",
        imgSrc: "./material/beam-clamp.png",
        choiceA: "Beam Clamp",
        choiceB: "Shark Teeth",
        choiceC: "Box Holder",
        choiceD: "Box Insert",
        correct: "A"
    }, {
        _id: "7",
        question: "What is the name of this material?",
        imgSrc: "./material/bell-box-cover.png",
        choiceA: "J-Box",
        choiceB: "Bell Box Cover",
        choiceC: "Shallow Box Cover",
        choiceD: "Deep Box Cover",
        correct: "B"
    }, {
        _id: "8",
        question: "What is the name of this material?",
        imgSrc: "./material/box-bracket.png",
        choiceA: "Straight Brackets",
        choiceB: "Box Hanger",
        choiceC: "Box Bracket",
        choiceD: "Metal Sliders",
        correct: "C"
    }, {
        _id: "9",
        question: "What is the name of this material?",
        imgSrc: "./material/channel-lock.png",
        choiceA: "Needle Nose",
        choiceB: "Dykes",
        choiceC: "Channel Lock",
        choiceD: "Hammer",
        correct: "C"
    }, {
        _id: "10",
        question: "What is the name of this material?",
        imgSrc: "./material/compression-emt-connector.png",
        choiceA: "Romex Connector",
        choiceB: "MC Connector",
        choiceC: "PVC Connector",
        choiceD: "EMT Connector",
        correct: "D"
    }, {
        _id: "11",
        question: "What is the name of this material?",
        imgSrc: "./material/compression-emt-coupling.png",
        choiceA: "Romex Coupling",
        choiceB: "MC Coupling",
        choiceC: "PVC Coupling",
        choiceD: "EMT Coupling",
        correct: "D"
    }, {
        _id: "12",
        question: "What is the name of this material?",
        imgSrc: "./material/conduit-hanger.png",
        choiceA: "EMT Hanger",
        choiceB: "Romex Hanger",
        choiceC: "Romex Strap",
        choiceD: "Strut",
        correct: "A"
    }, {
        _id: "13",
        question: "What is the name of this material?",
        imgSrc: "./material/cut-in-box.png",
        choiceA: "Receptacle Box",
        choiceB: "Cut In Box",
        choiceC: "Four Square",
        choiceD: "Shallow box",
        correct: "B"
    }, {
        _id: "14",
        question: "What is the SLANG name of this tool",
        imgSrc: "./material/diagonal-cutting-pliers.png",
        choiceA: "Channel Locks",
        choiceB: "Lineman's",
        choiceC: "Dykes",
        choiceD: "Wire cutters",
        correct: "C"
    }, {
        _id: "15",
        question: "What is the name of this material?",
        imgSrc: "./material/drop-in-anchor.png",
        choiceA: "Threaded Rod Coupling",
        choiceB: "Bullet",
        choiceC: "Threaded Bullet",
        choiceD: "Drop-In Anchor",
        correct: "D"
    }, {
        _id: "16",
        question: "What is the name of this material?",
        imgSrc: "./material/duplex-connector.jpeg",
        choiceA: "EMT Duplex Connector",
        choiceB: "PVC Connector",
        choiceC: "Rigid Connector",
        choiceD: "MC Duplex Connector",
        correct: "D"
    }, {
        _id: "17",
        question: "What is the name of this material?",
        imgSrc: "./material/easy-anchor.png",
        choiceA: "Easy Anchor",
        choiceB: "Screw In",
        choiceC: "Quick Set",
        choiceD: "Chingadera",
        correct: "A"
    }, {
        _id: "18",
        question: "What is the name of this material?",
        imgSrc: "./material/electrical-box-bracket.png",
        choiceA: "Four Square Hanger",
        choiceB: "Electrical Box Bracket",
        choiceC: "All Purpose Bracket",
        choiceD: "Self Tapper Bracket",
        correct: "B"
    }, {
        _id: "19",
        question: "What is the name of this material?",
        imgSrc: "./material/emt.jpeg",
        choiceA: "MC",
        choiceB: "PVC",
        choiceC: "Romex",
        choiceD: "EMT",
        correct: "D"
    }, {
        _id: "20",
        question: "What is the name of this material?",
        imgSrc: "./material/extension-ring.png",
        choiceA: "Four Square",
        choiceB: "Four Eleven",
        choiceC: "Extension Ring",
        choiceD: "Electrical Box",
        correct: "C"
    }, {
        _id: "22",
        question: "What is the name of this material?",
        imgSrc: "./material/f-bracket.png",
        choiceA: "Box Bracket",
        choiceB: "Easy Anchor",
        choiceC: "Cut Out Bracket",
        choiceD: "F Bracket",
        correct: "D"
    }, {
        _id: "23",
        question: "What is the name of this material?",
        imgSrc: "./material/fish-tape.png",
        choiceA: "Fish Tape",
        choiceB: "Metal Tape",
        choiceC: "Electrical Tape",
        choiceD: "Conduit Tape",
        correct: "A"
    }, {
        _id: "24",
        question: "What is the name of this material?",
        imgSrc: "./material/flange-clip.png",
        choiceA: "Flange Clip",
        choiceB: "Hanger Clip",
        choiceC: "Clip For Pipe",
        choiceD: "Clip For MC",
        correct: "A"
    }, {
        _id: "25",
        question: "What is the name of this material?",
        imgSrc: "./material/flex-connector.png",
        choiceA: "Squeeze Connector",
        choiceB: "Rigid Connector",
        choiceC: "MC Connector",
        choiceD: "Oversized Connector",
        correct: "A"
    }, {
        _id: "26",
        question: "What is the name of this material?",
        imgSrc: "./material/flex.jpeg",
        choiceA: "Twist",
        choiceB: "Spiral",
        choiceC: "Swirl",
        choiceD: "Flex",
        correct: "D"
    }, {
        _id: "27",
        question: "What is the name of this material?",
        imgSrc: "./material/four-square-box-cover.png",
        choiceA: "Four-Square Box Cover",
        choiceB: "Metal Plate",
        choiceC: "Electrical Plate",
        choiceD: "Receptacle Box Cover",
        correct: "A"
    }, {
        _id: "28",
        question: "What is the name of this material?",
        imgSrc: "./material/four-square-box.png",
        choiceA: "Electrical Box",
        choiceB: "EMT Box",
        choiceC: "Four Square",
        choiceD: "Splice Box",
        correct: "C"
    }, {
        _id: "29",
        question: "What is the name of this material?",
        imgSrc: "./material/gfci.png",
        choiceA: "Three Way",
        choiceB: "Ground Friction Interrupter (GFI)",
        choiceC: "Ground Fault Circuit Interrupter (GFCI)",
        choiceD: "Arc Fault Circuit Interrupter (AFCI)",
        correct: "C"
    }, {
        _id: "30",
        question: "What is the name of this product?",
        imgSrc: "./material/grounding-bushing.jpeg",
        choiceA: "Grounding Bushing",
        choiceB: "Panel Bushing",
        choiceC: "Bonding Connector",
        choiceD: "Disconnect Bushing",
        correct: "A"
    }, {
        _id: "31",
        question: "What is the name of this Tool?",
        imgSrc: "./material/hammer-drill.png",
        choiceA: "Hammer Drill",
        choiceB: "Chisel Drill",
        choiceC: "Impact Drill",
        choiceD: "Screw Drill",
        correct: "A"
    }, {
        _id: "32",
        question: "What is the name of this material?",
        imgSrc: "./material/hex-rod-coupling.png",
        choiceA: "Romex Coupling",
        choiceB: "RMC Coupling",
        choiceC: "EMT Coupling",
        choiceD: "Hex Rod Coupling",
        correct: "D"
    }, {
        _id: "33",
        question: "What is the name of this material?",
        imgSrc: "./material/hoelsaw-arbor.png",
        choiceA: "Hole Saw Arbor",
        choiceB: "Hole Saw",
        choiceC: "Hole Saw Connector",
        choiceD: "Hole Saw Holder",
        correct: "A"
    }, {
        _id: "34",
        question: "What is the common name of this material?",
        imgSrc: "./material/jet-line.png",
        choiceA: "Jet-Line",
        choiceB: "Helicopter-Line",
        choiceC: "Pulling Electrical-Line",
        choiceD: "Mill Tape",
        correct: "A"
    }, {
        _id: "35",
        question: "What is the name of this material?",
        imgSrc: "./material/linemans-pliers.png",
        choiceA: "Needle Nose Pliers",
        choiceB: "Diagonal Cutter Pliers",
        choiceC: "Hammer Pliers",
        choiceD: "Lineman's Pliers",
        correct: "D"
    }, {
        _id: "36",
        question: "What is the name of this material?",
        imgSrc: "./material/liquid-tight-connector.png",
        choiceA: "Grounding Bushing",
        choiceB: "Liquid Tight Connector",
        choiceC: "EMT Connector",
        choiceD: "Flex Connector",
        correct: "B"
    }, {
        _id: "37",
        question: "What is the name of this material?",
        imgSrc: "./material/mud-ring.png",
        choiceA: "Receptacle Ring",
        choiceB: "Mud Ring",
        choiceC: "Receptacle Box Cover",
        choiceD: "Sheat Rock Ring",
        correct: "B"
    }, {
        _id: "38",
        question: "What is the name of this tool?",
        imgSrc: "./material/needle-nose-side-cutters.png",
        choiceA: "Long Pliers",
        choiceB: "Dykes",
        choiceC: "Needle Nose",
        choiceD: "Linesman's Pliers",
        correct: "C"
    }, {
        _id: "39",
        question: "What is the name of this material?",
        imgSrc: "./material/nut-driver.png",
        choiceA: "Nut Driver",
        choiceB: "Washer Driver",
        choiceC: "Screw Driver",
        choiceD: "Bolt Driver",
        correct: "A"
    }, {
        _id: "40",
        question: "What is the name of this material?",
        imgSrc: "./material/one-hole-strap.jpeg",
        choiceA: "Wall Strap",
        choiceB: "Metal Strap",
        choiceC: "Self Strap",
        choiceD: "One Hole Strap",
        correct: "D"
    }, {
        _id: "41",
        question: "What is the name of this material?",
        imgSrc: "./material/pigtail.jpeg",
        choiceA: "Bonding Wire",
        choiceB: "Sting Gray",
        choiceC: "Pigtail",
        choiceD: "Ground Wire",
        correct: "C"
    }, {
        _id: "42",
        question: "What is the name of this material?",
        imgSrc: "./material/push-in-flange-clip.png",
        choiceA: "EMT Connector",
        choiceB: "EMT Holder",
        choiceC: "Push In Flange Clip",
        choiceD: "Push In EMT",
        correct: "C"
    }, {
        _id: "43",
        question: "What is the name of this material?",
        imgSrc: "./material/push-penny.jpeg",
        choiceA: "Push Penny",
        choiceB: "Chinese Money",
        choiceC: "Push Quarter",
        choiceD: "Push Money",
        correct: "A"
    }, {
        _id: "44",
        question: "What is the name of this material?",
        imgSrc: "./material/pvc-conduit.jpeg",
        choiceA: "EMT",
        choiceB: "PVC",
        choiceC: "MC",
        choiceD: "RMC",
        correct: "B"
    }, {
        _id: "45",
        question: "What is the name of this material?",
        imgSrc: "./material/pvc-coupling.jpeg",
        choiceA: "EMT Coupling",
        choiceB: "PVC Coupling",
        choiceC: "MC Coupling",
        choiceD: "RMC Coupling",
        correct: "B"
    }, {
        _id: "46",
        question: "What is the name of this material?",
        imgSrc: "./material/pvc-elbow-90.jpeg",
        choiceA: "Change Direction",
        choiceB: "Turn Over",
        choiceC: "Offset",
        choiceD: "Elbow ",
        correct: "D"
    }, {
        _id: "47",
        question: "What is the SLANG name of this material?",
        imgSrc: "./material/red-devil.png",
        choiceA: "Red Tip",
        choiceB: "Red Plastic",
        choiceC: "Red Devil",
        choiceD: "Red Angel",
        correct: "C"
    }, {
        _id: "48",
        question: "What is the name of this material?",
        imgSrc: "./material/reducing-bushing.jpeg",
        choiceA: "Reducing Bushing",
        choiceB: "EMT Connector",
        choiceC: "Rigid Connectors",
        choiceD: "Rigid Bushing",
        correct: "A"
    }, {
        _id: "49",
        question: "What is the SLANG name of this material?",
        imgSrc: "./material/reducing-washer.jpeg",
        choiceA: "One hole Strap",
        choiceB: "Mexican Pesos",
        choiceC: "Reducing Money",
        choiceD: "Chinese Money",
        correct: "D"
    }, {
        _id: "50",
        question: "What is the name of this material?",
        imgSrc: "./material/rigid-coupling.jpeg",
        choiceA: "EMT Coupling",
        choiceB: "Flex Coupling",
        choiceC: "Rigid Coupling",
        choiceD: "PVC Coupling",
        correct: "C"
    }, {
        _id: "51",
        question: "What is the name of this material?",
        imgSrc: "./material/self-tapper.png",
        choiceA: "Metal Screw",
        choiceB: "Self Tapper",
        choiceC: "Sheet Rock Screw",
        choiceD: "Metal Tapper",
        correct: "B"
    }, {
        _id: "52",
        question: "What is the name of this material?",
        imgSrc: "./material/set-screw-coupling.png",
        choiceA: "Set Screw Coupling",
        choiceB: "Set Screw Connector",
        choiceC: "Set Screw Strap",
        choiceD: "Set Screw Holder",
        correct: "A"
    }, {
        _id: "53",
        question: "What is the name of this material?",
        imgSrc: "./material/set-screw-emt-connector.png",
        choiceA: "EMT Connector",
        choiceB: "MC Connector",
        choiceC: "Rigid Connector",
        choiceD: "Flex Connector",
        correct: "A"
    }, {
        _id: "54",
        question: "What is the name of this material?",
        imgSrc: "./material/side-mount-flange-clip.png",
        choiceA: "Side Mount Connector",
        choiceB: "Side Mount Flange Clip ",
        choiceC: "Straight Flange Clip",
        choiceD: "90 Flange Clip",
        correct: "B"
    }, {
        _id: "55",
        question: "What is the name of this material?",
        imgSrc: "./material/side-mount-push-in-flange-clip.png",
        choiceA: "Side Mount Push In Flange Clip",
        choiceB: "Side Mount 90 Flange Clip",
        choiceC: "Side Mount Straight Clip",
        choiceD: "EMT Clip",
        correct: "A"
    }, {
        _id: "56",
        question: "What is the name of this material?",
        imgSrc: "./material/single-gang-industrial-box-cover.png",
        choiceA: "Single Gang Box Cover",
        choiceB: "Commercial cover",
        choiceC: "Device Box Cover",
        choiceD: "Single Gang Industrial Box Cover",
        correct: "D"
    }, {
        _id: "57",
        question: "What is the name of this material?",
        imgSrc: "./material/single-gang-low-voltage-mounting-plate.png",
        choiceA: "Receptacle Mounting Plate",
        choiceB: "Metal Punting Plate",
        choiceC: "Single Gang Low Voltage Mounting Plate",
        choiceD: "Four Square Mounting Plate",
        correct: "C"
    }, {
        _id: "58",
        question: "What is the name of this material?",
        imgSrc: "./material/snap-in-connector.png",
        choiceA: "Snap In Connector",
        choiceB: "EMT Connector",
        choiceC: "Easy-Connect",
        choiceD: "Quick Connector",
        correct: "A"
    }, {
        _id: "59",
        question: "What is the name of this material?",
        imgSrc: "./material/squeeze-connector.jpeg",
        choiceA: "Screw Connector",
        choiceB: "Squeeze Connector",
        choiceC: "Big Flex Connector",
        choiceD: "Transformer Connector",
        correct: "B"
    }, {
        _id: "60",
        question: "What is the name of this material?",
        imgSrc: "./material/step-bit.png",
        choiceA: "Knock Out",
        choiceB: "Hole Expander",
        choiceC: "Piggy Bit",
        choiceD: "Step Bit",
        correct: "D"
    }, {
        _id: "61",
        question: "What is the name of this material?",
        imgSrc: "./material/strut-strap.jpeg",
        choiceA: "Strut EMT Hanger",
        choiceB: "Strut Holder",
        choiceC: "Strut Connector",
        choiceD: "Strut Strap",
        correct: "D"
    }, {
        _id: "62",
        question: "What is the name of this material?",
        imgSrc: "./material/t-bar-box-hanger.png",
        choiceA: "T-Bar Box Hanger",
        choiceB: "Bar Hanger",
        choiceC: "Four Square Holder",
        choiceD: "Electrical Box Holder",
        correct: "A"
    }, {
        _id: "63",
        question: "What is the name of this material?",
        imgSrc: "./material/tapcon.png",
        choiceA: "Self Tapper",
        choiceB: "Blue Bolt",
        choiceC: "Tapcon",
        choiceD: "Blue Screw",
        correct: "C"
    }, {
        _id: "64",
        question: "What is the name of this material?",
        imgSrc: "./material/turn-lock-plug.png",
        choiceA: "Turn Lock Plug",
        choiceB: "Turn Plug",
        choiceC: "Circular Plug",
        choiceD: "Circular Outlet",
        correct: "A"
    }, {
        _id: "65",
        question: "What is the name of this material?",
        imgSrc: "./material/two-device-mud-ring.png",
        choiceA: "Double Gang Receptacle Ring",
        choiceB: "Two Device Mud Ring",
        choiceC: "Single Device Mud Ring",
        choiceD: "Receptacle Ring",
        correct: "B"
    }, {
        _id: "66",
        question: "What is the name of this material?",
        imgSrc: "./material/unistrut.jpeg",
        choiceA: "Unistrut",
        choiceB: "Rigid Metal",
        choiceC: "Metal Strut",
        choiceD: "Light Hanger",
        correct: "A"
    }, {
        _id: "67",
        question: "What is the name of this material?",
        imgSrc: "./material/universal-beam-clamp.png",
        choiceA: "Strut Clamp",
        choiceB: "Tin Metal Clamp",
        choiceC: "Box Clamp",
        choiceD: "Universal Beam Clamp",
        correct: "D"
    }, {
        _id: "68",
        question: "What is the name of this material?",
        imgSrc: "./material/wall-pack.png",
        choiceA: "Wall Pack",
        choiceB: "Wall Light",
        choiceC: "Power Pack",
        choiceD: "Power Light",
        correct: "A"
    }, {
        _id: "69",
        question: "What is the name of this material?",
        imgSrc: "./material/weather-proof-box.png",
        choiceA: "PVC Electrical Box",
        choiceB: "Weather Proof Box",
        choiceC: "Double Device Box",
        choiceD: "Single Device Box",
        correct: "B"
    }, {
        _id: "70",
        question: "What is the name of this material?",
        imgSrc: "./material/wire-strippers.png",
        choiceA: "Cutters",
        choiceB: "Paid Stripper",
        choiceC: "Easy Stripper",
        choiceD: "Wire Stripper",
        correct: "D"
    }

    // Add Plastic Bushing
]

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 20;
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;



//render next question
nextQuestion.onclick = function () {
    runningQuestion++;
    renderQuestion();

}
// render previous question
prevQuestion.onclick = function () {
    runningQuestion--;
    renderQuestion();
}

// render a question
function renderQuestion() {
    let q = questions[runningQuestion];

    qNumber.innerHTML = "<p>" + q._id + "</p>"
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
        progress.innerHTML += "<div class='prog' id=" + qIndex + ">" + qIndex + "</div>";
    }
}

// counter render

// function renderCounter(){
//     if(count <= questionTime){
//         counter.innerHTML = count;
//         timeGauge.style.width = count * gaugeUnit + "px";
//         count++
//     }else{
//         count = 0;
//         // change progress color to red
//         answerIsWrong();
//         if(runningQuestion < lastQuestion){
//             runningQuestion++;
//             renderQuestion();
//         }else{
//             // end the quiz and show the score
//             clearInterval(TIMER);
//             scoreRender();
//         }
//     }
// }

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
    // count = 0;
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

