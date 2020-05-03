

// var  ["What Day Did Pearl Harbor Happen?","Who was a former dictator of Cuba?","Who was the vice president to Ronald Reagan?","Who invented the atomic bomb?"]
var questionOne = {
    Q: "What Day Did Pearl Harbor Happen?",
    answers: {
        A: "December 14th 1942",
        B: "December 7th 1941",
        C: "October 3rd 1939",
        D: "July 2nd 1941",
    },
    answer: "B"
}

var questionTwo = {
    Q: "Who was a former dictator of Cuba?",
    answers: {
        A: "Ernesto Che Guevara",
        B: "Jorge Cordova",
        C: "Fidel Castro",
        D: "Camilo Cienfuegos",
    },
    answer: "C"
}

var questionThree = {
    Q: "Who was the vice president to Ronald Reagan?",
    answers: {
        A: "George Bush",
        B: "Richard Nixon",
        C: "Walter Mondale",
        D: "Bill Clinton",
    },
    answer: "A"
}

var questionFour = {
    Q: "What was the name of the conflict between the US and the USSR?",
    answers: {
        A: "World War 2",
        B: "World War 1",
        C: "The Falklands War",
        D: "The Coldwar",
    },
    answer: "D"
}

var questionFive = {
    Q: "Who invented the atomic bomb?",
    answers: {
        A: "J Robert Oppenheimer",
        B: "Albert Einstein",
        C: "Dr Jonas Salk",
        D: "Hans Bethe",
    },
    answer: "A"
}

var timeLeft = 30;

var intervalID

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

var questionNumber = 0;

var correctAnswers = 0;

var incorrectAnswers = 0;

var currentQuestion = 0;

var unansweredQuestions = 0;

function getQuestion(questionNum) {
    $("#questionH").text(questions[questionNum].Q)
    $("#aButton").text(questions[questionNum].answers.A)
    $("#bButton").text(questions[questionNum].answers.B)
    $("#cButton").text(questions[questionNum].answers.C)
    $("#dButton").text(questions[questionNum].answers.D)

}
function transition(text) {
    clearInterval(intervalID)
    timeLeft = 30;
    currentQuestion++;
    $("#transitionText").text(text)
    $("#mainScreen").attr("hidden", true)
    if (currentQuestion < questions.length) {
        $("#transitionScreen").attr("hidden", false)
        setTimeout(function () {
            $("#mainScreen").attr("hidden", false)
            $("#transitionScreen").attr("hidden", true)
            startTimer()
            getQuestion(currentQuestion)
        }, 5000)
    }

    else {

        $("#transitionText").text("Game Over")
        $("#transitionScreen").attr("hidden", false)
        $("#correctAnswers").text(correctAnswers)
        $("#incorrectAnswers").text(incorrectAnswers)
        $("#unansweredQuestions").text(unansweredQuestions)
        $("#resultsDiv").attr("hidden", false)
        console.log("Game Over")
    }

}

function startTimer() {
    $("#timeLeftH").text(timeLeft)
    intervalID = setInterval(function () {
        timeLeft--
        $("#timeLeftH").text(timeLeft)
        if (timeLeft === 0) {
            transition("Times up!")
            unansweredQuestions++
        }
    }, 1000)


}
$("#startButton").on("click", function () {
    $("#startBtnDiv").attr("hidden", true)
    $("#mainScreen").attr("hidden", false)
    startTimer()
})
getQuestion(currentQuestion)
$(".answer-buttons").on("click", function (event) {
    if (event.target.value === questions[currentQuestion].answer) {
        correctAnswers++;
        transition("Thats Correct!")
    }
    else {
        incorrectAnswers++;
        transition("Thats Incorrect!")
    }



    console.log(correctAnswers, incorrectAnswers);
})



// getQuestion(questionNumber)
// questionNumber++
