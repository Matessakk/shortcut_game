// ── Question Bank ──────────────────────────────────────────────────────────────
// Each entry: { keys, answer, category, distractors }
// This file was adapted to work with main.html / style.css in this project.
const ALL_SHORTCUTS = [

  // ── General / Universal ──────────────────────────────────────────────────────
  { keys:['Ctrl','C'],         answer:'Copy the selected item',          category:'Editing',
    choices:['Paste the selection','Cut the selection','Undo last action','Select everything'],
    distractors:[['Ctrl','V'],['Ctrl','X'],['Ctrl','Z']] },

  { keys:['Ctrl','V'],         answer:'Paste the copied item',           category:'Editing',
    choices:['Copy the selection','Cut the selection','Redo last action','Open clipboard'],
    distractors:[['Ctrl','C'],['Ctrl','X'],['Ctrl','Y']] },

  { keys:['Ctrl','X'],         answer:'Cut the selected item',           category:'Editing',
    choices:['Copy the selection','Paste the selection','Close the window','Delete selection'],
    distractors:[['Ctrl','C'],['Ctrl','V'],['Delete']] },

  { keys:['Ctrl','Z'],         answer:'Undo the last action',            category:'Editing',
    choices:['Redo the last action','Close the window','Zoom in','Save the file'],
    distractors:[['Ctrl','Y'],['Ctrl','S'],['Ctrl','W']] },

  { keys:['Ctrl','Y'],         answer:'Redo the last action',            category:'Editing',
    choices:['Undo the last action','Zoom out','Open history','Copy text'],
    distractors:[['Ctrl','Z'],['Ctrl','Shift','Z'],['Ctrl','H']] },

  { keys:['Ctrl','A'],         answer:'Select all items',                category:'Editing',
    choices:['Open a new file','Bold the text','Append to clipboard','Align text left'],
    distractors:[['Ctrl','Shift','A'],['Ctrl','E'],['Shift','End']] },

  { keys:['Ctrl','S'],         answer:'Save the current file',           category:'Files',
    choices:['Share the file','Open search','Open settings','Print the file'],
    distractors:[['Ctrl','Shift','S'],['Ctrl','P'],['F12']] },

  { keys:['Ctrl','Shift','S'], answer:'Save the file with a new name (Save As)', category:'Files',
    choices:['Save the file','Share the file','Screenshot and save','Sync settings'],
    distractors:[['Ctrl','S'],['F12'],['Alt','F2']] },

  { keys:['Ctrl','O'],         answer:'Open a file',                     category:'Files',
    choices:['Open options','Close the file','Open a new window','Open on-screen keyboard'],
    distractors:[['Ctrl','F'],['Ctrl','N'],['Win','E']] },

  { keys:['Ctrl','N'],         answer:'Open a new window or document',   category:'Files',
    choices:['Go to next item','Add a note','Open notification centre','Open new tab'],
    distractors:[['Ctrl','T'],['Ctrl','Shift','N'],['Win','N']] },

  { keys:['Ctrl','W'],         answer:'Close the current window or tab', category:'Files',
    choices:['Open a new window','Switch windows','Open Windows Explorer','Go back'],
    distractors:[['Alt','F4'],['Ctrl','F4'],['Ctrl','T']] },

  { keys:['Ctrl','P'],         answer:'Print the current document',      category:'Files',
    choices:['Paste the selection','Open properties','Pause media','Play media'],
    distractors:[['Ctrl','Shift','P'],['F2'],['Alt','P']] },

  { keys:['Ctrl','F'],         answer:'Find / search within the page',   category:'Navigation',
    choices:['Open a new file','Go to full screen','Open file manager','Format text'],
    distractors:[['Ctrl','H'],['Ctrl','G'],['F3']] },

  { keys:['Ctrl','H'],         answer:'Find and replace text',           category:'Navigation',
    choices:['Show history','Go to home page','Hide the toolbar','Open help'],
    distractors:[['Ctrl','F'],['Ctrl','G'],['Ctrl','R']] },

  { keys:['Ctrl','G'],         answer:'Go to a specific line or page',   category:'Navigation',
    choices:['Open Google','Group selected items','Go to settings','Toggle grid'],
    distractors:[['Ctrl','F'],['Ctrl','J'],['F5']] },

  // ── Formatting ───────────────────────────────────────────────────────────────
  { keys:['Ctrl','B'],         answer:'Make text bold',                  category:'Formatting',
    choices:['Bookmark the page','Open the browser','Copy text','Increase brightness'],
    distractors:[['Ctrl','I'],['Ctrl','U'],['Ctrl','Shift','B']] },

  { keys:['Ctrl','I'],         answer:'Make text italic',                category:'Formatting',
    choices:['Indent the text','Insert an image','Open the settings','Invert colours'],
    distractors:[['Ctrl','B'],['Ctrl','U'],['Ctrl','Shift','I']] },

  { keys:['Ctrl','U'],         answer:'Underline text',                  category:'Formatting',
    choices:['Undo the action','Update the file','Uppercase all letters','Open URL bar'],
    distractors:[['Ctrl','B'],['Ctrl','I'],['Ctrl','Shift','U']] },

  { keys:['Ctrl','E'],         answer:'Centre-align text',               category:'Formatting',
    choices:['Export the file','Edit properties','Erase selection','Open emoji picker'],
    distractors:[['Ctrl','L'],['Ctrl','R'],['Ctrl','J']] },

  { keys:['Ctrl','L'],         answer:'Left-align text',                 category:'Formatting',
    choices:['Lock the screen','Select the address bar','Open bookmarks','Lower brightness'],
    distractors:[['Ctrl','E'],['Ctrl','R'],['Ctrl','J']] },

  { keys:['Ctrl','R'],         answer:'Right-align text',                category:'Formatting',
    choices:['Refresh the page','Reload settings','Rename the file','Run a program'],
    distractors:[['Ctrl','E'],['Ctrl','L'],['Ctrl','J']] },

  { keys:['Ctrl','K'],         answer:'Insert a hyperlink',              category:'Formatting',
    choices:['Open keyboard settings','Cut the selection','Strike through text','Open a new task'],
    distractors:[['Ctrl','Shift','K'],['Alt','Shift','K'],['Ctrl','H']] },

  { keys:['Ctrl',']'],         answer:'Increase font size',              category:'Formatting',
    choices:['Decrease font size','Indent text','Go to next bracket','Open next file'],
    distractors:[['Ctrl','['],['Ctrl','Shift','>'],['Ctrl','+']] },

  { keys:['Ctrl','['],         answer:'Decrease font size',              category:'Formatting',
    choices:['Increase font size','Outdent text','Go to previous bracket','Open previous file'],
    distractors:[['Ctrl',']'],['Ctrl','Shift','<'],['Ctrl','-']] },

  // ── Clipboard / Selection ────────────────────────────────────────────────────
  { keys:['Ctrl','Shift','V'], answer:'Paste without formatting',        category:'Editing',
    choices:['Paste with formatting','Copy and paste','Paste to new file','Verbose paste'],
    distractors:[['Ctrl','V'],['Ctrl','Alt','V'],['Shift','Insert']] },

  { keys:['Ctrl','D'],         answer:'Duplicate the selection or bookmark the page', category:'Editing',
    choices:['Delete the selection','Open downloads','Open dev tools','Deselect all'],
    distractors:[['Ctrl','B'],['Ctrl','Shift','D'],['Alt','D']] },

  { keys:['Delete'],           answer:'Delete the selected item',        category:'Editing',
    choices:['Backspace one character','Move to recycle bin','Clear the clipboard','Close the dialog'],
    distractors:[['Backspace'],['Shift','Delete'],['Ctrl','Delete']] },

  { keys:['Shift','Delete'],   answer:'Permanently delete (skip Recycle Bin)', category:'Editing',
    choices:['Cut the selection','Delete one word','Soft delete','Delete and copy'],
    distractors:[['Delete'],['Ctrl','Delete'],['Alt','Delete']] },

  // ── Window Management ─────────────────────────────────────────────────────────
  { keys:['Alt','Tab'],        answer:'Switch between open windows',     category:'Windows',
    choices:['Open a new tab','Close the window','Open task view','Minimize all windows'],
    distractors:[['Win','Tab'],['Ctrl','Tab'],['Alt','Esc']] },

  { keys:['Alt','F4'],         answer:'Close the active window or app',  category:'Windows',
    choices:['Force restart the PC','Open file four','Toggle full screen','Open settings'],
    distractors:[['Ctrl','W'],['Ctrl','F4'],['Win','D']] },

  { keys:['Win','D'],          answer:'Show or hide the desktop',        category:'Windows',
    choices:['Open downloads folder','Delete selected files','Open Windows Defender','Duplicate the screen'],
    distractors:[['Win','M'],['Win','Home'],['Ctrl','D']] },

  { keys:['Win','M'],          answer:'Minimise all windows',            category:'Windows',
    choices:['Open the Start Menu','Show the desktop','Mute audio','Open mail'],
    distractors:[['Win','D'],['Win','Shift','M'],['Alt','F9']] },

  { keys:['Win','Shift','M'],  answer:'Restore all minimised windows',   category:'Windows',
    choices:['Minimise all windows','Move window to another monitor','Open search','Snap window'],
    distractors:[['Win','M'],['Win','D'],['Win','Up']] },

  { keys:['Win','Left'],       answer:'Snap window to the left half',    category:'Windows',
    choices:['Go back in browser','Move cursor left','Open left panel','Snap window to right half'],
    distractors:[['Win','Right'],['Win','Up'],['Win','Down']] },

  { keys:['Win','Right'],      answer:'Snap window to the right half',   category:'Windows',
    choices:['Go forward in browser','Move cursor right','Snap window to left half','Open right panel'],
    distractors:[['Win','Left'],['Win','Up'],['Win','Down']] },

  { keys:['Win','Up'],         answer:'Maximise the current window',     category:'Windows',
    choices:['Snap window to top half','Scroll up','Move window up','Open volume mixer'],
    distractors:[['Win','Down'],['Win','Shift','Up'],['F11']] },

  { keys:['Win','Down'],       answer:'Restore or minimise the window',  category:'Windows',
    choices:['Scroll down','Snap window to bottom','Open downloads','Decrease brightness'],
    distractors:[['Win','Up'],['Alt','F9'],['Win','M']] },

  { keys:['Win','Home'],       answer:'Minimise all windows except the active one', category:'Windows',
    choices:['Go to home page','Open the home folder','Show desktop','Snap to left half'],
    distractors:[['Win','D'],['Win','M'],['Alt','Home']] },

  { keys:['Win','Tab'],        answer:'Open Task View (virtual desktops)', category:'Windows',
    choices:['Switch between apps','Open the taskbar','Open task manager','Show open tabs'],
    distractors:[['Alt','Tab'],['Ctrl','Win','D'],['Win','E']] },

  { keys:['Ctrl','Win','D'],   answer:'Create a new virtual desktop',    category:'Windows',
    choices:['Open developer tools','Delete virtual desktop','Duplicate the display','Open device manager'],
    distractors:[['Win','Tab'],['Ctrl','Win','Left'],['Ctrl','Win','F4']] },

  { keys:['Ctrl','Win','Left'], answer:'Switch to the previous virtual desktop', category:'Windows',
    choices:['Snap to left side','Go back in history','Move window left','Go to previous tab'],
    distractors:[['Ctrl','Win','Right'],['Win','Left'],['Alt','Left']] },

  { keys:['Ctrl','Win','Right'], answer:'Switch to the next virtual desktop', category:'Windows',
    choices:['Snap to right side','Go forward in history','Move window right','Go to next tab'],
    distractors:[['Ctrl','Win','Left'],['Win','Right'],['Alt','Right']] },

  // ── System ───────────────────────────────────────────────────────────────────
  { keys:['Win'],              answer:'Open or close the Start Menu',    category:'System',
    choices:['Open Windows Search','Open Run dialog','Open Settings','Open Task Manager'],
    distractors:[['Win','S'],['Win','R'],['Win','I']] },

  { keys:['Win','L'],          answer:'Lock the screen',                 category:'System',
    choices:['Log out of Windows','Lower the volume','Open library','Open live tiles'],
    distractors:[['Win','X'],['Ctrl','Alt','Del'],['Win','D']] },

  { keys:['Win','E'],          answer:'Open File Explorer',              category:'System',
    choices:['Open Edge browser','Open email','Open event viewer','Open emoji panel'],
    distractors:[['Win','R'],['Win','X'],['Win','I']] },

  { keys:['Win','I'],          answer:'Open Windows Settings',           category:'System',
    choices:['Open internet options','Open information panel','Open incognito mode','Open inspect element'],
    distractors:[['Win','R'],['Win','X'],['Win','U']] },

  { keys:['Win','R'],          answer:'Open the Run dialog',             category:'System',
    choices:['Refresh the desktop','Open recent files','Restart the PC','Open Remote Desktop'],
    distractors:[['Win','E'],['Win','S'],['F5']] },

  { keys:['Win','S'],          answer:'Open Windows Search',             category:'System',
    choices:['Open settings','Open Snipping Tool','Open Sound settings','Open Start Menu'],
    distractors:[['Win'],['Win','Q'],['Ctrl','F']] },

  { keys:['Win','X'],          answer:'Open the Quick Link menu',        category:'System',
    choices:['Open Xbox app','Close the app','Open accessibility options','Open Task Manager'],
    distractors:[['Win','I'],['Ctrl','Alt','Del'],['Win','R']] },

  { keys:['Ctrl','Shift','Esc'], answer:'Open Task Manager directly',    category:'System',
    choices:['Open escape menu','Force-quit the app','Open accessibility','Open CMD'],
    distractors:[['Ctrl','Alt','Del'],['Win','X'],['Alt','F4']] },

  { keys:['Ctrl','Alt','Del'], answer:'Open the security options screen', category:'System',
    choices:['Delete all files','Force-restart the PC','Open command prompt','Close all apps'],
    distractors:[['Ctrl','Shift','Esc'],['Win','X'],['Alt','F4']] },

  { keys:['Win','Pause'],      answer:'Open System Properties',          category:'System',
    choices:['Pause a notification','Open power options','Open Windows Update','Pause background tasks'],
    distractors:[['Win','I'],['Win','R'],['Win','X']] },

  { keys:['Win','V'],          answer:'Open the clipboard history',      category:'System',
    choices:['Open OneDrive','Paste from clipboard','Open video settings','Open virtual desktops'],
    distractors:[['Ctrl','V'],['Win','Shift','V'],['Ctrl','Shift','V']] },

  { keys:['Win','.'],          answer:'Open the emoji picker',           category:'System',
    choices:['Open file properties','Pause notifications','Open dot-files','Open period settings'],
    distractors:[['Win',';'],['Ctrl','.'],['Win','D']] },

  { keys:['Win','A'],          answer:'Open Action Centre / Quick Settings', category:'System',
    choices:['Select all files','Open accessibility','Open Alarm app','Open account settings'],
    distractors:[['Win','N'],['Win','I'],['Win','C']] },

  { keys:['Win','N'],          answer:'Open Notification Centre',        category:'System',
    choices:['Open a new file','Create a note','Open network settings','Open Notepad'],
    distractors:[['Win','A'],['Win','I'],['Win','R']] },

  { keys:['Win','K'],          answer:'Open Cast / Connect panel',       category:'System',
    choices:['Open keyboard settings','Lock keyboard','Open contacts','Go to next window'],
    distractors:[['Win','P'],['Win','I'],['Win','A']] },

  { keys:['Win','P'],          answer:'Choose a display presentation mode', category:'System',
    choices:['Open paint app','Open print settings','Open power options','Open privacy settings'],
    distractors:[['Win','K'],['Ctrl','P'],['Win','I']] },

  { keys:['PrtSc'],            answer:'Take a screenshot (copies to clipboard)', category:'System',
    choices:['Print the screen','Pause and screenshot','Open screen settings','Screen record'],
    distractors:[['Win','PrtSc'],['Win','Shift','S'],['Alt','PrtSc']] },

  { keys:['Win','PrtSc'],      answer:'Take a screenshot and save it automatically', category:'System',
    choices:['Copy screenshot to clipboard','Open print screen tool','Screenshot active window','Open screenshot folder'],
    distractors:[['PrtSc'],['Alt','PrtSc'],['Win','Shift','S']] },

  { keys:['Win','Shift','S'],  answer:'Open the Snipping Tool for a custom screenshot', category:'System',
    choices:['Save a file quickly','Open Snipping Tool settings','Share the screen','Screenshot and email'],
    distractors:[['PrtSc'],['Win','PrtSc'],['Alt','PrtSc']] },

  { keys:['Alt','PrtSc'],      answer:'Screenshot only the active window', category:'System',
    choices:['Print the active window','Open print for current app','Alt screenshot menu','Take a full screenshot'],
    distractors:[['PrtSc'],['Win','PrtSc'],['Win','Shift','S']] },

  { keys:['F2'],               answer:'Rename the selected file or folder', category:'Files',
    choices:['Open file properties','Refresh the page','Edit the formula (Excel)','Open dev tools'],
    distractors:[['F6'],['Enter'],['Alt','Enter']] },

  { keys:['F5'],               answer:'Refresh / reload the page or folder', category:'Navigation',
    choices:['Open find menu','Save the file','Open full screen','Force-close the app'],
    distractors:[['Ctrl','R'],['Ctrl','F5'],['F12']] },

  { keys:['Ctrl','F5'],        answer:'Hard refresh (ignore browser cache)', category:'Browser',
    choices:['Refresh the page normally','Open dev tools','Force-close the browser','Save and refresh'],
    distractors:[['F5'],['Ctrl','R'],['Ctrl','Shift','R']] },

  { keys:['F11'],              answer:'Toggle full-screen mode',          category:'Browser',
    choices:['Open function menu 11','Save as','Open developer console','Open downloads'],
    distractors:[['F12'],['Ctrl','Shift','F'],['Win','Up']] },

  { keys:['F12'],              answer:'Open browser developer tools',     category:'Browser',
    choices:['Save file as','Print the page','Rename the file','Open browser settings'],
    distractors:[['Ctrl','Shift','I'],['Ctrl','U'],['F11']] },

  // ── Browser ───────────────────────────────────────────────────────────────────
  { keys:['Ctrl','T'],         answer:'Open a new browser tab',          category:'Browser',
    choices:['Close the current tab','Open settings','Open Task Manager','Open a new window'],
    distractors:[['Ctrl','N'],['Ctrl','Shift','T'],['Ctrl','W']] },

  { keys:['Ctrl','Shift','T'], answer:'Reopen the last closed tab',      category:'Browser',
    choices:['Open a new tab','Toggle dark mode','Open browser settings','Open tab history'],
    distractors:[['Ctrl','T'],['Ctrl','Z'],['Ctrl','Shift','N']] },

  { keys:['Ctrl','Tab'],       answer:'Switch to the next browser tab',  category:'Browser',
    choices:['Close the tab','Switch between apps','Open a new tab','Open tab search'],
    distractors:[['Ctrl','Shift','Tab'],['Alt','Tab'],['Ctrl','PgDn']] },

  { keys:['Ctrl','Shift','Tab'], answer:'Switch to the previous browser tab', category:'Browser',
    choices:['Close the previous tab','Go back one page','Open tab search','Reopen last tab'],
    distractors:[['Ctrl','Tab'],['Ctrl','PgUp'],['Alt','Left']] },

  { keys:['Ctrl','L'],         answer:'Focus the browser address bar',   category:'Browser',
    choices:['Left-align text','Lock the screen','Open bookmarks','Lower brightness'],
    distractors:[['Alt','D'],['F6'],['Ctrl','D']] },

  { keys:['Ctrl','D'],         answer:'Bookmark the current page',       category:'Browser',
    choices:['Delete the page','Open downloads','Duplicate the tab','Open dev tools'],
    distractors:[['Ctrl','Shift','D'],['Ctrl','B'],['Ctrl','Shift','B']] },

  { keys:['Ctrl','Shift','B'], answer:'Show or hide the bookmarks bar',  category:'Browser',
    choices:['Bold selected text','Open bookmarks manager','Back one page','Open browser settings'],
    distractors:[['Ctrl','D'],['Ctrl','Shift','O'],['Alt','B']] },

  { keys:['Ctrl','J'],         answer:'Open the Downloads panel',        category:'Browser',
    choices:['Justify text','Open journal','Jump to a line','Open Java settings'],
    distractors:[['Ctrl','Shift','J'],['Alt','J'],['Ctrl','F']] },

  { keys:['Ctrl','Shift','N'], answer:'Open a new private / incognito window', category:'Browser',
    choices:['Open a new normal window','Rename the file','Open notification settings','Open a new tab'],
    distractors:[['Ctrl','N'],['Ctrl','T'],['Win','Shift','N']] },

  { keys:['Alt','Left'],       answer:'Go back to the previous page',    category:'Browser',
    choices:['Snap window to left','Select text to the left','Move cursor left','Go to first tab'],
    distractors:[['Alt','Right'],['Backspace'],['Ctrl','Left']] },

  { keys:['Alt','Right'],      answer:'Go forward to the next page',     category:'Browser',
    choices:['Snap window to right','Select text to the right','Move cursor right','Go to last tab'],
    distractors:[['Alt','Left'],['Shift','Backspace'],['Ctrl','Right']] },

  { keys:['Ctrl','U'],         answer:'View the page source code',       category:'Browser',
    choices:['Underline text','Update the page','Open URL bar','Uppercase selection'],
    distractors:[['F12'],['Ctrl','Shift','U'],['Ctrl','Shift','I']] },

  { keys:['Ctrl','+'],         answer:'Zoom in on the page',             category:'Browser',
    choices:['Increase font size only','Open zoom settings','Zoom out','Add a bookmark'],
    distractors:[['Ctrl','-'],['Ctrl','0'],['Ctrl','Shift','+']] },

  { keys:['Ctrl','-'],         answer:'Zoom out on the page',            category:'Browser',
    choices:['Decrease font size only','Open zoom settings','Zoom in','Remove a bookmark'],
    distractors:[['Ctrl','+'],['Ctrl','0'],['Ctrl','Shift','-']] },

  { keys:['Ctrl','0'],         answer:'Reset the page zoom to 100%',     category:'Browser',
    choices:['Zoom to 0%','Open a new tab','Go to home page','Open zero settings'],
    distractors:[['Ctrl','+'],['Ctrl','-'],['Ctrl','Shift','0']] },

  // ── File Explorer ─────────────────────────────────────────────────────────────
  { keys:['Alt','Enter'],      answer:'Open the properties of selected item', category:'Files',
    choices:['Confirm and create new line','Open in a new window','Rename the item','Open with default app'],
    distractors:[['Enter'],['F2'],['Shift','F10']] },

  { keys:['Alt','Up'],         answer:'Go up one folder level',          category:'Files',
    choices:['Move file up','Scroll up','Go to parent folder on desktop','Undo move'],
    distractors:[['Backspace'],['Alt','Left'],['Ctrl','Up']] },

  { keys:['Ctrl','Shift','N'], answer:'Create a new folder',             category:'Files',
    choices:['Open incognito window','Open new settings','Create a new file','Open file search'],
    distractors:[['Ctrl','N'],['Alt','Shift','N'],['F7']] },

  { keys:['Ctrl','E'],         answer:'Focus the search box in File Explorer', category:'Files',
    choices:['Centre-align text','Open event viewer','Export the file','Open edge browser'],
    distractors:[['Ctrl','F'],['F3'],['Win','S']] },

  // ── Accessibility ─────────────────────────────────────────────────────────────
  { keys:['Win','U'],          answer:'Open Accessibility settings',     category:'Accessibility',
    choices:['Open OneDrive upload','Open Windows Update','Undo the action','Open USB settings'],
    distractors:[['Win','I'],['Win','A'],['Ctrl','U']] },

  { keys:['Win','+'],          answer:'Open the Magnifier and zoom in',  category:'Accessibility',
    choices:['Zoom in browser','Increase volume','Add a virtual desktop','Open plus panel'],
    distractors:[['Ctrl','+'],['Win','='],['Win','Shift','+']] },

  { keys:['Win','-'],          answer:'Zoom out with the Magnifier',     category:'Accessibility',
    choices:['Zoom out in browser','Decrease volume','Remove virtual desktop','Open minus panel'],
    distractors:[['Ctrl','-'],['Win','='],['Win','Shift','-']] },

  { keys:['Win','Esc'],        answer:'Close the Magnifier',             category:'Accessibility',
    choices:['Minimise all windows','Cancel an operation','Open escape settings','Exit full screen'],
    distractors:[['Esc'],['Alt','F4'],['Win','M']] },

  { keys:['Win','Enter'],      answer:'Open Narrator (screen reader)',   category:'Accessibility',
    choices:['Confirm a dialog','Run selected file','Open language settings','Open network connection'],
    distractors:[['Enter'],['Win','R'],['Win','U']] },

];

