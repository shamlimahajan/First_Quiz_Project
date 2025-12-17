   // Quiz questions
   const questions = [
     {
       question: "1. What is the capital of France?",
       options: ["Berlin", "Madrid", "Paris", "Rome"],
       correct: 2, // Index of the correct answer
     },
     {
       question: "2. Which planet is known as the Red Planet?",
       options: ["Earth", "Mars", "Jupiter", "Venus"],
       correct: 1,
     },
     {
       question: "3. Who wrote the book 'The Discovery of India'?",
       options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Rabindranath Tagore"],
       correct: 1,
     },
     {
       question: "4. Which is the longest river in the world?",
       options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
       correct: 1,
     },
     {
       question: "5. What is the national animal of India?",
       options: ["Lion", "Tiger", "Horse", "Elephant"],
       correct: 1,
     },
     {
       question: "6. What year was the NHS founded?",
       options: ["1948", "1978", "1966", "1990"],
       correct: 0,
     },
     {
       question: "7.What is the longest river in the UK?",
       options: ["Amazon River", "Nile River", "Yangtze River", "River Severn"],
       correct: 3,
     },
     {
       question: "8.Which UK city is nicknamed the “Steel City”?",
       options: ["Blackpool", "Leeds", "Bradford", "Sheffield"],
       correct: 3,
     },
     {
       question: "9. What is the capital of Wales?",
       options: ["Blackpool", "Leeds", "Cardiff", "Sheffield"],
       correct: 2,
     },
     {
       question: "10. What’s the capital of Northern Ireland?",
       options: ["Belfast", "Leeds", "Cardiff", "Sheffield"],
       correct: 0,
     },

   ];
   let currentQuestion = 0;
   let score = 0;
   const questionElement = document.getElementById("question");
   const formElement = document.getElementById("quiz-form");
   const resultElement = document.getElementById("result");
   const submitButton = document.getElementById("submit");
   const queElement=document.getElementById("que");
   const btnElement=document.getElementById("btn");
   const submitBtn = document.getElementById("submit");
   const closebtnElement=document.getElementById("closebtn");
   // Function to display a question
   function displayQuestion() {
     const questionData = questions[currentQuestion];
     questionElement.textContent = questionData.question;
     formElement.innerHTML = ""; // Clear previous options
     questionData.options.forEach((option, index) => {
       formElement.innerHTML += `
         <label>
           <input type="radio" name="answer" value="${index}">
           ${option}
         </label><br>`;
     });
   }
   
   // Function to handle submission
   submitButton.addEventListener("click", () => {
     const selectedOption = document.querySelector('input[name="answer"]:checked');
     if (!selectedOption) {
       alert("Please select an answer!");
       return;
     }
     if (parseInt(selectedOption.value) === questions[currentQuestion].correct) {
       score++;
     }
     currentQuestion++;
     if (currentQuestion < questions.length) {
       displayQuestion();
     } else {
       
       
       resultElement.innerText = `You scored ${score} out of ${questions.length}!`;
       questionElement.innerText="";
       formElement.innerText="";
       queElement.innerText="Result";
       submitButton.remove(); // Delete button after quiz ends
       
     }
   });
   
   
   // Initialize the quiz
   displayQuestion();
   
   
