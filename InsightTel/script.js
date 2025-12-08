// script.js - JavaScript untuk InsightTel Home Page

// ============== DATA PRODUK ==============
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

// Data Features
const features = [
    {
        icon: "🔍",
        title: "Prediksi Churn Otomatis",
        description: "Identifikasi pelanggan yang berisiko beralih ke kompetitor dengan akurasi tinggi menggunakan machine learning."
    },
    {
        icon: "🎯",
        title: "Rekomendasi Paket Personal",
        description: "Berikan pengalaman personalisasi dengan rekomendasi paket yang sesuai dengan kebutuhan setiap pelanggan."
    },
    {
        icon: "📊",
        title: "Integrasi Visual Analytics",
        description: "Dashboard interaktif dengan visualisasi data yang mudah dipahami untuk pengambilan keputusan yang lebih baik."
    }
];

// ============== STATE APLIKASI ==============
const appState = {
    currentFilter: 'all',
    currentSearch: ''
};

// ============== DOM ELEMENTS ==============
const DOM = {
    // Header Elements
    getRecBtn: document.getElementById('getRecBtn'),
    profileBtn: document.getElementById('profileBtn'),
    profileDropdown: document.getElementById('profileDropdown'),
    profileText: document.querySelector('.profile-text'),
    mobileToggle: document.getElementById('mobileToggle'),
    mobileNav: document.getElementById('mobileNav'),
    
    // Product Elements
    productsGrid: document.getElementById('productsGrid'),
    featuresGrid: document.getElementById('featuresGrid'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    searchBox: document.getElementById('searchBox'),
    
    // Button Elements
    viewProductsBtn: document.getElementById('viewProductsBtn'),
    startNowBtn: document.getElementById('startNowBtn'),
    learnMoreBtn: document.querySelector('a[href="about.html"]'),
    
    // Navigation
    navLinks: document.querySelectorAll('a[href^="#"]')
};

// ============== UTILITY FUNCTIONS ==============
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
    }
};

// ============== AUTHENTICATION MANAGEMENT ==============
const authManager = {
    init: () => {
        // Check if user is logged in
        const isLoggedIn = localStorage.getItem('insighttel_loggedIn') === 'true';
        const username = localStorage.getItem('insighttel_user');
        
        if (isLoggedIn && username) {
            // Update UI for logged in user
            if (DOM.profileText) {
                DOM.profileText.textContent = username;
            }
            
            // Show Get Recommendation button
            if (DOM.getRecBtn) {
                DOM.getRecBtn.classList.remove('hidden');
            }
            
            // Update profile dropdown for logged in user
            authManager.updateProfileDropdown(username);
        } else {
            // Show login/register dropdown
            if (DOM.profileDropdown) {
                DOM.profileDropdown.innerHTML = `
                    <div id="loggedOutSection" class="p-5">
                        <div class="dropdown-header text-center mb-5">
                            <h4 class="text-xl font-semibold mb-2">Welcome to InsightTel</h4>
                            <p class="text-text-secondary text-sm">Access personalized recommendations</p>
                        </div>
                        <div class="space-y-3">
                            <a href="login.html" class="btn-primary w-full flex items-center justify-center">
                                <i class="fas fa-sign-in-alt mr-2"></i> Login
                            </a>
                            <a href="register.html" class="btn-secondary w-full flex items-center justify-center">
                                <i class="fas fa-user-plus mr-2"></i> Register
                            </a>
                        </div>
                        <div class="login-footer mt-4 text-center text-text-secondary text-xs">
                            <span>Demo: No backend integration required</span>
                        </div>
                    </div>
                `;
            }
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
                    <button id="logoutBtn" class="dropdown-item text-error w-full text-left">
                        <i class="fas fa-sign-out-alt mr-3"></i>
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
    },
    
    logout: () => {
        localStorage.removeItem('insighttel_loggedIn');
        localStorage.removeItem('insighttel_user');
        localStorage.removeItem('insighttel_profile');
        
        // Update UI
        if (DOM.profileText) {
            DOM.profileText.textContent = 'Login';
        }
        
        if (DOM.getRecBtn) {
            DOM.getRecBtn.classList.add('hidden');
        }
        
        // Update dropdown to login/register
        if (DOM.profileDropdown) {
            DOM.profileDropdown.innerHTML = `
                <div id="loggedOutSection" class="p-5">
                    <div class="dropdown-header text-center mb-5">
                        <h4 class="text-xl font-semibold mb-2">Welcome to InsightTel</h4>
                        <p class="text-text-secondary text-sm">Access personalized recommendations</p>
                    </div>
                    <div class="space-y-3">
                        <a href="login.html" class="btn-primary w-full flex items-center justify-center">
                            <i class="fas fa-sign-in-alt mr-2"></i> Login
                        </a>
                        <a href="register.html" class="btn-secondary w-full flex items-center justify-center">
                            <i class="fas fa-user-plus mr-2"></i> Register
                        </a>
                    </div>
                    <div class="login-footer mt-4 text-center text-text-secondary text-xs">
                        <span>Demo: No backend integration required</span>
                    </div>
                </div>
            `;
            DOM.profileDropdown.classList.remove('show');
        }
        
        utils.showNotification('Anda telah logout', 'info');
        
        // Redirect to home page if not already there
        if (!window.location.href.includes('index.html')) {
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        }
    },
    

    handleStartNowButton: () => {
        // Cari button "Mulai Sekarang" di CTA section
        const startNowBtn = document.getElementById('startNowBtn');
        if (!startNowBtn) return;
        
        startNowBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const isLoggedIn = localStorage.getItem('insighttel_loggedIn') === 'true';
            
            if (isLoggedIn) {
                // Jika sudah login, redirect ke recommendations
                window.location.href = 'recommendations.html';
            } else {
                // Jika belum login, tampilkan notifikasi dan redirect ke login
                utils.showNotification('Silakan login terlebih dahulu untuk mendapatkan rekomendasi personal', 'info');
                
                // Redirect ke login setelah 1.5 detik
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 1500);
            }
        });
    },
    
    handleLearnMoreButton: () => {
        // This button should always go to about.html regardless of login status
        // No special handling needed
    }
};

