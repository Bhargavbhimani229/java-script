const quizQuestions = [
  {
    question: "What is the correct syntax to print a message to the console?",
    options: ["console.log('Hello')", "print('Hello')", "echo('Hello')", "System.out.println('Hello')"],
    answer: "console.log('Hello')"
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["String", "Number", "Boolean", "Float"],
    answer: "Float"
  },
  {
    question: "How do you declare a JavaScript variable?",
    options: ["let varName;", "variable varName;", "declare varName;", "var varName;"],
    answer: "let varName;"
  },
  {
    question: "What is the output of `typeof NaN` in JavaScript?",
    options: ["number", "NaN", "undefined", "string"],
    answer: "number"
  },
  {
    question: "Which method is used to add an element at the end of an array?",
    options: [".push()", ".pop()", ".shift()", ".unshift()"],
    answer: ".push()"
  },
  {
    question: "Which of the following is the correct way to create an object?",
    options: [
      "let obj = { key: 'value' };",
      "let obj = (key = 'value');",
      "let obj = [key: 'value'];",
      "let obj = key: 'value';"],
      answer: "let obj = { key: 'value' };" 
  },
  {
    question: "What will `setTimeout` return in JavaScript?",
    options: ["The delay time", "An ID that can be used to clear the timeout", "Undefined", "A Promise"],
    answer: "An ID that can be used to clear the timeout" 
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["/*", "//", "#", "<!--"],
    answer: "//" 
  },
  {
    question: "How can you convert a string to an integer in JavaScript?",
    options: ["parseInt()", "toInteger()", "Number()", "All of the above"],
    answer: "parseInt()" 
  }


];

let currentIndex = 0;
let timer;
let timeRemaining = 15;
let marks = 0;

const questionContainer = document.querySelector(".qustions");
const sec = document.querySelector("#s");
const submitBtn = document.querySelector("#submitBtn");

let timerStart = function () {
  clearInterval(timer);
  timeRemaining = 15;
  sec.innerHTML = timeRemaining <= 9 ? '0' + timeRemaining : timeRemaining;

  timer = setInterval(() => {
    timeRemaining--;
    sec.innerHTML = timeRemaining <= 9 ? '0' + timeRemaining : timeRemaining;

    if (timeRemaining === 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000)
}

let lQuestion = function (index) {
  const questionData = quizQuestions[index];
  questionContainer.innerHTML =
    `<p>${questionData.question}</p>
  ${questionData.options.map((option, i) =>
      ` <p>
        <input type="radio" name="options" id="option${i}" value="${option}" />
        <label for="option${i}">${option}</label>
      </p>`)
      .join("")}`;
  timerStart();
} 
lQuestion(currentIndex);

  let nextQuestion = function () {
    currentIndex++;
    currentIndex < quizQuestions.length ? lQuestion(currentIndex) : questionContainer.innerHTML = "<p>Quiz Completed!</p>";
  }
  submitBtn.addEventListener("click", () => {
    const scoreData = quizQuestions[currentIndex];
    const selectedOption = document.querySelector('input[name="options"]:checked');
    const feedbackElement = document.getElementById("feedback");
  
    if (!selectedOption) {
      alert("Please select an answer!");
      return;
    }  
    console.log("Correct Answer:", scoreData.answer);
    console.log("User Selected:", selectedOption.value);
  
    if (scoreData.answer.trim() === selectedOption.value.trim()) {
   
      // console.log(marks);
      
      feedbackElement.innerHTML ="Correct!";
      feedbackElement.style.color = "green";
    } else {
      feedbackElement.innerHTML = "Incorrect!";
      feedbackElement.style.color = "red";
    }
    // if(quizQuestions[index].length-1 > 0){
    //   feedbackElement.innerHTML = `${marks}/10`
    // }
  
    nextQuestion();
  });
  

