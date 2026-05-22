// ── Question Bank ─────────────────────────────────────────────────────────────
const ALL_QUESTIONS = [
  // Editing
  { keys: ['Ctrl','C'], answer: 'Copy selected text',   category: 'Editing',    choices: ['Paste text', 'Copy selected text', 'Cut text', 'Close window'] },
  { keys: ['Ctrl','V'], answer: 'Paste text',           category: 'Editing',    choices: ['Copy text', 'Save file', 'Paste text', 'Select all'] },
  { keys: ['Ctrl','Z'], answer: 'Undo last action',     category: 'Editing',    choices: ['Redo action', 'Undo last action', 'Delete word', 'Zoom in'] },
  { keys: ['Ctrl','X'], answer: 'Cut selected text',    category: 'Editing',    choices: ['Exit app', 'Cut selected text', 'Copy text', 'Close tab'] },
  { keys: ['Ctrl','A'], answer: 'Select all',           category: 'Editing',    choices: ['Open a file', 'Select all', 'Append text', 'Bold text'] },
  { keys: ['Ctrl','Y'], answer: 'Redo last action',     category: 'Editing',    choices: ['Undo action', 'Redo last action', 'Delete line', 'Open history'] },
  // Files
  { keys: ['Ctrl','S'], answer: 'Save file',            category: 'Files',      choices: ['Save file', 'Open file', 'Search text', 'Print page'] },
  { keys: ['Ctrl','O'], answer: 'Open a file',          category: 'Files',      choices: ['Open a file', 'Options menu', 'Select all', 'Copy text'] },
  { keys: ['Ctrl','P'], answer: 'Print document',       category: 'Files',      choices: ['Paste text', 'Print document', 'Open properties', 'Pause media'] },
  { keys: ['Ctrl','N'], answer: 'Open a new window',    category: 'Files',      choices: ['Open a new file', 'Open a new window', 'Go to next item', 'Add note'] },
  // Formatting
  { keys: ['Ctrl','B'], answer: 'Bold text',            category: 'Formatting', choices: ['Bold text', 'Bookmark page', 'Open browser', 'Copy text'] },
  { keys: ['Ctrl','I'], answer: 'Italic text',          category: 'Formatting', choices: ['Indent text', 'Open settings', 'Italic text', 'Insert image'] },
  { keys: ['Ctrl','U'], answer: 'Underline text',       category: 'Formatting', choices: ['Undo action', 'Update file', 'Underline text', 'Uppercase all'] },
  // Navigation
  { keys: ['Alt','Tab'],      answer: 'Switch between windows', category: 'Navigation', choices: ['New tab', 'Switch between windows', 'Close window', 'Minimize app'] },
  { keys: ['Ctrl','F'],       answer: 'Find / search on page',  category: 'Navigation', choices: ['Full screen', 'Find / search on page', 'Open file', 'Open new tab'] },
  { keys: ['Win','D'],        answer: 'Show the desktop',       category: 'Navigation', choices: ['Delete files', 'Show the desktop', 'Open downloads', 'Duplicate window'] },
  { keys: ['Alt','F4'],       answer: 'Close the active window', category: 'Navigation', choices: ['Force restart', 'Open settings', 'Close the active window', 'Open file manager'] },
  // Browser
  { keys: ['Ctrl','T'],       answer: 'Open a new browser tab',  category: 'Browser',    choices: ['Close tab', 'Open settings', 'Open a new browser tab', 'Open Task Manager'] },
  { keys: ['Ctrl','W'],       answer: 'Close current tab',       category: 'Browser',    choices: ['Close current tab', 'Open new window', 'Write a file', 'Switch tab'] },
  { keys: ['F5'],             answer: 'Refresh the page',        category: 'Browser',    choices: ['Save file', 'Open menu', 'Refresh the page', 'Undo action'] },
  { keys: ['Ctrl','Shift','T'], answer: 'Reopen last closed tab', category: 'Browser',   choices: ['Open new tab', 'Reopen last closed tab', 'Toggle dark mode', 'Open settings'] },
  { keys: ['Ctrl','L'],       answer: 'Select the address bar',  category: 'Browser',    choices: ['Lock the screen', 'Select the address bar', 'Open bookmarks', 'Lower brightness'] },
  // System
  { keys: ['Ctrl','Alt','Del'], answer: 'Open security options / Task Manager', category: 'System', choices: ['Delete a folder', 'Open security options / Task Manager', 'Close all apps', 'Restart PC'] },
  { keys: ['Win','L'],        answer: 'Lock the screen',         category: 'System',     choices: ['Log out', 'Lower volume', 'Lock the screen', 'Open library'] },
  { keys: ['PrtSc'],          answer: 'Take a screenshot',       category: 'System',     choices: ['Pause music', 'Open print settings', 'Take a screenshot', 'Open task manager'] },
];

// ── Game State ────────────────────────────────────────────────────────────────
const TOTAL_QUESTIONS = 10;
const MAX_LIVES = 3;

let state = {
  questions: [],
  current: 0,
  score: 0,
  lives: MAX_LIVES,
  streak: 0,
  bestStreak: 0,
  correct: 0,
  answered: false,
};

// ── Helpers ───────────────────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ── DOM refs ──────────────────────────────────────────────────────────────────
const $score       = document.getElementById('score');
const $lives       = document.getElementById('lives');
const $streak      = document.getElementById('streak');
const $progress    = document.getElementById('progress-fill');
const $qCounter    = document.getElementById('q-counter');
const $catTag      = document.getElementById('category-tag');
const $prompt      = document.getElementById('question-prompt');
const $keysDisplay = document.getElementById('keys-display');
const $choices     = document.getElementById('choices');
const $feedback    = document.getElementById('feedback-bar');
const $feedbackIcon= document.getElementById('feedback-icon');
const $feedbackTxt = document.getElementById('feedback-text');
const $nextBtn     = document.getElementById('next-btn');