// ── Helpers ────────────────────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function keysEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
}

function renderKeys(keys) {
  const wrap = document.createElement('span');
  wrap.style.display = 'inline-flex';
  wrap.style.alignItems = 'center';
  wrap.style.gap = '6px';
  keys.forEach((k, i) => {
    const span = document.createElement('span');
    span.className = 'key';
    span.textContent = k;
    wrap.appendChild(span);
    if (i < keys.length - 1) {
      const sep = document.createElement('span');
      sep.className = 'key-sep';
      sep.textContent = '+';
      wrap.appendChild(sep);
    }
  });
  return wrap;
}

// ── Constants ──────────────────────────────────────────────────────────────────
const TOTAL_LEVELS = 8;

// ── State ──────────────────────────────────────────────────────────────────────
let state = {
  levels: [],
  current: 0,
  score: 0,
  hintsUsed: 0,
  perfects: 0,
  playing: false,
  currentUsedHint: false,
  levelSolved: false,
  wrongAttempts: 0,
};

// ── DOM Refs ───────────────────────────────────────────────────────────────────
const $startScreen = document.getElementById('start-screen');
const $gameScreen = document.getElementById('game-screen');
const $resultScreen = document.getElementById('result-screen');
const $taskDesc = document.getElementById('task-desc');
const $pasteSource = document.getElementById('paste-source');
const $pasteTarget = document.getElementById('paste-target');
const $hintBtn = document.getElementById('hint-btn');
const $hintOverlay = document.getElementById('hint-overlay');
const $hintText = document.getElementById('hint-text');
const $hintClose = document.getElementById('hint-close');
const $score = document.getElementById('score');
const $levelNum = document.getElementById('level-num');
const $levelTotal = document.getElementById('level-total');
// hint UI removed — no DOM refs
const $quitModal = document.getElementById('quit-modal');
const $menuBtn = document.getElementById('menu-btn');
const $quitCancel = document.getElementById('quit-cancel');
const $quitConfirm = document.getElementById('quit-confirm');
const $levelComplete = document.getElementById('level-complete');
const $lcTitle = document.getElementById('lc-title');
const $lcMsg = document.getElementById('lc-msg');
const $lcNextBtn = document.getElementById('lc-next-btn');
const $toast = document.getElementById('toast');

