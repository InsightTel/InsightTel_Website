// pages/recommendations/recommendations.js - Recommendations Page JavaScript

// Data produk (sama dengan di home page)
const products = [
    {
        id: 1,
        name: "Internet Sakti 30GB / 30 Days",
        category: "internet",
        price: "Rp100.000",
        features: ["30GB High-Speed Data", "Berlaku 30 Hari", "Akses semua aplikasi"],
        description: "Paket internet utama dengan kuota besar untuk kebutuhan sehari-hari selama sebulan penuh.",
        icon: "fas fa-wifi",
        recommendedFor: ["streaming", "work", "mixed"]
    },
    {
        id: 2,
        name: "Internet Sakti 30GB / 28 Days",
        category: "internet",
        price: "Rp70.000",
        features: ["30GB High-Speed Data", "Berlaku 28 Hari", "Ekonomis untuk penggunaan bulanan"],
        description: "Versi ekonomis dari paket utama dengan masa aktif sedikit lebih pendek.",
        icon: "fas fa-mobile-alt",
        recommendedFor: ["mixed", "social"]
    },
    {
        id: 3,
        name: "Internet 5GB + Social Media Unlimited / 30 Days",
        category: "internet",
        price: "Rp45.000",
        features: ["5GB General Data", "Unlimited Social Media", "Berlaku 30 Hari"],
        description: "Paket hemat dengan kuota general 5GB plus unlimited akses media sosial.",
        icon: "fas fa-hashtag",
        recommendedFor: ["social", "mixed"]
    },
    {
        id: 4,
        name: "Internet Gaming 100GB / 30 Days",
        category: "internet",
        price: "Rp150.000",
        features: ["100GB Gaming Data", "Low Latency Priority", "Free Game Credits"],
        description: "Paket khusus gaming dengan kuota besar dan latency rendah untuk pengalaman gaming optimal.",
        icon: "fas fa-gamepad",
        recommendedFor: ["gaming", "streaming"]
    },
    {
        id: 5,
        name: "Roaming Asia 5GB / 7 Days",
        category: "roaming",
        price: "Rp150.000",
        features: ["5GB Data Roaming Asia", "Berlaku 7 Hari", "30 Menit Internasional"],
        description: "Paket roaming untuk perjalanan ke negara-negara Asia dengan kuota data 5GB.",
        icon: "fas fa-globe-asia",
        recommendedFor: ["mixed"]
    },
    {
        id: 6,
        name: "Roaming Europe 5GB / 30 Days",
        category: "roaming",
        price: "Rp400.000",
        features: ["5GB Data Roaming Eropa", "Berlaku 30 Hari", "50 Menit Internasional"],
        description: "Paket roaming premium untuk perjalanan ke Eropa dengan masa aktif hingga 30 hari.",
        icon: "fas fa-globe-europe",
        recommendedFor: ["work", "mixed"]
    },
    {
        id: 7,
        name: "Roaming Malaysia 20GB / 7 Days",
        category: "roaming",
        price: "Rp120.000",
        features: ["20GB Data Roaming Malaysia", "Berlaku 7 Hari", "Unlimited WhatsApp"],
        description: "Paket roaming khusus Malaysia dengan kuota besar untuk perjalanan singkat.",
        icon: "fas fa-flag",
        recommendedFor: ["mixed"]
    },
    {
        id: 8,
        name: "Roaming Tiongkok 5GB / 30 Days",
        category: "roaming",
        price: "Rp200.000",
        features: ["5GB Data Roaming Tiongkok", "Berlaku 30 Hari", "Akses ke aplikasi lokal"],
        description: "Paket roaming khusus Tiongkok dengan dukungan akses ke aplikasi lokal.",
        icon: "fas fa-globe",
        recommendedFor: ["work", "mixed"]
    },
    {
        id: 9,
        name: "MAXstream Gala 20GB / 30 Days",
        category: "general",
        price: "Rp170.000",
        features: ["20GB MAXstream Data", "Akses ke platform streaming", "Berlaku 30 Hari"],
        description: "Paket khusus streaming dengan akses premium ke berbagai platform hiburan.",
        icon: "fas fa-film",
        recommendedFor: ["streaming", "mixed"]
    },
    {
        id: 10,
        name: "Student Special Bundle 5GB / 30 Days",
        category: "general",
        price: "Rp55.000",
        features: ["5GB Data untuk Pelajar", "Akses aplikasi edukasi", "Diskon khusus pelajar"],
        description: "Paket ekonomis khusus pelajar dengan akses ke aplikasi pembelajaran.",
        icon: "fas fa-graduation-cap",
        recommendedFor: ["social", "mixed"]
    },
    {
        id: 11,
        name: "Weekend Data Boost 10GB / 2 Days",
        category: "general",
        price: "Rp30.000",
        features: ["10GB Weekend Data", "Berlaku Sabtu-Minggu", "Kecepatan maksimum"],
        description: "Paket tambahan kuota khusus akhir pekan untuk kebutuhan ekstra.",
        icon: "fas fa-calendar",
        recommendedFor: ["streaming", "gaming"]
    },
    {
        id: 12,
        name: "Night Streaming Package 15GB / 7 Days",
        category: "general",
        price: "Rp25.000",
        features: ["15GB Data Malam", "Berlaku 23:00-05:00", "Khusus streaming"],
        description: "Paket ekonomis untuk streaming di malam hari dengan kuota khusus.",
        icon: "fas fa-moon",
        recommendedFor: ["streaming"]
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
                    ${product.category === 'internet' ? 'Internet Package' : 
                        product.category === 'roaming' ? 'Travel/Roaming Package' : 
                        'General Offer'}
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
    // Sync sliders dengan input number
    const videoGbSlider = document.getElementById('videoGbUsage');
    const videoGbInput = document.getElementById('videoGbInput');
    const spendPerGbSlider = document.getElementById('spendPerGb');
    const spendPerGbInput = document.getElementById('spendPerGbInput');
    
    if (videoGbSlider && videoGbInput) {
        videoGbSlider.addEventListener('input', () => {
            videoGbInput.value = videoGbSlider.value;
        });
        
        videoGbInput.addEventListener('input', () => {
            let value = parseInt(videoGbInput.value);
            if (value < 0) value = 0;
            if (value > 100) value = 100;
            videoGbSlider.value = value;
            videoGbInput.value = value;
        });
    }
    
    if (spendPerGbSlider && spendPerGbInput) {
        spendPerGbSlider.addEventListener('input', () => {
            spendPerGbInput.value = spendPerGbSlider.value;
        });
        
        spendPerGbInput.addEventListener('input', () => {
            let value = parseInt(spendPerGbInput.value);
            if (value < 5000) value = 5000;
            if (value > 50000) value = 50000;
            spendPerGbSlider.value = value;
            spendPerGbInput.value = value;
        });
    }
    
    // Form submission
    DOM.recForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Collect form data
        const formData = {
            planType: document.querySelector('input[name="planType"]:checked')?.value,
            callDuration: document.querySelector('input[name="callDuration"]:checked')?.value,
            smsFreq: document.querySelector('input[name="smsFreq"]:checked')?.value,
            topupFreq: document.querySelector('input[name="topupFreq"]:checked')?.value,
            travelScore: document.querySelector('input[name="travelScore"]:checked')?.value,
            complaintCount: document.querySelector('input[name="complaintCount"]:checked')?.value,
            videoGbUsage: parseInt(document.getElementById('videoGbUsage').value),
            spendPerGb: parseInt(document.getElementById('spendPerGb').value)
        };
        
        // Validate
        const missingFields = Object.keys(formData).filter(key => !formData[key] && key !== 'videoGbUsage' && key !== 'spendPerGb');
        if (missingFields.length > 0) {
            utils.showNotification('Harap isi semua opsi sebelum melanjutkan', 'error');
            return;
        }
        
        // Update user profile
        Object.assign(userProfile, formData);
        
        // Save to localStorage
        localStorage.setItem('insighttel_profile', JSON.stringify(userProfile));
        
        // Update UI
        updateProfileSummary();
        displayRecommendations();
        
        // Show success message
        utils.showNotification('Profil berhasil diperbarui! Rekomendasi telah disesuaikan.', 'success');
        
        // Scroll to recommendations
        setTimeout(() => {
            document.getElementById('recommendationsSection').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }, 500);
    });
    
    // Refresh button
    DOM.refreshRecBtn.addEventListener('click', () => {
        displayRecommendations();
        utils.showNotification('Rekomendasi diperbarui!', 'info');
    });
    
    // Update profile button
    DOM.updateProfileBtn.addEventListener('click', () => {
        DOM.recommendationForm.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
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