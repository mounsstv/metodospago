// Toggle payment method details
function toggleMethod(method) {
    const paymentMethod = document.querySelector(`[data-method="${method}"]`);
    const allMethods = document.querySelectorAll('.payment-method');

    // Close other methods
    allMethods.forEach(m => {
        if (m !== paymentMethod && m.classList.contains('active')) {
            m.classList.remove('active');
        }
    });

    // Toggle current method
    paymentMethod.classList.toggle('active');
}

// Copy to clipboard function
function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;

    // Create temporary textarea
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);

    // Select and copy
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    try {
        document.execCommand('copy');
        showToast();
    } catch (err) {
        console.error('Error al copiar:', err);
    }

    // Remove temporary textarea
    document.body.removeChild(textarea);
}

// Show toast notification
function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {

    // Add click handlers to method headers
    const methodHeaders = document.querySelectorAll('.method-header');
    methodHeaders.forEach(header => {
        const method = header.closest('.payment-method').dataset.method;
        header.addEventListener('click', () => toggleMethod(method));
    });

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Add entrance animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.payment-method').forEach(method => {
        method.style.opacity = '0';
        method.style.transform = 'translateY(20px)';
        method.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(method);
    });
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const activeMethods = document.querySelectorAll('.payment-method.active');
        activeMethods.forEach(method => method.classList.remove('active'));
    }
});
