// pages/recommendations/recommendations.js - Recommendations Page JavaScript

// Data produk khusus halaman rekomendasi
const recProducts = [
    {
        id: 1,
        name: "MAXstream Premium 10GB / 30 Days",
        category: "streaming",
        price: "Rp60.000",
        features: ["10GB Data Streaming Premium", "Akses MAXstream tanpa buffering", "Berlaku 30 Hari"],
        description: "Paket streaming premium khusus untuk platform MAXstream dengan kualitas tinggi dan tanpa buffering untuk pengalaman menonton terbaik.",
        icon: "fas fa-play-circle",
        recommendedFor: ["streaming", "premium"]
    },
    {
        id: 2,
        name: "Netflix Add-on 15GB / 30 Days",
        category: "streaming",
        price: "Rp90.000",
        features: ["15GB Data Netflix", "Akses semua konten Netflix", "Tanpa mengurangi kuota utama"],
        description: "Tambahan kuota khusus untuk streaming Netflix tanpa batasan kualitas dan tanpa mengurangi kuota data utama Anda.",
        icon: "fas fa-film",
        recommendedFor: ["streaming", "netflix"]
    },
    {
        id: 3,
        name: "YouTube Streaming 20GB / 30 Days",
        category: "streaming",
        price: "Rp75.000",
        features: ["20GB Data YouTube", "Streaming hingga 4K", "Tidak terhitung kuota utama"],
        description: "Paket khusus untuk penggemar YouTube dengan kuota besar untuk streaming video hingga kualitas 4K tanpa batasan.",
        icon: "fab fa-youtube",
        recommendedFor: ["streaming", "youtube"]
    },
    {
        id: 4,
        name: "Disney+ Bundle 25GB / 30 Days",
        category: "streaming",
        price: "Rp120.000",
        features: ["25GB Data Disney+", "Akses Disney+, Star+, Hulu", "Paket keluarga hingga 4 device"],
        description: "Paket streaming lengkap untuk platform Disney+ dan layanan terkait dengan kuota besar untuk seluruh keluarga.",
        icon: "fas fa-tv",
        recommendedFor: ["streaming", "family"]
    },
    {
        id: 5,
        name: "Data Booster 5GB / 7 Days",
        category: "booster",
        price: "Rp25.000",
        features: ["5GB Data tambahan", "Berlaku 7 hari", "Dapat digunakan kapan saja"],
        description: "Paket booster data darurat untuk kebutuhan internet tambahan dalam waktu singkat.",
        icon: "fas fa-bolt",
        recommendedFor: ["emergency", "quick"]
    },
    {
        id: 6,
        name: "Data Booster 10GB / 14 Days",
        category: "booster",
        price: "Rp45.000",
        features: ["10GB Data tambahan", "Berlaku 14 hari", "Kecepatan maksimum"],
        description: "Booster data dengan durasi lebih panjang untuk kebutuhan tambahan selama dua minggu.",
        icon: "fas fa-chart-line",
        recommendedFor: ["temporary", "medium"]
    },
    {
        id: 7,
        name: "Data Booster 15GB / 30 Days",
        category: "booster",
        price: "Rp75.000",
        features: ["15GB Data tambahan", "Berlaku 30 hari", "Tanpa batasan kecepatan"],
        description: "Booster data bulanan untuk pengguna aktif yang membutuhkan tambahan kuota reguler.",
        icon: "fas fa-battery-full",
        recommendedFor: ["monthly", "regular"]
    },
    {
        id: 8,
        name: "Data Booster Unlimited FUP 1Mbps / 7 Days",
        category: "booster",
        price: "Rp55.000",
        features: ["Unlimited data", "Fair usage policy 1Mbps", "Berlaku 7 hari"],
        description: "Paket booster unlimited dengan kecepatan yang stabil untuk kebutuhan browsing dan sosial media.",
        icon: "fas fa-infinity",
        recommendedFor: ["unlimited", "browsing"]
    },
    {
        id: 9,
        name: "Roaming Asia 5GB / 7 Days",
        category: "roaming",
        price: "Rp150.000",
        features: ["5GB Data roaming Asia", "Berlaku 7 hari", "Mencakup 15 negara Asia"],
        description: "Paket roaming khusus untuk perjalanan ke negara-negara Asia dengan kuota data yang cukup untuk kebutuhan wisata.",
        icon: "fas fa-globe-asia",
        recommendedFor: ["asia", "travel"]
    },
    {
        id: 10,
        name: "Roaming Europe 5GB / 30 Days",
        category: "roaming",
        price: "Rp400.000",
        features: ["5GB Data roaming Eropa", "Berlaku 30 hari", "Mencakup 30 negara Eropa"],
        description: "Paket roaming premium untuk perjalanan bisnis atau wisata ke Eropa dengan masa aktif panjang.",
        icon: "fas fa-globe-europe",
        recommendedFor: ["europe", "business"]
    },
    {
        id: 11,
        name: "Roaming Malaysia 20GB / 7 Days",
        category: "roaming",
        price: "Rp120.000",
        features: ["20GB Data roaming Malaysia", "Berlaku 7 hari", "Unlimited WhatsApp & LINE"],
        description: "Paket roaming khusus Malaysia dengan kuota besar dan dukungan aplikasi chatting untuk turis.",
        icon: "fas fa-flag",
        recommendedFor: ["malaysia", "tourist"]
    },
    {
        id: 12,
        name: "Roaming Singapore 10GB / 14 Days",
        category: "roaming",
        price: "Rp180.000",
        features: ["10GB Data roaming Singapore", "Berlaku 14 hari", "Kecepatan 4G/5G"],
        description: "Paket roaming khusus Singapura untuk perjalanan bisnis atau liburan dengan akses jaringan terbaik.",
        icon: "fas fa-building",
        recommendedFor: ["singapore", "business"]
    },
    {
        id: 13,
        name: "MAXstream Gala 20GB / 30 Days",
        category: "general",
        price: "Rp170.000",
        features: ["20GB Data MAXstream", "Akses semua platform streaming", "Berlaku 30 hari"],
        description: "Paket streaming all-in-one dengan akses ke berbagai platform hiburan favorit.",
        icon: "fas fa-crown",
        recommendedFor: ["streaming", "all-in-one"]
    },
    {
        id: 14,
        name: "Student Special Bundle 5GB / 30 Days",
        category: "general",
        price: "Rp55.000",
        features: ["5GB Data untuk pelajar", "Akses aplikasi edukasi", "Diskon khusus pelajar"],
        description: "Paket ekonomis khusus pelajar/mahasiswa dengan akses ke platform pembelajaran online.",
        icon: "fas fa-graduation-cap",
        recommendedFor: ["student", "education"]
    },
    {
        id: 15,
        name: "Weekend Data Boost 10GB / 2 Days",
        category: "general",
        price: "Rp30.000",
        features: ["10GB Data weekend", "Berlaku Sabtu-Minggu", "Kecepatan maksimum"],
        description: "Paket khusus akhir pekan untuk streaming, gaming, dan aktivitas online lainnya.",
        icon: "fas fa-calendar",
        recommendedFor: ["weekend", "gaming"]
    },
    {
        id: 16,
        name: "Night Streaming Package 15GB / 7 Days",
        category: "general",
        price: "Rp25.000",
        features: ["15GB Data malam", "Berlaku 23:00-05:00", "Khusus streaming"],
        description: "Paket ekonomis untuk menikmati streaming di malam hari dengan kuota khusus.",
        icon: "fas fa-moon",
        recommendedFor: ["night", "streaming"]
    },
    {
        id: 17,
        name: "Device Upgrade Protection Basic / 30 Days",
        category: "device",
        price: "Rp35.000",
        features: ["Perlindungan dasar", "Kerusakan tidak disengaja", "Berlaku 30 hari"],
        description: "Perlindungan dasar untuk perangkat Anda saat melakukan upgrade dengan coverage kerusakan ringan.",
        icon: "fas fa-shield-alt",
        recommendedFor: ["protection", "basic"]
    },
    {
        id: 18,
        name: "Device Upgrade Protection Plus / 30 Days",
        category: "device",
        price: "Rp55.000",
        features: ["Perlindungan komprehensif", "Termasuk kerusakan layar", "Perbaikan prioritas"],
        description: "Perlindungan lengkap untuk upgrade perangkat termasuk kerusakan layar dan komponen penting.",
        icon: "fas fa-shield",
        recommendedFor: ["protection", "comprehensive"]
    },
    {
        id: 19,
        name: "Device Insurance Theft + Damage / 30 Days",
        category: "device",
        price: "Rp75.000",
        features: ["Asuransi pencurian", "Perlindungan kerusakan", "Penggantian perangkat"],
        description: "Asuransi lengkap untuk perangkat Anda meliputi pencurian, kehilangan, dan kerusakan berat.",
        icon: "fas fa-user-shield",
        recommendedFor: ["insurance", "theft"]
    },
    {
        id: 20,
        name: "Smartphone Warranty Extension / 30 Days",
        category: "device",
        price: "Rp100.000",
        features: ["Perpanjangan garansi", "Coverage pabrik", "Servis resmi"],
        description: "Perpanjangan garansi resmi pabrik untuk smartphone Anda dengan layanan servis berstandar.",
        icon: "fas fa-certificate",
        recommendedFor: ["warranty", "extension"]
    },
    {
        id: 21,
        name: "Voice Bundle 100 Minutes / 7 Days",
        category: "voice",
        price: "Rp20.000",
        features: ["100 Menit nelpon ke semua operator", "Berlaku 7 hari", "Kualitas suara jernih"],
        description: "Paket nelpon hemat untuk kebutuhan komunikasi singkat selama seminggu.",
        icon: "fas fa-phone-alt",
        recommendedFor: ["voice", "weekly", "low-call"]
    },
    {
        id: 22,
        name: "Voice Bundle 250 Minutes / 30 Days",
        category: "voice",
        price: "Rp45.000",
        features: ["250 Menit nelpon ke semua operator", "Berlaku 30 hari", "Cocok untuk penggunaan reguler"],
        description: "Paket nelpon bulanan dengan kuota menit yang cukup untuk komunikasi reguler.",
        icon: "fas fa-phone-volume",
        recommendedFor: ["voice", "monthly", "medium-call"]
    },
    {
        id: 23,
        name: "Voice + SMS Combo 500 / 30 Days",
        category: "voice",
        price: "Rp55.000",
        features: ["500 Menit nelpon", "500 SMS", "Berlaku 30 hari"],
        description: "Paket kombo lengkap untuk nelpon dan SMS selama sebulan penuh.",
        icon: "fas fa-comments-dollar",
        recommendedFor: ["voice", "sms", "combo"]
    },
    {
        id: 24,
        name: "Unlimited On-Net Calls / 30 Days",
        category: "voice",
        price: "Rp65.000",
        features: ["Nelpon unlimited ke sesama", "Berlaku 30 hari", "Tanpa batas FUP"],
        description: "Bebas nelpon sepuasnya ke sesama pengguna tanpa khawatir kuota menit.",
        icon: "fas fa-infinity",
        recommendedFor: ["voice", "unlimited", "on-net"]
    },
    {
        id: 25,
        name: "Retention Bonus Data 5GB / 30 Days",
        category: "retention",
        price: "Rp30.000",
        features: ["Bonus 5GB Data", "Khusus pelanggan setia", "Berlaku 30 hari"],
        description: "Bonus data sebagai apresiasi untuk pelanggan setia InsightTel.",
        icon: "fas fa-gift",
        recommendedFor: ["retention", "bonus", "loyalty"]
    },
    {
        id: 26,
        name: "Retention Loyalty Combo 15GB / 30 Days",
        category: "retention",
        price: "Rp55.000",
        features: ["15GB Data", "Harga spesial", "Berlaku 30 hari"],
        description: "Paket data dengan harga spesial sebagai bentuk penghargaan loyalitas Anda.",
        icon: "fas fa-medal",
        recommendedFor: ["retention", "combo", "loyalty"]
    },
    {
        id: 27,
        name: "Retention Special 20GB + Calls / 30 Days",
        category: "retention",
        price: "Rp75.000",
        features: ["20GB Data", "Bonus 100 menit nelpon", "Penawaran terbatas"],
        description: "Penawaran spesial untuk pelanggan setia, mencakup data besar dan bonus nelpon.",
        icon: "fas fa-star",
        recommendedFor: ["retention", "special", "high-value"]
    },
    {
        id: 28,
        name: "Retention VIP Plan 30GB / 30 Days",
        category: "retention",
        price: "Rp90.000",
        features: ["30GB Data", "Prioritas jaringan", "Layanan pelanggan VIP"],
        description: "Paket eksklusif untuk pelanggan VIP dengan benefit terbaik.",
        icon: "fas fa-crown",
        recommendedFor: ["retention", "vip", "premium"]
    }
];