const $playAgain = document.getElementById('play-again-btn');
const $menuFromResult = document.getElementById('menu-from-result-btn');

// Result elements
const $trophy = document.getElementById('trophy');
const $finalScore = document.getElementById('final-score');
const $rLevels = document.getElementById('r-levels');
const $rPerfect = document.getElementById('r-perfect');
const $rHints = document.getElementById('r-hints');

// ── Game Logic ─────────────────────────────────────────────────────────────────
function startGame() {
  // filter out shortcuts intercepted by the browser or OS
  const browserIntercepted = new Set([
    JSON.stringify(['Ctrl','N']),      // new window
    JSON.stringify(['Ctrl','T']),      // new tab
    JSON.stringify(['Ctrl','W']),      // close tab
    JSON.stringify(['Ctrl','S']),      // save
    JSON.stringify(['Ctrl','O']),      // open file
    JSON.stringify(['Ctrl','P']),      // print
    JSON.stringify(['Ctrl','L']),      // address bar
    JSON.stringify(['Ctrl','D']),      // bookmark
    JSON.stringify(['Ctrl','H']),      // history
    JSON.stringify(['Ctrl','J']),      // downloads
    JSON.stringify(['Ctrl','Shift','N']), // private window
  ]);
  const detectableLevels = ALL_SHORTCUTS.filter(q => {
    const keyStr = JSON.stringify(q.keys);
    // skip Win-only shortcuts (OS intercepts)
    const isWinOnly = q.keys && q.keys.length > 0 && q.keys[0] === 'Win' && !q.keys.some(k => ['Ctrl','Alt','Shift'].includes(k));
    // skip browser-intercepted shortcuts
    const isBrowserIntercepted = browserIntercepted.has(keyStr);
    return !isWinOnly && !isBrowserIntercepted;
  });
  state.levels = shuffle(detectableLevels).slice(0, TOTAL_LEVELS);
  state.current = 0;
  state.score = 0;
  state.hintsUsed = 0;
  state.perfects = 0;
  state.playing = true;
  state.currentUsedHint = false;
  state.levelSolved = false;
  $levelTotal.textContent = TOTAL_LEVELS;
  $score.textContent = state.score;
  show('game-screen');
  renderLevel();
}

