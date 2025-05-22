// 設定目標日期（2025-05-17 08:10:00）
const examDate = new Date('2026-05-16T08:10:00');

// 倒數計時邏輯
function updateCountdown() {
            const diff = examDate - new Date();
            if (diff <= 0) {
                document.getElementById('countdown').innerHTML = '<div>考試已開始！你怎麼還在看呢!</div>';
                clearInterval(countdownInterval);
                return;
            }
            const td = Math.floor(diff / (1000*60*60*24)+1);
            const d = Math.floor(diff / (1000*60*60*24)); // 計算天數
            const h = Math.floor((diff / (1000*60*60)) % 24); // 計算小時
            const m = Math.floor((diff / (1000*60)) % 60); // 計算分鐘
            const s = Math.floor((diff / 1000) % 60); // 計算秒數

            document.getElementById('today').textContent = String(td).padStart(2, '0');
            document.getElementById('days').textContent = String(d).padStart(2, '0');
            document.getElementById('hours').textContent = String(h).padStart(2, '0');
            document.getElementById('minutes').textContent = String(m).padStart(2, '0');
            document.getElementById('seconds').textContent = String(s).padStart(2, '0');
}

// 每秒更新倒數計時
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // 初始顯示一次倒數

// 更新當前時間顯示
function updateTime() {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');

            const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
            document.getElementById('datetime').textContent = `現在時間: ${formattedTime}`;
}

        // 每秒更新當前時間
setInterval(updateTime, 1000);
updateTime(); // 初始顯示一次當前時間

// 隨機色彩：同時改三條 .stripe 背景
const stripes = document.querySelectorAll('.stripe');
document.getElementById('colorBtn').addEventListener('click', () => {
  const hue = Math.floor(Math.random() * 360);
  const grad = `linear-gradient(135deg, hsl(${hue},70%,60%), hsl(${(hue+60)%360},70%,60%))`;
  stripes.forEach(s => s.style.background = grad);
});
