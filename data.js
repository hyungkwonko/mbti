// Questions data
const questions = [
    { id: 1, text: "힘든 시기에도 '이게 다 의미가 있을 거야'라고 믿고 싶다", axis: "desire", reverse: false },
    { id: 2, text: "차라리 처음부터 기대를 안 하는 게 낫다고 생각한다", axis: "desire", reverse: true },
    { id: 3, text: "고통 속에서도 무언가 가치를 찾으려 한다", axis: "desire", reverse: false },
    { id: 4, text: "세상에 대해 환상을 갖지 않으려 한다", axis: "desire", reverse: true },
    { id: 5, text: "삶에서 의미를 찾는 것이 중요하다고 느낀다", axis: "desire", reverse: false },
    { id: 6, text: "기대를 낮추는 것이 현명한 삶의 방식이라고 생각한다", axis: "desire", reverse: true },
    { id: 7, text: "주말 저녁, 혼자 있을 때 공허함보다 평온함을 느낀다", axis: "reality", reverse: false },
    { id: 8, text: "성취한 후에도 '그래서 뭐?'하는 생각이 자주 든다", axis: "reality", reverse: true },
    { id: 9, text: "힘든 일이 있어도 회복이 빠른 편이다", axis: "reality", reverse: false },
    { id: 10, text: "근본적으로 삶은 고통에 가깝다고 느낀다", axis: "reality", reverse: true },
    { id: 11, text: "대체로 낙관적인 상태로 하루를 보낸다", axis: "reality", reverse: false },
    { id: 12, text: "무의미함을 자주 느낀다", axis: "reality", reverse: true },
    { id: 13, text: "문제가 보이면 직접 나서서 해결하려 한다", axis: "action", reverse: false },
    { id: 14, text: "세상을 바꾸려 하기보다 나를 바꾸는 게 낫다", axis: "action", reverse: true },
    { id: 15, text: "부당한 일에는 적극적으로 대응한다", axis: "action", reverse: false },
    { id: 16, text: "관망하다가 때를 기다리는 편이다", axis: "action", reverse: true },
    { id: 17, text: "내 생각을 행동으로 옮기는 편이다", axis: "action", reverse: false },
    { id: 18, text: "가능하면 갈등을 피하고 조용히 지낸다", axis: "action", reverse: true },
    { id: 19, text: "내 감정을 솔직하게 표현하는 편이다", axis: "express", reverse: false },
    { id: 20, text: "속마음을 보여주면 약점 잡힐 것 같아 조심하게 된다", axis: "express", reverse: true },
    { id: 21, text: "힘들면 주변에 말하는 편이다", axis: "express", reverse: false },
    { id: 22, text: "내 약점을 드러내는 것이 불편하다", axis: "express", reverse: true },
    { id: 23, text: "생각이 있으면 말로 표현한다", axis: "express", reverse: false },
    { id: 24, text: "괜히 말했다가 손해볼까 봐 조심한다", axis: "express", reverse: true }
];

// Shuffle questions for each test
const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);

// Type data - populated by types-group1.js ~ types-group4.js
const typeData = {};

// Type quotes for share card
const typeQuotes = {
    "1-A": "세상을 바꾸는 목소리", 
    "1-B": "말없이 실천하는 삶", 
    "1-C": "고요한 지혜", 
    "1-D": "내면의 완결",
    "2-A": "날카로운 풍자", 
    "2-B": "전략적 생존", 
    "2-C": "우아한 거리두기", 
    "2-D": "조용한 적응",
    "3-A": "뜨거운 저항", 
    "3-B": "은밀한 변화", 
    "3-C": "의미를 찾아 표현하는 삶", 
    "3-D": "고독한 탐구",
    "4-A": "정직한 비관", 
    "4-B": "숨겨진 지식", 
    "4-C": "어둠의 미학", 
    "4-D": "침묵의 존재"
};
