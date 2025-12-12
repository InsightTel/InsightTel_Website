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
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const submitButton = loginForm.querySelector('button[type="submit"]');
        
        const username = loginUsername.value.trim();
        const password = loginPassword.value;
        
        if (!username || !password) {
            showNotification('Harap isi username dan password.', 'error');
            return;
        }
        
        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Logging in...';

        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Username atau password salah.');
            }

            // Simpan token dan data pengguna ke localStorage
            localStorage.setItem('insighttel_token', data.token);
            localStorage.setItem('insighttel_user', username); // Tetap simpan username untuk tampilan UI
            localStorage.setItem('insighttel_loggedIn', 'true');

            showNotification('Login berhasil! Mengarahkan ke halaman utama...', 'success');
            setTimeout(() => { window.location.href = '../index.html'; }, 1500);
        } catch (error) {
            console.error('Login error:', error);
            showNotification(error.message, 'error');
        } finally {
            // Re-enable button and restore text if it's still disabled (i.e., on failure)
            if (submitButton.disabled) {
                submitButton.disabled = false;
                submitButton.innerHTML = '<i class="fas fa-sign-in-alt mr-2"></i> Login';
            }
        }
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