function renderLevel() {
  const q = state.levels[state.current];
  state.currentUsedHint = false;
  state.levelSolved = false;
  state.wrongAttempts = 0;
  $levelNum.textContent = state.current + 1;
  $taskDesc.textContent = `Perform this action: ${q.answer}`;

  // hide overlays
  $levelComplete.classList.add('hidden');
  $hintOverlay.classList.add('hidden');
  $hintBtn.disabled = true;

  // cleanup previous handlers
  state._handlers = state._handlers || {};
  if ($pasteSource && state._handlers.copy) {
    $pasteSource.removeEventListener('copy', state._handlers.copy);
    state._handlers.copy = null;
  }
  if ($pasteTarget && state._handlers.paste) {
    $pasteTarget.removeEventListener('paste', state._handlers.paste);
    state._handlers.paste = null;
  }
  if (state._handlers.keydownGlobal) {
    document.removeEventListener('keydown', state._handlers.keydownGlobal);
    state._handlers.keydownGlobal = null;
  }

  // prepare playground depending on action type
  const ans = (q.answer || '').toLowerCase();
  const expectsCopy = ans.includes('copy');
  const expectsPaste = ans.includes('paste');
  const expectsSelect = ans.includes('select all') || ans.includes('select');
  const expectsDelete = ans.includes('delete');
  const expectsRename = ans.includes('rename') || q.keys.includes('F2');
  const expectsWin = q.keys && q.keys.indexOf('Win') >= 0;

  // ensure source is editable so user can edit/copy text
  if ($pasteSource) {
    $pasteSource.contentEditable = 'true';
    $pasteSource.style.whiteSpace = 'pre-wrap';
    $pasteSource.style.cursor = 'text';
    if (!($pasteSource.textContent || '').trim()) $pasteSource.textContent = 'Sample text to copy: Hello, paste me!';
  }
  if ($pasteTarget) {
    $pasteTarget.value = '';
  }

  // copy handler
  if ($pasteSource && expectsCopy) {
    const onCopy = e => {
      if (state.levelSolved) return;
      // only accept copy when source has text
      if (($pasteSource.textContent || '').trim().length > 0) {
        e.preventDefault && e.preventDefault();
        completeLevel(true);
      }
    };
    state._handlers.copy = onCopy;
    $pasteSource.addEventListener('copy', onCopy);
  }

  // paste handler
  if ($pasteTarget && expectsPaste) {
    const onPaste = e => {
      if (state.levelSolved) return;
      e.preventDefault && e.preventDefault();
      // read pasted text from clipboard if available
      const pasted = (e.clipboardData && e.clipboardData.getData('text')) || '';
      if (pasted.length > 0) {
        $pasteTarget.value = pasted;
        completeLevel(true);
      } else {
        // some browsers won't expose clipboardData on synthetic events; still complete
        completeLevel(true);
      }
    };
    state._handlers.paste = onPaste;
    $pasteTarget.addEventListener('paste', onPaste);
  }

  // global key detection for select/delete/rename and Win fallbacks
  const onKeyGlobal = e => {
    if (state.levelSolved || !state.playing) return;
    const combo = normalizeKeyFromEvent(e);
    const q = state.levels[state.current];
    if (!q) return;

    // FIRST: check if this combo matches the current level's expected shortcut
    // If so, prevent default immediately (prevents F12, Ctrl+S, etc from browser)
    if (keysEqual(combo, q.keys) || comboMatches(q.keys, combo)) {
      e.preventDefault();
      completeLevel(true);
      return;
    }

    // Then check for action-specific shortcuts
    const ans = (q.answer || '').toLowerCase();
    const expectsSelect = ans.includes('select all') || ans.includes('select');
    if (expectsSelect && comboMatches(['Ctrl','A'], combo)) {
      e.preventDefault();
      completeLevel(true);
      return;
    }
    
    const expectsDelete = ans.includes('delete');
    if (expectsDelete && (e.key === 'Delete' || comboMatches(['Delete'], combo))) {
      e.preventDefault();
      completeLevel(true);
      return;
    }
    
    const expectsRename = ans.includes('rename') || q.keys.includes('F2');
    if (expectsRename && e.key === 'F2') {
      e.preventDefault();
      completeLevel(true);
      return;
    }
    
    // Track wrong shortcuts (if combo has modifiers or is a special key, it was likely an attempt)
    const looksLikeAttempt = combo.length > 1 || ['Delete','Enter','F2','F5','F12'].includes(e.key);
    if (looksLikeAttempt && !state.levelSolved) {
      state.wrongAttempts++;
      if (state.wrongAttempts >= 2) {
        $hintBtn.disabled = false;
      }
    }
  };
  state._handlers.keydownGlobal = onKeyGlobal;
  document.addEventListener('keydown', onKeyGlobal);


}

