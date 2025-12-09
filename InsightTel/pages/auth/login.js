// pages/auth/login.js - Login Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginUsername = document.getElementById('loginUsername');
    const loginPassword = document.getElementById('loginPassword');

    // Show notification function
    function showNotification(message, type = 'info') {
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
        
        // Add styles for animations
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
        
        // Remove notification function
        const removeNotification = () => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        };
        
        // Close button event
        notification.querySelector('.notification-close').addEventListener('click', removeNotification);
        
        // Auto remove after 5 seconds
        setTimeout(removeNotification, 5000);
    }

    // Login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = loginUsername.value.trim();
        const password = loginPassword.value;
        
        if (!username || !password) {
            showNotification('Harap isi username dan password', 'error');
            return;
        }
        
        // Simulate login process
        showNotification('Login berhasil! Mengarahkan ke halaman utama...', 'success');
        
        // Save user to localStorage
        localStorage.setItem('insighttel_user', username);
        localStorage.setItem('insighttel_loggedIn', 'true');
        
        // Redirect to home page after 1.5 seconds
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 1500);
    });

    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem('insighttel_loggedIn');
    const savedUser = localStorage.getItem('insighttel_user');
    
    if (isLoggedIn === 'true' && savedUser) {
        // If already logged in, redirect to home
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 1000);
    }
});