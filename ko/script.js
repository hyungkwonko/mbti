// State management
let currentQuestion = 0;
let answers = {};

// DOM Elements
const screens = {
    intro: document.getElementById('intro'),
    test: document.getElementById('test'),
    result: document.getElementById('result')
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Setup scale buttons
    const scaleButtons = document.querySelectorAll('.scale-btn');
    scaleButtons.forEach(btn => {
        btn.addEventListener('click', () => selectAnswer(parseInt(btn.dataset.value)));
    });
});

// Navigation functions
function showScreen(screenName) {
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    screens[screenName].classList.add('active');
    window.scrollTo(0, 0);
}

function startTest() {
    currentQuestion = 0;
    answers = {};
    showScreen('test');
    displayQuestion();
}

function retryTest() {
    currentQuestion = 0;
    answers = {};
    showScreen('intro');
}

// Question display
function displayQuestion() {
    const question = shuffledQuestions[currentQuestion];
    
    document.getElementById('questionNumber').textContent = `Q${currentQuestion + 1}`;
    document.getElementById('questionText').textContent = question.text;
    document.getElementById('progressText').textContent = `${currentQuestion + 1} / ${shuffledQuestions.length}`;
    document.getElementById('progressFill').style.width = `${((currentQuestion + 1) / shuffledQuestions.length) * 100}%`;
    
    // Update navigation buttons
    document.getElementById('btnPrev').disabled = currentQuestion === 0;
    
    // Update scale buttons selection
    const scaleButtons = document.querySelectorAll('.scale-btn');
    scaleButtons.forEach(btn => {
        btn.classList.remove('selected');
        if (answers[question.id] === parseInt(btn.dataset.value)) {
            btn.classList.add('selected');
        }
    });
    
    // Update next button
    updateNextButton();
    
    // Animation
    const container = document.getElementById('questionContainer');
    container.style.animation = 'none';
    container.offsetHeight; // Trigger reflow
    container.style.animation = 'fadeIn 0.4s ease';
}

function selectAnswer(value) {
    const question = shuffledQuestions[currentQuestion];
    answers[question.id] = value;
    
    // Update UI
    const scaleButtons = document.querySelectorAll('.scale-btn');
    scaleButtons.forEach(btn => {
        btn.classList.remove('selected');
        if (parseInt(btn.dataset.value) === value) {
            btn.classList.add('selected');
        }
    });
    
    updateNextButton();
    
    // Auto advance after short delay
    setTimeout(() => {
        if (currentQuestion < shuffledQuestions.length - 1) {
            nextQuestion();
        }
    }, 300);
}

