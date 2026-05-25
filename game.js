// Kompletní seznam klávesových zkratek s českými popisy
const ALL_SHORTCUTS = [
  // --- ÚPRAVA TEXTU A ZÁKLADY ---
  { keys: ['Ctrl', 'C'], answer: 'Zkopírovat označenou věc (text, obrázek)' },
  { keys: ['Ctrl', 'V'], answer: 'Vložit zkopírovanou věc' },
  { keys: ['Ctrl', 'X'], answer: 'Vyjmout (vystřihnout) označenou věc' },
  { keys: ['Ctrl', 'Z'], answer: 'Vrátit zpět poslední krok (chybu)' },
  { keys: ['Ctrl', 'Y'], answer: 'Zopakovat krok, který byl vrácen zpět' },
  { keys: ['Ctrl', 'A'], answer: 'Označit vše (všechno na stránce nebo všechen text)' },
  { keys: ['Ctrl', 'S'], answer: 'Uložit rozdělanou práci nebo soubor' },
  { keys: ['Ctrl', 'P'], answer: 'Vytisknout dokument nebo stránku' },
  { keys: ['Ctrl', 'F'], answer: 'Hledat slovo na stránce nebo v textu' },
  { keys: ['Ctrl', 'B'], answer: 'Udělat text tučným' },
  { keys: ['Ctrl', 'I'], answer: 'Udělat text šikmým (kurzíva)' },
  { keys: ['Ctrl', 'U'], answer: 'Podtrhnout text' },
  { keys: ['Delete'], answer: 'Smazat označenou věc do koše' },
  
  // --- INTERNETOVÝ PROHLÍŽEČ ---
  { keys: ['Ctrl', 'T'], answer: 'Otevřít novou kartu v prohlížeči' },
  { keys: ['Ctrl', 'W'], answer: 'Zavřít aktuální kartu v prohlížeči' },
  { keys: ['Ctrl', 'Shift', 'T'], answer: 'Znovu otevřít naposledy zavřenou kartu' },
  { keys: ['Ctrl', 'H'], answer: 'Otevřít historii navštívených stránek' },
  { keys: ['Ctrl', 'J'], answer: 'Otevřít seznam stažených souborů' },
  { keys: ['Ctrl', 'D'], answer: 'Uložit aktuální stránku do záložek (oblíbených)' },
  { keys: ['Ctrl', 'R'], answer: 'Znovu načíst aktuální stránku' },
  { keys: ['Ctrl', '+'], answer: 'Přiblížit (zvětšit) stránku' },
  { keys: ['Ctrl', '-'], answer: 'Oddálit (zmenšit) stránku' },
  { keys: ['Ctrl', '0'], answer: 'Vrátit velikost stránky na původních 100 %' },

  // --- SYSTÉMOVÉ ZKRATKY A OTEVÍRÁNÍ OKEN ---
  // (POUZE PRO MÓD 1: KVÍZ. V Módu 2 jsou kompletně zablokované, aby dětem nevyskakovala okna Windows)
  { keys: ['F2'], answer: 'Přejmenovat označený soubor nebo složku' },
  { keys: ['F5'], answer: 'Znovu načíst (obnovit) stránku na internetu' },
  { keys: ['F11'], answer: 'Zapnout nebo vypnout režim celé obrazovky' },
  { keys: ['Ctrl', 'Shift', 'Esc'], answer: 'Otevřít Správce úloh (pro ukončení zaseknutých programů)' },
  { keys: ['Ctrl', 'Esc'], answer: 'Otevřít nabídku Start' },
  { keys: ['Alt', 'F4'], answer: 'Zavřít aktivní okno nebo běžící program' },
  { keys: ['Win', 'D'], answer: 'Skrýt všechna okna a ukázat pracovní plochu' },
  { keys: ['Win', 'E'], answer: 'Otevřít Průzkumník souborů (Tento počítač)' },
  { keys: ['Win', 'I'], answer: 'Otevřít Nastavení Windows' },
  { keys: ['Win', 'L'], answer: 'Zamknout počítač (přejít na přihlašovací obrazovku)' },
  { keys: ['Alt', 'Tab'], answer: 'Přepínat mezi otevřenými okny a programy' },
  { keys: ['Win', 'V'], answer: 'Otevřít historii schránky (přehled zkopírovaných věcí)' },
  { keys: ['Win', 'P'], answer: 'Otevřít nastavení pro promítání (druhý monitor/projektor)' },
  { keys: ['Win', ';'], answer: 'Otevřít panel s Emoji (smajlíky) a symboly' }
];

