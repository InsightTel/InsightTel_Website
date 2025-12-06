// script.js - JavaScript untuk InsightTel Home Page

// ============== DATA PRODUK ==============
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
    startNowBtn: document.querySelector('a[href="register.html"]'),
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
                    <a href="recommendations.html" class="dropdown-item">
                        <i class="fas fa-robot"></i>
                        <span>My Recommendations</span>
                    </a>
                    <a href="about.html" class="dropdown-item">
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
        
        // Render setiap produk
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            // Tentukan kategori badge
            let categoryBadge = '';
            if (product.category === 'internet') {
                categoryBadge = '<div class="product-badge badge-personalized">Internet Package</div>';
            } else if (product.category === 'roaming') {
                categoryBadge = '<div class="product-badge badge-personalized">Travel/Roaming</div>';
            } else if (product.category === 'general') {
                categoryBadge = '<div class="product-badge badge-personalized">General Offer</div>';
            }
            
            productCard.innerHTML = `
                ${categoryBadge}
                <div class="product-image">
                    <i class="${product.icon}"></i>
                </div>
                <div class="p-5">
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