function normalizeKeyFromEvent(e) {
  const parts = [];
  if (e.ctrlKey) parts.push('Ctrl');
  if (e.altKey) parts.push('Alt');
  if (e.shiftKey) parts.push('Shift');
  if (e.metaKey) parts.push('Win');

  let k = e.key;
  if (!k) return parts;
  if (k === ' ') k = 'Space';
  if (k.startsWith('Arrow')) k = k.replace('Arrow', '');
  if (k === 'Escape') k = 'Esc';
  if (k === 'PrintScreen' || k === 'Print') k = 'PrtSc';
  if (k.length === 1) k = k.toUpperCase();
  parts.push(k);
  return parts;
}

function showToast(text, type = 'info', ms = 1400) {
  $toast.textContent = text;
  $toast.className = `toast ${type}`;
  $toast.classList.remove('hidden');
  setTimeout(() => $toast.classList.add('hidden'), ms);
}

// Accept exact match or a fallback where 'Win' in expected is treated as 'Ctrl'
function comboMatches(expected, actual) {
  if (keysEqual(expected, actual)) return true;
  const alt = expected.map(k => k === 'Win' ? 'Ctrl' : k);
  if (keysEqual(alt, actual)) return true;
  return false;
}

function completeLevel(correct = true, usedHint = false) {
  if (state.levelSolved) return;
  state.levelSolved = true;
  const used = state.currentUsedHint || usedHint;
  if (correct) {
    state.score += 10;
    if (!used) state.perfects++;
    showToast('Correct! Level complete 🎉', 'success');
    $lcTitle.textContent = 'Level Complete!';
    $lcMsg.textContent = `You completed: ${state.levels[state.current].answer}`;
  } else {
    showToast('Not quite — try again', 'error');
    $lcTitle.textContent = 'Almost!';
    $lcMsg.textContent = 'Try the shortcut again.';
  }
  $score.textContent = state.score;
  $levelComplete.classList.remove('hidden');
}

