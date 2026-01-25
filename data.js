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

const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);

const typeData = {
    "1-A": {
        code: "1-A", name: "전도사형", subtitle: "세상에 알리는 사람",
        philosophy: "생철학, 긍정심리학, 초기 니체주의",
        description: [
            "당신은 삶의 긍정을 온몸으로 경험하고, 그것을 세상에 알리고 싶어하는 사람입니다. '나는 이렇게 살아냈어, 너도 할 수 있어!'라고 외치는 것이 자연스럽습니다. 단순한 낙관주의가 아닙니다. 당신은 아마 지옥을 한 번 통과했을 거예요. 그리고 그 경험이 오히려 삶을 긍정하게 만들었습니다.",
            "당신의 에너지는 전염됩니다. 강연장에서, SNS에서, 일상의 대화에서 사람들은 당신에게서 뭔가를 얻어갑니다. 당신은 그것이 좋습니다. 누군가의 삶이 조금이라도 나아진다면, 그게 당신이 사는 이유니까요.",
            "하지만 조심해야 할 것이 있습니다. 당신의 열정이 때로는 강요가 될 수 있어요. 모든 사람이 당신처럼 살 수 있는 건 아닙니다. '나처럼 살아'가 아니라 '네 방식대로 살아'를 배워야 할 때가 있습니다.",
            "당신이 가장 힘들 때는 아무도 안 들을 때입니다. 열심히 말하는데 반응이 없을 때, 혼자만 뜨거울 때. 그럴 때 번아웃이 옵니다. 기억하세요. 결과를 통제하려 하지 마세요."
        ],
        strengths: ["강한 영향력과 카리스마", "말과 행동의 일치", "어둠을 통과한 진짜 긍정", "사람들에게 희망을 주는 능력"],
        weaknesses: ["자기 방식을 강요할 수 있음", "타인의 속도를 무시하기 쉬움", "혼자 뜨거우면 외로움", "번아웃 위험이 높음"],
        compatibility: {
            love: { best: { type: "3-C", name: "예술가/작가형", reason: "당신의 열정을 깊이로 받아줍니다. 서로 다른 방식으로 같은 것을 표현하는 관계." }, hard: { type: "4-D", name: "침묵의 체념형", reason: "당신의 에너지가 상대에게 부담이 됩니다." } },
            friend: { best: { type: "3-A", name: "혁명가형", reason: "같이 뭔가를 만들 수 있는 친구. 당신이 비전을 말하면 그 사람은 행동으로 옮깁니다." }, hard: { type: "2-C", name: "데카당스형", reason: "당신의 진지함을 가볍게 받아넘길 수 있어요." } },
            work: { best: { type: "1-B", name: "조용한 행동가형", reason: "당신이 말하면 그 사람은 실행합니다. 최고의 파트너십." }, hard: { type: "2-D", name: "냉소적 순응형", reason: "당신의 제안에 '그게 될까요?'라며 에너지를 깎을 수 있어요." } }
        },
        patterns: { stress: "더 열심히 말하려 합니다. 하지만 그럴수록 공허해질 수 있어요.", happy: "누군가 '당신 덕분에 변했어요'라고 말할 때.", conflict: "직접 대면합니다. 돌려 말하지 않아요." },
        famous: { historical: ["정주영", "유재석"], modern: ["김종국", "사이먼 시넥"], fictional: ["올마이트 (나의 히어로 아카데미아)"] },
        warnings: { signs: ["아무도 안 듣는다는 느낌", "혼자만 열정적일 때", "목소리가 점점 커지는 자신"], danger: { type: "3-A", name: "혁명가형", reason: "긍정이 사라지고 싸움만 남을 수 있습니다." } },
        recommendations: { books: [{ title: "세이노의 가르침", author: "세이노" }, { title: "역행자", author: "자청" }], movies: [{ title: "국제시장", desc: "한 시대를 견뎌낸 삶의 긍정" }, { title: "소울", desc: "픽사, 삶의 의미에 대한 질문" }], music: [{ title: "Ditto", artist: "뉴진스" }, { title: "FEARLESS", artist: "르세라핌" }] }
    },
    "1-B": {
        code: "1-B", name: "조용한 행동가형", subtitle: "말없이 실천하는 사람",
        philosophy: "스토아학파, 선종, 카르마 요가",
        description: [
            "당신은 삶을 긍정하지만, 그것을 떠들지 않습니다. 말보다 삶으로 증명하는 사람입니다. 누군가 당신을 보고 '저 사람 뭔가 있다'고 느끼게 만드는 아우라가 있어요.",
            "당신은 아마 '굳이 말해야 해?'라고 자주 생각할 거예요. 인정받으려고 하지 않습니다. 자기 확신이 있기 때문입니다. 남들이 어떻게 생각하든 자기 길을 갑니다.",
            "묵묵히 자기 일을 합니다. 누가 보든 안 보든. 화려하지 않지만 단단합니다. 사람들은 시간이 지나서야 당신의 가치를 알아봅니다.",
            "하지만 조심해야 합니다. 너무 혼자 해결하려 하지 마세요. 도움을 요청하는 것도 강함입니다. 가끔은 말로 표현해주세요."
        ],
        strengths: ["흔들리지 않는 일관성", "말과 행동의 일치", "묵묵한 실행력", "자기 확신과 독립성"],
        weaknesses: ["소통 부족으로 오해받기 쉬움", "도움 요청을 어려워함", "감정 표현이 서툶", "고립될 위험"],
        compatibility: {
            love: { best: { type: "3-D", name: "고독한 구도자형", reason: "말없이 서로를 이해합니다. 침묵이 어색하지 않아요." }, hard: { type: "2-A", name: "풍자가형", reason: "당신의 진지함이 조롱거리가 될 수 있어요." } },
            friend: { best: { type: "1-D", name: "은자형", reason: "깊은 우정. 자주 안 만나도 변하지 않는 관계." }, hard: { type: "3-A", name: "혁명가형", reason: "'왜 같이 안 싸워?'라는 압박이 있을 수 있어요." } },
            work: { best: { type: "1-A", name: "전도사형", reason: "그 사람이 비전을 말하면 당신이 실행합니다." }, hard: { type: "2-C", name: "데카당스형", reason: "당신의 성실함이 '왜 그렇게까지?'라는 반응을 받을 수 있어요." } }
        },
        patterns: { stress: "더 조용해지고, 혼자 해결하려 합니다.", happy: "자기 일이 완성되었을 때의 조용한 만족.", conflict: "말로 싸우지 않습니다. 행동으로 보여주려 합니다." },
        famous: { historical: ["이순신", "안중근"], modern: ["손흥민", "류현진", "봉준호"], fictional: ["레비 (진격의 거인)"] },
        warnings: { signs: ["완전히 고립되는 느낌", "아무도 모른다는 생각"], danger: { type: "1-D", name: "은자형", reason: "세상과의 연결이 완전히 끊어질 수 있습니다." } },
        recommendations: { books: [{ title: "달러구트 꿈 백화점", author: "이미예" }, { title: "명상록", author: "마르쿠스 아우렐리우스" }], movies: [{ title: "헤어질 결심", desc: "말없는 감정의 깊이" }, { title: "드라이브 마이 카", desc: "침묵 속 소통" }], music: [{ title: "밤편지", artist: "아이유" }, { title: "좋은 밤 좋은 꿈", artist: "너드커넥션" }] }
    },
    "1-C": {
        code: "1-C", name: "현자형", subtitle: "물으면 말해주는 사람",
        philosophy: "도가사상, 에피쿠로스학파",
        description: [
            "당신은 삶을 긍정하지만, 적극적으로 바꾸려 하지 않습니다. 물 흐르듯 살아갑니다. 누가 찾아오면 말해주지만, 먼저 나서지 않아요.",
            "당신에게는 특별한 지혜가 있습니다. 살아온 경험에서 우러나오는 통찰이에요. 하지만 그것을 강요하지 않습니다. '준비되면 오겠지'라는 믿음입니다.",
            "작은 것에서 행복을 찾는 법을 알아요. 커피 한 잔, 햇살, 좋은 음악. 사람들은 당신 옆에 있으면 편안해집니다.",
            "하지만 때로는 행동해야 할 때가 있어요. 지혜는 나눌 때 더 빛납니다. 가끔은 먼저 손을 내밀어 보세요."
        ],
        strengths: ["깊은 통찰력", "흔들리지 않는 평정심", "작은 것에서 행복을 찾는 능력", "타인에게 주는 편안함"],
        weaknesses: ["소극적으로 보일 수 있음", "행동력 부족", "현실과 거리감", "무책임하다는 오해"],
        compatibility: {
            love: { best: { type: "3-C", name: "예술가/작가형", reason: "깊이 있는 대화가 끝없이 가능합니다." }, hard: { type: "3-A", name: "혁명가형", reason: "'왜 아무것도 안 해?'라는 답답함." } },
            friend: { best: { type: "1-B", name: "조용한 행동가형", reason: "말없이 통하는 우정." }, hard: { type: "2-A", name: "풍자가형", reason: "당신의 진지함이 '꼰대스럽다'고 느껴질 수 있어요." } },
            work: { best: { type: "3-D", name: "고독한 구도자형", reason: "같이 깊이 파는 동료." }, hard: { type: "1-A", name: "전도사형", reason: "당신의 속도가 느리다고 답답해할 수 있어요." } }
        },
        patterns: { stress: "더 물러나고, 관조합니다.", happy: "깊은 대화를 나눌 때. 통찰의 순간.", conflict: "피하거나 거리를 둡니다." },
        famous: { historical: ["법정 스님", "혜민 스님"], modern: ["김영하 (작가)", "정재승"], fictional: ["요다 (스타워즈)"] },
        warnings: { signs: ["세상과 너무 멀어질 때", "무관심해질 때"], danger: { type: "1-D", name: "은자형", reason: "완전한 은둔으로 갈 수 있습니다." } },
        recommendations: { books: [{ title: "무소유", author: "법정" }, { title: "멈추면 비로소 보이는 것들", author: "혜민" }], movies: [{ title: "리틀 포레스트", desc: "시골에서의 조용한 회복" }, { title: "미나리", desc: "느린 삶의 가치" }], music: [{ title: "봄날", artist: "BTS" }, { title: "Through the Night", artist: "아이유" }] }
    },
    "1-D": {
        code: "1-D", name: "은자형", subtitle: "혼자 완결되는 사람",
        philosophy: "은둔 스토아, 선종의 무언수행",
        description: [
            "당신은 삶을 긍정하지만, 그것을 알리거나 보여줄 필요를 느끼지 않습니다. 혼자서 완결됩니다. 자기 안에서 평화를 찾았기 때문입니다.",
            "혼자 있는 시간이 충전입니다. 그렇다고 사람을 싫어하는 건 아닙니다. 그냥 혼자가 편해요. 깊은 관계 몇 개면 충분합니다.",
            "내면이 풍요롭습니다. 생각이 많고, 자기만의 세계가 있어요. 혼자서도 충분히 행복합니다.",
            "하지만 완전히 고립되면 위험합니다. 최소한의 연결은 유지하세요. 문을 완전히 닫지 마세요."
        ],
        strengths: ["깊은 내면의 평화", "자기 충족 능력", "초연함", "완전한 독립성"],
        weaknesses: ["완전한 고립 위험", "사회적 단절", "이해받기 어려움", "긴급 상황에 취약"],
        compatibility: {
            love: { best: { type: "4-D", name: "침묵의 체념형", reason: "말없이 함께 있을 수 있습니다." }, hard: { type: "1-A", name: "전도사형", reason: "'왜 숨어 살아?'라는 압박." } },
            friend: { best: { type: "1-C", name: "현자형", reason: "드문 만남이지만 깊은 대화." }, hard: { type: "2-A", name: "풍자가형", reason: "당신의 진지함과 상대의 시니컬함이 안 맞아요." } },
            work: { best: { type: "1-B", name: "조용한 행동가형", reason: "각자 일하고 결과로 소통." }, hard: { type: "3-A", name: "혁명가형", reason: "팀워크 요구가 부담스러워요." } }
        },
        patterns: { stress: "더 깊이 숨습니다.", happy: "완전한 고요 속에서 평화를 느낄 때.", conflict: "없습니다. 이미 물러났으니까요." },
        famous: { historical: ["퇴계 이황", "원효대사"], modern: ["디지털 노마드 은둔형"], fictional: ["토토로", "하울"] },
        warnings: { signs: ["모든 연결이 끊어질 때", "존재가 잊혀질 때"], danger: { type: "4-D", name: "침묵의 체념형", reason: "긍정이 사라지고 체념만 남을 수 있습니다." } },
        recommendations: { books: [{ title: "숲속의 작은 집", author: "소로" }, { title: "혼자 잘 먹고 잘 사는 법", author: "혼밥 에세이" }], movies: [{ title: "봄 여름 가을 겨울 그리고 봄", desc: "김기덕의 사계절 명상" }, { title: "인투 더 와일드", desc: "문명을 떠난 청년" }], music: [{ title: "소우주", artist: "BTS" }, { title: "Palette", artist: "아이유" }] }
    },
    "2-A": {
        code: "2-A", name: "풍자가형", subtitle: "적극적으로 비꼬는 사람",
        philosophy: "키니코스학파, 풍자문학, 반문화",
        description: [
            "당신은 세상의 허위를 꿰뚫어 봅니다. 그리고 그것을 그냥 두지 않아요. 비꼬고, 풍자합니다. 당신의 유머에는 날이 있습니다.",
            "당신은 아마 '황제가 벗었다'고 말하는 아이 같은 사람일 거예요. 다들 아는데 안 말하는 것을 당신은 말합니다.",
            "트위터, 인스타, 유튜브. 당신의 재치는 온라인에서 빛납니다. 적도 많지만 팬도 많아요.",
            "하지만 비판만 하면 공허해집니다. 가끔은 만들어 보세요. 그리고 냉소 뒤에 숨은 상처를 들여다보세요."
        ],
        strengths: ["날카로운 통찰력", "재치와 유머", "가식을 간파하는 능력", "독립적 사고"],
        weaknesses: ["적이 많아짐", "건설적이지 않음", "깊은 연결이 어려움", "냉소 뒤의 공허함"],
        compatibility: {
            love: { best: { type: "2-C", name: "데카당스형", reason: "같은 언어로 소통합니다." }, hard: { type: "3-A", name: "혁명가형", reason: "당신의 조롱이 상대의 진심을 상처 입힐 수 있어요." } },
            friend: { best: { type: "2-B", name: "마키아벨리스트형", reason: "서로의 게임을 이해합니다." }, hard: { type: "1-B", name: "조용한 행동가형", reason: "당신의 풍자가 상대에게는 무례하게 느껴질 수 있어요." } },
            work: { best: { type: "3-C", name: "예술가/작가형", reason: "같이 콘텐츠를 만들 수 있어요." }, hard: { type: "1-A", name: "전도사형", reason: "당신의 시니컬함이 상대의 열정을 깎아내릴 수 있어요." } }
        },
        patterns: { stress: "더 날카롭게 비꼽니다.", happy: "좋은 농담이 먹혔을 때.", conflict: "유머로 공격합니다. '농담인데?' 뒤에 숨습니다." },
        famous: { historical: ["김구라", "신해철"], modern: ["유병재", "주우재", "침착맨"], fictional: ["데드풀", "토니 스타크"] },
        warnings: { signs: ["모든 것이 조롱거리가 될 때", "진심이 사라질 때"], danger: { type: "2-D", name: "냉소적 순응형", reason: "에너지가 사라지고 조용한 냉소만 남습니다." } },
        recommendations: { books: [{ title: "아몬드", author: "손원평" }, { title: "피프티 피플", author: "정세랑" }], movies: [{ title: "기생충", desc: "사회 풍자의 정점" }, { title: "돈 룩 업", desc: "현실 풍자" }], music: [{ title: "Rush Hour", artist: "크러쉬" }, { title: "TOMBOY", artist: "(여자)아이들" }] }
    },
    "2-B": {
        code: "2-B", name: "마키아벨리스트형", subtitle: "게임을 하면서 비웃는 사람",
        philosophy: "마키아벨리즘, 현실주의 정치철학",
        description: [
            "당신은 세상의 룰을 압니다. 그리고 그 안에서 잘 움직입니다. 하지만 그 룰을 비웃어요. 게임을 하면서 게임을 조롱합니다.",
            "정치를 할 줄 알아요. 누구 편에 서야 하는지, 언제 말해야 하는지. 하지만 그걸 하면서 한편으로는 경멸합니다.",
            "성공할 수 있어요. 하지만 그 뒤에는 공허함이 있습니다. 게임에서 이겼는데, 상금이 뭔지 모르겠는 느낌.",
            "모든 것을 전략으로만 보면 진짜 연결이 불가능해져요. 누군가에게는 진심을 보여주세요."
        ],
        strengths: ["뛰어난 전략적 사고", "현실 파악력", "적응력과 유연성", "목표 달성 능력"],
        weaknesses: ["깊은 공허함", "진정한 신뢰 관계 어려움", "모든 것이 계산이 됨", "의미 상실"],
        compatibility: {
            love: { best: { type: "2-A", name: "풍자가형", reason: "서로의 게임을 이해합니다." }, hard: { type: "3-D", name: "고독한 구도자형", reason: "당신의 전략과 상대의 진심이 충돌합니다." } },
            friend: { best: { type: "2-C", name: "데카당스형", reason: "편하게 놀 수 있어요." }, hard: { type: "3-A", name: "혁명가형", reason: "당신의 '현실적'이 상대에게는 '비겁'으로 보일 수 있어요." } },
            work: { best: { type: "1-B", name: "조용한 행동가형", reason: "당신이 전략을 짜면 상대가 실행합니다." }, hard: { type: "3-C", name: "예술가/작가형", reason: "당신의 실용주의가 상대의 이상주의와 충돌." } }
        },
        patterns: { stress: "더 전략적으로 됩니다. 계산이 복잡해져요.", happy: "게임에서 이겼을 때. 하지만 오래가지 않아요.", conflict: "직접 대면하지 않고 상황을 조작합니다." },
        famous: { historical: ["이병철", "정주영 (사업적 측면)"], modern: ["일론 머스크"], fictional: ["리틀핑거 (왕좌의 게임)"] },
        warnings: { signs: ["모든 것이 계산이 될 때", "이겨도 공허할 때"], danger: { type: "2-D", name: "냉소적 순응형", reason: "에너지가 빠지면 그냥 순응만 남습니다." } },
        recommendations: { books: [{ title: "설민석의 조선왕조실록", author: "설민석" }, { title: "넛지", author: "리처드 탈러" }], movies: [{ title: "킹메이커", desc: "정치 게임의 냉정함" }, { title: "머니볼", desc: "시스템으로 이기기" }], music: [{ title: "Super", artist: "세븐틴" }, { title: "Hype Boy", artist: "뉴진스" }] }
    },
    "2-C": {
        code: "2-C", name: "데카당스형", subtitle: "쿨하게 거리두는 사람",
        philosophy: "데카당스, 아이러니즘, 포스트모던 냉소",
        description: [
            "당신은 쿨합니다. 뭔가에 올인하지 않아요. 적당히 즐기고, 적당히 비웃고, 적당히 살아갑니다.",
            "재치가 있어요. 아이러니를 잘 씁니다. 당신 주변에서는 분위기가 가벼워져요. 하지만 그 가벼움 아래 뭐가 있는지는 잘 안 보여주죠.",
            "표면이 우아합니다. 취향이 좋고, 센스가 있어요. 하지만 당신도 알죠. 그게 전부라는 걸.",
            "표면만 남으면 공허해져요. 가끔은 깊이 들어가 보세요. 쿨함은 보호막일 수 있어요."
        ],
        strengths: ["세련된 재치", "분위기를 가볍게 만드는 능력", "좋은 취향", "적당한 거리두기"],
        weaknesses: ["깊이 부족", "진정한 연결 어려움", "표면만 남을 위험", "공허함"],
        compatibility: {
            love: { best: { type: "2-A", name: "풍자가형", reason: "같은 언어로 놉니다." }, hard: { type: "3-A", name: "혁명가형", reason: "상대의 진지함이 부담스러워요." } },
            friend: { best: { type: "2-B", name: "마키아벨리스트형", reason: "서로 부담 없어요." }, hard: { type: "3-D", name: "고독한 구도자형", reason: "상대의 깊이가 무겁게 느껴질 수 있어요." } },
            work: { best: { type: "2-A", name: "풍자가형", reason: "크리에이티브 작업에서 궁합이 좋아요." }, hard: { type: "1-A", name: "전도사형", reason: "상대의 열정이 부담스러워요." } }
        },
        patterns: { stress: "더 거리를 둡니다. 더 쿨해지고, 더 아이러니해져요.", happy: "재치 있는 대화, 미학적 경험.", conflict: "피합니다. 아이러니로 넘깁니다." },
        famous: { historical: ["오스카 와일드", "앤디 워홀"], modern: ["지드래곤", "DEAN", "이효리"], fictional: ["개츠비"] },
        warnings: { signs: ["모든 게 표면일 때", "아무것도 안 느껴질 때"], danger: { type: "2-D", name: "냉소적 순응형", reason: "에너지가 빠지면 그냥 있는 사람이 됩니다." } },
        recommendations: { books: [{ title: "위대한 개츠비", author: "피츠제럴드" }, { title: "나는 나로 살기로 했다", author: "김수현" }], movies: [{ title: "콜 미 바이 유어 네임", desc: "아름다운 여름의 권태" }, { title: "그랜드 부다페스트 호텔", desc: "웨스 앤더슨의 미학" }], music: [{ title: "VIBE", artist: "태양 ft. 지민" }, { title: "Celebrity", artist: "아이유" }] }
    },
    "2-D": {
        code: "2-D", name: "냉소적 순응형", subtitle: "조용히 체제 안에 있는 사람",
        philosophy: "현대적 시니시즘",
        description: [
            "당신은 세상을 냉소적으로 봅니다. '다 그런 거지' 하면서 살아가요. 시스템 안에서 조용히 살아갑니다.",
            "비판은 있어요. 속으로는 다 알아요. 하지만 말하지 않습니다. 말해봤자 뭐가 바뀌나요?",
            "적응력이 뛰어납니다. 어디서든 살아남아요. 튀지 않고, 적당히 합니다.",
            "너무 오래 이렇게 살면 자기가 뭘 원하는지 잊어버려요. 뭔가 하나라도 진심으로 해보세요."
        ],
        strengths: ["뛰어난 적응력", "생존 능력", "충돌 회피", "현실적 판단"],
        weaknesses: ["깊은 공허함", "자기 상실", "에너지 부족", "진정한 연결 어려움"],
        compatibility: {
            love: { best: { type: "2-C", name: "데카당스형", reason: "서로 부담 없어요." }, hard: { type: "3-A", name: "혁명가형", reason: "에너지 차이가 너무 커요." } },
            friend: { best: { type: "2-B", name: "마키아벨리스트형", reason: "서로 이해해요." }, hard: { type: "1-A", name: "전도사형", reason: "상대의 열정이 부담스러워요." } },
            work: { best: { type: "1-B", name: "조용한 행동가형", reason: "조용히 각자 일합니다." }, hard: { type: "3-A", name: "혁명가형", reason: "상대의 열정에 휘말리기 싫어요." } }
        },
        patterns: { stress: "더 숨습니다. 더 무기력해져요.", happy: "잘 모르겠어요. 불편하지 않으면 괜찮아요.", conflict: "없어요. 피해요." },
        famous: { historical: ["이름 없는 많은 사람들"], modern: ["직장인 밈의 주인공들"], fictional: ["회색인 캐릭터들"] },
        warnings: { signs: ["내가 뭘 원하는지 모를 때", "그냥 하루하루 버틸 때"], danger: { type: "4-D", name: "침묵의 체념형", reason: "냉소에서 체념으로 미끄러집니다." } },
        recommendations: { books: [{ title: "90년생이 온다", author: "임홍택" }, { title: "룬샷", author: "사피 바칼" }], movies: [{ title: "아메리칸 뷰티", desc: "중년의 권태와 각성" }, { title: "파이트 클럽", desc: "시스템 속 무기력함의 폭발" }], music: [{ title: "취중진담", artist: "김동률" }, { title: "Permission to Dance", artist: "BTS" }] }
    },
    "3-A": {
        code: "3-A", name: "혁명가형", subtitle: "싸우면서 외치는 사람",
        philosophy: "실존적 마르크시즘, 해방신학",
        description: [
            "당신은 의미를 찾고 싶고, 그것을 위해 싸웁니다. 세상의 부조리를 보면 가만히 있을 수 없어요. 뜨거운 사람이에요.",
            "불의를 보면 피가 끓습니다. 다른 사람들이 '그냥 그런 거지' 할 때, 당신은 '왜 그래야 해?'라고 묻습니다.",
            "당신의 열정은 강력합니다. 사람들을 움직일 수 있어요. 하지만 그만큼 지치기도 쉬워요.",
            "혼자 싸우지 마세요. 쉬는 것도 싸움입니다. 오래 버텨야 합니다."
        ],
        strengths: ["뜨거운 열정", "강한 행동력", "사람을 모으는 능력", "불의에 맞서는 용기"],
        weaknesses: ["번아웃 위험이 매우 높음", "극단화 가능성", "적이 많아짐", "지속성 어려움"],
        compatibility: {
            love: { best: { type: "1-A", name: "전도사형", reason: "같은 방향을 봅니다. 함께 싸우고 함께 꿈꿔요." }, hard: { type: "2-D", name: "냉소적 순응형", reason: "'왜 아무것도 안 해?'라는 답답함." } },
            friend: { best: { type: "3-B", name: "지하운동가형", reason: "같은 목표, 다른 방식. 서로 보완해요." }, hard: { type: "2-C", name: "데카당스형", reason: "상대의 '쿨함'이 무책임으로 느껴질 수 있어요." } },
            work: { best: { type: "1-B", name: "조용한 행동가형", reason: "당신이 방향을 제시하면 상대가 실행합니다." }, hard: { type: "4-D", name: "침묵의 체념형", reason: "상대를 움직일 수 없어 답답해요." } }
        },
        patterns: { stress: "더 열심히 싸웁니다. 지쳐도 멈추지 못해요.", happy: "변화가 보일 때. 동료가 있을 때.", conflict: "정면 돌파합니다." },
        famous: { historical: ["전태일", "유관순"], modern: ["그레타 툰베리", "환경운동가들"], fictional: ["캣니스 (헝거게임)", "에렌 예거"] },
        warnings: { signs: ["혼자 싸우는 느낌", "지쳐도 못 멈출 때"], danger: { type: "3-C", name: "예술가/작가형", reason: "행동에서 표현으로만 후퇴할 수 있습니다." } },
        recommendations: { books: [{ title: "82년생 김지영", author: "조남주" }, { title: "정의란 무엇인가", author: "마이클 샌델" }], movies: [{ title: "1987", desc: "민주화 운동의 뜨거움" }, { title: "변호인", desc: "불의에 맞서는 용기" }], music: [{ title: "불꽃", artist: "YB" }, { title: "Daechwita", artist: "Agust D" }] }
    },
    "3-B": {
        code: "3-B", name: "지하운동가형", subtitle: "은밀하게 바꾸는 사람",
        philosophy: "저항적 실존주의, 지하문학",
        description: [
            "당신은 의미를 찾아 싸우지만, 드러내지 않습니다. 시스템 안에서 시스템을 바꾸려 합니다. 조용한 혁명가예요.",
            "큰 소리로 외치지 않지만, 조금씩 바꿔나갑니다. 아무도 모르게 씨앗을 심어요.",
            "이중생활의 피로가 있습니다. 하지만 그게 당신의 방식입니다.",
            "동료가 필요합니다. 혼자 하지 마세요. 때로는 드러내야 할 때도 있어요."
        ],
        strengths: ["전략적 사고", "인내심", "시스템에 대한 이해", "장기적 지속성"],
        weaknesses: ["이중생활의 피로", "들킬 위험", "고독함", "인정받지 못함"],
        compatibility: {
            love: { best: { type: "3-A", name: "혁명가형", reason: "같은 목표를 공유합니다." }, hard: { type: "2-A", name: "풍자가형", reason: "당신의 진지함이 조롱당할 수 있어요." } },
            friend: { best: { type: "3-D", name: "고독한 구도자형", reason: "서로의 고독을 이해합니다." }, hard: { type: "2-C", name: "데카당스형", reason: "상대의 가벼움이 무책임해 보일 수 있어요." } },
            work: { best: { type: "3-A", name: "혁명가형", reason: "상대가 드러내고 당신이 숨어서 밉니다." }, hard: { type: "2-B", name: "마키아벨리스트형", reason: "목표가 다를 수 있어요." } }
        },
        patterns: { stress: "더 조심스러워집니다.", happy: "조용한 변화가 보일 때.", conflict: "우회합니다." },
        famous: { historical: ["안중근 (거사 전)", "독립운동가들"], modern: ["내부고발자들", "탐사보도 기자들"], fictional: ["V (브이 포 벤데타)"] },
        warnings: { signs: ["완전히 고립될 때", "아무도 모르게 될 때"], danger: { type: "3-D", name: "고독한 구도자형", reason: "행동에서 내면으로만 후퇴할 수 있습니다." } },
        recommendations: { books: [{ title: "채식주의자", author: "한강" }, { title: "1984", author: "조지 오웰" }], movies: [{ title: "타인의 삶", desc: "체제 안의 양심" }, { title: "스포트라이트", desc: "조용한 탐사" }], music: [{ title: "Black Swan", artist: "BTS" }, { title: "Numb", artist: "린킨파크" }] }
    },
    "3-C": {
        code: "3-C", name: "예술가/작가형", subtitle: "표현으로 찾는 사람",
        philosophy: "문학적 실존주의, 부조리 문학",
        description: [
            "당신은 의미를 찾고 싶지만, 적극적으로 세상을 바꾸려 하지 않습니다. 대신 표현합니다. 글로, 음악으로, 그림으로.",
            "당신 안에는 깊은 우물이 있어요. 감정이 깊고, 생각이 많습니다. 창작이 숨쉬기 같습니다.",
            "사람들은 당신의 작품에서 자기를 발견합니다. 당신은 그냥 자기 이야기를 했을 뿐인데, 그게 보편이 됩니다.",
            "표현만 하고 행동하지 않으면 뱅뱅 돌아요. 때로는 밖으로 나가야 해요."
        ],
        strengths: ["깊은 감수성", "뛰어난 표현력", "보편적 공감을 끌어내는 능력", "진정성"],
        weaknesses: ["행동력 부족", "고립 위험", "현실과의 괴리", "표현이 행동을 대체함"],
        compatibility: {
            love: { best: { type: "1-C", name: "현자형", reason: "끝없이 깊은 대화가 가능합니다." }, hard: { type: "2-A", name: "풍자가형", reason: "당신의 진지함이 조롱당하면 크게 상처받아요." } },
            friend: { best: { type: "4-C", name: "비관적 예술가형", reason: "같은 언어로 소통합니다." }, hard: { type: "2-B", name: "마키아벨리스트형", reason: "상대의 계산이 차갑게 느껴질 수 있어요." } },
            work: { best: { type: "2-A", name: "풍자가형", reason: "콘텐츠 협업에서 시너지." }, hard: { type: "2-D", name: "냉소적 순응형", reason: "상대의 무기력함이 답답해요." } }
        },
        patterns: { stress: "더 창작에 몰입합니다.", happy: "창작할 때. 깊은 대화를 나눌 때.", conflict: "글이나 작품으로 표현합니다." },
        famous: { historical: ["윤동주", "이상", "카프카"], modern: ["BTS RM", "아이유 (작사 작곡)", "박찬욱"], fictional: ["신지 (에반게리온)"] },
        warnings: { signs: ["창작이 멈출 때", "표현해도 공허할 때"], danger: { type: "4-C", name: "비관적 예술가형", reason: "희망이 사라지고 어둠만 남을 수 있습니다." } },
        recommendations: { books: [{ title: "불편한 편의점", author: "김호연" }, { title: "이방인", author: "알베르 카뮈" }], movies: [{ title: "버닝", desc: "이창동의 모호한 세계" }, { title: "인사이드 아웃 2", desc: "감정 표현의 중요성" }], music: [{ title: "에필로그", artist: "아이유" }, { title: "Epiphany", artist: "BTS 진" }] }
    },
    "3-D": {
        code: "3-D", name: "고독한 구도자형", subtitle: "혼자 찾는 사람",
        philosophy: "키르케고르의 실존, 내면적 실존주의",
        description: [
            "당신은 의미를 찾지만, 적극적으로 행동하지도, 드러내지도 않습니다. 혼자 내면에서 찾습니다.",
            "머릿속이 항상 복잡할 거예요. 생각이 많고, 질문이 많습니다. 답이 안 나와도 멈추지 못해요.",
            "혼자 있는 시간이 필요합니다. 깊은 관계 몇 개면 충분합니다.",
            "너무 오래 혼자 있으면 위험해요. 가끔은 밖으로 나오세요."
        ],
        strengths: ["깊은 내면 세계", "자기 성찰 능력", "진정성", "독립적 사고"],
        weaknesses: ["고립 위험", "검증 없음", "아무도 모름", "혼자 무너질 수 있음"],
        compatibility: {
            love: { best: { type: "1-B", name: "조용한 행동가형", reason: "말없이 서로를 이해합니다." }, hard: { type: "2-A", name: "풍자가형", reason: "당신의 진지함이 이해받지 못해요." } },
            friend: { best: { type: "3-C", name: "예술가/작가형", reason: "깊은 대화가 가능합니다." }, hard: { type: "2-C", name: "데카당스형", reason: "상대의 가벼움이 피상적으로 느껴져요." } },
            work: { best: { type: "1-C", name: "현자형", reason: "같이 깊이 파는 동료." }, hard: { type: "3-A", name: "혁명가형", reason: "팀워크 요구가 부담스러워요." } }
        },
        patterns: { stress: "더 깊이 들어갑니다.", happy: "통찰의 순간.", conflict: "피합니다. 내면으로 들어가요." },
        famous: { historical: ["키르케고르", "시몬 베유"], modern: ["MBTI 커뮤니티의 INFJ들"], fictional: ["치히로 (센과 치히로)"] },
        warnings: { signs: ["완전히 고립될 때", "내면에서 길을 잃을 때"], danger: { type: "4-D", name: "침묵의 체념형", reason: "탐구가 멈추고 체념만 남을 수 있습니다." } },
        recommendations: { books: [{ title: "데미안", author: "헤르만 헤세" }, { title: "나미야 잡화점의 기적", author: "히가시노 게이고" }], movies: [{ title: "센과 치히로의 행방불명", desc: "자아를 찾는 여정" }, { title: "빅 피쉬", desc: "삶의 의미 찾기" }], music: [{ title: "Love wins all", artist: "아이유" }, { title: "잊어야 한다는 마음으로", artist: "김동률" }] }
    },
    "4-A": {
        code: "4-A", name: "철학적 염세형", subtitle: "말하는 비관주의자",
        philosophy: "쇼펜하우어, 철학적 비관주의",
        description: [
            "당신은 삶이 고통이라는 것을 알고, 그것을 적극적으로 주장합니다. 가식 없이 어둠을 직시합니다.",
            "당신의 비관은 게으름이 아닙니다. 오히려 정직함입니다. 세상을 있는 그대로 보는 용기예요.",
            "사람들은 불편해해요. 당신의 말이 틀려서가 아니라, 맞기 때문입니다.",
            "비관이 전부가 되면 안 돼요. 가끔은 작은 기쁨도 허락하세요."
        ],
        strengths: ["정직함", "뛰어난 논리력", "가식 없음", "깊은 사고"],
        weaknesses: ["관계가 어려움", "어둠 전파", "희망 부재", "타인에게 무거움"],
        compatibility: {
            love: { best: { type: "3-C", name: "예술가/작가형", reason: "어둠을 함께 볼 수 있습니다." }, hard: { type: "1-A", name: "전도사형", reason: "긍정과 부정이 정면 충돌합니다." } },
            friend: { best: { type: "4-C", name: "비관적 예술가형", reason: "같은 언어. 위로가 아니라 이해." }, hard: { type: "1-A", name: "전도사형", reason: "상대의 긍정이 가식으로 느껴질 수 있어요." } },
            work: { best: { type: "3-D", name: "고독한 구도자형", reason: "깊이 파는 동료." }, hard: { type: "2-C", name: "데카당스형", reason: "상대의 가벼움이 무책임해 보여요." } }
        },
        patterns: { stress: "더 논리적으로 비관을 전개합니다.", happy: "드물지만, 진실이 인정될 때.", conflict: "논리로 싸웁니다." },
        famous: { historical: ["쇼펜하우어", "에밀 시오랑"], modern: ["우울 유튜버들"], fictional: ["러스트 콜 (트루 디텍티브)"] },
        warnings: { signs: ["아무도 안 들을 때", "더 극단적으로 갈 때"], danger: { type: "4-D", name: "침묵의 체념형", reason: "말하는 것도 포기하면 침묵만 남습니다." } },
        recommendations: { books: [{ title: "의지와 표상으로서의 세계", author: "쇼펜하우어" }, { title: "존재의 불편함", author: "에밀 시오랑" }], movies: [{ title: "멜랑콜리아", desc: "종말 앞의 우울" }, { title: "세븐", desc: "인간 본성의 어둠" }], music: [{ title: "사랑은 늘 도망가", artist: "임영웅" }, { title: "Creep", artist: "라디오헤드" }] }
    },
    "4-B": {
        code: "4-B", name: "그노시스형", subtitle: "혼자 아는 사람",
        philosophy: "그노시스주의, 비관적 신비주의",
        description: [
            "당신은 세상의 어둠을 알지만, 드러내지 않습니다. 혼자 압니다. 숨겨진 지식처럼.",
            "세상이 대부분의 사람들이 생각하는 것과 다르다고 느낄 거예요. 그것을 알게 되면 희망 같은 건 사라집니다.",
            "말해봤자 이해 못 해요. 그래서 혼자 알고 있어요.",
            "너무 혼자 있으면 현실과 분리될 수 있어요. 가끔은 나누세요."
        ],
        strengths: ["깊은 통찰", "독립적 사고", "신비로움", "비밀 유지"],
        weaknesses: ["완전한 고립", "검증 없음", "현실과 분리", "극단적 사고"],
        compatibility: {
            love: { best: { type: "4-A", name: "철학적 염세형", reason: "어둠에 대한 공통 이해." }, hard: { type: "1-A", name: "전도사형", reason: "세계관이 정반대입니다." } },
            friend: { best: { type: "4-C", name: "비관적 예술가형", reason: "같은 어둠을 봅니다." }, hard: { type: "2-C", name: "데카당스형", reason: "상대의 표면적 삶이 답답해요." } },
            work: { best: { type: "3-D", name: "고독한 구도자형", reason: "같이 깊이 파는 동료." }, hard: { type: "1-A", name: "전도사형", reason: "세계관 차이가 너무 커요." } }
        },
        patterns: { stress: "더 깊이 숨습니다.", happy: "같은 것을 아는 사람을 만날 때.", conflict: "피합니다." },
        famous: { historical: ["영지주의자들"], modern: ["음모론 커뮤니티"], fictional: ["이타치 (나루토)"] },
        warnings: { signs: ["완전히 고립될 때", "현실과 분리될 때"], danger: { type: "4-D", name: "침묵의 체념형", reason: "비밀도 의미 없어지면 침묵만 남습니다." } },
        recommendations: { books: [{ title: "데미안", author: "헤르만 헤세" }, { title: "나르치스와 골드문트", author: "헤르만 헤세" }], movies: [{ title: "매트릭스", desc: "깨어남의 비유" }, { title: "다크 시티", desc: "숨겨진 진실" }], music: [{ title: "Spring Day", artist: "BTS" }, { title: "사랑했지만", artist: "김광석" }] }
    },
    "4-C": {
        code: "4-C", name: "비관적 예술가형", subtitle: "어둠을 표현하는 사람",
        philosophy: "낭만적 염세, 표현주의 비관",
        description: [
            "당신은 삶의 어둠을 느끼고, 그것을 예술로 표현합니다. 가장 아픈 것을 가장 아름답게 만드는 사람이에요.",
            "당신의 작품에는 슬픔이 있습니다. 하지만 그것이 사람들의 마음을 움직여요. 당신의 어둠이 누군가의 위로가 됩니다.",
            "창작이 숨구멍입니다. 어둠을 밖으로 꺼내야 안에서 썩지 않아요.",
            "어둠에 너무 빠지면 위험합니다. 그럴 때는 손 내밀어요."
        ],
        strengths: ["깊은 예술적 표현", "진정성", "공감 능력", "아픔을 아름다움으로 바꾸는 힘"],
        weaknesses: ["자기파괴 위험", "어둠에 빠짐", "현실 회피", "희망 부재"],
        compatibility: {
            love: { best: { type: "3-C", name: "예술가/작가형", reason: "예술로 소통합니다." }, hard: { type: "1-A", name: "전도사형", reason: "긍정의 요구가 부담스러워요." } },
            friend: { best: { type: "4-A", name: "철학적 염세형", reason: "같은 어둠. 위로가 아니라 이해." }, hard: { type: "2-C", name: "데카당스형", reason: "상대의 가벼움이 피상적으로 느껴져요." } },
            work: { best: { type: "3-C", name: "예술가/작가형", reason: "같이 창작할 수 있어요." }, hard: { type: "2-B", name: "마키아벨리스트형", reason: "상대의 계산이 차갑게 느껴져요." } }
        },
        patterns: { stress: "더 창작에 몰입합니다. 어둠이 깊어져요.", happy: "창작할 때. 공감받을 때.", conflict: "피합니다. 작품으로 대신해요." },
        famous: { historical: ["에드워드 뭉크", "고흐"], modern: ["검정치마", "쏜애플", "새벽 (가수)"], fictional: ["조커 (호아킨 피닉스)"] },
        warnings: { signs: ["창작도 구원이 안 될 때", "자기파괴적이 될 때"], danger: { type: "4-D", name: "침묵의 체념형", reason: "표현도 멈추면 침묵만 남습니다." } },
        recommendations: { books: [{ title: "백년의 고독", author: "가르시아 마르케스" }, { title: "상실의 시대", author: "무라카미 하루키" }], movies: [{ title: "버닝", desc: "이창동의 어둠" }, { title: "조커", desc: "사회가 만든 괴물" }], music: [{ title: "사건의 지평선", artist: "윤하" }, { title: "HOT", artist: "세븐틴" }] }
    },
    "4-D": {
        code: "4-D", name: "침묵의 체념형", subtitle: "그냥 있는 사람",
        philosophy: "무기력한 허무주의",
        description: [
            "당신은 삶이 고통이라는 것을 알고, 아무것도 하지 않습니다. 그냥 있어요. 최소한의 존재입니다.",
            "기대가 없습니다. 희망도 없어요. 하지만 이상하게 그래서 평온할 때도 있습니다. 그냥 하루하루 넘기는 거예요.",
            "사람들은 당신을 이해 못 해요. 설명하기 귀찮아요. 그냥 혼자 있는 게 편해요.",
            "완전히 단절되면 위험합니다. 작은 연결이라도 유지하세요. 완전히 멈추면 안 돼요."
        ],
        strengths: ["있는 그대로 봄", "기대 없는 평온", "솔직함", "불필요한 것을 버림"],
        weaknesses: ["사회적 단절", "에너지 부재", "연결 없음", "위험 신호를 놓침"],
        compatibility: {
            love: { best: { type: "1-D", name: "은자형", reason: "말없이 함께 있을 수 있습니다." }, hard: { type: "1-A", name: "전도사형", reason: "에너지가 너무 달라요." } },
            friend: { best: { type: "4-C", name: "비관적 예술가형", reason: "같은 어둠. 이해가 가능해요." }, hard: { type: "3-A", name: "혁명가형", reason: "상대의 열정이 피곤해요." } },
            work: { best: { type: "1-B", name: "조용한 행동가형", reason: "간섭 없이 각자 일합니다." }, hard: { type: "3-A", name: "혁명가형", reason: "팀워크 요구가 에너지를 빼요." } }
        },
        patterns: { stress: "더 조용해집니다. 사라집니다.", happy: "고통이 없는 순간. 방해받지 않을 때.", conflict: "없습니다. 이미 물러났어요." },
        famous: { historical: ["이름 없이 사라진 사람들"], modern: ["은둔형 외톨이"], fictional: ["카오나시 (센과 치히로)"] },
        warnings: { signs: ["완전히 사라질 때", "모든 연결이 끊어질 때"], danger: { type: null, name: "더 깊은 어둠", reason: "이보다 더 내려가면 위험합니다. 전문적 도움이 필요할 수 있어요." } },
        recommendations: { books: [{ title: "지하로부터의 수기", author: "도스토예프스키" }, { title: "편의점 인간", author: "무라타 사야카" }], movies: [{ title: "택시 드라이버", desc: "고독한 도시인" }, { title: "월-E", desc: "고독 속 작은 연결" }], music: [{ title: "사랑은 은하수 다방에서", artist: "10cm" }, { title: "소우주", artist: "BTS" }] }
    }
};

const typeQuotes = {
    "1-A": "세상을 바꾸는 목소리", "1-B": "말없이 실천하는 삶", "1-C": "고요한 지혜", "1-D": "내면의 완결",
    "2-A": "날카로운 풍자", "2-B": "전략적 생존", "2-C": "우아한 거리두기", "2-D": "조용한 적응",
    "3-A": "뜨거운 저항", "3-B": "은밀한 변화", "3-C": "의미를 찾아 표현하는 삶", "3-D": "고독한 탐구",
    "4-A": "정직한 비관", "4-B": "숨겨진 지식", "4-C": "어둠의 미학", "4-D": "침묵의 존재"
};
