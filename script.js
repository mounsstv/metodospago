// ===== PARTICLE ANIMATION =====
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 80;

        this.resize();
        this.init();
        this.animate();

        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                radius: Math.random() * 1.5 + 0.5,
                color: this.getRandomColor()
            });
        }
    }

    getRandomColor() {
        const colors = [
            'rgba(99, 102, 241, 0.5)',
            'rgba(236, 72, 153, 0.5)',
            'rgba(245, 158, 11, 0.5)',
            'rgba(16, 185, 129, 0.5)'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;

            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.fill();
        });

        this.particles.forEach((p1, i) => {
            this.particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - distance / 120)})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            });
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize particle system
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        new ParticleSystem(canvas);
    }
});

// ===== PAYMENT MODAL DATA =====
const paymentData = {
    'yape-plin': {
        title: 'Pagar con Yape o Plin',
        qr: 'METODOS DE PAGO/QR/plin-yape.jpg',
        gradient: 'linear-gradient(135deg, #722ed1 0%, #531dab 100%)',
        instructions: `
            <h4>📱 Instrucciones para Yape / Plin:</h4>
            <ol>
                <li><strong>Abre tu app Yape o Plin</strong> en tu celular</li>
                <li><strong>Escanea el código QR</strong> mostrado arriba</li>
                <li>Si el QR no funciona, <strong>ingresa manualmente el número:</strong> <strong>+51 917 360 503</strong></li>
                <li>Ingresa el monto a pagar</li>
                <li>Confirma la transacción</li>
                <li>¡Listo! Envíame tu comprobante de pago</li>
            </ol>
        `
    },
    prexpe: {
        title: 'Pagar con Prexpe',
        qr: 'METODOS DE PAGO/QR/prexpe.jpg',
        gradient: 'linear-gradient(135deg, #fa8c16 0%, #d46b08 100%)',
        instructions: `
            <h4>📱 Instrucciones para Prexpe:</h4>
            <ol>
                <li><strong>Abre tu app bancaria</strong> (BCP, BBVA, Interbank, etc.)</li>
                <li>Ve a la sección de <strong>"Otros Bancos"</strong> o <strong>"Transferencias"</strong></li>
                <li><strong>Selecciona "Prexpe"</strong> como banco destino</li>
                <li>Puedes <strong>escanear el QR</strong> o ingresar el número: <strong>+51 917 360 503</strong></li>
                <li>Ingresa el monto a transferir</li>
                <li>Confirma la transacción</li>
                <li>¡Listo! Envíame tu comprobante de pago</li>
            </ol>
        `
    },
    bim: {
        title: 'Pagar con BIM',
        qr: 'METODOS DE PAGO/QR/bim.jpg',
        gradient: 'linear-gradient(135deg, #52c41a 0%, #389e0d 100%)',
        instructions: `
            <h4>📱 Instrucciones para BIM:</h4>
            <ol>
                <li><strong>Abre tu app BIM</strong> en tu celular</li>
                <li><strong>Escanea el código QR</strong> mostrado arriba</li>
                <li>Si el QR no funciona, <strong>ingresa manualmente el número:</strong> <strong>+51 917 360 503</strong></li>
                <li>Ingresa el monto a pagar</li>
                <li>Confirma la transacción</li>
                <li>¡Listo! Envíame tu comprobante de pago</li>
            </ol>
        `
    },
    ligo: {
        title: 'Pagar con Ligo',
        qr: 'METODOS DE PAGO/QR/ligo.png',
        gradient: 'linear-gradient(135deg, #eb2f96 0%, #c41d7f 100%)',
        instructions: `
            <h4>📱 Instrucciones para Ligo:</h4>
            <ol>
                <li><strong>Abre tu app Ligo</strong> en tu celular</li>
                <li><strong>Solo aceptamos pago mediante QR</strong></li>
                <li><strong>Escanea el código QR</strong> mostrado arriba</li>
                <li>Ingresa el monto a pagar</li>
                <li>Confirma la transacción</li>
                <li>¡Listo! Envíame tu comprobante de pago</li>
            </ol>
        `
    }
};

// ===== MODAL FUNCTIONS =====
function openPaymentModal(method) {
    const modal = document.getElementById('paymentModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const qrImage = document.getElementById('qrImage');
    const instructions = document.getElementById('instructions');

    const data = paymentData[method];

    if (data) {
        modalIcon.style.background = data.gradient;
        modalTitle.textContent = data.title;
        qrImage.src = data.qr;
        instructions.innerHTML = data.instructions;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closePaymentModal() {
    const modal = document.getElementById('paymentModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePaymentModal();
    }
});

// ===== COPY TO CLIPBOARD =====
function copyText(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;

    // Modern Clipboard API (iOS 13.4+, Android 10+)
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('¡Copiado al portapapeles!');
        }).catch(err => {
            console.error('Error al copiar:', err);
            fallbackCopyText(text);
        });
    } else {
        // Fallback for older browsers
        fallbackCopyText(text);
    }
}

function fallbackCopyText(text) {
    // Create temporary textarea
    const textArea = document.createElement('textarea');
    textArea.value = text;

    // Make it invisible and non-interactive
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.style.opacity = '0';

    // iOS specific
    textArea.contentEditable = true;
    textArea.readOnly = false;

    document.body.appendChild(textArea);

    // Select text
    if (navigator.userAgent.match(/ipad|iphone/i)) {
        // iOS specific selection
        const range = document.createRange();
        range.selectNodeContents(textArea);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        textArea.setSelectionRange(0, 999999);
    } else {
        textArea.select();
    }

    // Copy to clipboard
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showToast('¡Copiado al portapapeles!');
        } else {
            showToast('No se pudo copiar', 'error');
        }
    } catch (err) {
        console.error('Error al copiar:', err);
        showToast('Error al copiar', 'error');
    }

    document.body.removeChild(textArea);
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toastText');

    toastText.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.method-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        observer.observe(card);
    });
});

// ===== SMOOTH ANIMATIONS =====
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth entrance animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== PERFORMANCE OPTIMIZATION =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

window.addEventListener('resize', debounce(() => {
    // Handle resize events if needed
}, 250));
