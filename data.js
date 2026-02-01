// Questions data - v2
// 4축: 욕망(desire), 실제(reality), 인식(perception), 지향(orientation)
const questions = [
    // 욕망 축 (1-6) - 삶을 긍정하고 싶은가
    { id: 1, text: "결국엔 잘 될 거라는 믿음이 있는 편이다", axis: "desire", reverse: false },
    { id: 2, text: "태어난 것을 후회하는 건 바보 같은 생각이라고 본다", axis: "desire", reverse: false },
    { id: 3, text: "삶은 기본적으로 고통에 가깝다고 생각한다", axis: "desire", reverse: true },
    { id: 4, text: "미라클 모닝 챌린지 보면 '나는 못 해'보다 '굳이?'가 먼저 든다", axis: "desire", reverse: true },
    { id: 5, text: "기대가 크면 실망도 크니까 처음부터 기대를 안 하는 편이다", axis: "desire", reverse: true },
    { id: 6, text: "우연히 좋은 일이 생기면 삶이 나한테 주는 선물 같다", axis: "desire", reverse: false },
    
    // 실제 축 (7-12) - 실제로 어떻게 경험하는가
    { id: 7, text: "주말 저녁, 혼자 있을 때 공허함보다 평온함을 느낀다", axis: "reality", reverse: false },
    { id: 8, text: "뭔가 이뤘을 때 잠깐 기쁘다가 금방 '그래서 뭐?' 싶어진다", axis: "reality", reverse: true },
    { id: 9, text: "요즘 하루하루가 나쁘지 않게 흘러가고 있다", axis: "reality", reverse: false },
    { id: 10, text: "특별한 이유 없이 기분이 가라앉을 때가 있다", axis: "reality", reverse: true },
    { id: 11, text: "사소한 것에도 즐거움을 느끼는 편이다", axis: "reality", reverse: false },
    { id: 12, text: "퇴근하고 집에오면 '이걸 언제까지 반복하지' 싶을 때가 있다", axis: "reality", reverse: true },
    
    // 인식 축 (13-18) - 세계를 어떻게 이해하는가 (모던 vs 포스트모던)
    { id: 13, text: "SNS에서 논쟁이 벌어져도 내가 보기엔 답은 명확한 경우가 많다", axis: "perception", reverse: false },
    { id: 14, text: "뉴스에 나오는 '나쁜 사람'도 그럴 만한 사정이 있었을 거라고 본다", axis: "perception", reverse: true },
    { id: 15, text: "의사나 전문가가 말하면 일단 믿고 따르는 편이다", axis: "perception", reverse: false },
    { id: 16, text: "'상식'이라고 불리는 것들도 의심해볼 필요가 있다", axis: "perception", reverse: true },
    { id: 17, text: "영화나 소설이 열린 결말이면 별로다", axis: "perception", reverse: false },
    { id: 18, text: "하나의 정답보다 다양한 관점이 공존하는 것이 바람직하다", axis: "perception", reverse: true },
    
    // 지향 축 (19-24) - 어떻게 행동/선택하는가 (이상 vs 현실)
    { id: 19, text: "결과가 비슷하더라도 올바른 방식으로 하는 게 중요하다", axis: "orientation", reverse: false },
    { id: 20, text: "거창한 비전보다 눈앞의 작은 개선이 더 의미 있다", axis: "orientation", reverse: true },
    { id: 21, text: "'어차피 안 바뀌어'라는 말을 들으면 오히려 바꾸고 싶어진다", axis: "orientation", reverse: false },
    { id: 22, text: "안 되면 빠르게 플랜B로 넘어가는 편이다", axis: "orientation", reverse: true },
    { id: 23, text: "현실에 타협하는 것은 일종의 패배라고 느낀다", axis: "orientation", reverse: false },
    { id: 24, text: "'왜 해야 하는가'보다 '어떻게 하면 되는가'에 더 관심이 간다", axis: "orientation", reverse: true }
];

// Shuffle function (Fisher-Yates)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Shuffle questions for each test
const shuffledQuestions = shuffleArray(questions);

// Type data - populated by types-group1.js ~ types-group4.js
const typeData = {};

// Type quotes for share card
const typeQuotes = {
    "1-A": "빛을 믿고 빛을 향해 달리는 사람",
    "1-B": "논리와 긍정으로 문제를 푸는 사람",
    "1-C": "열린 마음으로 더 나은 것을 꿈꾸는 사람",
    "1-D": "흐름에 맡기며 지금을 즐기는 사람",
    "2-A": "기대는 낮추되 원칙은 지키는 사람",
    "2-B": "담담하게 운명을 받아들이는 사람",
    "2-C": "세상을 비웃으며 아름다움을 찾는 사람",
    "2-D": "믿지 않지만 적응하며 사는 사람",
    "3-A": "아파도 포기 못하는 꿈이 있는 사람",
    "3-B": "힘들어도 현실적으로 버티는 사람",
    "3-C": "의심하면서도 꿈꾸기를 멈추지 못하는 사람",
    "3-D": "의미 없어도 일단 살아남는 사람",
    "4-A": "어둠 속에서도 진리를 찾는 사람",
    "4-B": "냉정하게 현실을 직시하는 사람",
    "4-C": "무의미 속에서 아름다움을 건지는 사람",
    "4-D": "모든 것을 내려놓고 바라보는 사람"
};