// User profile state
let userProfile = {
    username: '',
    planType: '',
    callDuration: '',
    smsFreq: '',
    topupFreq: '',
    travelScore: '',
    complaintCount: '',
    videoGbUsage: 20,
    spendPerGb: 15000
};

// DOM Elements
const DOM = {
    userWelcome: document.getElementById('userWelcome'),
    profileText: document.getElementById('profileText'),
    profileDropdown: document.getElementById('profileDropdown'),
    profileBtn: document.getElementById('profileBtn'),
    profileSummary: document.getElementById('profileSummary'),
    profileDetails: document.getElementById('profileDetails'),
    recommendationsList: document.getElementById('recommendationsList'),
    refreshRecBtn: document.getElementById('refreshRecBtn'),
    updateProfileBtn: document.getElementById('updateProfileBtn'),
    recForm: document.getElementById('recForm'),
    recommendationForm: document.getElementById('recommendationForm')
};

// Utility functions
const utils = {
    escapeHtml: (text) => {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },
    
    showNotification: (message, type = 'info') => {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close"><i class="fas fa-times"></i></button>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? 'rgba(50, 215, 75, 0.9)' : type === 'error' ? 'rgba(255, 69, 58, 0.9)' : 'rgba(0, 121, 255, 0.9)'};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-width: 300px;
            max-width: 400px;
            z-index: 3000;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            animation: slideIn 0.3s ease-out;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(notification);
        
        const removeNotification = () => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        };
        
        notification.querySelector('.notification-close').addEventListener('click', removeNotification);
        setTimeout(removeNotification, 5000);
    },
    
    getLabel: (field, value) => {
        const labels = {
            planType: {
                basic: 'Basic',
                premium: 'Premium',
                unlimited: 'Unlimited'
            },
            callDuration: {
                low: '< 30 menit',
                medium: '30-60 menit',
                high: '> 60 menit'
            },
            smsFreq: {
                low: 'Jarang (0-5)',
                medium: 'Sedang (6-20)',
                high: 'Sering (21+)'
            },
            topupFreq: {
                low: '1-2 kali',
                medium: '3-5 kali',
                high: '6+ kali'
            },
            travelScore: {
                low: 'Jarang',
                medium: 'Sedang',
                high: 'Sering'
            },
            complaintCount: {
                low: 'Jarang (0-2)',
                medium: 'Sedang (3-5)',
                high: 'Sering (6+)'
            }
        };
        
        return labels[field]?.[value] || value;
    }
};

