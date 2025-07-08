const paragraphs = [
  `私たちの現代社会において、パソコンは仕事や学習、コミュニケーションの場で欠かせないツールとなっています。その中でも「コピー＆ペースト」という操作は、日常的に頻繁に使用される基本的な作業の一つです。コピー＆ペーストは単なる文字やデータの移動手段にとどまらず、効率的な情報処理や時間短縮、ミスの削減に大きく貢献しています。`,
  `コピー＆ペースト技術の最も重要なポイントは、「正確さ」と「速さ」の両立です。間違った部分をコピーしてしまうと、後でやり直しが必要になり、かえって時間を浪費することになります。したがって、コピーする前に内容を正確に確認し、必要な部分だけを選択することが求められます。このスキルは一見単純に思えるかもしれませんが、実際には集中力や注意力が必要であり、練習によって向上させることが可能です。`,
  `コピー＆ペーストの応用技術として、文章の形式やレイアウトを崩さずに貼り付けるテクニックも重要です。特に表や箇条書き、フォントの大きさや色などが含まれる資料では、形式を維持したまま移動することが求められます。これを誤ると、相手にとって見づらい資料になってしまい、コミュニケーションの効率が下がる恐れがあります。したがって、適切な貼り付け方法を理解し、必要に応じて編集ツールを使いこなす能力も不可欠です。`,
  `コピー＆ペーストは単一の文章だけでなく、複数のデータを整理しながら作業を進める際にも活躍します。例えば、複数の資料から重要な情報を抜き出してまとめる場合、効率よく必要な部分だけを選択して一つの文書にまとめることが求められます。この作業は一見単調に見えますが、正確な判断力や整理能力が問われるため、経験を積むことが上達の鍵となります。`,
  `私たちがパソコン作業を行う際には、ファイル名やフォルダの整理など、作業環境を整えることも重要です。コピー＆ペーストの作業はファイル管理とも密接に関係しており、適切な名前付けや場所への保存ができていないと、後から資料を見つけられず、作業の効率を大きく損なうことがあります。したがって、コピー＆ペーストの技術と並行して、情報管理のルールを守ることも必要となります。`,
  `コピー＆ペースト技術は単なる操作スキルにとどまらず、私たちの仕事や学習の質を高めるための基盤とも言えます。この技術を身につけることで、時間を有効に使い、ミスを減らし、より高い成果を出すことが可能になります。特に授業や職場の場面では、正確かつ効率的なコピー＆ペースト作業が求められるため、日頃から意識的に練習し、スキルを磨いていくことが重要です。`,
  `この授業では、コピー＆ペーストの基本から応用までを学び、実践的な演習を通じて習得していきます。効率的な作業を身につけ、皆さんの今後の学習や仕事に役立てていきましょう。`
];


const requiredPhrases = [
  "私たちの現代社会において、パソコンは仕事や学習、コミュニケーションの場で欠かせないツールとなっています。",
  "コピー＆ペーストという操作は、日常的に頻繁に使用される基本的な作業の一つです。",
  "コピー＆ペーストは単なる文字やデータの移動手段にとどまらず、効率的な情報処理や時間短縮、ミスの削減に大きく貢献しています。",
  "コピー＆ペースト技術の最も重要なポイントは、「正確さ」と「速さ」の両立です。",
  "間違った部分をコピーしてしまうと、後でやり直しが必要になり、かえって時間を浪費することになります。",
  "コピーする前に内容を正確に確認し、必要な部分だけを選択することが求められます。",
  "このスキルは一見単純に思えるかもしれませんが、実際には集中力や注意力が必要であり、練習によって向上させることが可能です。",
  "コピー＆ペーストの応用技術として、文章の形式やレイアウトを崩さずに貼り付けるテクニックも重要です。",
  "特に表や箇条書き、フォントの大きさや色などが含まれる資料では、形式を維持したまま移動することが求められます。",
  "これを誤ると、相手にとって見づらい資料になってしまい、コミュニケーションの効率が下がる恐れがあります。",
  "したがって、適切な貼り付け方法を理解し、必要に応じて編集ツールを使いこなす能力も不可欠です。",
  "コピー＆ペーストは単一の文章だけでなく、複数のデータを整理しながら作業を進める際にも活躍します。",
  "例えば、複数の資料から重要な情報を抜き出してまとめる場合、効率よく必要な部分だけを選択して一つの文書にまとめることが求められます。",
  "この作業は一見単調に見えますが、正確な判断力や整理能力が問われるため、経験を積むことが上達の鍵となります。",
  "私たちがパソコン作業を行う際には、ファイル名やフォルダの整理など、作業環境を整えることも重要です。",
  "コピー＆ペーストの作業はファイル管理とも密接に関係しており、適切な名前付けや場所への保存ができていないと、後から資料を見つけられず、作業の効率を大きく損なうことがあります。",
  "したがって、コピー＆ペーストの技術と並行して、情報管理のルールを守ることも必要となります。",
  "コピー＆ペースト技術は単なる操作スキルにとどまらず、私たちの仕事や学習の質を高めるための基盤とも言えます。",
  "この技術を身につけることで、時間を有効に使い、ミスを減らし、より高い成果を出すことが可能になります。",
  "特に授業や職場の場面では、正確かつ効率的なコピー＆ペースト作業が求められるため、日頃から意識的に練習し、スキルを磨いていくことが重要です。",
  "この授業では、コピー＆ペーストの基本から応用までを学び、実践的な演習を通じて習得していきます。",
  "効率的な作業を身につけ、皆さんの今後の学習や仕事に役立てていきましょう。"
];


