// script.js - JavaScript untuk InsightTel dengan fitur Logout di Profile

// ============== DATA PRODUK ==============
const products = [
    {
        id: 1,
        name: "Internet Unlimited 100GB",
        category: "internet",
        features: ["100GB High-Speed Data", "Unlimited WhatsApp & Telegram", "Free Access to Streaming Apps"],
        description: "Paket internet cepat dengan kuota besar untuk kebutuhan streaming dan gaming.",
        icon: "fas fa-wifi",
        recommendedFor: ["streaming", "work", "mixed"]
    },
    {
        id: 2,
        name: "Combo Package Pro",
        category: "combo",
        features: ["50GB Data", "500 Menit Panggilan", "500 SMS"],
        description: "Paket lengkap dengan data, panggilan, dan SMS untuk kebutuhan bisnis.",
        icon: "fas fa-mobile-alt",
        recommendedFor: ["calling", "mixed", "work"]
    },
    {
        id: 3,
        name: "Roaming Asia 7 Days",
        category: "roaming",
        features: ["5GB Data Roaming", "30 Menit Internasional", "Berlaku 7 Hari"],
        description: "Paket roaming untuk perjalanan bisnis atau liburan di negara Asia.",
        icon: "fas fa-globe",
        recommendedFor: ["mixed"]
    },
    {
        id: 4,
        name: "Social Media Pack",
        category: "social",
        features: ["Unlimited Social Media", "15GB General Data", "Free Instagram & TikTok"],
        description: "Paket khusus untuk pengguna aktif media sosial.",
        icon: "fas fa-hashtag",
        recommendedFor: ["social", "mixed"]
    },
    {
        id: 5,
        name: "Gaming Ultra",
        category: "internet",
        features: ["Low Latency Gaming", "120GB Data", "Free Game Credits"],
        description: "Paket gaming dengan latency rendah untuk pengalaman terbaik.",
        icon: "fas fa-gamepad",
        recommendedFor: ["gaming", "streaming"]
    },
    {
        id: 6,
        name: "Business Traveler",
        category: "roaming",
        features: ["Global Roaming", "Unlimited Email", "Conference Call Support"],
        description: "Paket roaming global untuk pebisnis yang sering traveling.",
        icon: "fas fa-briefcase",
        recommendedFor: ["work", "mixed"]
    },
    {
        id: 7,
        name: "Family Bundle",
        category: "combo",
        features: ["200GB Shared Data", "1000 Menit Panggilan", "4 SIM Cards"],
        description: "Paket keluarga dengan data dan panggilan berbagi.",
        icon: "fas fa-users",
        recommendedFor: ["mixed", "calling"]
    },
    {
        id: 8,
        name: "Student Package",
        category: "social",
        features: ["Unlimited Edu Apps", "50GB Data", "Discounted Price"],
        description: "Paket khusus pelajar dengan akses aplikasi edukasi.",
        icon: "fas fa-graduation-cap",
        recommendedFor: ["mixed", "social"]
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
    isLoggedIn: false,
    currentUser: null,
    currentFilter: 'all',
    currentSearch: '',
    recommendationResults: []
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
    
    // Profile Dropdown Sections
    loggedInSection: document.getElementById('loggedInSection'),
    loggedOutSection: document.getElementById('loggedOutSection'),
    usernameDisplay: document.getElementById('usernameDisplay'),
    logoutBtn: document.getElementById('logoutBtn'),
    
    // Login Elements
    loginForm: document.getElementById('loginForm'),
    loginUsername: document.getElementById('loginUsername'),
    loginPassword: document.getElementById('loginPassword'),
    
    // Product Elements
    productsGrid: document.getElementById('productsGrid'),
    featuresGrid: document.getElementById('featuresGrid'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    searchBox: document.getElementById('searchBox'),
    
    // Modal Elements
    recModal: document.getElementById('recModal'),
    recForm: document.getElementById('recForm'),
    usageType: document.getElementById('usageType'),
    budgetRange: document.getElementById('budgetRange'),
    recResult: document.getElementById('recResult'),
    modalClose: document.getElementById('modalClose'),
    
    // Button Elements
    viewProductsBtn: document.getElementById('viewProductsBtn'),
    learnMoreBtn: document.getElementById('learnMoreBtn'),
    ctaStartBtn: document.getElementById('ctaStartBtn'),
    
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
        // Buat elemen notifikasi
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close"><i class="fas fa-times"></i></button>
        `;
        
        // Style notifikasi
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
        
        // Style konten notifikasi
        notification.querySelector('.notification-content').style.cssText = `
            display: flex;
            align-items: center;
            gap: 10px;
            margin-right: 15px;
        `;
        
        // Style tombol close
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.style.cssText = `
            background: transparent;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 0.9rem;
        `;
        
        // Animasi masuk
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Tambahkan ke body
        document.body.appendChild(notification);
        
        // Fungsi untuk menghapus notifikasi
        const removeNotification = () => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        };
        
        // Event listener untuk tombol close
        closeBtn.addEventListener('click', removeNotification);
        
        // Auto remove setelah 5 detik
        setTimeout(removeNotification, 5000);
    }
};

// ============== AUTH SYSTEM ==============
const authManager = {
    init: () => {
        // Toggle profile dropdown
        DOM.profileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            DOM.profileDropdown.classList.toggle('show');
        });
        
        // Close dropdown ketika klik di luar
        document.addEventListener('click', (e) => {
            if (!DOM.profileBtn.contains(e.target) && !DOM.profileDropdown.contains(e.target)) {
                DOM.profileDropdown.classList.remove('show');
            }
        });
        
        // Login form submission
        DOM.loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            authManager.login();
        });
        
        // Logout button
        DOM.logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            authManager.logout();
        });
        
        // Check jika sudah login sebelumnya (untuk demo)
        const savedUser = localStorage.getItem('insighttel_user');
        if (savedUser) {
            authManager.restoreSession(savedUser);
        }
    },
    
    login: () => {
        const username = DOM.loginUsername.value.trim();
        const password = DOM.loginPassword.value;
        
        if (!username || !password) {
            utils.showNotification('Harap isi username dan password', 'error');
            return;
        }
        
        // Demo login - selalu berhasil
        appState.isLoggedIn = true;
        appState.currentUser = username;
        
        // Simpan ke localStorage untuk session persistence
        localStorage.setItem('insighttel_user', username);
        
        // Update UI
        authManager.updateUI();
        
        // Reset form
        DOM.loginForm.reset();
        
        // Close dropdown
        DOM.profileDropdown.classList.remove('show');
        
        // Show success notification
        utils.showNotification('Login berhasil! Selamat datang ' + username, 'success');
        
        // Scroll ke products section
        setTimeout(() => {
            document.querySelector('#products').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }, 500);
    },
    
    logout: () => {
        // Reset state
        appState.isLoggedIn = false;
        appState.currentUser = null;
        appState.recommendationResults = [];
        
        // Hapus dari localStorage
        localStorage.removeItem('insighttel_user');
        
        // Update UI
        authManager.updateUI();
        
        // Close dropdown
        DOM.profileDropdown.classList.remove('show');
        
        // Remove highlights dari produk
        document.querySelectorAll('.product-card').forEach(card => {
            card.classList.remove('highlighted');
        });
        
        // Show notification
        utils.showNotification('Anda telah logout', 'info');
        
        // Re-render products untuk menghilangkan badge recommended
        productRenderer.render();
    },
    
    restoreSession: (username) => {
        appState.isLoggedIn = true;
        appState.currentUser = username;
        authManager.updateUI();
    },
    
    updateUI: () => {
        if (appState.isLoggedIn) {
            // Update profile button
            DOM.profileText.textContent = appState.currentUser;
            
            // Update dropdown sections
            DOM.loggedInSection.classList.remove('hidden');
            DOM.loggedOutSection.classList.add('hidden');
            DOM.usernameDisplay.textContent = appState.currentUser;
            
            // Show recommendation button
            DOM.getRecBtn.classList.remove('hidden');
        } else {
            // Update profile button
            DOM.profileText.textContent = 'Login';
            
            // Update dropdown sections
            DOM.loggedInSection.classList.add('hidden');
            DOM.loggedOutSection.classList.remove('hidden');
            
            // Hide recommendation button
            DOM.getRecBtn.classList.add('hidden');
        }
    }
};

// ============== PRODUCT RENDERING ==============
const productRenderer = {
    render: () => {
        DOM.productsGrid.innerHTML = '';
        
        // Filter produk berdasarkan kategori dan pencarian
        const filteredProducts = products.filter(product => {
            const matchesFilter = appState.currentFilter === 'all' || product.category === appState.currentFilter;
            const matchesSearch = !appState.currentSearch || 
                product.name.toLowerCase().includes(appState.currentSearch) ||
                product.description.toLowerCase().includes(appState.currentSearch) ||
                product.features.some(feat => feat.toLowerCase().includes(appState.currentSearch));
            
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
            
            // Cek apakah produk ini direkomendasikan
            const isRecommended = appState.recommendationResults.some(rec => rec.id === product.id);
            
            // Tentukan badge
            let badge = '';
            if (isRecommended) {
                badge = '<div class="product-badge badge-recommended">Recommended</div>';
            } else if (product.category === 'internet') {
                badge = '<div class="product-badge badge-personalized">Popular</div>';
            }
            
            productCard.innerHTML = `
                ${badge}
                <div class="product-image">
                    <i class="${product.icon}"></i>
                </div>
                <div class="p-5">
                    <h3 class="text-xl font-semibold mb-3">${utils.escapeHtml(product.name)}</h3>
                    <p class="text-text-secondary mb-4">${utils.escapeHtml(product.description)}</p>
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
            
            // Tambahkan class highlighted jika direkomendasikan
            if (isRecommended) {
                productCard.classList.add('highlighted');
            }
            
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
                
                <div class="text-center">
                    <button class="btn-primary w-full" onclick="utils.showNotification('Fitur pembelian masih dalam pengembangan!', 'info')">
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
        
        // Search box
        DOM.searchBox.addEventListener('input', (e) => {
            appState.currentSearch = e.target.value.toLowerCase();
            productRenderer.render();
        });
    }
};

// ============== RECOMMENDATION SYSTEM ==============
const recommendationManager = {
    init: () => {
        // Open recommendation modal
        DOM.getRecBtn.addEventListener('click', () => {
            if (!appState.isLoggedIn) {
                utils.showNotification('Harap login terlebih dahulu untuk mendapatkan rekomendasi', 'error');
                return;
            }
            recommendationManager.openModal();
        });
        
        // Close modal
        DOM.modalClose.addEventListener('click', () => {
            recommendationManager.closeModal();
        });
        
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay')) {
                recommendationManager.closeModal();
            }
        });
        
        // Recommendation form submission
        DOM.recForm.addEventListener('submit', (e) => {
            e.preventDefault();
            recommendationManager.generateRecommendation();
        });
    },
    
    openModal: () => {
        DOM.recModal.classList.remove('hidden');
        DOM.recModal.classList.add('flex');
        DOM.recForm.reset();
        DOM.recResult.classList.add('hidden');
        DOM.recResult.innerHTML = '';
    },
    
    closeModal: () => {
        DOM.recModal.classList.add('hidden');
        DOM.recModal.classList.remove('flex');
    },
    
    generateRecommendation: () => {
        const usageType = DOM.usageType.value;
        const budgetRange = DOM.budgetRange.value;
        
        if (!usageType || !budgetRange) {
            utils.showNotification('Harap pilih semua opsi', 'error');
            return;
        }
        
        // Reset previous recommendations
        appState.recommendationResults = [];
        
        // Logic untuk rekomendasi berdasarkan usage type
        let recommendedProducts = [];
        
        switch(usageType) {
            case 'streaming':
                recommendedProducts = products.filter(p => 
                    p.recommendedFor.includes('streaming') || 
                    p.name.toLowerCase().includes('unlimited') ||
                    p.category === 'internet'
                ).slice(0, 3);
                break;
                
            case 'social':
                recommendedProducts = products.filter(p => 
                    p.recommendedFor.includes('social') || 
                    p.category === 'social' ||
                    p.name.toLowerCase().includes('social')
                ).slice(0, 3);
                break;
                
            case 'gaming':
                recommendedProducts = products.filter(p => 
                    p.recommendedFor.includes('gaming') ||
                    p.name.toLowerCase().includes('gaming') ||
                    p.features.some(f => f.toLowerCase().includes('latency'))
                ).slice(0, 3);
                break;
                
            case 'calling':
                recommendedProducts = products.filter(p => 
                    p.recommendedFor.includes('calling') ||
                    p.category === 'combo' ||
                    p.features.some(f => f.toLowerCase().includes('menit'))
                ).slice(0, 3);
                break;
                
            case 'work':
                recommendedProducts = products.filter(p => 
                    p.recommendedFor.includes('work') ||
                    p.name.toLowerCase().includes('business') ||
                    p.name.toLowerCase().includes('travel')
                ).slice(0, 3);
                break;
                
            case 'mixed':
            default:
                // Rekomendasi paket all-rounder
                recommendedProducts = products.filter(p => 
                    p.recommendedFor.includes('mixed') ||
                    p.category === 'combo'
                ).slice(0, 3);
                break;
        }
        
        // Filter berdasarkan budget (untuk demo, kita acak saja)
        if (budgetRange === 'low') {
            recommendedProducts = recommendedProducts.slice(0, 2);
        } else if (budgetRange === 'medium') {
            recommendedProducts = recommendedProducts.slice(0, 3);
        }
        // high budget tetap semua
        
        // Simpan hasil rekomendasi ke state
        appState.recommendationResults = recommendedProducts;
        
        // Tampilkan hasil
        recommendationManager.showResults(recommendedProducts, usageType, budgetRange);
        
        // Highlight produk yang direkomendasikan
        setTimeout(() => {
            productRenderer.render();
        }, 500);
    },
    
    showResults: (recommendedProducts, usageType, budgetRange) => {
        const usageTypeNames = {
            streaming: 'Streaming Video',
            social: 'Media Sosial',
            gaming: 'Gaming Online',
            calling: 'Telepon & SMS',
            work: 'Remote Work',
            mixed: 'Beragam Aktivitas'
        };
        
        const budgetNames = {
            low: 'Budget Rendah',
            medium: 'Budget Menengah',
            high: 'Budget Tinggi'
        };
        
        let resultHTML = `
            <div class="animate-fade-in">
                <h4 class="text-lg font-semibold mb-3 text-primary-accent flex items-center">
                    <i class="fas fa-robot"></i>
                    <span class="ml-2">Rekomendasi untuk Anda</span>
                </h4>
                
                <p class="text-text-secondary mb-5">
                    Berdasarkan preferensi <strong>${usageTypeNames[usageType]}</strong> dengan <strong>${budgetNames[budgetRange]}</strong>, 
                    berikut rekomendasi paket untuk Anda:
                </p>
                
                <div class="rec-product-list">
        `;
        
        recommendedProducts.forEach((product, index) => {
            let reason = '';
            if (usageType === 'streaming') {
                reason = 'Kuota besar untuk streaming tanpa buffering';
            } else if (usageType === 'social') {
                reason = 'Akses unlimited ke media sosial';
            } else if (usageType === 'gaming') {
                reason = 'Latency rendah untuk gaming smooth';
            } else if (usageType === 'calling') {
                reason = 'Kuota panggilan dan SMS yang besar';
            } else if (usageType === 'work') {
                reason = 'Cocok untuk video conference dan email';
            } else {
                reason = 'Paket serbaguna untuk semua kebutuhan';
            }
            
            resultHTML += `
                <div class="rec-product-item">
                    <i class="fas fa-check-circle text-success"></i>
                    <div>
                        <div class="rec-product-name font-medium">${utils.escapeHtml(product.name)}</div>
                        <div class="rec-product-reason text-text-secondary text-sm">${reason}</div>
                    </div>
                </div>
            `;
        });
        
        resultHTML += `
                </div>
                
                <div class="mt-5 p-4 bg-primary-accent/10 rounded-custom border border-primary-accent/20">
                    <p class="text-text-secondary text-sm m-0">
                        <i class="fas fa-lightbulb text-primary-accent mr-2"></i>
                        Produk yang direkomendasikan telah di-highlight di halaman Products.
                    </p>
                </div>
            </div>
        `;
        
        DOM.recResult.innerHTML = resultHTML;
        DOM.recResult.classList.remove('hidden');
        
        // Scroll ke hasil
        setTimeout(() => {
            DOM.recResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
};

// ============== MOBILE NAVIGATION ==============
const mobileNavManager = {
    init: () => {
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
        document.querySelectorAll('#mobileNav a').forEach(link => {
            link.addEventListener('click', () => {
                DOM.mobileNav.classList.add('hidden');
                DOM.mobileToggle.querySelector('i').className = 'fas fa-bars';
            });
        });
    }
};

// ============== CTA BUTTONS ==============
const ctaManager = {
    init: () => {
        // View Products Button
        DOM.viewProductsBtn.addEventListener('click', () => {
            document.querySelector('#products').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
        
        // Learn More Button
        DOM.learnMoreBtn.addEventListener('click', () => {
            const message = `InsightTel adalah platform demo untuk rekomendasi produk telekomunikasi menggunakan teknologi AI.

✨ Fitur Utama:
• Sistem rekomendasi berdasarkan preferensi pengguna
• Filter dan pencarian produk yang mudah
• Login sebagai customer untuk pengalaman personal
• UI/UX modern dengan tema futuristik

🔧 Teknologi:
• Frontend: HTML5, CSS3, JavaScript
• Design: Custom CSS dengan tema dark mode
• Interactivity: JavaScript ES6+

📱 Ini adalah demo frontend saja - tidak ada backend integration.`;
            alert(message);
        });
        
        // CTA Start Button
        DOM.ctaStartBtn.addEventListener('click', () => {
            if (appState.isLoggedIn) {
                recommendationManager.openModal();
            } else {
                utils.showNotification('Silakan login terlebih dahulu untuk memulai', 'info');
                // Buka dropdown login
                DOM.profileDropdown.classList.add('show');
                // Focus ke input username
                setTimeout(() => {
                    DOM.loginUsername.focus();
                }, 300);
            }
        });
    }
};

// ============== SMOOTH SCROLLING ==============
const scrollManager = {
    init: () => {
        // Smooth scroll untuk anchor links
        DOM.navLinks.forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Close mobile menu jika terbuka
                    if (!DOM.mobileNav.classList.contains('hidden')) {
                        DOM.mobileNav.classList.add('hidden');
                        DOM.mobileToggle.querySelector('i').className = 'fas fa-bars';
                    }
                    
                    // Close profile dropdown jika terbuka
                    DOM.profileDropdown.classList.remove('show');
                    
                    // Smooth scroll ke target
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
};

// ============== INITIALIZE APP ==============
const app = {
    init: () => {
        // Initialize semua modul
        filterManager.init();
        authManager.init();
        recommendationManager.init();
        mobileNavManager.init();
        ctaManager.init();
        scrollManager.init();
        
        // Render features dan products
        featureRenderer.render();
        productRenderer.render();
        
        // Update UI berdasarkan login state
        authManager.updateUI();
        
        console.log('InsightTel app initialized! 🚀');
    }
};

// Start the app ketika DOM siap
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', app.init);
} else {
    app.init();
}