// Authentication management
const authManager = {
    init: () => {
        const isLoggedIn = localStorage.getItem('insighttel_loggedIn') === 'true';
        const username = localStorage.getItem('insighttel_user');
        
        if (!isLoggedIn || !username) {
            window.location.href = '../login.html';
            return false;
        }
        
        userProfile.username = username;
        if (DOM.profileText) {
            DOM.profileText.textContent = username;
        }
        
        authManager.updateProfileDropdown(username);
        
        return true;
    },
    
    updateProfileDropdown: (username) => {
        if (!DOM.profileDropdown) return;
        
        DOM.profileDropdown.innerHTML = `
            <div id="loggedInSection" class="p-5">
                <div class="dropdown-header text-center mb-5">
                    <div class="user-avatar mx-auto mb-3">
                        <i class="fas fa-user"></i>
                    </div>
                    <h4 class="text-xl font-semibold mb-1">${username}</h4>
                    <p class="text-text-secondary text-sm">Account: Demo User</p>
                </div>
                <div class="space-y-3">
                    <a href="../index.html" class="dropdown-item">
                        <i class="fas fa-home"></i>
                        <span>Home</span>
                    </a>
                    <a href="recommendations.html" class="dropdown-item">
                        <i class="fas fa-robot"></i>
                        <span>My Recommendations</span>
                    </a>
                    <a href="../about.html" class="dropdown-item">
                        <i class="fas fa-info-circle"></i>
                        <span>About InsightTel</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <button id="logoutBtn" class="dropdown-item text-error">
                        <i class="fas fa-sign-out-alt"></i>
                        <span>Logout</span>
                    </button>
                </div>
                <div class="login-footer mt-4 text-center text-text-secondary text-xs">
                    <span>Demo Account - Data stored locally</span>
                </div>
            </div>
        `;
        
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', authManager.logout);
        }
        
        if (DOM.profileBtn) {
            DOM.profileBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                DOM.profileDropdown.classList.toggle('show');
            });
            
            document.addEventListener('click', (e) => {
                if (DOM.profileBtn && !DOM.profileBtn.contains(e.target) && 
                    DOM.profileDropdown && !DOM.profileDropdown.contains(e.target)) {
                    DOM.profileDropdown.classList.remove('show');
                }
            });
        }
    },
    
    logout: () => {
        localStorage.removeItem('insighttel_loggedIn');
        localStorage.removeItem('insighttel_user');
        localStorage.removeItem('insighttel_profile');
        
        utils.showNotification('Anda telah logout', 'info');
        
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 1500);
    }
};