// Derived list of all answer strings for generating random wrong choices
const ALL_ANSWERS = ALL_SHORTCUTS.map(item => item.answer);

function getRandomWrongAnswers(correct, count) {
  const pool = ALL_ANSWERS.filter(a => a !== correct);
  return shuffleArray(pool).slice(0, count);
}

let currentGameMode = 'quiz'; 
let currentPool = [];
let questionIndex = 0;
let points = 0;
let currentQuestionObj = null;
let quizType = 'textToKey'; 

// Algoritmus Fisher-Yates pro spolehlivé náhodné promíchání
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function quitToMenu() {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('start-screen').classList.add('active');
  window.removeEventListener('keydown', handleGlobalKeydown);
}

function startGame(mode) {
  currentGameMode = mode;
  questionIndex = 0;
  points = 0;
  
  document.getElementById('mode-label').textContent = `Mód: ${mode === 'quiz' ? 'Kvíz' : 'Interaktivní'}`;
  document.getElementById('score-label').textContent = `Body: ${points}`;
  
  if (currentGameMode === 'quiz') {
    // Mód 1: Kvíz obsahuje úplně všechny zkratky ze seznamu
    currentPool = shuffleArray(ALL_SHORTCUTS).slice(0, 10);
    document.getElementById('quiz-options-container').style.display = 'flex';
    document.getElementById('interactive-container').style.display = 'none';
  } else {
    // Mód 2: Živé psaní odfiltruje Win, Alt, Esc, klávesy F a všechny zkratky, které otevírají/zavírají okna a karty
    let filteredShortcuts = ALL_SHORTCUTS.filter(item => {
      const keysStr = item.keys.join(' ');
      return !keysStr.includes('Win') && 
             !keysStr.includes('Alt') && 
             !keysStr.includes('Esc') && 
             !keysStr.includes('F') && // Vyřadí F2, F5, F11, F4 atd.
             !keysStr.includes('T') && // Vyřadí Ctrl+T a Ctrl+Shift+T (nová/zavřená karta)
             !keysStr.includes('W') && // Vyřadí Ctrl+W (zavřít kartu)
             !keysStr.includes('H') && // Vyřadí Ctrl+H (historie)
             !keysStr.includes('J');   // Vyřadí Ctrl+J (stahování)
    });
    currentPool = shuffleArray(filteredShortcuts).slice(0, 10);
    document.getElementById('quiz-options-container').style.display = 'none';
    document.getElementById('interactive-container').style.display = 'block';
  }

  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('game-screen').classList.add('active');
  
  loadQuestion();
}

function generateKeyBadgeHTML(keysArray) {
  return `<div class="key-display">${keysArray.map(k => `<span class="key">${k}</span>`).join('+')}</div>`;
}

