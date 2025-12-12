// pages/auth/register.js - Register Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const registerUsername = document.getElementById('registerUsername');
    const registerPassword = document.getElementById('registerPassword');
    const registerConfirmPassword = document.getElementById('registerConfirmPassword');
    const registerEmail = document.getElementById('registerEmail'); // Tambahkan ini

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

    // Register form submission
    registerForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const submitButton = registerForm.querySelector('button[type="submit"]');
        
        const username = registerUsername.value.trim();
        const password = registerPassword.value;
        const confirmPassword = registerConfirmPassword.value;
        const email = registerEmail ? registerEmail.value.trim() : '';
        
        // Validasi input
        if (!username || !password || !email) {
            showNotification('Harap isi semua kolom (username, email, password).', 'error');
            return;
        }
        
        if (password.length < 6) {
            showNotification('Password minimal 6 karakter', 'error');
            return;
        }

        if (password !== confirmPassword) {
            showNotification('Password dan konfirmasi password tidak cocok.', 'error');
            return;
        }
        
        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Registering...';

        try {
            const response = await fetch('http://localhost:3000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                // Tampilkan pesan error dari backend jika ada, jika tidak, tampilkan pesan default
                throw new Error(data.message || 'Registrasi gagal. Coba lagi.');
            }

            // Registrasi berhasil
            showNotification('Registrasi berhasil! Silakan login untuk melanjutkan.', 'success');
            
            // Arahkan ke halaman login setelah 2 detik
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);

        } catch (error) {
            console.error('Registration error:', error);
            showNotification(error.message, 'error');
        } finally {
            // Re-enable button and restore text, but only on failure. On success, we redirect.
            if (!submitButton.disabled) return; // Avoid resetting if already redirected
            submitButton.disabled = false;
            submitButton.innerHTML = '<i class="fas fa-user-plus mr-2"></i> Register';
        }
    });
});
