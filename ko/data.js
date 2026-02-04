// Questions data - v3
// 4축: expectation(기대수준), experience(현재경험), belief(정답신념), energy(추구에너지)
const questions = [
    // 축1: 기대 수준 (1-6) - 삶이 좋을 수 있다고 기대하는가
    { id: 1, text: "결국엔 잘 될 거라는 믿음이 있는 편이다", axis: "expectation", reverse: false },
    { id: 2, text: "태어난 것을 후회하는 건 바보 같은 생각이라고 본다", axis: "expectation", reverse: false },
    { id: 3, text: "삶은 기본적으로 고통에 가깝다고 생각한다", axis: "expectation", reverse: true },
    { id: 4, text: "요즘 세상에 집 사고 결혼하고 이런 거 기대하는 건 순진한 것 같다", axis: "expectation", reverse: true },
    { id: 5, text: "기대가 크면 실망도 크니까 처음부터 기대를 안 하는 편이다", axis: "expectation", reverse: true },
    { id: 6, text: "우연히 좋은 일이 생기면 삶이 나한테 주는 선물 같다", axis: "expectation", reverse: false },
    
    // 축2: 현재 경험 (7-12) - 지금 실제로 어떤가
    { id: 7, text: "주말 저녁, 혼자 있을 때 공허함보다 평온함을 느낀다", axis: "experience", reverse: false },
    { id: 8, text: "뭔가 이뤘을 때 잠깐 기쁘다가 금방 '그래서 뭐?' 싶어진다", axis: "experience", reverse: true },
    { id: 9, text: "요즘 하루하루가 나쁘지 않게 흘러가고 있다", axis: "experience", reverse: false },
    { id: 10, text: "특별한 이유 없이 기분이 가라앉을 때가 있다", axis: "experience", reverse: true },
    { id: 11, text: "사소한 것에도 즐거움을 느끼는 편이다", axis: "experience", reverse: false },
    { id: 12, text: "퇴근하고 집에오면 '이걸 언제까지 반복하지' 싶을 때가 있다", axis: "experience", reverse: true },
    
    // 축3: 정답 신념 (13-18) - 삶에 옳은 길/정답이 있다고 믿는가
    { id: 13, text: "SNS에서 논쟁이 벌어져도 내가 보기엔 답은 명확한 경우가 많다", axis: "belief", reverse: false },
    { id: 14, text: "친구가 회사 그만두고 세계 여행 간다고 하면 응원보다 걱정이 먼저 든다", axis: "belief", reverse: false },
    { id: 15, text: "돈보다 행복이 중요하다는 말, 솔직히 돈 없는 사람 위로하는 말 같다", axis: "belief", reverse: false },
    { id: 16, text: "'상식'이라고 불리는 것들도 의심해볼 필요가 있다", axis: "belief", reverse: true },
    { id: 17, text: "남들이 뭐라 하든 내 선택이 나한테 맞으면 그게 정답이다", axis: "belief", reverse: true },
    { id: 18, text: "하나의 정답보다 다양한 관점이 공존하는 것이 바람직하다", axis: "belief", reverse: true },
    
    // 축4: 추구 에너지 (19-24) - 더 나은 것을 적극 추구하는가
    { id: 19, text: "좋아하는 아티스트 콘서트도 티켓팅 전쟁까지 하면서 가고 싶진 않다", axis: "energy", reverse: true },
    { id: 20, text: "팀플 분위기가 늘어지면 누가 챙기겠지보다 내가 먼저 마감 얘기 꺼낸다", axis: "energy", reverse: false },
    { id: 21, text: "'어차피 안 바뀌어'라는 말을 들으면 오히려 바꾸고 싶어진다", axis: "energy", reverse: false },
    { id: 22, text: "해보고 싶은 게 생겨도 주변 반응 먼저 살피게 된다", axis: "energy", reverse: true },
    { id: 23, text: "약속이나 모임은 누가 잡아주길 기다리기보다 내가 먼저 연락하는 편이다", axis: "energy", reverse: false },
    { id: 24, text: "연애는 인연이라고 생각해서 굳이 앱 깔면서까지 찾진 않는다", axis: "energy", reverse: true }
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

// Type data - populated by types-1a.js ~ types-4d.js
const typeData = {};

// Type names
const typeNames = {
    "1-A": "희망회로 MAX",
    "1-B": "계획형 인간",
    "1-C": "가능성 덕후",
    "1-D": "행복 100%",
    "2-A": "원칙 봇",
    "2-B": "'원래 그래'",
    "2-C": "거리두기 장인",
    "2-D": "집착 제로",
    "3-A": "'이건 진짜 아닌데'",
    "3-B": "번아웃 직전",
    "3-C": "의미 찾아 여행중",
    "3-D": "숨쉰채 발견",
    "4-A": "우울한 철학자",
    "4-B": "체계적 비관주의자",
    "4-C": "느낌만 좋음",
    "4-D": "없을 무"
};

// Type quotes for share card
const typeQuotes = {
    "1-A": "정답을 향해 달리는 사람",
    "1-B": "계획대로 잘 살고 있는 사람",
    "1-C": "가능성은 무한하다고 믿는 사람",
    "1-D": "지금 이 순간이 전부인 사람",
    "2-A": "감정 빼고 원칙대로 사는 사람",
    "2-B": "기대 안 하면 실망도 없는 사람",
    "2-C": "멀리서 지켜보는 게 편한 사람",
    "2-D": "붙잡아도 소용없다는 걸 아는 사람",
    "3-A": "세상이 잘못됐다고 믿는 사람",
    "3-B": "힘들어도 해야 하니까 하는 사람",
    "3-C": "아직 의미를 찾고 있는 사람",
    "3-D": "일단 오늘을 살아내는 사람",
    "4-A": "어둠 속에서 진리를 찾는 사람",
    "4-B": "뭘 해도 안 될 거라는 걸 아는 사람",
    "4-C": "의미 없어도 아름다움은 있는 사람",
    "4-D": "느끼면 부서질 것 같은 사람"
};