function nextLevel() {
  state.current++;
  if (state.current >= state.levels.length) {
    endGame();
  } else {
    renderLevel();
  }
}

function endGame() {
  state.playing = false;
  show('result-screen');
  $trophy.textContent = state.score >= 80 ? '🏆' : state.score >= 40 ? '🥇' : '🙂';
  $finalScore.textContent = state.score;
  $rLevels.textContent = state.levels.length;
  $rPerfect.textContent = state.perfects;
  $rHints.textContent = state.hintsUsed;
}


document.getElementById('start-btn').addEventListener('click', startGame);
if ($playAgain) $playAgain.addEventListener('click', startGame);
if ($menuFromResult) $menuFromResult.addEventListener('click', () => show('start-screen'));

$menuBtn.addEventListener('click', () => $quitModal.classList.remove('hidden'));
$quitCancel.addEventListener('click', () => $quitModal.classList.add('hidden'));
$quitConfirm.addEventListener('click', () => { $quitModal.classList.add('hidden'); show('start-screen'); });

$lcNextBtn.addEventListener('click', () => {
  $levelComplete.classList.add('hidden');
  nextLevel();
});

$hintBtn.addEventListener('click', () => {
  const q = state.levels[state.current];
  $hintText.textContent = `The action is: ${q.answer}`;
  $hintOverlay.classList.remove('hidden');
  state.hintsUsed++;
  state.currentUsedHint = true;
});

$hintClose.addEventListener('click', () => {
  $hintOverlay.classList.add('hidden');
});

// Escape key to dismiss quit modal (separate from level detection)
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !$quitModal.classList.contains('hidden')) {
    $quitModal.classList.add('hidden');
  }
});
// attach copy/paste listeners for playground (if present)
if ($pasteSource) {
  $pasteSource.addEventListener('copy', e => {
    const q = state.levels[state.current];
    if (!q || state.levelSolved) return;
    if (keysEqual(q.keys, ['Ctrl', 'C']) || (q.answer || '').toLowerCase().includes('copy')) {
      e.preventDefault && e.preventDefault();
      completeLevel(true);
    }
  });
}
if ($pasteTarget) {
  $pasteTarget.addEventListener('paste', e => {
    const q = state.levels[state.current];
    if (!q || state.levelSolved) return;
    if ((q.answer || '').toLowerCase().includes('paste') || keysEqual(q.keys, ['Ctrl', 'V']) || keysEqual(q.keys, ['Win','V'])) {
      e.preventDefault && e.preventDefault();
      completeLevel(true);
    }
  });
}

function shuffle(arr) { return arr.sort(() => Math.random() - 0.5); }
