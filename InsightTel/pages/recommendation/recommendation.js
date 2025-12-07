// pages/recommendations/recommendations.js - Recommendations Page JavaScript

// Data produk (sama dengan di home page)
const products = [
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
        // Check if user is logged in
        const isLoggedIn = localStorage.getItem('insighttel_loggedIn') === 'true';
        const username = localStorage.getItem('insighttel_user');
        
        if (!isLoggedIn || !username) {
            // Redirect to login if not authenticated
            window.location.href = '../login.html';
            return false;
        }
        
        userProfile.username = username;
        if (DOM.profileText) {
            DOM.profileText.textContent = username;
        }
        
        // Update profile dropdown
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
        
        // Add logout event listener
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', authManager.logout);
        }
        
        // Toggle profile dropdown
        if (DOM.profileBtn) {
            DOM.profileBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                DOM.profileDropdown.classList.toggle('show');
            });
            
            // Close dropdown ketika klik di luar
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

// Update form with saved profile
function updateFormWithProfile() {
    // Set radio buttons
    Object.keys(userProfile).forEach(key => {
        if (key !== 'username' && key !== 'videoGbUsage' && key !== 'spendPerGb') {
            const input = document.querySelector(`input[name="${key}"][value="${userProfile[key]}"]`);
            if (input) {
                input.checked = true;
            }
        }
    });
    
    // Set sliders
    const videoGbSlider = document.getElementById('videoGbUsage');
    const videoGbInput = document.getElementById('videoGbInput');
    const spendPerGbSlider = document.getElementById('spendPerGb');
    const spendPerGbInput = document.getElementById('spendPerGbInput');
    
    if (videoGbSlider && videoGbInput) {
        videoGbSlider.value = userProfile.videoGbUsage || 20;
        videoGbInput.value = userProfile.videoGbUsage || 20;
    }
    
    if (spendPerGbSlider && spendPerGbInput) {
        spendPerGbSlider.value = userProfile.spendPerGb || 15000;
        spendPerGbInput.value = userProfile.spendPerGb || 15000;
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
        { label: 'Video Streaming', value: `${userProfile.videoGbUsage || 20} GB/bulan` },
        { label: 'Budget per GB', value: `Rp${(userProfile.spendPerGb || 15000).toLocaleString('id-ID')}` }
    ];
    
    DOM.profileDetails.innerHTML = details.map(detail => `
        <div class="profile-detail-item">
            <span class="text-text-secondary">${detail.label}:</span>
            <span class="font-medium">${detail.value}</span>
        </div>
    `).join('');
}

// Calculate recommendations
function calculateRecommendations() {
    const scoredProducts = products.map(product => {
        let score = 0;
        let reasons = [];
        
        // Scoring logic
        if (userProfile.planType === 'basic') {
            if (product.category === 'general' || product.price.includes('25') || product.price.includes('30') || product.price.includes('45') || product.price.includes('55')) {
                score += 25;
                reasons.push("Cocok untuk pengguna paket basic");
            }
        } else if (userProfile.planType === 'premium') {
            if (product.category === 'internet' && !product.name.includes('Gaming')) {
                score += 25;
                reasons.push("Cocok untuk pengguna paket premium");
            }
        } else if (userProfile.planType === 'unlimited') {
            if (product.name.includes('Unlimited') || product.features.some(f => f.includes('Unlimited'))) {
                score += 25;
                reasons.push("Cocok untuk pengguna paket unlimited");
            }
        }
        
        if (userProfile.callDuration === 'high') {
            if (product.features.some(f => f.includes('Menit') || f.includes('Panggilan'))) {
                score += 15;
                reasons.push("Menyediakan kuota panggilan besar");
            }
        }
        
        if (userProfile.smsFreq === 'high') {
            if (product.features.some(f => f.includes('SMS'))) {
                score += 10;
                reasons.push("Menyediakan kuota SMS");
            }
        }
        
        if (userProfile.topupFreq === 'low') {
            if (product.features.some(f => f.includes('30 Hari') || f.includes('30 Days'))) {
                score += 10;
                reasons.push("Paket bulanan untuk minimalisir top-up");
            }
        } else if (userProfile.topupFreq === 'high') {
            if (product.features.some(f => f.includes('7 Hari') || f.includes('7 Days') || f.includes('2 Days'))) {
                score += 10;
                reasons.push("Paket fleksibel untuk sering top-up");
            }
        }
        
        if (userProfile.travelScore === 'high' || userProfile.travelScore === 'medium') {
            if (product.category === 'roaming') {
                score += 20;
                reasons.push("Paket roaming untuk traveler");
            }
        }
        
        const videoUsage = userProfile.videoGbUsage;
        if (videoUsage > 30) {
            if (parseInt(product.name.match(/\d+GB/)?.[0] || 0) >= 20) {
                score += 15;
                reasons.push("Kuota besar untuk streaming video");
            }
        } else if (videoUsage > 10) {
            if (parseInt(product.name.match(/\d+GB/)?.[0] || 0) >= 10) {
                score += 10;
                reasons.push("Kuota cukup untuk streaming");
            }
        }
        
        const spendPerGb = userProfile.spendPerGb;
        const productPrice = parseInt(product.price.replace(/[^0-9]/g, ''));
        const productDataMatch = product.name.match(/\d+GB/);
        const productData = productDataMatch ? parseInt(productDataMatch[0]) : 10;
        
        const calculatedCostPerGb = productPrice / productData;
        
        if (spendPerGb >= calculatedCostPerGb * 0.8) {
            score += 20;
            reasons.push(`Hemat (Rp${Math.round(calculatedCostPerGb).toLocaleString('id-ID')}/GB)`);
        }
        
        return {
            product: product,
            score: score,
            reasons: reasons
        };
    });
    
    // Sort by score and return top 3
    return scoredProducts
        .sort((a, b) => b.score - a.score)
        .slice(0, 3)
        .map(item => ({
            ...item.product,
            recommendationScore: item.score,
            recommendationReasons: item.reasons
        }));
}