// ── Game Flow ─────────────────────────────────────────────────────────────────
function startGame() {
  state = {
    questions: shuffle(ALL_QUESTIONS).slice(0, TOTAL_QUESTIONS),
    current: 0,
    score: 0,
    lives: MAX_LIVES,
    streak: 0,
    bestStreak: 0,
    correct: 0,
    answered: false,
  };
  show('game-screen');
  renderQuestion();
}

function renderQuestion() {
  const q = state.questions[state.current];
  state.answered = false;

  // Progress
  const pct = (state.current / TOTAL_QUESTIONS) * 100;
  $progress.style.width = pct + '%';
  $qCounter.textContent = `${state.current + 1} / ${TOTAL_QUESTIONS}`;

  // HUD
  updateHUD();

  // Category & prompt
  $catTag.textContent = q.category;
  $prompt.textContent = 'What does this shortcut do?';

  // Keys
  $keysDisplay.innerHTML = '';
  q.keys.forEach((k, i) => {
    const span = document.createElement('span');
    span.className = 'key';
    span.textContent = k;
    $keysDisplay.appendChild(span);
    if (i < q.keys.length - 1) {
      const plus = document.createElement('span');
      plus.className = 'key-sep';
      plus.textContent = '+';
      $keysDisplay.appendChild(plus);
    }
  });

  // Choices (shuffled)
  $choices.innerHTML = '';
  shuffle(q.choices).forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'choice';
    btn.textContent = choice;
    btn.addEventListener('click', () => handleAnswer(choice, q.answer, btn));
    $choices.appendChild(btn);
  });

  // Reset feedback & next
  $feedback.className = 'feedback-bar hidden';
  $nextBtn.classList.add('hidden');
}

function handleAnswer(chosen, correct, btn) {
  if (state.answered) return;
  state.answered = true;

  const isCorrect = chosen === correct;

  // Disable all choices
  document.querySelectorAll('.choice').forEach(b => {
    b.disabled = true;
    if (b.textContent === correct) b.classList.add(isCorrect ? 'correct' : 'reveal');
  });

  if (isCorrect) {
    btn.classList.add('correct');
    state.streak++;
    state.correct++;
    if (state.streak > state.bestStreak) state.bestStreak = state.streak;

    const bonus = state.streak >= 3 ? 20 : state.streak === 2 ? 15 : 10;
    state.score += bonus;

    $feedback.className = 'feedback-bar correct';
    $feedbackIcon.textContent = '✅';
    const streakMsg = state.streak >= 3 ? ` 🔥 ${state.streak}x streak! +${bonus} pts` : ` +${bonus} pts`;
    $feedbackTxt.textContent = 'Correct!' + streakMsg;
  } else {
    btn.classList.add('wrong');
    state.streak = 0;
    state.lives--;

    $feedback.className = 'feedback-bar wrong';
    $feedbackIcon.textContent = '❌';
    $feedbackTxt.textContent = `Nope! The answer was: ${correct}`;
  }

  updateHUD();
  $nextBtn.classList.remove('hidden');

  // Auto-advance if no lives
  if (state.lives <= 0) {
    $nextBtn.textContent = 'See Results 🏁';
  }
}

function nextQuestion() {
  if (state.lives <= 0) {
    showResults();
    return;
  }
  state.current++;
  if (state.current >= TOTAL_QUESTIONS) {
    showResults();
  } else {
    $nextBtn.textContent = 'Next →';
    renderQuestion();
  }
}

function updateHUD() {
  $score.textContent = state.score;
  $streak.textContent = state.streak;
  $lives.textContent = '❤️'.repeat(state.lives) + '🖤'.repeat(MAX_LIVES - state.lives);
}

function showResults() {
  const total = state.current + (state.answered ? 1 : 0);
  const accuracy = total > 0 ? Math.round((state.correct / total) * 100) : 0;

  // Trophy & message
  let trophy, title, msg;
  if (state.score >= 90) {
    trophy = '🏆'; title = 'Keyboard Ninja!';
    msg = 'Incredible! You know your shortcuts like a pro.';
  } else if (state.score >= 60) {
    trophy = '🥇'; title = 'Nice Work!';
    msg = 'Great job! A little more practice and you\'ll be unstoppable.';
  } else if (state.score >= 30) {
    trophy = '🥈'; title = 'Getting There!';
    msg = 'Good effort! Keep practising and you\'ll level up fast.';
  } else {
    trophy = '😅'; title = 'Keep Trying!';
    msg = 'Shortcuts are tricky at first. Play again and you\'ll improve!';
  }

  document.getElementById('trophy').textContent = trophy;
  document.getElementById('result-title').textContent = title;
  document.getElementById('final-score').textContent = state.score;
  document.getElementById('result-msg').textContent = msg;
  document.getElementById('r-correct').textContent = state.correct;
  document.getElementById('r-best-streak').textContent = state.bestStreak;
  document.getElementById('r-accuracy').textContent = accuracy + '%';

  show('result-screen');
}

// ── Event Listeners ───────────────────────────────────────────────────────────
document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('play-again-btn').addEventListener('click', startGame);
document.getElementById('next-btn').addEventListener('click', nextQuestion);

// Keyboard navigation: press 1–4 to pick an answer
document.addEventListener('keydown', e => {
  const num = parseInt(e.key);
  if (num >= 1 && num <= 4 && !state.answered) {
    const btns = document.querySelectorAll('.choice');
    if (btns[num - 1]) btns[num - 1].click();
  }
  if (e.key === 'Enter' && state.answered) {
    nextQuestion();
  }
});