// ============== PRODUCT RENDERING ==============
const productRenderer = {
    render: () => {
        if (!DOM.productsGrid) return;
        
        DOM.productsGrid.innerHTML = '';
        
        // Filter produk berdasarkan kategori dan pencarian
        const filteredProducts = products.filter(product => {
            const matchesFilter = appState.currentFilter === 'all' || product.category === appState.currentFilter;
            const matchesSearch = !appState.currentSearch || 
                product.name.toLowerCase().includes(appState.currentSearch) ||
                product.description.toLowerCase().includes(appState.currentSearch) ||
                product.features.some(feat => feat.toLowerCase().includes(appState.currentSearch)) ||
                product.price.toLowerCase().includes(appState.currentSearch);
            
            return matchesFilter && matchesSearch;
        });
        
        // Jika tidak ada produk
        if (filteredProducts.length === 0) {
            DOM.productsGrid.innerHTML = `
                <div class="no-products col-span-full text-center py-16 px-5">
                    <i class="fas fa-search text-5xl text-text-secondary mb-5"></i>
                    <h3 class="text-xl font-semibold text-text-primary mb-3">Tidak ada produk ditemukan</h3>
                    <p class="text-text-secondary">Coba gunakan filter atau kata kunci pencarian yang berbeda</p>
                </div>
            `;
            return;
        }
        
        // Cek apakah user sudah login dan ada rekomendasi yang disimpan
        const isLoggedIn = localStorage.getItem('insighttel_loggedIn') === 'true';
        const savedProfile = localStorage.getItem('insighttel_profile');
        let recommendedProducts = [];
        
        if (isLoggedIn && savedProfile) {
            try {
                const profile = JSON.parse(savedProfile);
                if (profile.planType) {
                    // Hitung rekomendasi seperti di halaman rekomendasi
                    recommendedProducts = calculateRecommendations(profile);
                }
            } catch (e) {
                console.error('Error parsing profile:', e);
            }
        }
        
        // Render setiap produk
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            // Tentukan kategori badge
            let categoryBadge = '';
            if (product.category === 'streaming') {
                categoryBadge = '<div class="product-badge badge-personalized">Streaming Partner Pack</div>';
            } else if (product.category === 'booster') {
                categoryBadge = '<div class="product-badge badge-personalized">Data Booster</div>';
            } else if (product.category === 'roaming') {
                categoryBadge = '<div class="product-badge badge-personalized">Roaming Pass</div>';
            } else if (product.category === 'general') {
                categoryBadge = '<div class="product-badge badge-personalized">General Offer</div>';
            } else if (product.category === 'device') {
                categoryBadge = '<div class="product-badge badge-personalized">Device Upgrade Offer</div>';
            }
            
            // Cek apakah produk ini direkomendasikan
            const isRecommended = recommendedProducts.some(rec => rec.id === product.id);
            const recommendedBadge = isRecommended ? 
                '<div class="product-badge badge-recommended" style="top: 45px; right: 15px;">Recommended</div>' : '';
            
            // NOTE: tambahkan wrapper .product-body dan flex agar tombol sejajar
            productCard.innerHTML = `
                ${categoryBadge}
                ${recommendedBadge}
                <div class="product-image">
                    <i class="${product.icon}"></i>
                </div>
                <div class="product-body p-5">
                    <h3 class="text-xl font-semibold mb-3">${utils.escapeHtml(product.name)}</h3>
                    <div class="text-primary-accent font-bold text-lg mb-2">${utils.escapeHtml(product.price)}</div>
                    <p class="text-text-secondary mb-4 text-sm">${utils.escapeHtml(product.description)}</p>
                    <ul class="product-features text-text-secondary mb-5">
                        ${product.features.map(feature => `
                            <li class="mb-2 flex items-center">
                                <i class="fas fa-check text-primary-accent mr-2 text-sm"></i>
                                ${utils.escapeHtml(feature)}
                            </li>
                        `).join('')}
                    </ul>
                    <button class="view-detail-btn btn-primary w-full" data-id="${product.id}">
                        <i class="fas fa-info-circle mr-2"></i> Lihat Detail
                    </button>
                </div>
            `;
            
            DOM.productsGrid.appendChild(productCard);
        });
        
        // Tambahkan event listener untuk tombol detail
        document.querySelectorAll('.view-detail-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.target.dataset.id || e.target.closest('.view-detail-btn').dataset.id);
                const product = products.find(p => p.id === productId);
                if (product) {
                    productRenderer.showProductDetail(product);
                }
            });
        });
    },
    
    showProductDetail: (product) => {
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
        
        // Tampilkan modal detail produk
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
        
        // Tambahkan tombol close
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
        
        // Close modal ketika klik di luar
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }
};