function updateNextButton() {
    const question = shuffledQuestions[currentQuestion];
    const btnNext = document.getElementById('btnNext');
    
    if (answers[question.id]) {
        btnNext.disabled = false;
        if (currentQuestion === shuffledQuestions.length - 1) {
            btnNext.innerHTML = `<span>결과 보기</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>`;
        } else {
            btnNext.innerHTML = `<span>다음</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>`;
        }
    } else {
        btnNext.disabled = true;
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

function nextQuestion() {
    const question = shuffledQuestions[currentQuestion];
    if (!answers[question.id]) return;
    
    if (currentQuestion < shuffledQuestions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        calculateResult();
    }
}

// Calculate results
// v3 축 이름: expectation(기대수준), experience(현재경험), belief(정답신념), energy(추구에너지)
function calculateResult() {
    const scores = {
        expectation: 0,  // 축1: 기대 수준 (높음/낮음)
        experience: 0,   // 축2: 현재 경험 (좋음/나쁨)
        belief: 0,       // 축3: 정답 신념 (있음/없음)
        energy: 0        // 축4: 추구 에너지 (능동/수용)
    };
    
    // Calculate scores for each axis
    questions.forEach(q => {
        const answer = answers[q.id] || 4; // Default to neutral if not answered
        const score = q.reverse ? (8 - answer) : answer;
        scores[q.axis] += score;
    });
    
    // Determine type code
    // 축1: 기대 수준 - 높으면 1,3 / 낮으면 2,4
    // 축2: 현재 경험 - 좋으면 1,2 / 나쁘면 3,4
    const expectationHigh = scores.expectation > 24;
    const experienceGood = scores.experience > 24;
    const beliefExists = scores.belief > 24;      // 정답 있음 → A,B
    const energyActive = scores.energy > 24;       // 능동 추구 → A,C
    
    // Base type (1-4): expectation × experience
    // 1: 기대 높음 + 현재 좋음
    // 2: 기대 낮음 + 현재 좋음
    // 3: 기대 높음 + 현재 나쁨
    // 4: 기대 낮음 + 현재 나쁨
    let baseType;
    if (expectationHigh && experienceGood) baseType = '1';
    else if (!expectationHigh && experienceGood) baseType = '2';
    else if (expectationHigh && !experienceGood) baseType = '3';
    else baseType = '4';
    
    // Subtype (A-D): belief × energy
    // A: 정답 있음 + 능동 추구
    // B: 정답 있음 + 수용
    // C: 정답 없음 + 능동 추구
    // D: 정답 없음 + 수용
    let subType;
    if (beliefExists && energyActive) subType = 'A';
    else if (beliefExists && !energyActive) subType = 'B';
    else if (!beliefExists && energyActive) subType = 'C';
    else subType = 'D';
    
    const typeCode = `${baseType}-${subType}`;
    
    // Display results
    displayResult(typeCode, scores);
}

// Display results
function displayResult(typeCode, scores) {
    const type = typeData[typeCode];
    if (!type) {
        console.error('Unknown type:', typeCode);
        return;
    }
    
    showScreen('result');
    
    // Header
    document.getElementById('resultType').textContent = type.code;
    document.getElementById('resultName').textContent = type.name;
    document.getElementById('resultPhilosophy').textContent = type.philosophy;
    
    // Borderline check
    displayBorderlineTypes(typeCode, scores);
    
    // Spectrum
    displaySpectrum(scores);
    
    // Description
    document.getElementById('typeDescription').innerHTML = type.description
        .map(p => `<p>${p}</p>`).join('');
    
    // Strengths & Weaknesses
    document.getElementById('strengthList').innerHTML = type.strengths
        .map(s => `<li>${s}</li>`).join('');
    document.getElementById('weaknessList').innerHTML = type.weaknesses
        .map(w => `<li>${w}</li>`).join('');
    
    // Compatibility - 연애, 친구, 직장
    document.getElementById('compatibilitySection').innerHTML = `
        <div class="compat-category">
            <h4 class="compat-category-title">💕 연애</h4>
            <div class="compat-item">
                <span class="compat-icon">💚</span>
                <div class="compat-content">
                    <h4>잘 맞는 유형: <span class="compat-type">${type.compatibility.love.best.type}</span></h4>
                    <p>${type.compatibility.love.best.reason}</p>
                </div>
            </div>
            <div class="compat-item">
                <span class="compat-icon">💔</span>
                <div class="compat-content">
                    <h4>어려운 유형: <span class="compat-type">${type.compatibility.love.hard.type}</span></h4>
                    <p>${type.compatibility.love.hard.reason}</p>
                </div>
            </div>
        </div>
        <div class="compat-category">
            <h4 class="compat-category-title">👫 친구</h4>
            <div class="compat-item">
                <span class="compat-icon">💚</span>
                <div class="compat-content">
                    <h4>잘 맞는 유형: <span class="compat-type">${type.compatibility.friend.best.type}</span></h4>
                    <p>${type.compatibility.friend.best.reason}</p>
                </div>
            </div>
            <div class="compat-item">
                <span class="compat-icon">💔</span>
                <div class="compat-content">
                    <h4>어려운 유형: <span class="compat-type">${type.compatibility.friend.hard.type}</span></h4>
                    <p>${type.compatibility.friend.hard.reason}</p>
                </div>
            </div>
        </div>
        <div class="compat-category">
            <h4 class="compat-category-title">💼 직장 동료</h4>
            <div class="compat-item">
                <span class="compat-icon">💚</span>
                <div class="compat-content">
                    <h4>잘 맞는 유형: <span class="compat-type">${type.compatibility.work.best.type}</span></h4>
                    <p>${type.compatibility.work.best.reason}</p>
                </div>
            </div>
            <div class="compat-item">
                <span class="compat-icon">💔</span>
                <div class="compat-content">
                    <h4>어려운 유형: <span class="compat-type">${type.compatibility.work.hard.type}</span></h4>
                    <p>${type.compatibility.work.hard.reason}</p>
                </div>
            </div>
        </div>
    `;
    
    // Daily Patterns
    document.getElementById('dailyPatterns').innerHTML = `
        <div class="pattern-item">
            <h4>☀️ 아침</h4>
            <p>${type.dailyPatterns.morning}</p>
        </div>
        <div class="pattern-item">
            <h4>💼 일할 때</h4>
            <p>${type.dailyPatterns.work}</p>
        </div>
        <div class="pattern-item">
            <h4>🌙 저녁</h4>
            <p>${type.dailyPatterns.evening}</p>
        </div>
        <div class="pattern-item">
            <h4>🎉 주말</h4>
            <p>${type.dailyPatterns.weekend}</p>
        </div>
        <div class="pattern-item">
            <h4>😰 스트레스 받을 때</h4>
            <p>${type.dailyPatterns.stress}</p>
        </div>
        <div class="pattern-item">
            <h4>😊 기분 좋을 때</h4>
            <p>${type.dailyPatterns.happy}</p>
        </div>
        <div class="pattern-item">
            <h4>⚡ 갈등 상황에서</h4>
            <p>${type.dailyPatterns.conflict}</p>
        </div>
    `;
    
    // Inner World (NEW in v3)
    document.getElementById('innerWorld').innerHTML = `
        <div class="inner-world-item core-desire">
            <h4>💚 진짜 원하는 것</h4>
            <p>${type.innerWorld.coreDesire}</p>
        </div>
        <div class="inner-world-item core-fear">
            <h4>💔 가장 피하고 싶은 것</h4>
            <p>${type.innerWorld.coreFear}</p>
        </div>
        <div class="inner-world-item inner-child">
            <h4>👶 내면 아이</h4>
            <p>${type.innerWorld.innerChild}</p>
        </div>
        <div class="inner-world-item shadow-side">
            <h4>🌑 그림자</h4>
            <p>${type.innerWorld.shadowSide}</p>
        </div>
        <div class="inner-world-item growth-path">
            <h4>🌱 성장 방향</h4>
            <p>${type.innerWorld.growthPath}</p>
        </div>
    `;
    
    // Speech Patterns (NEW in v3)
    document.getElementById('speechPatterns').innerHTML = `
        <div class="speech-phrases">
            ${type.speechPatterns.phrases.map(phrase => `<span class="speech-phrase">${phrase}</span>`).join('')}
        </div>
        <p class="speech-function"><strong>심리적 기능:</strong> ${type.speechPatterns.function}</p>
    `;
    
    // Famous People
    document.getElementById('famousPeople').innerHTML = `
        <div class="famous-category">
            <h4>역사적 인물</h4>
            <ul>${type.famous.historical.map(p => `<li>${p}</li>`).join('')}</ul>
        </div>
        <div class="famous-category">
            <h4>현대인</h4>
            <ul>${type.famous.modern.map(p => `<li>${p}</li>`).join('')}</ul>
        </div>
        <div class="famous-category">
            <h4>가상 인물</h4>
            <ul>${type.famous.fictional.map(p => `<li>${p}</li>`).join('')}</ul>
        </div>
    `;
    
    // Warning Signs
    const dangerHtml = type.warnings.danger.type 
        ? `<div class="warning-danger">
            <h4>무너지면 갈 수 있는 곳</h4>
            <ul><li>${type.warnings.danger.type} ${type.warnings.danger.name}: ${type.warnings.danger.reason}</li></ul>
           </div>`
        : `<div class="warning-danger">
            <h4>주의</h4>
            <ul><li>${type.warnings.danger.reason}</li></ul>
           </div>`;
    
    document.getElementById('warningSigns').innerHTML = `
        <h4>무너지기 전 신호</h4>
        <ul>${type.warnings.signs.map(s => `<li>${s}</li>`).join('')}</ul>
        ${dangerHtml}
    `;
    
    // Recommendations
    document.getElementById('recommendations').innerHTML = `
        <div class="rec-category">
            <h4>📚 책</h4>
            <ul>${type.recommendations.books.map(b => `<li><strong>${b.title}</strong><span>${b.author}</span></li>`).join('')}</ul>
        </div>
        <div class="rec-category">
            <h4>🎬 영화/드라마</h4>
            <ul>${type.recommendations.movies.map(m => `<li><strong>${m.title}</strong><span>${m.desc}</span></li>`).join('')}</ul>
        </div>
        <div class="rec-category">
            <h4>🎵 음악</h4>
            <ul>${type.recommendations.music.map(m => `<li><strong>${m.title}</strong><span>${m.artist}</span></li>`).join('')}</ul>
        </div>
    `;
    
    // Share card data
    document.getElementById('shareType').textContent = type.code;
    document.getElementById('shareName').textContent = type.name;
    document.getElementById('shareQuote').textContent = `"${typeQuotes[type.code] || type.name}"`;
}

// Borderline detection (v3 축 이름으로 업데이트)
function getBorderlineAxes(scores) {
    const borderline = [];
    if (scores.expectation >= 22 && scores.expectation <= 26) borderline.push('expectation');
    if (scores.experience >= 22 && scores.experience <= 26) borderline.push('experience');
    if (scores.belief >= 22 && scores.belief <= 26) borderline.push('belief');
    if (scores.energy >= 22 && scores.energy <= 26) borderline.push('energy');
    return borderline;
}

function getAdjacentTypes(mainType, borderlineAxes) {
    const [base, sub] = mainType.split('-');
    const adjacent = [];
    
    // expectation(기대수준) 경계 → 1↔3, 2↔4
    if (borderlineAxes.includes('expectation')) {
        const altBase = { '1': '3', '3': '1', '2': '4', '4': '2' };
        adjacent.push(`${altBase[base]}-${sub}`);
    }
    
    // experience(현재경험) 경계 → 1↔2, 3↔4
    if (borderlineAxes.includes('experience')) {
        const altBase = { '1': '2', '2': '1', '3': '4', '4': '3' };
        adjacent.push(`${altBase[base]}-${sub}`);
    }
    
    // belief(정답신념) 경계 → A↔C, B↔D
    if (borderlineAxes.includes('belief')) {
        const altSub = { 'A': 'C', 'C': 'A', 'B': 'D', 'D': 'B' };
        adjacent.push(`${base}-${altSub[sub]}`);
    }
    
    // energy(추구에너지) 경계 → A↔B, C↔D
    if (borderlineAxes.includes('energy')) {
        const altSub = { 'A': 'B', 'B': 'A', 'C': 'D', 'D': 'C' };
        adjacent.push(`${base}-${altSub[sub]}`);
    }
    
    return [...new Set(adjacent)];
}

function displayBorderlineTypes(typeCode, scores) {
    const borderlineNote = document.getElementById('borderlineNote');
    const borderline = getBorderlineAxes(scores);
    
    if (borderline.length === 0) {
        borderlineNote.innerHTML = '';
        return;
    }
    
    const adjacent = getAdjacentTypes(typeCode, borderline);
    const adjacentInfo = adjacent
        .map(code => {
            const t = typeData[code];
            return t ? `<span class="adjacent-type" onclick="showTypeDetail('${code}')">${code} ${t.name}</span>` : null;
        })
        .filter(Boolean);
    
    if (adjacentInfo.length > 0) {
        borderlineNote.innerHTML = `
            <div class="borderline-box">
                <span class="borderline-icon">💡</span>
                <span class="borderline-text">${adjacentInfo.join(', ')} 성향도 함께 가지고 있어요</span>
            </div>
        `;
    }
}

// Spectrum display (v3 축 이름으로 업데이트)
function displaySpectrum(scores) {
    // 축1: 기대 수준 (Expectation)
    const expectationPercent = ((scores.expectation - 6) / 36) * 100;
    document.getElementById('expectationValue').textContent = `${Math.round(expectationPercent)}점`;
    document.getElementById('expectationFill').style.width = `${expectationPercent}%`;
    document.getElementById('expectationMarker').style.left = `${expectationPercent}%`;
    document.getElementById('expectationDesc').textContent = scores.expectation > 24 
        ? '삶이 좋을 수 있다고 기대합니다.'
        : '삶에 대한 기대를 낮추는 편입니다.';
    
    // 축2: 현재 경험 (Experience)
    const experiencePercent = ((scores.experience - 6) / 36) * 100;
    document.getElementById('experienceValue').textContent = `${Math.round(experiencePercent)}점`;
    document.getElementById('experienceFill').style.width = `${experiencePercent}%`;
    document.getElementById('experienceMarker').style.left = `${experiencePercent}%`;
    document.getElementById('experienceDesc').textContent = scores.experience > 24 
        ? '지금 실제로 삶이 좋습니다.'
        : '지금 실제로 삶이 힘듭니다.';
    
    // 축3: 정답 신념 (Belief)
    const beliefPercent = ((scores.belief - 6) / 36) * 100;
    document.getElementById('beliefValue').textContent = `${Math.round(beliefPercent)}점`;
    document.getElementById('beliefFill').style.width = `${beliefPercent}%`;
    document.getElementById('beliefMarker').style.left = `${beliefPercent}%`;
    document.getElementById('beliefDesc').textContent = scores.belief > 24 
        ? '삶에 옳은 길이 있다고 믿습니다.'
        : '정답은 없고 상황마다 다르다고 봅니다.';
    
    // 축4: 추구 에너지 (Energy)
    const energyPercent = ((scores.energy - 6) / 36) * 100;
    document.getElementById('energyValue').textContent = `${Math.round(energyPercent)}점`;
    document.getElementById('energyFill').style.width = `${energyPercent}%`;
    document.getElementById('energyMarker').style.left = `${energyPercent}%`;
    document.getElementById('energyDesc').textContent = scores.energy > 24 
        ? '더 나은 것을 적극적으로 추구합니다.'
        : '흘러가는 대로 수용하는 편입니다.';
}

// Share functions
function shareResult() {
    document.getElementById('shareModal').classList.add('active');
}

function closeShareModal() {
    document.getElementById('shareModal').classList.remove('active');
}

function shareTwitter() {
    const type = document.getElementById('shareType').textContent;
    const name = document.getElementById('shareName').textContent;
    const quote = document.getElementById('shareQuote').textContent;
    const text = `나의 마음 좌표: ${type} ${name}\n${quote}\n\n당신의 마음 좌표는 어디인가요?`;
    const url = 'https://hyungkwonko.info/mbti';
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
}

function copyLink() {
    const url = 'https://hyungkwonko.info/mbti';
    
    // Try modern clipboard API first
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(url).then(() => {
            showToast('링크가 복사되었습니다!');
            closeShareModal();
        }).catch(() => {
            fallbackCopyTextToClipboard(url);
        });
    } else {
        fallbackCopyTextToClipboard(url);
    }
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showToast('링크가 복사되었습니다!');
            closeShareModal();
        } else {
            showToast('복사에 실패했습니다. 직접 복사해주세요.');
        }
    } catch (err) {
        showToast('복사에 실패했습니다. 직접 복사해주세요.');
    }
    
    document.body.removeChild(textArea);
}