function loadQuestion() {
  document.getElementById('feedback-msg').textContent = '';
  document.getElementById('hint-msg').textContent = '';
  document.getElementById('hint-btn').style.display = 'inline-block';
  document.getElementById('next-btn').style.display = 'none';
  document.getElementById('progress-label').textContent = `Otázka: ${questionIndex + 1}/${currentPool.length}`;
  
  currentQuestionObj = currentPool[questionIndex];
  const renderArea = document.getElementById('question-render-area');
  renderArea.innerHTML = '';

  if (currentGameMode === 'quiz') {
    quizType = Math.random() > 0.5 ? 'textToKey' : 'keyToText';
    
    if (quizType === 'textToKey') {
      document.getElementById('question-prompt').textContent = "Která klávesová zkratka provede tuto akci?";
      renderArea.innerHTML = `<p style="font-size:1.4rem; font-weight:bold; color:var(--text-main);">${currentQuestionObj.answer}</p>`;
      
      const wrongShortcuts = ALL_SHORTCUTS.filter(item => item.answer !== currentQuestionObj.answer);
      const shuffledWrongs = shuffleArray(wrongShortcuts);
      
      let opts = [currentQuestionObj.keys, shuffledWrongs[0].keys, shuffledWrongs[1].keys, shuffledWrongs[2].keys];
      buildQuizButtons(opts, 'keys');
    } else {
      document.getElementById('question-prompt').textContent = "Co dělá tato klávesová zkratka?";
      renderArea.innerHTML = generateKeyBadgeHTML(currentQuestionObj.keys);
      
      const wrongs = getRandomWrongAnswers(currentQuestionObj.answer, 3);
      const opts = [currentQuestionObj.answer, ...wrongs];
      buildQuizButtons(opts, 'text');
    }
  } else {
    document.getElementById('question-prompt').textContent = "Proveď na své klávesnici následující akci:";
    renderArea.innerHTML = `<p style="font-size:1.4rem; font-weight:bold; color:var(--text-main);">${currentQuestionObj.answer}</p>`;
    document.getElementById('live-input-zone').className = "input-zone listening";
    document.getElementById('live-input-zone').textContent = "Čekám na stisknutí kláves...";
    
    window.removeEventListener('keydown', handleGlobalKeydown);
    window.addEventListener('keydown', handleGlobalKeydown);
  }
}

function generateHintText() {
  if (!currentQuestionObj) return 'Nápověda není k dispozici.';
  if (currentGameMode === 'quiz') {
    if (quizType === 'textToKey') {
      const keys = currentQuestionObj.keys;
      const prefix = keys.includes('Ctrl') ? 'Ctrl' : keys.includes('Alt') ? 'Alt' : keys.includes('Shift') ? 'Shift' : keys.includes('Win') ? 'Win' : keys[0];
      return `Tato zkratka používá ${prefix} a má ${keys.length} ${keys.length === 1 ? 'klávesu' : 'klávesy'}.`;
    }
    const answerWords = currentQuestionObj.answer.split(' ');
    return `Odpověď začíná na písmeno '${currentQuestionObj.answer.charAt(0)}' a týká se ${answerWords[answerWords.length - 1]}.`;
  }
  const keys = currentQuestionObj.keys;
  const usedModifiers = keys.filter(k => ['Ctrl', 'Alt', 'Shift', 'Win'].includes(k));
  if (usedModifiers.length > 0) {
    return `Nejprve stiskni ${usedModifiers.join(' + ')} a poté ${keys[keys.length - 1]}.`;
  }
  return `Tato akce je provedena jednou klávesou: ${keys[0]}.`;
}

function showHint() {
  const hintText = generateHintText();
  document.getElementById('hint-msg').textContent = hintText;
}

function buildQuizButtons(optionsArray, type) {
  const container = document.getElementById('quiz-options-container');
  container.innerHTML = '';
  
  const scrambled = shuffleArray(optionsArray);
  
  scrambled.forEach(option => {
    const button = document.createElement('button');
    button.className = 'choice-btn';
    
    if (type === 'keys') {
      button.innerHTML = option.map(k => `${k}`).join(' + ');
      button.onclick = () => evaluationQuizAnswer(option, true);
    } else {
      button.textContent = option;
      button.onclick = () => evaluationQuizAnswer(option, false);
    }
    container.appendChild(button);
  });
}

function evaluationQuizAnswer(selectedOption, isKeyType) {
  let isCorrect = false;
  if (isKeyType) {
    isCorrect = JSON.stringify(selectedOption) === JSON.stringify(currentQuestionObj.keys);
  } else {
    isCorrect = selectedOption === currentQuestionObj.answer;
  }
  
  processAnswerFeedback(isCorrect);
}