// Fungsi setelah productRenderer
const recommendationCalculator = {
    calculateForHome: (profile) => {
        const scoredProducts = products.map(product => {
            let score = 0;
            
            // Scoring logic (sama seperti di recommendations.js tapi disederhanakan)
            if (profile.planType === 'basic') {
                if (product.category === 'general' || product.price.includes('25') || product.price.includes('30') || product.price.includes('45') || product.price.includes('55')) {
                    score += 25;
                }
            } else if (profile.planType === 'premium') {
                if (product.category === 'internet' && !product.name.includes('Gaming')) {
                    score += 25;
                }
            } else if (profile.planType === 'unlimited') {
                if (product.name.includes('Unlimited') || product.features.some(f => f.includes('Unlimited'))) {
                    score += 25;
                }
            }
            
            if (profile.callDuration === 'high') {
                if (product.features.some(f => f.includes('Menit') || f.includes('Panggilan'))) {
                    score += 15;
                }
            }
            
            if (profile.travelScore === 'high' || profile.travelScore === 'medium') {
                if (product.category === 'roaming') {
                    score += 20;
                }
            }
            
            const videoUsage = profile.videoGbUsage || 20;
            if (videoUsage > 30) {
                if (parseInt(product.name.match(/\d+GB/)?.[0] || 0) >= 20) {
                    score += 15;
                }
            }
            
            return {
                product: product,
                score: score
            };
        });
        
        // Return top 3 recommended products
        return scoredProducts
            .sort((a, b) => b.score - a.score)
            .slice(0, 3)
            .map(item => item.product);
    }
};

