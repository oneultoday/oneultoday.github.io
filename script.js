
const sheetID = "13NzThqi8RiDBpZrLpbr4URlK-Xw823syZGA2IgyasaA";
const sheetName = "Form Responses 1";
const fetchURL = `https://opensheet.elk.sh/${sheetID}/${sheetName}`;
const submitURL = "https://script.google.com/macros/s/AKfycbywK1vRtMPwErpf2TNAtt54yojRFVqd-VvCRi1cWQgjcvkK97Mx0Q-raNMxKwoV5EYi/exec`;

let questions = [];

fetch(fetchURL)
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

function submitQuestion() {
    const question = document.getElementById("custom-question").value.trim();
    if (!question) {
        document.getElementById("submit-status").innerText = "질문을 입력해 주세요.";
        return;
    }

    fetch(submitURL, {
        method: "POST",
        body: JSON.stringify({ question }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.text())
    .then(data => {
        document.getElementById("submit-status").innerText = "질문이 저장되었습니다. 고맙습니다!";
        document.getElementById("custom-question").value = "";
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("submit-status").innerText = "문제가 발생했습니다. 다시 시도해 주세요.";
    });
}
