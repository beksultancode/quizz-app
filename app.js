const questions = [
    {
        question: "What is Beksultan's favorite animal?",
        options: [
            "Horse", "Cat", "Dog", "Cow"
        ],
        correct_answer: "Horse"
    },
    {
        question: "Capital of Sweden?",
        options: [
            "London", "Paris", "Stockholm"
        ],
        correct_answer: "Stockholm"
    },
    {
        question: "The biggest country in the world?",
        options: [
            "Russia", "Kyrgyzstan", "Bangladesh"
        ],
        correct_answer: "Bangladesh"
    }
]

let question_num = 0
let correct_answer = 0

document.addEventListener("DOMContentLoaded", () => {
    load_question();
})

const load_question = () => {

    document.querySelector("#question").innerHTML = questions[question_num].question

    document.querySelector(".options").innerHTML = ""

    questions[question_num].options.forEach(opt => {
        document.querySelector(".options").innerHTML += `<button class="option">${opt}</button>`
    })
    
    document.querySelector("#point").innerHTML = correct_answer + " of " + question_num

    document.querySelectorAll(".option").forEach(option => {
        option.onclick = () => {

            if (questions[question_num].correct_answer == option.textContent) {
                correct_answer++;
            }

            question_num++;

            if (question_num == questions.length) {
                document.querySelector("#title").innerHTML = "Finished!"
                document.querySelector("#quiz").innerHTML = ""
                const result = document.createElement("h2");
                result.textContent = `Congrats! You get ${correct_answer} of ${question_num}`
                document.querySelector("#quiz").append(result)
            } else {
                load_question();
            }
        }
    })
}