// Display recommendations
function displayRecommendations() {
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
    
    const recommendedProducts = calculateRecommendations();
    
    // Save recommended product IDs to localStorage
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
                                Score: ${product.recommendationScore || 0}
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
    
    // Add event listeners to view product buttons
    document.querySelectorAll('.view-product-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id || e.target.closest('.view-product-btn').dataset.id);
            const product = products.find(p => p.id === productId);
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
    // Ambil elemen
    const videoGbSlider = document.getElementById('videoGbUsage');
    const videoGbInput = document.getElementById('videoGbInput');
    const spendPerGbSlider = document.getElementById('spendPerGb');
    const spendPerGbInput = document.getElementById('spendPerGbInput');

    // ====== 1. SYNC VIDEO GB (slider <-> input) ======
    if (videoGbSlider && videoGbInput) {
        // slider → input
        const syncVideoFromSlider = () => {
            videoGbInput.value = videoGbSlider.value;
        };

        // input → slider
        const syncVideoFromInput = () => {
            let value = parseInt(videoGbInput.value, 10) || 0;
            if (value < 0) value = 0;
            if (value > 100) value = 100;
            videoGbSlider.value = value;
            videoGbInput.value = value;
        };

        // initial sync
        syncVideoFromSlider();

        // geser slider -> update input
        videoGbSlider.addEventListener('input', syncVideoFromSlider);
        videoGbSlider.addEventListener('change', syncVideoFromSlider);

        // ketik di input -> update slider
        videoGbInput.addEventListener('input', syncVideoFromInput);
        videoGbInput.addEventListener('change', syncVideoFromInput);

        // tekan Enter di input -> update slider juga
        videoGbInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                syncVideoFromInput();
            }
        });
    }

    // ====== 2. SYNC BUDGET PER GB (slider <-> input) ======
    if (spendPerGbSlider && spendPerGbInput) {
        const MIN_BUDGET = 5000;
        const MAX_BUDGET = 450000;

        // slider → input
        const syncSpendFromSlider = () => {
            spendPerGbInput.value = spendPerGbSlider.value;
        };

        // input → slider
        const syncSpendFromInput = () => {
            let value = parseInt(spendPerGbInput.value, 10) || MIN_BUDGET;
            if (value < MIN_BUDGET) value = MIN_BUDGET;
            if (value > MAX_BUDGET) value = MAX_BUDGET;
            spendPerGbSlider.value = value;
            spendPerGbInput.value = value;
        };

        // initial sync
        syncSpendFromSlider();

        // geser slider -> update input
        spendPerGbSlider.addEventListener('input', syncSpendFromSlider);
        spendPerGbSlider.addEventListener('change', syncSpendFromSlider);

        // ketik di input -> update slider
        spendPerGbInput.addEventListener('input', syncSpendFromInput);
        spendPerGbInput.addEventListener('change', syncSpendFromInput);

        // tekan Enter di input -> update slider juga
        spendPerGbInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                syncSpendFromInput();
            }
        });
    }

    // ====== 3. SUBMIT FORM ======
    DOM.recForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            planType: document.querySelector('input[name="planType"]:checked')?.value,
            callDuration: document.querySelector('input[name="callDuration"]:checked')?.value,
            smsFreq: document.querySelector('input[name="smsFreq"]:checked')?.value,
            topupFreq: document.querySelector('input[name="topupFreq"]:checked')?.value,
            travelScore: document.querySelector('input[name="travelScore"]:checked')?.value,
            complaintCount: document.querySelector('input[name="complaintCount"]:checked')?.value,
            videoGbUsage: videoGbSlider ? parseInt(videoGbSlider.value, 10) : 20,
            spendPerGb: spendPerGbSlider ? parseInt(spendPerGbSlider.value, 10) : 15000
        };

        const missingFields = Object.keys(formData).filter(
            key => !formData[key] && key !== 'videoGbUsage' && key !== 'spendPerGb'
        );

        if (missingFields.length > 0) {
            utils.showNotification('Harap isi semua opsi sebelum melanjutkan', 'error');
            return;
        }

        Object.assign(userProfile, formData);
        localStorage.setItem('insighttel_profile', JSON.stringify(userProfile));

        updateProfileSummary();
        displayRecommendations();
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
    });

    // ====== 4. TOMBOL REFRESH ======
    if (DOM.refreshRecBtn) {
        DOM.refreshRecBtn.addEventListener('click', () => {
            displayRecommendations();
            utils.showNotification('Rekomendasi diperbarui!', 'info');
        });
    }
}

