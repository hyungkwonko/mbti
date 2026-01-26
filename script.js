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
function calculateResult() {
    const scores = {
        desire: 0,
        reality: 0,
        action: 0,
        express: 0
    };
    
    // Calculate scores for each axis
    questions.forEach(q => {
        const answer = answers[q.id] || 4; // Default to neutral if not answered
        const score = q.reverse ? (8 - answer) : answer;
        scores[q.axis] += score;
    });
    
    // Determine type code
    const desirePositive = scores.desire > 24;
    const realityPositive = scores.reality > 24;
    const actionActive = scores.action > 24;
    const expressOpen = scores.express > 24;
    
    // Base type (1-4)
    let baseType;
    if (desirePositive && realityPositive) baseType = '1';
    else if (!desirePositive && realityPositive) baseType = '2';
    else if (desirePositive && !realityPositive) baseType = '3';
    else baseType = '4';
    
    // Subtype (A-D)
    let subType;
    if (actionActive && expressOpen) subType = 'A';
    else if (actionActive && !expressOpen) subType = 'B';
    else if (!actionActive && expressOpen) subType = 'C';
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
    
    // Compatibility - 연애, 친구, 직장으로 세분화
    document.getElementById('compatibilitySection').innerHTML = `
        <div class="compat-category">
            <h4 class="compat-category-title">💕 연애</h4>
            <div class="compat-item">
                <span class="compat-icon">💚</span>
                <div class="compat-content">
                    <h4>잘 맞는 유형: <span class="compat-type">${type.compatibility.love.best.type} ${type.compatibility.love.best.name}</span></h4>
                    <p>${type.compatibility.love.best.reason}</p>
                </div>
            </div>
            <div class="compat-item">
                <span class="compat-icon">💔</span>
                <div class="compat-content">
                    <h4>어려운 유형: <span class="compat-type">${type.compatibility.love.hard.type} ${type.compatibility.love.hard.name}</span></h4>
                    <p>${type.compatibility.love.hard.reason}</p>
                </div>
            </div>
        </div>
        <div class="compat-category">
            <h4 class="compat-category-title">👫 친구</h4>
            <div class="compat-item">
                <span class="compat-icon">💚</span>
                <div class="compat-content">
                    <h4>잘 맞는 유형: <span class="compat-type">${type.compatibility.friend.best.type} ${type.compatibility.friend.best.name}</span></h4>
                    <p>${type.compatibility.friend.best.reason}</p>
                </div>
            </div>
            <div class="compat-item">
                <span class="compat-icon">💔</span>
                <div class="compat-content">
                    <h4>어려운 유형: <span class="compat-type">${type.compatibility.friend.hard.type} ${type.compatibility.friend.hard.name}</span></h4>
                    <p>${type.compatibility.friend.hard.reason}</p>
                </div>
            </div>
        </div>
        <div class="compat-category">
            <h4 class="compat-category-title">💼 직장 동료</h4>
            <div class="compat-item">
                <span class="compat-icon">💚</span>
                <div class="compat-content">
                    <h4>잘 맞는 유형: <span class="compat-type">${type.compatibility.work.best.type} ${type.compatibility.work.best.name}</span></h4>
                    <p>${type.compatibility.work.best.reason}</p>
                </div>
            </div>
            <div class="compat-item">
                <span class="compat-icon">💔</span>
                <div class="compat-content">
                    <h4>어려운 유형: <span class="compat-type">${type.compatibility.work.hard.type} ${type.compatibility.work.hard.name}</span></h4>
                    <p>${type.compatibility.work.hard.reason}</p>
                </div>
            </div>
        </div>
    `;
    
    // Daily Patterns
    document.getElementById('dailyPatterns').innerHTML = `
        <div class="pattern-item">
            <h4>스트레스 받을 때</h4>
            <p>${type.patterns.stress}</p>
        </div>
        <div class="pattern-item">
            <h4>기분 좋을 때</h4>
            <p>${type.patterns.happy}</p>
        </div>
        <div class="pattern-item">
            <h4>갈등 상황에서</h4>
            <p>${type.patterns.conflict}</p>
        </div>
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
    
    // Recommendations - 새로운 형식
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
    document.getElementById('shareQuote').textContent = `"${typeQuotes[type.code]}"`;
}

// Borderline detection
function getBorderlineAxes(scores) {
    const borderline = [];
    if (scores.desire >= 22 && scores.desire <= 26) borderline.push('desire');
    if (scores.reality >= 22 && scores.reality <= 26) borderline.push('reality');
    if (scores.action >= 22 && scores.action <= 26) borderline.push('action');
    if (scores.express >= 22 && scores.express <= 26) borderline.push('express');
    return borderline;
}

function getAdjacentTypes(mainType, borderlineAxes) {
    const [base, sub] = mainType.split('-');
    const adjacent = [];
    
    // desire 경계 → 1↔3, 2↔4
    if (borderlineAxes.includes('desire')) {
        const altBase = { '1': '3', '3': '1', '2': '4', '4': '2' };
        adjacent.push(`${altBase[base]}-${sub}`);
    }
    
    // reality 경계 → 1↔2, 3↔4
    if (borderlineAxes.includes('reality')) {
        const altBase = { '1': '2', '2': '1', '3': '4', '4': '3' };
        adjacent.push(`${altBase[base]}-${sub}`);
    }
    
    // action 경계 → A↔C, B↔D
    if (borderlineAxes.includes('action')) {
        const altSub = { 'A': 'C', 'C': 'A', 'B': 'D', 'D': 'B' };
        adjacent.push(`${base}-${altSub[sub]}`);
    }
    
    // express 경계 → A↔B, C↔D
    if (borderlineAxes.includes('express')) {
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

function displaySpectrum(scores) {
    // Desire
    const desirePercent = ((scores.desire - 6) / 36) * 100;
    document.getElementById('desireValue').textContent = `${Math.round(desirePercent)}점`;
    document.getElementById('desireFill').style.width = `${desirePercent}%`;
    document.getElementById('desireMarker').style.left = `${desirePercent}%`;
    document.getElementById('desireDesc').textContent = scores.desire > 24 
        ? '삶에서 의미를 찾고 싶어하는 욕구가 강합니다.'
        : '기대를 낮추고 현실적으로 보려 합니다.';
    
    // Reality
    const realityPercent = ((scores.reality - 6) / 36) * 100;
    document.getElementById('realityValue').textContent = `${Math.round(realityPercent)}점`;
    document.getElementById('realityFill').style.width = `${realityPercent}%`;
    document.getElementById('realityMarker').style.left = `${realityPercent}%`;
    document.getElementById('realityDesc').textContent = scores.reality > 24 
        ? '대체로 삶을 긍정적으로 경험합니다.'
        : '실제 경험은 기대에 못 미칩니다.';
    
    // Action
    const actionPercent = ((scores.action - 6) / 36) * 100;
    document.getElementById('actionValue').textContent = `${Math.round(actionPercent)}점`;
    document.getElementById('actionFill').style.width = `${actionPercent}%`;
    document.getElementById('actionMarker').style.left = `${actionPercent}%`;
    document.getElementById('actionDesc').textContent = scores.action > 24 
        ? '세상에 적극적으로 개입합니다.'
        : '세상에 소극적으로 개입합니다.';
    
    // Express
    const expressPercent = ((scores.express - 6) / 36) * 100;
    document.getElementById('expressValue').textContent = `${Math.round(expressPercent)}점`;
    document.getElementById('expressFill').style.width = `${expressPercent}%`;
    document.getElementById('expressMarker').style.left = `${expressPercent}%`;
    document.getElementById('expressDesc').textContent = scores.express > 24 
        ? '내면을 드러내는 편입니다.'
        : '내면을 숨기는 편입니다.';
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
    const text = `나의 삶의 태도 유형: ${type} ${name}\n${quote}\n\n당신은 어떤 유형인가요?`;
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

// Close type detail on outside click - handled in the new event listener above

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