function showToast(message) {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();
    
    // Create new toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Show
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Hide after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// About modal
function showAbout() {
    document.getElementById('aboutModal').classList.add('active');
}

function closeAbout() {
    document.getElementById('aboutModal').classList.remove('active');
}

// Close modals on outside click
document.addEventListener('click', (e) => {
    const shareModal = document.getElementById('shareModal');
    const aboutModal = document.getElementById('aboutModal');
    
    if (e.target === shareModal) {
        closeShareModal();
    }
    if (e.target === aboutModal) {
        closeAbout();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (screens.test.classList.contains('active')) {
        if (e.key >= '1' && e.key <= '7') {
            selectAnswer(parseInt(e.key));
        } else if (e.key === 'ArrowLeft') {
            prevQuestion();
        } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
            nextQuestion();
        }
    }
    
    // ESC to close modals
    if (e.key === 'Escape') {
        closeShareModal();
        closeAbout();
        closeAllTypes();
        closeTypeDetail();
    }
});

// All Types Modal functions
function showAllTypes() {
    document.getElementById('typesModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAllTypes() {
    document.getElementById('typesModal').classList.remove('active');
    document.body.style.overflow = '';
}

function viewType(typeCode) {
    const type = typeData[typeCode];
    if (!type) return;
    
    const detailBody = document.getElementById('typeDetailBody');
    detailBody.innerHTML = `
        <div class="type-detail-header">
            <span class="type-code">${type.code}</span>
            <span class="type-name">${type.name}</span>
            <span class="type-philosophy">${type.philosophy}</span>
        </div>
        
        <div class="type-detail-section">
            <h3>유형 설명</h3>
            ${type.description.map(p => `<p>${p}</p>`).join('')}
        </div>
        
        <div class="type-detail-section">
            <h3>강점</h3>
            <ul>${type.strengths.map(s => `<li>${s}</li>`).join('')}</ul>
        </div>
        
        <div class="type-detail-section">
            <h3>약점</h3>
            <ul>${type.weaknesses.map(w => `<li>${w}</li>`).join('')}</ul>
        </div>
        
        <div class="type-detail-section">
            <h3>대표 말버릇</h3>
            <p>${type.speechPatterns.phrases.map(p => `"${p}"`).join(', ')}</p>
            <p><em>${type.speechPatterns.function}</em></p>
        </div>
        
        <div class="type-detail-section">
            <h3>같은 유형의 인물들</h3>
            <p><strong>역사적 인물:</strong> ${type.famous.historical.join(', ')}</p>
            <p><strong>현대인:</strong> ${type.famous.modern.join(', ')}</p>
            <p><strong>가상 인물:</strong> ${type.famous.fictional.join(', ')}</p>
        </div>
    `;
    
    document.getElementById('typeDetailModal').classList.add('active');
}

function closeTypeDetail() {
    document.getElementById('typeDetailModal').classList.remove('active');
}

function showTypeDetail(typeCode) {
    viewType(typeCode);
}

function backToAllTypes() {
    closeTypeDetail();
}

// Close type detail on outside click
document.addEventListener('click', (e) => {
    const typesModal = document.getElementById('typesModal');
    const typeDetailModal = document.getElementById('typeDetailModal');
    
    if (e.target === typesModal) {
        closeAllTypes();
    }
    if (e.target === typeDetailModal) {
        closeTypeDetail();
    }
});
