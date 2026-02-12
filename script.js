// --- KONFIGURASI TANGGAL & PESAN ---
const config = {
    startDate: new Date(2024, 6, 20), // GANTI TANGGAL JADIAN DISINI (Tahun, Bulan-1, Tanggal)
    
    // Pesan pas klik Bunga
    flowerMessages: {
        1: "🌹 Untuk kesabaranmu menghadapi aku yang kadang nyebelin. Terima kasih sayang.",
        2: "🌻 Senyum kamu itu moodbooster terbaik aku. Jangan lupa senyum hari ini!",
        3: "🌷 Aku tidak butuh coklat untuk jadi penyemangatku, aku cuma butuh kamu dengan tingkah lucu mu."
    }
};

// 1. FUNGSI TRANSISI (Intro -> Isi)
function bukaCerita() {
    const intro = document.getElementById('intro-layer');
    const main = document.getElementById('main-content');
    const music = document.getElementById('bg-music');
    
    // Hilangkan intro
    intro.style.opacity = '0';
    
    // Ganti tema body jadi soft
    document.body.classList.add('soft-mode');

    setTimeout(() => {
        intro.style.display = 'none'; // Hapus intro dari layar
        main.classList.remove('hidden'); // Munculin isi surat
        
        // Putar lagu
        music.play().catch(e => console.log("Musik butuh interaksi"));
    }, 1000); // Tunggu 1 detik biar transisi halus
}

// 2. FUNGSI TIMER
function updateTimer() {
    const now = new Date();
    const diff = now - config.startDate;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    
    document.getElementById('timer').innerText = `${days} Hari : ${hours} Jam : ${minutes} Menit`;
}
setInterval(updateTimer, 1000);
updateTimer();

// 3. FUNGSI KLIK BUNGA
function bukaPesan(id) {
    const kotakPesan = document.getElementById('pesan-bunga');
    const isi = document.getElementById('isi-pesan');
    
    isi.innerText = config.flowerMessages[id];
    kotakPesan.classList.remove('hidden');
}

function tutupPesan() {
    document.getElementById('pesan-bunga').classList.add('hidden');
}

// 4. EFEK BINTANG (Hanya jalan di intro)
const canvas = document.getElementById('star-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
for(let i=0; i<100; i++) stars.push({
    x: Math.random()*canvas.width, 
    y: Math.random()*canvas.height, 
    r: Math.random()*1.5
});

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
        ctx.fill();
    });
}
drawStars();