// Load saved profile
function loadSavedProfile() {
    const savedProfile = localStorage.getItem('insighttel_profile');
    if (savedProfile) {
        Object.assign(userProfile, JSON.parse(savedProfile));
        updateFormWithProfile();
        updateProfileSummary();
    }
}

// Reset profil ke kondisi awal
function resetUserProfile() {
    const currentUsername = userProfile.username || localStorage.getItem('insighttel_user') || '';

    userProfile = {
        username: currentUsername,
        planType: '',
        callDuration: '',
        smsFreq: '',
        topupFreq: '',
        travelScore: '',
        complaintCount: '',
        videoGbUsage: 20,
        spendPerGb: 15000
    };
}

// Update form with saved profile
function updateFormWithProfile() {
    Object.keys(userProfile).forEach(key => {
        if (key !== 'username' && key !== 'videoGbUsage' && key !== 'spendPerGb') {
            const input = document.querySelector(`input[name="${key}"][value="${userProfile[key]}"]`);
            if (input) {
                input.checked = true;
            }
        }
    });
    
    const videoGbInput = document.getElementById('videoGbInput');
    const spendPerGbInput = document.getElementById('spendPerGbInput');
    
    if (videoGbInput) {
        let v = userProfile.videoGbUsage ?? '';
        if (typeof v === 'number') {
            if (v < 0) v = 0;
            if (v > 1000) v = 1000;
        }
        videoGbInput.value = v;
    }
    
    if (spendPerGbInput) {
        let s = userProfile.spendPerGb ?? '';
        if (typeof s === 'number') {
            if (s < 0) s = 0;
            if (s > 100000000) s = 100000000;
        }
        spendPerGbInput.value = s;
    }
}

