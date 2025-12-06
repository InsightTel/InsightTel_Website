// script.js - JavaScript untuk InsightTel dengan fitur Logout di Profile

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
            
            // Cek apakah produk ini direkomendasikan
            const isRecommended = appState.recommendationResults.some(rec => rec.id === product.id);
            
            // Tambahkan badge recommended jika ada
            let recommendedBadge = '';
            if (isRecommended) {
                recommendedBadge = `<div class="product-badge badge-recommended" style="top: 45px;">
                    Recommended ${product.recommendationScore ? `(Score: ${product.recommendationScore})` : ''}
                </div>`;
            }
            
            productCard.innerHTML = `
                ${categoryBadge}
                ${recommendedBadge}
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
        
        // Enhanced radio button interaction
        setTimeout(() => {
            // Plan option interaction
            document.querySelectorAll('.plan-option').forEach(option => {
                option.addEventListener('click', function() {
                    const radio = this.querySelector('input[type="radio"]');
                    if (radio) {
                        radio.checked = true;
                        
                        // Remove active class from all plan options
                        document.querySelectorAll('.plan-option').forEach(opt => {
                            opt.classList.remove('active');
                        });
                        
                        // Add active class to clicked option
                        this.classList.add('active');
                    }
                });
            });
            
            // Travel option interaction
            document.querySelectorAll('.travel-option').forEach(option => {
                option.addEventListener('click', function() {
                    const radio = this.querySelector('input[type="radio"]');
                    if (radio) {
                        radio.checked = true;
                        
                        // Remove active class from all travel options
                        document.querySelectorAll('.travel-option').forEach(opt => {
                            opt.classList.remove('active');
                        });
                        
                        // Add active class to clicked option
                        this.classList.add('active');
                    }
                });
            });
            
            // Option item interaction
            document.querySelectorAll('.option-item').forEach(item => {
                item.addEventListener('click', function() {
                    const radio = this.querySelector('input[type="radio"]');
                    if (radio) {
                        radio.checked = true;
                        
                        // Remove active class from siblings
                        const groupName = radio.name;
                        document.querySelectorAll(`input[name="${groupName}"]`).forEach(input => {
                            if (input.parentElement) {
                                input.parentElement.classList.remove('active');
                            }
                        });
                        
                        // Add active class to parent
                        this.classList.add('active');
                    }
                });
            });
        }, 100);
        
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
        
        // Reset all visual states
        document.querySelectorAll('.plan-option, .travel-option, .option-item').forEach(el => {
            el.classList.remove('active');
        });
        
        // Reset sliders to default values
        const videoGbSlider = document.getElementById('videoGbUsage');
        const videoGbInput = document.getElementById('videoGbInput');
        const spendPerGbSlider = document.getElementById('spendPerGb');
        const spendPerGbInput = document.getElementById('spendPerGbInput');
        
        if (videoGbSlider && videoGbInput) {
            videoGbSlider.value = 20;
            videoGbInput.value = 20;
        }
        
        if (spendPerGbSlider && spendPerGbInput) {
            spendPerGbSlider.value = 15000;
            spendPerGbInput.value = 15000;
        }
        
        // Scroll to top of modal
        setTimeout(() => {
            const modalBody = DOM.recModal.querySelector('.modal-body');
            if (modalBody) {
                modalBody.scrollTop = 0;
            }
        }, 10);
    },
    
    closeModal: () => {
        DOM.recModal.classList.add('hidden');
        DOM.recModal.classList.remove('flex');
    },
    
    generateRecommendation: () => {
        // Collect all form data
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
        
        // Validate all fields are filled
        const missingFields = Object.keys(formData).filter(key => !formData[key] && key !== 'videoGbUsage' && key !== 'spendPerGb');
        
        if (missingFields.length > 0) {
            utils.showNotification('Harap isi semua opsi sebelum melanjutkan', 'error');
            return;
        }
        
        // Reset previous recommendations
        appState.recommendationResults = [];
        
        // Generate recommendations based on user preferences
        let recommendedProducts = recommendationManager.calculateRecommendations(formData);
        
        // Simpan hasil rekomendasi ke state
        appState.recommendationResults = recommendedProducts;
        
        // Tampilkan hasil
        recommendationManager.showResults(recommendedProducts, formData);
        
        // Highlight produk yang direkomendasikan
        setTimeout(() => {
            productRenderer.render();
        }, 500);
    },
    
    calculateRecommendations: (formData) => {
        // Scoring system untuk setiap produk
        const scoredProducts = products.map(product => {
            let score = 0;
            let reasons = [];
            
            // 1. Berdasarkan plan_type (cocokkan dengan kategori produk)
            if (formData.planType === 'basic') {
                if (product.category === 'general' || product.price.includes('25') || product.price.includes('30') || product.price.includes('45') || product.price.includes('55')) {
                    score += 25;
                    reasons.push("Cocok untuk pengguna paket basic");
                }
            } else if (formData.planType === 'premium') {
                if (product.category === 'internet' && !product.name.includes('Gaming')) {
                    score += 25;
                    reasons.push("Cocok untuk pengguna paket premium");
                }
            } else if (formData.planType === 'unlimited') {
                if (product.name.includes('Unlimited') || product.features.some(f => f.includes('Unlimited'))) {
                    score += 25;
                    reasons.push("Cocok untuk pengguna paket unlimited");
                }
            }
            
            // 2. Berdasarkan avg_call_duration
            if (formData.callDuration === 'high') {
                if (product.features.some(f => f.includes('Menit') || f.includes('Panggilan'))) {
                    score += 15;
                    reasons.push("Menyediakan kuota panggilan besar");
                }
            }
            
            // 3. Berdasarkan sms_freq
            if (formData.smsFreq === 'high') {
                if (product.features.some(f => f.includes('SMS'))) {
                    score += 10;
                    reasons.push("Menyediakan kuota SMS");
                }
            }
            
            // 4. Berdasarkan topup_freq
            if (formData.topupFreq === 'low') {
                // Pengguna yang jarang top-up -> paket bulanan
                if (product.features.some(f => f.includes('30 Hari') || f.includes('30 Days'))) {
                    score += 10;
                    reasons.push("Paket bulanan untuk minimalisir top-up");
                }
            } else if (formData.topupFreq === 'high') {
                // Pengguna yang sering top-up -> paket mingguan/harian
                if (product.features.some(f => f.includes('7 Hari') || f.includes('7 Days') || f.includes('2 Days'))) {
                    score += 10;
                    reasons.push("Paket fleksibel untuk sering top-up");
                }
            }
            
            // 5. Berdasarkan travel_score
            if (formData.travelScore === 'high' || formData.travelScore === 'medium') {
                if (product.category === 'roaming') {
                    score += 20;
                    reasons.push("Paket roaming untuk traveler");
                }
            }
            
            // 6. Berdasarkan video_gb_usage
            const videoUsage = formData.videoGbUsage;
            if (videoUsage > 30) {
                // High video usage -> butuh kuota besar
                if (parseInt(product.name.match(/\d+GB/)?.[0] || 0) >= 20) {
                    score += 15;
                    reasons.push("Kuota besar untuk streaming video");
                }
            } else if (videoUsage > 10) {
                // Medium video usage
                if (parseInt(product.name.match(/\d+GB/)?.[0] || 0) >= 10) {
                    score += 10;
                    reasons.push("Kuota cukup untuk streaming");
                }
            }
            
            // 7. Berdasarkan spend_per_gb
            const spendPerGb = formData.spendPerGb;
            const productPrice = parseInt(product.price.replace(/[^0-9]/g, ''));
            const productDataMatch = product.name.match(/\d+GB/);
            const productData = productDataMatch ? parseInt(productDataMatch[0]) : 10; // default 10GB
            
            const calculatedCostPerGb = productPrice / productData;
            
            // Jika budget user lebih tinggi dari cost per GB, produk cocok
            if (spendPerGb >= calculatedCostPerGb * 0.8) { // 80% dari cost per GB
                score += 20;
                reasons.push(`Hemat (Rp${Math.round(calculatedCostPerGb).toLocaleString('id-ID')}/GB)`);
            }
            
            return {
                product: product,
                score: score,
                reasons: reasons
            };
        });
        
        // Sort by score descending
        scoredProducts.sort((a, b) => b.score - a.score);
        
        // Return top 3 products
        return scoredProducts.slice(0, 3).map(item => ({
            ...item.product,
            recommendationScore: item.score,
            recommendationReasons: item.reasons
        }));
    },
    
    showResults: (recommendedProducts, formData) => {
        let resultHTML = `
            <div class="animate-fade-in">
                <h4 class="text-lg font-semibold mb-4 text-primary-accent flex items-center">
                    <i class="fas fa-robot"></i>
                    <span class="ml-2">Rekomendasi Berdasarkan Profil Anda</span>
                </h4>
                
                <div class="user-profile-summary mb-6 p-4 bg-white/5 rounded-custom">
                    <h5 class="text-md font-semibold mb-3 text-text-primary">Profil Pengguna:</h5>
                    <div class="grid grid-cols-2 gap-2 text-sm">
                        <div><span class="text-text-secondary">Tipe Paket:</span> ${this.getLabel('planType', formData.planType)}</div>
                        <div><span class="text-text-secondary">Durasi Telepon:</span> ${this.getLabel('callDuration', formData.callDuration)}</div>
                        <div><span class="text-text-secondary">SMS/hari:</span> ${this.getLabel('smsFreq', formData.smsFreq)}</div>
                        <div><span class="text-text-secondary">Top-up/bulan:</span> ${this.getLabel('topupFreq', formData.topupFreq)}</div>
                        <div><span class="text-text-secondary">Travel:</span> ${this.getLabel('travelScore', formData.travelScore)}</div>
                        <div><span class="text-text-secondary">Video/bulan:</span> ${formData.videoGbUsage} GB</div>
                        <div><span class="text-text-secondary">Budget/GB:</span> Rp${formData.spendPerGb.toLocaleString('id-ID')}</div>
                    </div>
                </div>
                
                <div class="rec-product-list space-y-4">
        `;
        
        recommendedProducts.forEach((product, index) => {
            const rankIcon = index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉';
            
            resultHTML += `
                <div class="rec-product-item ${index === 0 ? 'highlighted' : ''}">
                    <div class="flex items-start gap-4 w-full">
                        <div class="rank-icon text-2xl">${rankIcon}</div>
                        <div class="flex-1">
                            <div class="flex justify-between items-start">
                                <div>
                                    <div class="rec-product-name font-semibold text-lg">${utils.escapeHtml(product.name)}</div>
                                    <div class="rec-product-price text-primary-accent font-medium">${utils.escapeHtml(product.price)}</div>
                                </div>
                                <div class="score-badge bg-primary-accent/20 text-primary-accent px-3 py-1 rounded-full text-sm">
                                    Score: ${product.recommendationScore || 0}
                                </div>
                            </div>
                            
                            <div class="rec-product-reasons mt-3">
                                <div class="text-sm text-text-secondary mb-2">Alasan direkomendasikan:</div>
                                <ul class="text-sm space-y-1">
                                    ${(product.recommendationReasons || []).map(reason => 
                                        `<li class="flex items-center"><i class="fas fa-check text-success mr-2 text-xs"></i>${utils.escapeHtml(reason)}</li>`
                                    ).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        
        resultHTML += `
                </div>
                
                <div class="mt-6 p-4 bg-primary-accent/10 rounded-custom border border-primary-accent/20">
                    <p class="text-text-secondary text-sm m-0">
                        <i class="fas fa-lightbulb text-primary-accent mr-2"></i>
                        Produk dengan ranking tertinggi telah di-highlight. Anda dapat melihat detail produk dengan mengklik "Lihat Detail".
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