// 倒數計時邏輯（114 會考：2025-05-17 08:00）
const examDate = new Date('2025-05-17T08:00:00');

function updateCountdown() {
  const diff = examDate - new Date();
  if (diff <= 0) {
    document.getElementById('countdown').innerHTML = '<div>考試已開始！你怎麼還在看呢!</div>';
    clearInterval(interval);
    return;
  }
  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff / (1000*60*60)) % 24);
  const m = Math.floor((diff / (1000*60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  document.getElementById('days').textContent = String(d).padStart(2,'0');
  document.getElementById('hours').textContent = String(h).padStart(2,'0');
  document.getElementById('minutes').textContent = String(m).padStart(2,'0');
  document.getElementById('seconds').textContent = String(s).padStart(2,'0');
}
const interval = setInterval(updateCountdown, 1000);
updateCountdown();

// 隨機色彩：同時改三條 .stripe 背景
const stripes = document.querySelectorAll('.stripe');
document.getElementById('colorBtn').addEventListener('click', () => {
  const hue = Math.floor(Math.random() * 360);
  const grad = `linear-gradient(135deg, hsl(${hue},70%,60%), hsl(${(hue+60)%360},70%,60%))`;
  stripes.forEach(s => s.style.background = grad);
});

function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
// 更新顯示當前時間的元素
function updateCurrentDateTime() {
    const nowDatetimeElement = document.getElementById('now-datetime');
    if (nowDatetimeElement) {
      nowDatetimeElement.textContent = getCurrentDateTime();
    }
  }
// 初始設定
updateCurrentDateTime();
// 每秒更新一次時間
setInterval(updateCurrentDateTime, 1000);