// Update profile summary display
function updateProfileSummary() {
    if (!userProfile.planType) {
        DOM.profileSummary.classList.add('hidden');
        return;
    }
    
    DOM.profileSummary.classList.remove('hidden');
    
    const details = [
        { label: 'Tipe Paket', value: utils.getLabel('planType', userProfile.planType) },
        { label: 'Durasi Telepon', value: utils.getLabel('callDuration', userProfile.callDuration) },
        { label: 'SMS per Hari', value: utils.getLabel('smsFreq', userProfile.smsFreq) },
        { label: 'Top-up per Bulan', value: utils.getLabel('topupFreq', userProfile.topupFreq) },
        { label: 'Frekuensi Travel', value: utils.getLabel('travelScore', userProfile.travelScore) },
        { label: 'Video Streaming', value: `${userProfile.videoGbUsage ?? 0} GB/bulan` },
        { label: 'Budget per GB', value: `Rp${(userProfile.spendPerGb ?? 0).toLocaleString('id-ID')}` }
    ];
    
    DOM.profileDetails.innerHTML = details.map(detail => `
        <div class="profile-detail-item">
            <span class="text-text-secondary">${detail.label}:</span>
            <span class="font-medium">${detail.value}</span>
        </div>
    `).join('');
}

// Calculate recommendations
async function getRecommendationsFromAPI() {
    const token = localStorage.getItem('insighttel_token');
    if (!token) {
        utils.showNotification('Sesi Anda telah berakhir. Silakan login kembali.', 'error');
        authManager.logout();
        return [];
    }

    // --- ENCODING ---
    // Konversi nilai string dari form menjadi nilai numerik representatif yang diharapkan oleh model ML.
    // Alih-alih menggunakan 0, 1, 2, kita gunakan nilai tengah (median) dari setiap rentang.
    // Ini memastikan data yang dikirim dari frontend konsisten dengan data yang digunakan untuk melatih model.
    const encodingMap = {
        // Durasi Telepon: <30 (misal 15), 30-60 (45), >60 (misal 75)
        callDuration: { low: 15, medium: 45, high: 75 },
        // Frekuensi SMS: 0-5 (2.5), 6-20 (13), 21+ (misal 25)
        smsFreq: { low: 2.5, medium: 13, high: 25 },
        // Komplain: 0-2 (1), 3-5 (4), 6+ (misal )
        complaintCount: { low: 1, medium: 4, high: 20 },
        // Frekuensi Top-up: 1-2 (1.5), 3-5 (4), 6+ (misal 7)
        topupFreq: { low: 1.5, medium: 4, high: 7 },
        // Skor Travel (asumsi nilai ordinal sederhana jika tidak ada rentang numerik)
        // Jika model dilatih dengan 0,1,2 untuk ini, biarkan seperti ini. Jika tidak, sesuaikan.
        travelScore: { low: 0, medium: 1, high: 2 } 
    };

    // Helper untuk memastikan nilai adalah angka yang valid, default ke 0 jika tidak.
    const sanitizeNumber = (value) => {
        const num = parseFloat(value); // Gunakan parseFloat untuk menjaga nilai desimal
        return isNaN(num) ? 0 : num; // Kembalikan sebagai float, jangan dibulatkan
    };

    // Siapkan data untuk dikirim ke API prediksi
    const predictionPayload = {
        // SOLUSI: Sesuaikan nilai 'plan_type' agar cocok dengan yang diharapkan model ('prepaid'/'postpaid')
        plan_type: userProfile.planType === 'basic' 
            ? 'prepaid' : (userProfile.planType === 'premium' ? 'postpaid' : 'prepaid'),
        avg_call_duration: encodingMap.callDuration[userProfile.callDuration] ?? 0,
        sms_freq: encodingMap.smsFreq[userProfile.smsFreq] ?? 0,
        topup_freq: encodingMap.topupFreq[userProfile.topupFreq] ?? 0,
        travel_score: encodingMap.travelScore[userProfile.travelScore] ?? 0,
        complaint_count: encodingMap.complaintCount[userProfile.complaintCount] ?? 0,
        video_gb_usage: sanitizeNumber(userProfile.videoGbUsage),
        spend_per_gb: sanitizeNumber(userProfile.spendPerGb),
    };

    try {
        const response = await fetch('http://localhost:3000/predicts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(predictionPayload)
        });

        const data = await response.json();
        if (!response.ok) {
            // Menangkap pesan error dari FastAPI (biasanya di `data.detail`)
            throw new Error(data.detail || 'Gagal mendapatkan prediksi dari server.');
        }

        // --- LANGKAH DIAGNOSIS: Tampilkan respons mentah dari backend ---
        console.log("========================================");
        console.log("RESPONS MENTAH DARI BACKEND:", JSON.stringify(data, null, 2));
        console.log("========================================");

        // Backend sudah mengirimkan daftar produk yang lengkap berdasarkan offer.
        // Kita tidak perlu mencocokkan lagi, cukup gunakan data tersebut secara langsung.
        // Kunci dari backend adalah 'recommendations', bukan 'predictions'.
        const predictionsArray = Array.isArray(data) ? data : data.recommendations;

        if (!Array.isArray(predictionsArray)) {
            console.error("Respons dari backend tidak berisi array 'recommendations'.", data);
            return [];
        }

        // "Terjemahkan" data dari backend ke format yang dibutuhkan frontend.
        // Cocokkan produk dari backend (berdasarkan id_product) dengan data lengkap di recProducts.
        const fullRecommendedProducts = predictionsArray.map(pred => {
            // Temukan data produk lengkap di frontend berdasarkan 'id_product' dari backend.
            const productFromFrontend = recProducts.find(p => p.id === parseInt(pred.id_product, 10));

            if (productFromFrontend) {
                // **PERBAIKAN UTAMA:**
                // Gabungkan data produk dari frontend dengan skor dari backend.
                // 'pred.similarity' adalah skor dari ML. Kita simpan sebagai 'recommendationScore'.
                return {
                    ...productFromFrontend, // Salin semua data produk (nama, harga, deskripsi, dll.)
                    recommendationScore: pred.similarity // Tambahkan skor dari backend
                };
            }
            return null; // Kembalikan null jika produk tidak ditemukan
        }).filter(p => p); // Hapus semua hasil null dari array

        return fullRecommendedProducts;
    } catch (error) {
        console.error('Prediction API error:', error);
        utils.showNotification(error.message, 'error');
        return [];
    }
}