function handleGlobalKeydown(e) {
  e.preventDefault();
  
  const triggeredKeys = [];
  if (e.ctrlKey) triggeredKeys.push('Ctrl');
  if (e.altKey) triggeredKeys.push('Alt');
  if (e.shiftKey) triggeredKeys.push('Shift');
  
  let mainKey = e.key;
  if (mainKey === ' ') mainKey = 'Space';
  if (['Control', 'Alt', 'Shift', 'Meta'].includes(mainKey)) return; 
  
  if (mainKey.length === 1) mainKey = mainKey.toUpperCase();
  triggeredKeys.push(mainKey);

  // OPRAVA KONTRASTU: Text uvnitř kláves se v tmavém režimu zobrazí ostře černou barvou (#121214) na světlém pozadí
  document.getElementById('live-input-zone').innerHTML = `Stiskl jsi: ${triggeredKeys.map(k => `<span style="color:#121214; background:#f1f2f6; padding:2px 6px; border-radius:4px; margin:0 2px; border:1px solid #57606f; font-weight:bold;">${k}</span>`).join('+')}`;
  
  const expectedStr = JSON.stringify(currentQuestionObj.keys.map(k => k.toUpperCase()));
  const incomingStr = JSON.stringify(triggeredKeys.map(k => k.toUpperCase()));
  
  window.removeEventListener('keydown', handleGlobalKeydown);
  processAnswerFeedback(expectedStr === incomingStr);
}

function processAnswerFeedback(isCorrect) {
  const feedEl = document.getElementById('feedback-msg');
  document.getElementById('live-input-zone').className = "input-zone";
  
  if (isCorrect) {
    feedEl.textContent = "🎯 Správně! Skvělá práce!";
    feedEl.className = "feedback correct";
    points += 10;
    document.getElementById('score-label').textContent = `Body: ${points}`;
  } else {
    if (currentGameMode === 'quiz' && quizType === 'keyToText') {
      feedEl.textContent = `❌ Chyba! Správná odpověď byla: ${currentQuestionObj.answer}`;
    } else {
      feedEl.textContent = `❌ Chyba! Správná odpověď byla: ${currentQuestionObj.keys.join(' + ')}`;
    }
    feedEl.className = "feedback wrong";
  }
  
  document.querySelectorAll('.choice-btn').forEach(btn => btn.disabled = true);
  document.getElementById('next-btn').style.display = 'inline-block';
}

function nextQuestion() {
  questionIndex++;
  if (questionIndex < currentPool.length) {
    loadQuestion();
  } else {
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('result-screen').classList.add('active');
    document.getElementById('final-stats').textContent = `Hotovo! Celkem jsi získal ${points} bodů!`;
  }
}

// --- Shortcuts panel UI and test area ---
function toggleShortcutsPanel(show) {
  const panel = document.getElementById('shortcuts-panel');
  if (!panel) return;
  if (show) {
    panel.classList.remove('hidden');
    panel.setAttribute('aria-hidden', 'false');
  } else {
    panel.classList.add('hidden');
    panel.setAttribute('aria-hidden', 'true');
  }
}

function populateShortcutsList() {
  const list = document.getElementById('shortcuts-list');
  if (!list) return;
  list.innerHTML = '';
  // Show a compact set grouped by category (use existing ALL_SHORTCUTS order)
  ALL_SHORTCUTS.forEach(item => {
    const el = document.createElement('div');
    el.className = 'shortcut-item';
    const keysHtml = item.keys.map(k => `<span class="key" style="padding:4px 8px; font-size:0.9rem; margin-right:6px;">${k}</span>`).join('');
    el.innerHTML = `<div class="shortcut-keys">${keysHtml}</div><div class="shortcut-desc">${item.answer}</div>`;
    list.appendChild(el);
  });
}

