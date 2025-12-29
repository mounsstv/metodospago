# 💳 Página de Métodos de Pago

Página web profesional y moderna para mostrar métodos de pago disponibles con diseño gamer y animaciones interactivas.

## 👨‍💻 Autor

**Victor Cuaresma Salhuana**  
Analista de Sistemas  
📱 WhatsApp: +51 917 360 503

---

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz profesional con estética gamer y efectos visuales impactantes
- 🌊 **Animaciones Fluidas**: Partículas animadas, efectos de brillo y transiciones suaves
- 📱 **Totalmente Responsive**: Optimizado para desktop, tablet y móviles
- 💳 **Múltiples Métodos de Pago**: Yape, Plin, Prexpe, BIM, Ligo y tarjetas de crédito/débito
- 🔄 **QR Codes**: Códigos QR para pagos rápidos y seguros
- 📋 **Copiar al Portapapeles**: Función para copiar números de teléfono y CCI fácilmente
- 🎯 **Instrucciones Claras**: Guías paso a paso para cada método de pago

---

## 🚀 Métodos de Pago Disponibles

### 📱 Billeteras Digitales
- **Yape / Plin**: Pago instantáneo mediante QR o número de celular
- **BIM**: Transferencias rápidas con código QR
- **Prexpe**: Transferencias interbancarias

### 💰 Otros Métodos
- **Ligo**: Pagos mediante código QR únicamente
- **Tarjeta de Crédito/Débito**: Pagos en línea seguros vía Ligo

### 🏦 Transferencia Bancaria
- **Número de Celular**: +51 917 360 503
- **Número de CCI**: 77600100000339351409

---

## 📂 Estructura del Proyecto

```
API/
├── index.html              # Página principal
├── styles.css              # Estilos y diseño
├── script.js               # Funcionalidad e interactividad
├── README.md               # Este archivo
└── METODOS DE PAGO/
    └── QR/
        ├── plin-yape.jpg   # QR para Yape y Plin
        ├── prexpe.jpg      # QR para Prexpe
        ├── bim.jpg         # QR para BIM
        └── ligo.png        # QR para Ligo
```

---

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Diseño moderno con variables CSS, gradientes y animaciones
- **JavaScript (Vanilla)**: Interactividad sin dependencias externas
- **Canvas API**: Sistema de partículas animadas
- **Google Fonts**: Tipografías Poppins e Inter

---

## 🎨 Características de Diseño

### Paleta de Colores
- **Primario**: `#6366f1` (Índigo)
- **Secundario**: `#ec4899` (Rosa)
- **Acento**: `#f59e0b` (Ámbar)
- **Éxito**: `#10b981` (Verde)
- **Fondo**: `#0f172a` (Azul oscuro)

### Efectos Visuales
- ✨ Animación de partículas en el fondo
- 🌟 Efectos de brillo (shimmer) en las tarjetas
- 🎭 Transformaciones 3D al hacer hover
- 💫 Gradientes dinámicos
- 🔔 Notificaciones toast animadas

---

## 📱 Responsive Design

### Desktop (> 768px)
- Grid de 3 columnas para métodos de pago
- Modal amplio (900px) con layout horizontal
- Efectos hover completos

### Tablet (768px - 480px)
- Grid adaptativo de 2 columnas
- Modal con layout vertical
- Espaciado optimizado

### Mobile (< 480px)
- Grid de 1 columna
- Tarjetas apiladas verticalmente
- Tamaños de fuente reducidos
- QR codes optimizados

---

## 🚀 Cómo Usar

### Instalación
1. Descarga o clona este repositorio
2. Abre `index.html` en tu navegador web
3. ¡Listo! No requiere instalación de dependencias

### Personalización

#### Cambiar Información Personal
Edita en `index.html`:
```html
<h1 class="name">Tu Nombre</h1>
<p class="role">Tu Profesión</p>
<span>+51 XXX XXX XXX</span>
```

#### Actualizar Números de Contacto
Edita en `index.html` y `script.js`:
```html
<span id="phoneNum">+51 XXX XXX XXX</span>
<span id="cciNum">XXXXXXXXXXXXXXXXXX</span>
```

#### Cambiar QR Codes
Reemplaza las imágenes en la carpeta `METODOS DE PAGO/QR/`:
- `plin-yape.jpg`
- `prexpe.jpg`
- `bim.jpg`
- `ligo.png`

#### Modificar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary: #6366f1;
    --secondary: #ec4899;
    /* ... más colores */
}
```

---

## 🎯 Funcionalidades JavaScript

### Sistema de Partículas
```javascript
class ParticleSystem {
    // Crea animación de fondo con partículas conectadas
}
```

### Modal de Pagos
```javascript
function openPaymentModal(method) {
    // Abre modal con QR e instrucciones específicas
}
```

### Copiar al Portapapeles
```javascript
function copyText(elementId) {
    // Copia texto con fallback para navegadores antiguos
}
```

### Notificaciones Toast
```javascript
function showToast(message) {
    // Muestra notificación temporal
}
```

---

## 📋 Instrucciones de Pago

### Para Yape / Plin
1. Abre tu app Yape o Plin
2. Escanea el código QR
3. Si el QR no funciona, ingresa: **+51 917 360 503**
4. Ingresa el monto
5. Confirma la transacción
6. Envía tu comprobante

### Para Prexpe
1. Abre tu app bancaria
2. Ve a "Otros Bancos" o "Transferencias"
3. Selecciona "Prexpe"
4. Escanea el QR o ingresa: **+51 917 360 503**
5. Confirma la transacción

### Para BIM
1. Abre tu app BIM
2. Escanea el código QR
3. Si el QR no funciona, ingresa: **+51 917 360 503**
4. Confirma la transacción

### Para Ligo
1. Abre tu app Ligo
2. **Solo aceptamos pago mediante QR**
3. Escanea el código QR
4. Confirma la transacción

### Para Tarjeta
1. Haz clic en "Pagar Ahora"
2. Serás redirigido a la pasarela de pago segura
3. Ingresa los datos de tu tarjeta
4. Confirma el pago

---

## 🔧 Compatibilidad

### Navegadores Soportados
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

### Características Modernas Utilizadas
- CSS Grid & Flexbox
- CSS Variables (Custom Properties)
- Canvas API
- Intersection Observer API
- Clipboard API
- ES6+ JavaScript

---

## 📄 Licencia

© 2026/2027 Victor Cuaresma Salhuana. Todos los derechos reservados.

---

## 📞 Contacto

¿Preguntas o sugerencias?

- 📱 WhatsApp: [+51 917 360 503](https://wa.me/51917360503)
- 💳 Pagos: [Link de Cobro Ligo](https://linkdecobro.ligo.live/v3/3b7c523020454a118bae0cf97e9b493a)

---

## 🎉 Agradecimientos

Gracias por usar esta página de métodos de pago. Si te gusta el diseño, ¡compártelo!

---

**Hecho con ❤️ por Victor Cuaresma Salhuana**