// Display recommendations
async function displayRecommendations() {
    if (!userProfile.planType) {
        DOM.recommendationsList.innerHTML = `
            <div class="card-base p-8 text-center">
                <i class="fas fa-robot text-4xl text-text-secondary mb-4"></i>
                <h3 class="text-xl font-bold mb-3">Belum Ada Profil</h3>
                <p class="text-text-secondary mb-4">Isi profil penggunaan Anda untuk mendapatkan rekomendasi personal</p>
                <button onclick="document.getElementById('recommendationForm').scrollIntoView({ behavior: 'smooth' })" 
                        class="btn-primary">
                    <i class="fas fa-user-edit mr-2"></i>Isi Profil Sekarang
                </button>
            </div>
        `;
        return;
    }
    
    const recommendedProducts = await getRecommendationsFromAPI();
    
    try {
        const recommendedIds = recommendedProducts.map(p => p.id);
        localStorage.setItem('insighttel_recommendedProducts', JSON.stringify(recommendedIds));
    } catch (e) {
        console.error('Gagal menyimpan recommendedProducts ke localStorage:', e);
    }

    if (recommendedProducts.length === 0) {
        DOM.recommendationsList.innerHTML = `
            <div class="card-base p-8 text-center">
                <i class="fas fa-search text-4xl text-text-secondary mb-4"></i>
                <h3 class="text-xl font-bold mb-3">Tidak Ada Rekomendasi</h3>
                <p class="text-text-secondary">Coba perbarui profil Anda untuk mendapatkan rekomendasi yang lebih baik</p>
            </div>
        `;
        return;
    }
    
    DOM.recommendationsList.innerHTML = recommendedProducts.map((product, index) => {
        const rankIcon = index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉';
        
        return `
            <div class="card-base p-6 ${index === 0 ? 'border-2 border-success' : ''}">
                <div class="flex items-start gap-4">
                    <div class="rank-icon text-3xl">${rankIcon}</div>
                    <div class="flex-1">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-xl font-bold">${utils.escapeHtml(product.name)}</h3>
                                <div class="text-primary-accent font-bold text-lg mt-1">${utils.escapeHtml(product.price)}</div>
                            </div>
                            <div class="score-badge bg-primary-accent/20 text-primary-accent px-3 py-1 rounded-full text-sm font-medium">
                                ${Math.round((product.recommendationScore || 0) * 100)}% Cocok
                            </div>
                        </div>
                        
                        <p class="text-text-secondary mb-4">${utils.escapeHtml(product.description)}</p>
                        
                        <div class="mb-4">
                            <div class="text-sm text-text-secondary mb-2">Fitur Utama:</div>
                            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                ${product.features.map(feature => `
                                    <li class="flex items-center text-sm">
                                        <i class="fas fa-check text-success mr-2 text-xs"></i>
                                        ${utils.escapeHtml(feature)}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                        
                        <div class="mb-4">
                            <div class="text-sm text-text-secondary mb-2">Alasan Direkomendasikan:</div>
                            <ul class="space-y-1">
                                ${(product.recommendationReasons || []).map(reason => `
                                    <li class="text-sm flex items-center">
                                        <i class="fas fa-bullseye text-primary-accent mr-2 text-xs"></i>
                                        ${utils.escapeHtml(reason)}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                        
                        <button class="btn-primary w-full view-product-btn" data-id="${product.id}">
                            <i class="fas fa-info-circle mr-2"></i> Lihat Detail Produk
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    document.querySelectorAll('.view-product-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id || e.target.closest('.view-product-btn').dataset.id);
            const product = recProducts.find(p => p.id === productId);
            if (product) {
                showProductDetail(product);
            }
        });
    });
}

// Show product detail modal
function showProductDetail(product) {
    const detailHtml = `
        <div class="p-5 max-w-md mx-auto">
            <div class="text-center mb-5">
                <i class="${product.icon} text-5xl text-primary-accent mb-4"></i>
                <h3 class="text-2xl font-semibold mb-3">${utils.escapeHtml(product.name)}</h3>
                <div class="text-primary-accent font-bold text-2xl mb-3">${utils.escapeHtml(product.price)}</div>
                <p class="text-text-secondary leading-relaxed">${utils.escapeHtml(product.description)}</p>
            </div>
            
            <div class="bg-white/5 p-4 rounded-custom mb-5">
                <h4 class="text-lg font-semibold mb-3 text-primary-accent flex items-center">
                    <i class="fas fa-star mr-2"></i>Fitur Utama
                </h4>
                <ul class="text-text-secondary pl-5">
                    ${product.features.map(feat => `<li class="mb-2">${utils.escapeHtml(feat)}</li>`).join('')}
                </ul>
            </div>
            
            <div class="bg-white/5 p-4 rounded-custom mb-5">
                <h4 class="text-lg font-semibold mb-3 text-primary-accent flex items-center">
                    <i class="fas fa-tags mr-2"></i>Kategori
                </h4>
                <p class="text-text-secondary">
                    ${product.category === 'general' ? 'General Offer' : 
                    product.category === 'streaming' ? 'Streaming Partner Pack' : 
                    product.category === 'booster' ? 'Data Booster' : 
                    product.category === 'roaming' ? 'Roaming Pass' : 
                    product.category === 'device' ? 'Device Upgrade Offer' : 
                    product.category === 'voice' ? 'Voice Bundle' : 
                    product.category === 'retention' ? 'Retention Offer' : 
                    'Other'}
                </p>
            </div>
            
            <div class="text-center">
                <button class="btn-primary w-full" onclick="alert('Fitur pembelian masih dalam pengembangan!')">
                    <i class="fas fa-shopping-cart mr-2"></i> Beli Sekarang
                </button>
            </div>
        </div>
    `;
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3000;
        padding: 20px;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: var(--card-bg);
        border-radius: 8px;
        max-width: 500px;
        width: 100%;
        max-height: 80vh;
        overflow-y: auto;
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        animation: modalSlideUp 0.3s ease-out;
    `;
    
    modalContent.innerHTML = detailHtml;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    closeBtn.style.cssText = `
        position: absolute;
        top: 15px;
        right: 15px;
        background: transparent;
        border: none;
        color: var(--text-secondary);
        font-size: 1.2rem;
        cursor: pointer;
        z-index: 1;
    `;
    
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modalContent.appendChild(closeBtn);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Form handling
function setupFormHandlers() {
    if (!DOM.recForm) return;

    const videoGbInput = document.getElementById('videoGbInput');
    const spendPerGbInput = document.getElementById('spendPerGbInput');

    // SUBMIT FORM
    DOM.recForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitButton = DOM.recForm.querySelector('button[type="submit"]');
        const originalButtonHTML = submitButton.innerHTML;
        
        // Baca & batasi nilai numeric
        let rawVideo = videoGbInput ? parseFloat(videoGbInput.value || '0') : 0;
        if (isNaN(rawVideo)) rawVideo = 0;
        if (rawVideo < 0) rawVideo = 0;
        if (rawVideo > 1000) rawVideo = 1000;

        let rawSpend = spendPerGbInput ? parseFloat(spendPerGbInput.value || '0') : 0;
        if (isNaN(rawSpend)) rawSpend = 0;
        if (rawSpend < 0) rawSpend = 0;
        if (rawSpend > 100000000) rawSpend = 100000000;

        // Sinkronkan kembali ke input (biar user lihat nilainya sudah dibatasi)
        if (videoGbInput) videoGbInput.value = rawVideo;
        if (spendPerGbInput) spendPerGbInput.value = rawSpend;

        const formData = {
            planType: document.querySelector('input[name="planType"]:checked')?.value,
            callDuration: document.querySelector('input[name="callDuration"]:checked')?.value,
            smsFreq: document.querySelector('input[name="smsFreq"]:checked')?.value,
            topupFreq: document.querySelector('input[name="topupFreq"]:checked')?.value,
            travelScore: document.querySelector('input[name="travelScore"]:checked')?.value,
            complaintCount: document.querySelector('input[name="complaintCount"]:checked')?.value,
            videoGbUsage: rawVideo,
            spendPerGb: rawSpend
        };

        const missingFields = Object.keys(formData).filter(
            key => !formData[key] && key !== 'videoGbUsage' && key !== 'spendPerGb'
        );

        if (missingFields.length > 0) {
            utils.showNotification('Harap isi semua opsi dasar (kecuali bagian data & budget boleh kosong).', 'error');
            return; // Pastikan eksekusi berhenti di sini
        }

        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-3"></i> Menganalisis...';

        try {
            Object.assign(userProfile, formData);
            localStorage.setItem('insighttel_profile', JSON.stringify(userProfile));

            updateProfileSummary();
            await displayRecommendations(); // Tunggu hingga rekomendasi selesai ditampilkan
            utils.showNotification('Profil berhasil diperbarui! Rekomendasi telah disesuaikan.', 'success');

            setTimeout(() => {
                showRecommendationsPopup();
            }, 1000);

            setTimeout(() => {
                document.getElementById('recommendationsSection').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 500);
        } finally {
            // Re-enable button and restore text
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonHTML;
        }
    });

    // TOMBOL REFRESH
    if (DOM.refreshRecBtn) {
        DOM.refreshRecBtn.addEventListener('click', () => {
            localStorage.removeItem('insighttel_profile');
            localStorage.removeItem('insighttel_recommendedProducts');

            resetUserProfile();

            if (DOM.recForm) {
                DOM.recForm.reset();
            }

            updateFormWithProfile();
            updateProfileSummary();
            displayRecommendations();

            if (DOM.recommendationForm) {
                DOM.recommendationForm.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            utils.showNotification(
                'Profil dan rekomendasi telah direset. Silakan isi ulang profil Anda.',
                'info'
            );
        });
    }
}

// === POPUP REKOMENDASI GLOBAL ===
async function showRecommendationsPopup() {
    const recommendedProducts = await getRecommendationsFromAPI();

    if (!recommendedProducts || recommendedProducts.length === 0) {
        utils.showNotification('Belum ada rekomendasi yang cocok. Coba perbarui profil Anda.', 'info');
        return;
    }

    const popupHtml = `
        <div class="recommendations-popup">
            <h3 style="
                font-size: 1.1rem;
                font-weight: 600;
                margin-bottom: 0.75rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            ">
                <i class="fas fa-star" style="color: var(--primary-accent);"></i>
                <span>Rekomendasi untuk Anda</span>
            </h3>

            <p style="
                color: var(--text-secondary);
                font-size: 0.9rem;
                margin-bottom: 1.25rem;
            ">
                Berdasarkan profil penggunaan Anda, berikut adalah 3 paket yang paling sesuai:
            </p>

            <div class="popup-products">
                ${recommendedProducts.map((product, index) => `
                    <div class="popup-product ${index === 0 ? 'featured' : ''}" style="
                        display: flex;
                        gap: 12px;
                        padding: 12px 0;
                        border-top: 1px solid rgba(148, 163, 184, 0.25);
                    ">
                        <div style="
                            font-size: 1.5rem;
                            margin-top: 4px;
                        ">
                            ${index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                        </div>
                        <div style="flex: 1;">
                            <div style="display:flex; align-items:center; gap:6px; margin-bottom:4px;">
                                <i class="${product.icon}" style="color: var(--primary-accent);"></i>
                                <div style="font-weight: 600; font-size: 0.95rem;">
                                    ${product.name}
                                </div>
                            </div>
                            <div style="font-weight: 600; color: var(--primary-accent); font-size: 0.9rem; margin-bottom:4px;">
                                ${product.price}
                            </div>
                            <p style="
                                color: var(--text-secondary);
                                font-size: 0.85rem;
                                margin: 0;
                            ">
                                ${product.description}
                            </p>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="popup-actions" style="
                display: flex;
                justify-content: flex-end;
                margin-top: 1.5rem;
            ">
                <button type="button" class="popup-close">
                    Tutup
                </button>
            </div>
        </div>
    `;

    const popupOverlay = document.createElement('div');
    popupOverlay.className = 'popup-overlay';
    popupOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 4000;
        animation: fadeIn 0.3s ease-out;
    `;

    const popupContainer = document.createElement('div');
    popupContainer.style.cssText = `
        background: var(--card-bg);
        border-radius: 12px;
        padding: 24px;
        max-width: 640px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        border: 1px solid rgba(0, 201, 255, 0.3);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        animation: modalSlideUp 0.3s ease-out;
        font-size: 0.9rem;
    `;

    popupContainer.innerHTML = popupHtml;
    popupOverlay.appendChild(popupContainer);
    document.body.appendChild(popupOverlay);

    const closeBtnEl = popupContainer.querySelector('.popup-close');
    if (closeBtnEl) {
        closeBtnEl.style.cssText = `
            padding: 8px 18px;
            border-radius: 9999px;
            border: none;
            background: var(--primary-accent);
            color: white;
            font-weight: 500;
            cursor: pointer;
            font-size: 0.85rem;
        `;

        closeBtnEl.addEventListener('click', () => {
            document.body.removeChild(popupOverlay);
        });
    }

    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            document.body.removeChild(popupOverlay);
        }
    });
}

// Initialize the page
function init() {
    if (!authManager.init()) return;
    
    loadSavedProfile();
    setupFormHandlers();
    displayRecommendations();
    
    console.log('Recommendations page initialized! 🚀');
}

// Start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
