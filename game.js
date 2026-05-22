// Kompletní seznam klávesových zkratek s českými popisy
const ALL_SHORTCUTS = [
  // --- ÚPRAVA TEXTU A ZÁKLADY ---
  { keys: ['Ctrl', 'C'], answer: 'Zkopírovat označenou věc (text, obrázek)', choices: ['Vložit zkopírovanou věc', 'Vyjmout (vystřihnout) označenou věc', 'Vrátit zpět poslední krok', 'Označit úplně všechno'] },
  { keys: ['Ctrl', 'V'], answer: 'Vložit zkopírovanou věc', choices: ['Zkopírovat označenou věc', 'Vyjmout (vystřihnout) označenou věc', 'Zopakovat vrácený krok', 'Otevřít novou složku'] },
  { keys: ['Ctrl', 'X'], answer: 'Vyjmout (vystřihnout) označenou věc', choices: ['Zkopírovat označenou věc', 'Vložit zkopírovanou věc', 'Zavřít okno', 'Smazat soubor napořád'] },
  { keys: ['Ctrl', 'Z'], answer: 'Vrátit zpět poslední krok (chybu)', choices: ['Zopakovat vrácený krok', 'Zavřít aplikaci', 'Přiblížit stránku', 'Uložit rozdělanou práci'] },
  { keys: ['Ctrl', 'Y'], answer: 'Zopakovat krok, který byl vrácen zpět', choices: ['Vrátit zpět poslední krok', 'Oddálit stránku', 'Otevřít historii hledání', 'Zkopírovat text'] },
  { keys: ['Ctrl', 'A'], answer: 'Označit vše (všechno na stránce nebo všechen text)', choices: ['Otevřít nový soubor', 'Udělat text tučným', 'Smazat označený text', 'Zarovnat text doleva'] },
  { keys: ['Ctrl', 'S'], answer: 'Uložit rozdělanou práci nebo soubor', choices: ['Sdílet soubor', 'Otevřít vyhledávání', 'Otevřít nastavení', 'Vytisknout stránku'] },
  { keys: ['Ctrl', 'P'], answer: 'Vytisknout dokument nebo stránku', choices: ['Vložit zkopírovanou věc', 'Otevřít vlastnosti souboru', 'Pozastavit video', 'Spustit hru'] },
  { keys: ['Ctrl', 'F'], answer: 'Hledat slovo na stránce nebo v textu', choices: ['Otevřít nový soubor', 'Zapnout celou obrazovku', 'Otevřít správce souborů', 'Formátovat text'] },
  { keys: ['Ctrl', 'B'], answer: 'Udělat text tučným', choices: ['Přidat do záložek', 'Spustit prohlížeč', 'Zkopírovat text', 'Zvýšit jas obrazovky'] },
  { keys: ['Ctrl', 'I'], answer: 'Udělat text šikmým (kurzíva)', choices: ['Odsadit text od kraje', 'Vložit nový obrázek', 'Otevřít nastavení počítače', 'Invertovat barvy'] },
  { keys: ['Ctrl', 'U'], answer: 'Podtrhnout text', choices: ['Vrátit zpět poslední krok', 'Aktualizovat soubor', 'Zvětšit písmena', 'Otevřít webovou adresu'] },
  { keys: ['Delete'], answer: 'Smazat označenou věc do koše', choices: ['Smazat písmeno vlevo', 'Vysypat koš', 'Vyčistit schránku', 'Zavřít vyskakovací okno'] },
  
  // --- INTERNETOVÝ PROHLÍŽEČ ---
  { keys: ['Ctrl', 'T'], answer: 'Otevřít novou kartu v prohlížeči', choices: ['Zavřít aktuální kartu', 'Otevřít anonymní okno', 'Znovu načíst stránku', 'Zobrazit historii'] },
  { keys: ['Ctrl', 'W'], answer: 'Zavřít aktuální kartu v prohlížeči', choices: ['Otevřít novou kartu', 'Minimalizovat okno', 'Vymazat mezipaměť', 'Uložit do záložek'] },
  { keys: ['Ctrl', 'Shift', 'T'], answer: 'Znovu otevřít naposledy zavřenou kartu', choices: ['Otevřít novou anonymní kartu', 'Smazat historii prohlížení', 'Uložit všechny karty', 'Zavřít celé okno'] },
  { keys: ['Ctrl', 'H'], answer: 'Otevřít historii navštívených stránek', choices: ['Otevřít stažené soubory', 'Skrýt okno prohlížeče', 'Skočit na domovskou stránku', 'Nápověda'] },
  { keys: ['Ctrl', 'J'], answer: 'Otevřít seznam stažených souborů', choices: ['Zarovnat text do bloku', 'Otevřít historii', 'Připojit se k prohlížeči', 'Otevřít konzoli'] },
  { keys: ['Ctrl', 'D'], answer: 'Uložit aktuální stránku do záložek (oblíbených)', choices: ['Smazat řádek textu', 'Stáhnout obrázek ze stránky', 'Duplikovat kartu', 'Vývojářské možnosti'] },
  { keys: ['Ctrl', 'R'], answer: 'Znovu načíst aktuální stránku', choices: ['Číst text nahlas', 'Spustit aplikaci', 'Nahradit slovo jiným', 'Resetovat vzhled'] },
  { keys: ['Ctrl', '+'], answer: 'Přiblížit (zvětšit) stránku', choices: ['Oddálit (zmenšit) stránku', 'Přidat novou záložku', 'Otevřít kalkulačku', 'Zvýšit hlasitost'] },
  { keys: ['Ctrl', '-'], answer: 'Oddálit (zmenšit) stránku', choices: ['Přiblížit (zvětšit) stránku', 'Minimalizovat prohlížeč', 'Smazat soubor', 'Ztlumit zvuk'] },
  { keys: ['Ctrl', '0'], answer: 'Vrátit velikost stránky na původních 100 %', choices: ['Zavřít všechna okna', 'Smazat paměť prohlížeče', 'Vypnout zvuk na kartě', 'Otevřít domovskou stránku'] },

  // --- SYSTÉMOVÉ ZKRATKY A OTEVÍRÁNÍ OKEN ---
  // (POUZE PRO MÓD 1: KVÍZ. V Módu 2 jsou kompletně zablokované, aby dětem nevyskakovala okna Windows)
  { keys: ['F2'], answer: 'Přejmenovat označený soubor nebo složku', choices: ['Otevřít vlastnosti souboru', 'Znovu načíst stránku', 'Upravit vzorec', 'Otevřít vývojářské nástroje'] },
  { keys: ['F5'], answer: 'Znovu načíst (obnovit) stránku na internetu', choices: ['Otevřít vyhledávání', 'Uložit soubor', 'Zapnout celou obrazovku', 'Ukončit zaseknutý program'] },
  { keys: ['F11'], answer: 'Zapnout nebo vypnout režim celé obrazovky', choices: ['Otevřít menu funkcí', 'Uložit jako...', 'Otevřít konzoli', 'Otevřít stažené soubory'] },
  { keys: ['Ctrl', 'Shift', 'Esc'], answer: 'Otevřít Správce úloh (pro ukončení zaseknutých programů)', choices: ['Restartovat počítač', 'Zavřít všechny aplikace', 'Otevřít Ovládací panely', 'Zamknout klávesnici'] },
  { keys: ['Ctrl', 'Esc'], answer: 'Otevřít nabídku Start', choices: ['Otevřít nastavení', 'Zamknout obrazovku', 'Zavřít aktuální aplikaci', 'Hledat soubor'] },
  { keys: ['Alt', 'F4'], answer: 'Zavřít aktivní okno nebo běžící program', choices: ['Vynutit restart PC', 'Zapnout celou obrazovku', 'Otevřít nastavení', 'Minimalizovat všechno'] },
  { keys: ['Win', 'D'], answer: 'Skrýt všechna okna a ukázat pracovní plochu', choices: ['Otevřít složku Stažené soubory', 'Smazat označené soubory', 'Otevřít Windows Defender', 'Duplikovat obrazovku'] },
  { keys: ['Win', 'E'], answer: 'Otevřít Průzkumník souborů (Tento počítač)', choices: ['Otevřít internetový prohlížeč', 'Otevřít e-mail', 'Otevřít kalendář', 'Otevřít panel smajlíků'] },
  { keys: ['Win', 'I'], answer: 'Otevřít Nastavení Windows', choices: ['Otevřít nastavení internetu', 'Otevřít panel s informacemi', 'Otevřít anonymní režim', 'Prozkoumat prvek'] },
  { keys: ['Win', 'L'], answer: 'Zamknout počítač (přejít na přihlašovací obrazovku)', choices: ['Odhlásit uživatele', 'Snížit hlasitost', 'Otevřít knihovnu souborů', 'Otevřít dlaždice Start'] },
  { keys: ['Alt', 'Tab'], answer: 'Přepínat mezi otevřenými okny a programy', choices: ['Otevřít novou kartu', 'Zavřít okno', 'Otevřít zobrazení úloh', 'Minimalizovat okna'] },
  { keys: ['Win', 'V'], answer: 'Otevřít historii schránky (přehled zkopírovaných věcí)', choices: ['Vložit neformátovaný text', 'Otevřít hlasové ovládání', 'Zobrazit nahrávky obrazovky', 'Zobrazit ovládání hlasitosti'] },
  { keys: ['Win', 'P'], answer: 'Otevřít nastavení pro promítání (druhý monitor/projektor)', choices: ['Vytisknout rozvrh plochy', 'Pozastavit spuštěné aplikace', 'Přišpendlit aplikaci', 'Panel výkonu'] },
  { keys: ['Win', ';'], answer: 'Otevřít panel s Emoji (smajlíky) a symboly', choices: ['Zamknout obrazovku počítače', 'Otevřít příkazový řádek', 'Systémové vyhledávání', 'Minimalizovat aplikaci'] }
];

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
  
  document.getElementById('mode-label').textContent = `Mód: ${mode === 'quiz' ? 'Kvízová výzva' : 'Živé psaní'}`;
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
      
      const opts = [currentQuestionObj.answer, ...currentQuestionObj.choices.slice(0, 3)];
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