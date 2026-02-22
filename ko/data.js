// Questions data - v3
// 4축: expectation(기대수준), experience(현재경험), belief(정답신념), energy(추구에너지)
const questions = [
    // 축1: 기대 수준 (1-6) - 삶이 좋을 수 있다고 기대하는가
    { id: 1, text: "결국엔 잘 될 거라는 믿음이 있는 편이다", axis: "expectation", reverse: false },
    { id: 2, text: "노력하면 원하는 삶을 살 수 있다고 생각하는 편이다", axis: "expectation", reverse: false },
    { id: 3, text: "삶은 기본적으로 고통에 가깝다고 생각한다", axis: "expectation", reverse: true },
    { id: 4, text: "요즘 세상에 집 사고 결혼하고 이런 거 기대하는 건 순진한 것 같다", axis: "expectation", reverse: true },
    { id: 5, text: "기대가 크면 실망도 크니까 처음부터 기대를 안 하는 편이다", axis: "expectation", reverse: true },
    { id: 6, text: "아직 내 인생에서 제일 좋은 순간이 안 왔다고 느낀다", axis: "expectation", reverse: false },
    
    // 축2: 현재 경험 (7-12) - 지금 실제로 어떤가
    { id: 7,  text: "아무 약속 없는 주말, 편하기 보다는 공허하다", axis: "experience", reverse: true },
    { id: 8, text: "최근에 맛있는 거 먹으면서 행복했던 적이 있다", axis: "experience", reverse: false },
    { id: 9, text: "최근에 뭔가에 빠져서 시간 가는 줄 몰랐던 적이 있다", axis: "experience", reverse: false },
    { id: 10, text: "요즘 만나는 사람들과의 시간이 즐거운 편이다", axis: "experience", reverse: false },
    { id: 11, text: "퇴근하고 집에 오면 '이걸 언제까지 반복하지' 싶을 때가 있다", axis: "experience", reverse: true },
    { id: 12, text: "요즘 특별한 이유 없이 기분이 가라앉을 때가 있다", axis: "experience", reverse: true },

    // 축3: 정답 신념 (13-18) - 삶에 옳은 길/정답이 있다고 믿는가
    { id: 13, text: "아무리 시대가 바뀌어도 변하지 않는 가치가 있다고 생각한다", axis: "belief", reverse: false },
    { id: 14, text: "나이대별로 해야 할 것들이 어느 정도 정해져 있다고 생각한다", axis: "belief", reverse: false },
    { id: 15, text: "선택지가 많으면 불안하기 보다 자유로운 느낌이 든다", axis: "belief", reverse: true },
    { id: 16, text: "'노력하면 된다'랑 '될 놈은 된다' 둘 다 맞는 것 같다", axis: "belief", reverse: true },
    { id: 17, text: "남들 눈치 볼 것 없이 내 선택이 나한테 맞으면 그게 정답이다", axis: "belief", reverse: true },
    { id: 18, text: "사람마다 답이 다르다고 하면서도, 속으로는 '그래도 이게 맞지 않나' 싶을 때가 많다", axis: "belief", reverse: false },
    
    // 축4: 추구 에너지 (19-24) - 더 나은 것을 적극 추구하는가
    { id: 19, text: "맛집 웨이팅, 콘서트 티켓팅 전쟁, 오픈런 같은 거 그렇게까지 해서 가고 싶진 않다", axis: "energy", reverse: true },
    { id: 20, text: "팀플 분위기가 늘어지면 누가 챙기겠지보다 내가 먼저 마감 얘기 꺼낸다", axis: "energy", reverse: false },
    { id: 21, text: "바꾸고 싶은 게 있어도 막상 행동으로 옮기는 건 잘 안 하게 된다", axis: "energy", reverse: true },
    { id: 22, text: "뭔가 해보고 싶다는 생각이 들면 그날 안에 뭐라도 하나는 해놓는 편이다", axis: "energy", reverse: false },
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
    "1-D": "뭐 어때~",
    "2-A": "원칙주의자",
    "2-B": "현실 순응자",
    "2-C": "거리두기 장인",
    "2-D": "집착 제로",
    "3-A": "상처받은 이상주의자",
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
    "1-D": "괜찮다는 말 뒤에 숨은 사람",
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