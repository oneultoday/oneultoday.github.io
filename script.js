
const sheetID = "13NzThqi8RiDBpZrLpbr4URlK-Xw823syZGA2IgyasaA";
const sheetName = "Form Responses 1";
const url = `https://opensheet.elk.sh/${sheetID}/${sheetName}`;

let questions = [];

fetch(url)
  .then(response => response.json())
  .then(data => {
    questions = data.map(entry => entry.question).filter(q => q);
  })
  .catch(error => {
    document.getElementById("question-display").innerText = "질문을 불러올 수 없습니다.";
    console.error("문제 발생:", error);
  });

function generateQuestion() {
    if (questions.length === 0) {
        document.getElementById("question-display").innerText = "아직 질문이 없습니다.";
        return;
    }
    const randomIndex = Math.floor(Math.random() * questions.length);
    document.getElementById("question-display").innerText = questions[randomIndex];
}