// === POPUP REKOMENDASI GLOBAL ===
function showRecommendationsPopup() {
    const recommendedProducts = calculateRecommendations();

    if (!recommendedProducts || recommendedProducts.length === 0) {
        utils.showNotification('Belum ada rekomendasi yang cocok. Coba perbarui profil Anda.', 'info');
        return;
    }

    const popupHtml = `
        <div class="recommendations-popup">
            <h3><i class="fas fa-star"></i> Rekomendasi untuk Anda</h3>
            <p>Berdasarkan profil penggunaan Anda, berikut adalah 3 paket yang paling sesuai:</p>
            <div class="popup-products">
                ${recommendedProducts.map((product, index) => `
                    <div class="popup-product ${index === 0 ? 'featured' : ''}">
                        <div class="popup-product-icon">
                            <i class="${product.icon}"></i>
                        </div>
                        <div class="popup-product-info">
                            <h4>${product.name}</h4>
                            <div class="popup-price">${product.price}</div>
                            <p>${product.description}</p>
                        </div>
                        <div class="popup-badge">
                            ${index === 0 ? '🥇 Terbaik' : index === 1 ? '🥈' : '🥉'}
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="popup-actions">
                <button class="popup-close">Tutup</button>
                <button class="popup-view-all" onclick="document.getElementById('recommendationsSection').scrollIntoView({behavior:'smooth'})">
                    Lihat Semua
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
        padding: 30px;
        max-width: 600px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        border: 1px solid rgba(0, 201, 255, 0.3);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        animation: modalSlideUp 0.3s ease-out;
    `;

    popupContainer.innerHTML = popupHtml;
    popupOverlay.appendChild(popupContainer);
    document.body.appendChild(popupOverlay);

    // Tombol tutup
    popupContainer.querySelector('.popup-close').addEventListener('click', () => {
        document.body.removeChild(popupOverlay);
    });

    // Klik area luar → tutup
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            document.body.removeChild(popupOverlay);
        }
    });
}

// Initialize the page
function init() {
    // Check authentication first
    if (!authManager.init()) return;
    
    // Load saved profile
    loadSavedProfile();
    
    // Setup form handlers
    setupFormHandlers();
    
    // Display initial recommendations
    displayRecommendations();
    
    console.log('Recommendations page initialized! 🚀');
}

// Start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}