// DOM取得
const longTextDiv = document.getElementById("long-text");
const pasteInput = document.getElementById("paste-input");
const submitBtn = document.getElementById("submit-btn");
const clearBtn = document.getElementById("clear-btn");
const messageDiv = document.getElementById("message");
const timerDiv = document.getElementById("timer");

const countInput = document.getElementById("count-input");
const startBtn = document.getElementById("start-btn");
const gameArea = document.getElementById("game-area");

let requiredCount = 5;
let currentIndex = 0;
let startTime = null;
let timerInterval = null;

// シャッフル関数
function shuffleArray(arr) {
  for(let i = arr.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}


// タイマー開始
function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(() => {
    const elapsed = (Date.now() - startTime) / 1000;
    timerDiv.textContent = `y
function stopTimer() {
  clearInterval(timerInterval);
}


// メッセージ表示
function showMessage(msg, color="black") {
  messageDiv.textContent = msg;
  messageDiv.style.color = color;
}

// ゲーム開始処理
function initGame() {
  const shuffledParagraphs = [...paragraphs];
  shuffleArray(shuffledParagraphs);
  longTextDiv.textContent = shuffledParagraphs.join("\n\n");

  currentIndex = 0;
  pasteInput.value = "";
  pasteInput.disabled = false;
  submitBtn.disabled = false;
  gameArea.style.display = "block";

  showMessage(`「${requiredPhrases[currentIndex]}」をコピーしてペーストしてください。`, "blue");
  timerDiv.textContent = "タイム: 0.00 秒";

  startTimer();
  pasteInput.focus();
}

// 入力チェック
function checkInput() {
  const input = pasteInput.value.trim();
  if (input === shuffledPhrases[currentIndex]) {
    currentIndex++;
    if (currentIndex >= requiredCount) {
      stopTimer(); 
      showMessage(`${requiredCount}回クリア！おめでとう！`, "green");
      pasteInput.disabled = true;
      submitBtn.disabled = true;
    } else {
      showMessage(`OK！次は「${shuffledPhrases[currentIndex]}」をコピーしてください。`, "green");
      pasteInput.value = "";
      pasteInput.focus();
    }
  } else {
    showMessage(`違います！「${shuffledPhrases[currentIndex]}」をコピーしてください。`, "red");
  }
}

// イベント登録
submitBtn.addEventListener("click", checkInput);
pasteInput.addEventListener("keydown", e => {
  if(e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    checkInput();
  }
});
clearBtn.addEventListener("click", () => {
  pasteInput.value = "";
  pasteInput.focus();
});
startBtn.addEventListener("click", () => {
  const val = parseInt(countInput.value);
  if(!isNaN(val) && val > 0) {
    requiredCount = val;
    initGame();
  } else {
    alert("1以上の数字を入力してください");
  }
});