// Fungsi helper untuk digunakan di productRenderer
function calculateRecommendations(profile) {
    return recommendationCalculator.calculateForHome(profile);
}

// ============== FEATURES RENDERING ==============
const featureRenderer = {
    render: () => {
        if (!DOM.featuresGrid) return;
        
        DOM.featuresGrid.innerHTML = '';
        
        features.forEach(feature => {
            const featureCard = document.createElement('div');
            featureCard.className = 'card-base';
            
            featureCard.innerHTML = `
                <div class="feature-icon text-4xl mb-5 gradient-text">${feature.icon}</div>
                <h3 class="text-xl font-semibold mb-4">${utils.escapeHtml(feature.title)}</h3>
                <p class="text-text-secondary">${utils.escapeHtml(feature.description)}</p>
            `;
            
            DOM.featuresGrid.appendChild(featureCard);
        });
    }
};

// ============== FILTER & SEARCH ==============
const filterManager = {
    init: () => {
        // Filter buttons
        if (DOM.filterBtns) {
            DOM.filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Remove active class from all buttons
                    DOM.filterBtns.forEach(b => b.classList.remove('active'));
                    // Add active class to clicked button
                    btn.classList.add('active');
                    // Update state and render
                    appState.currentFilter = btn.dataset.filter;
                    productRenderer.render();
                });
            });
        }
        
        // Search box
        if (DOM.searchBox) {
            DOM.searchBox.addEventListener('input', (e) => {
                appState.currentSearch = e.target.value.toLowerCase();
                productRenderer.render();
            });
        }
    }
};

// ============== MOBILE NAVIGATION ==============
const mobileNavManager = {
    init: () => {
        if (!DOM.mobileToggle || !DOM.mobileNav) return;
        
        DOM.mobileToggle.addEventListener('click', () => {
            DOM.mobileNav.classList.toggle('hidden');
            
            // Ubah icon
            const icon = DOM.mobileToggle.querySelector('i');
            if (DOM.mobileNav.classList.contains('hidden')) {
                icon.className = 'fas fa-bars';
            } else {
                icon.className = 'fas fa-times';
            }
        });
        
        // Close mobile menu ketika klik link
        if (DOM.mobileNav) {
            document.querySelectorAll('#mobileNav a').forEach(link => {
                link.addEventListener('click', () => {
                    DOM.mobileNav.classList.add('hidden');
                    if (DOM.mobileToggle) {
                        DOM.mobileToggle.querySelector('i').className = 'fas fa-bars';
                    }
                });
            });
        }
    }
};

// ============== SMOOTH SCROLLING ==============
const scrollManager = {
    init: () => {
        // Smooth scroll untuk anchor links
        if (DOM.navLinks) {
            DOM.navLinks.forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#' || !targetId.startsWith('#')) return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        // Close mobile menu jika terbuka
                        if (DOM.mobileNav && !DOM.mobileNav.classList.contains('hidden')) {
                            DOM.mobileNav.classList.add('hidden');
                            if (DOM.mobileToggle) {
                                DOM.mobileToggle.querySelector('i').className = 'fas fa-bars';
                            }
                        }
                        
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }
        
        // View Products button
        if (DOM.viewProductsBtn) {
            DOM.viewProductsBtn.addEventListener('click', () => {
                const productsSection = document.getElementById('products');
                if (productsSection) {
                    // Close mobile menu jika terbuka
                    if (DOM.mobileNav && !DOM.mobileNav.classList.contains('hidden')) {
                        DOM.mobileNav.classList.add('hidden');
                        if (DOM.mobileToggle) {
                            DOM.mobileToggle.querySelector('i').className = 'fas fa-bars';
                        }
                    }
                    
                    window.scrollTo({
                        top: productsSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        }
    }
};

// ============== INITIALIZATION ==============
const init = () => {
    console.log('InsightTel initialized! 🚀');
    
    // Initialize all modules
    authManager.init();
    authManager.handleStartNowButton();
    authManager.handleLearnMoreButton();
    featureRenderer.render();
    productRenderer.render();
    filterManager.init();
    mobileNavManager.init();
    scrollManager.init();
};

// Start the application
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
