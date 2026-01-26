// Questions data
const questions = [
    { id: 1, text: "힘든 시기에도 '이게 다 의미가 있을 거야'라고 믿고 싶다", axis: "desire", reverse: false },
    { id: 2, text: "기대했다가 실망하느니 처음부터 기대를 안 하는 게 낫다", axis: "desire", reverse: true },
    { id: 3, text: "좋은 일이 생기면 '앞으로 더 좋은 일도 있겠다'고 생각한다", axis: "desire", reverse: false },
    { id: 4, text: "사람들이 좋게 말해도 속으론 다른 생각일 수 있다고 본다", axis: "desire", reverse: true },
    { id: 5, text: "나한테 좋은 기회가 올 거라고 생각한다", axis: "desire", reverse: false },
    { id: 6, text: "살다보면 노력해도 뜻대로 안되는 경우가 많이 있다", axis: "desire", reverse: true },
    { id: 7, text: "주말 저녁, 혼자 있을 때 공허함보다 평온함을 느낀다", axis: "reality", reverse: false },
    { id: 8, text: "뭔가 이뤘을 때 잠깐 기쁘다가 금방 '그래서 뭐?' 싶어진다", axis: "reality", reverse: true },
    { id: 9, text: "아침에 눈 떴을 때 오늘 하루가 기대되는 편이다", axis: "reality", reverse: false },
    { id: 10, text: "문득 '다 부질없다'는 생각이 스칠 때가 있다", axis: "reality", reverse: true },
    { id: 11, text: "요즘 내 일상에 대체로 만족한다", axis: "reality", reverse: false },
    { id: 12, text: "가끔 샤워하다가 '뭐하러 이렇게 살지?' 생각이 든다", axis: "reality", reverse: true },
    { id: 13, text: "친구가 부당한 대우 받으면 내가 대신 나서서 항의한다", axis: "action", reverse: false },
    { id: 14, text: "세상을 바꾸려 하기보다 나를 바꾸는 게 현실적이다", axis: "action", reverse: true },
    { id: 15, text: "말보다 행동으로 보여주는 편이다", axis: "action", reverse: false },
    { id: 16, text: "일단 상황을 지켜보다가 움직이는 스타일이다", axis: "action", reverse: true },
    { id: 17, text: "손해 볼 수 있어도 옳다고 생각하면 일단 행동한다", axis: "action", reverse: false },
    { id: 18, text: "갈등이 생길 것 같으면 그냥 조용히 넘어간다", axis: "action", reverse: true },
    { id: 19, text: "기분이 안 좋으면 표정이나 말투에 바로 드러난다", axis: "express", reverse: false },
    { id: 20, text: "속마음을 보여주면 약점 잡힐 것 같아 조심하게 된다", axis: "express", reverse: true },
    { id: 21, text: "대화보다 글로 내 생각을 표현하는 게 더 편하다", axis: "express", reverse: false },
    { id: 22, text: "내 생각은 혼자 정리하고 굳이 공유하지 않는다", axis: "express", reverse: true },
    { id: 23, text: "가까운 사람에겐 힘든 얘기도 털어놓는 편이다", axis: "express", reverse: false },
    { id: 24, text: "할 말이 있어도 분위기 깨질까봐 참을 때가 많다", axis: "express", reverse: true }
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
