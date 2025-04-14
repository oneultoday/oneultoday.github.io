
const questions = [
    "지금 떠오르는 단어 하나는 무엇인가요?",
    "오늘 당신이 느낀 감정 중 가장 강했던 것은 무엇이었나요?",
    "당신이 마지막으로 진심으로 웃었던 순간은 언제인가요?",
    "당신이 가장 아끼는 기억은 무엇인가요?",
    "지금 이 순간, 당신의 마음은 어디에 머물러 있나요?"
];

function generateQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    document.getElementById("question-display").innerText = questions[randomIndex];
}

function addQuestion() {
    const input = document.getElementById("custom-question");
    const newQuestion = input.value.trim();
    if (newQuestion) {
        questions.push(newQuestion);
        input.value = "";
        alert("질문이 추가되었어요!");
    } else {
        alert("질문을 입력해 주세요.");
    }
}