function setupShortcutsPanelHandlers() {
  const helpBtn = document.getElementById('help-btn');
  const closeBtn = document.getElementById('close-shortcuts');
  if (helpBtn) helpBtn.addEventListener('click', () => { populateShortcutsList(); toggleShortcutsPanel(true); });
  if (closeBtn) closeBtn.addEventListener('click', () => toggleShortcutsPanel(false));

  const txt = document.getElementById('shortcut-test-area');
  const feedback = document.getElementById('test-feedback');
  const btnCopy = document.getElementById('btn-copy');
  const btnCut = document.getElementById('btn-cut');
  const btnPaste = document.getElementById('btn-paste');

  if (txt) {
    txt.addEventListener('keydown', (e) => {
      // Detect common editing shortcuts and inform the user
      const combo = [];
      if (e.ctrlKey) combo.push('Ctrl');
      if (e.shiftKey) combo.push('Shift');
      if (e.altKey) combo.push('Alt');
      let k = e.key;
      if (k.length === 1) k = k.toUpperCase();
      combo.push(k);

      // Only listen for the copy/paste/cut/undo/redo combos
      const joined = combo.join('+');
      if (/Ctrl\+C/i.test(joined)) {
        feedback.textContent = 'Zkratka Ctrl+C (kopírovat) detekována.';
      } else if (/Ctrl\+V/i.test(joined)) {
        feedback.textContent = 'Zkratka Ctrl+V (vložit) detekována.';
      } else if (/Ctrl\+X/i.test(joined)) {
        feedback.textContent = 'Zkratka Ctrl+X (vyjmout) detekována.';
      } else if (/Ctrl\+Z/i.test(joined)) {
        feedback.textContent = 'Zkratka Ctrl+Z (vrátit zpět) detekována.';
      } else if (/Ctrl\+Y/i.test(joined)) {
        feedback.textContent = 'Zkratka Ctrl+Y (opakovat) detekována.';
      } else {
        // clear small feedback for other keys after a short delay
        setTimeout(() => { if (feedback) feedback.textContent = ''; }, 1200);
      }
    });
  }

  async function doCopy() {
    if (!txt) return;
    const sel = txt.value.substring(txt.selectionStart, txt.selectionEnd);
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(sel);
      } else {
        document.execCommand('copy');
      }
      feedback.textContent = 'Text zkopírován do schránky.';
    } catch (err) {
      feedback.textContent = 'Kopírování se nezdařilo (prohlížeč omezuje přístup).';
    }
  }

  async function doCut() {
    if (!txt) return;
    const start = txt.selectionStart;
    const end = txt.selectionEnd;
    const sel = txt.value.substring(start, end);
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(sel);
        // remove selection
        txt.value = txt.value.slice(0, start) + txt.value.slice(end);
        txt.setSelectionRange(start, start);
      } else {
        document.execCommand('cut');
      }
      feedback.textContent = 'Text vystřižen a přesunut do schránky.';
    } catch (err) {
      feedback.textContent = 'Vyjmutí se nezdařilo.';
    }
  }

  async function doPaste() {
    if (!txt) return;
    try {
      let clip = '';
      if (navigator.clipboard && navigator.clipboard.readText) {
        clip = await navigator.clipboard.readText();
      } else {
        document.execCommand('paste');
        feedback.textContent = 'Vložení (fallback) může vyžadovat oprávnění.';
        return;
      }
      const pos = txt.selectionStart;
      txt.value = txt.value.slice(0, pos) + clip + txt.value.slice(txt.selectionEnd);
      txt.setSelectionRange(pos + clip.length, pos + clip.length);
      feedback.textContent = 'Obsah vložen ze schránky.';
    } catch (err) {
      feedback.textContent = 'Vkládání se nezdařilo (prohlížeč omezuje přístup).';
    }
  }

  if (btnCopy) btnCopy.addEventListener('click', doCopy);
  if (btnCut) btnCut.addEventListener('click', doCut);
  if (btnPaste) btnPaste.addEventListener('click', doPaste);
}

// Initialize panel handlers once DOM is ready (script is deferred, but ensure elements exist)
document.addEventListener('DOMContentLoaded', () => {
  setupShortcutsPanelHandlers();
});