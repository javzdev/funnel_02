# Funnel de Trading - Daniel Guillermo
## Guía de Configuración e Implementación

---

## 📁 Estructura del Proyecto

```
funnel_2/
├── index.html              # Landing page principal
├── thank-you.html          # Página de agradecimiento
├── styles.css              # Sistema de diseño premium
├── script.js               # JavaScript interactivo
├── brevo-email-templates.md # Plantillas de email marketing
├── assets/
│   ├── hero-bg.png         # Fondo hero section
│   ├── daniel-profile.png  # Foto de perfil
│   ├── trust-badges.png    # Insignias de confianza
│   └── success-chart.png   # Gráfico de éxito
└── README.md               # Este archivo
```

---

## 🚀 Inicio Rápido

### 1. Configurar Formspree (Captura de Leads)

1. Ve a [Formspree.io](https://formspree.io)
2. Crea una cuenta gratuita
3. Crea un nuevo formulario
4. Copia tu Form ID
5. En `index.html`, reemplaza `TU_FORM_ID`:
   ```html
   <form id="leadForm" action="https://formspree.io/f/TU_FORM_ID" method="POST">
   ```
6. Configura redirección a `thank-you.html` en Formspree settings

### 2. Configurar Brevo (Email Marketing)

1. Crea cuenta en [Brevo.com](https://www.brevo.com)
2. Ve a "Contactos" → Crea lista "Leads Funnel Trading"
3. Configura campos personalizados:
   - NOMBRE
   - TELEFONO
   - EXPERIENCIA
   - INTERES
4. Crea las plantillas de email (ver `brevo-email-templates.md`)
5. Configura automation workflow según la guía

### 3. Integrar Formspree con Brevo

**Opción A: Zapier (Recomendado para principiantes)**
1. Crea cuenta en [Zapier.com](https://zapier.com)
2. Crea nuevo Zap: Formspree → Brevo
3. Trigger: "New Submission" en Formspree
4. Action: "Create or Update Contact" en Brevo
5. Mapea los campos correctamente
6. Activa el Zap

**Opción B: API Directa (Avanzado)**
- Ver código en `brevo-email-templates.md`
- Requiere API key de Brevo
- Modificar `script.js`

### 4. Personalizar Contenido

Edita `index.html` y actualiza:
- ✅ Información de contacto
- ✅ Links de redes sociales
- ✅ Estadísticas (si son diferentes)
- ✅ Testimonios (cuando los tengas)

### 5. Subir a Hosting

**Opción A: Netlify (Gratis y Fácil)**
1. Ve a [Netlify.com](https://netlify.com)
2. Arrastra la carpeta `funnel_2`
3. Tu sitio estará en línea en segundos
4. Configura dominio personalizado (opcional)

**Opción B: GitHub Pages**
1. Sube archivos a repositorio GitHub
2. Activa GitHub Pages en settings
3. Tu sitio estará en `usuario.github.io/repo`

**Opción C: Hosting Tradicional**
- Sube archivos vía FTP
- Compatible con cualquier hosting que soporte HTML

---

## 🎨 Personalización del Diseño

### Cambiar Colores

En `styles.css`, modifica las variables CSS:

```css
:root {
  --primary-gold: #D4AF37;        /* Color dorado principal */
  --primary-blue: #0A1929;        /* Azul oscuro */
  --accent-blue: #1E3A5F;         /* Azul acento */
}
```

### Cambiar Fuentes

En `index.html` y `thank-you.html`, reemplaza el link de Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=TU_FUENTE&display=swap">
```

Y actualiza en `styles.css`:
```css
--font-primary: 'TU_FUENTE', sans-serif;
```

### Reemplazar Imágenes

Simplemente reemplaza los archivos en `assets/` manteniendo los mismos nombres:
- `hero-bg.png` - Fondo principal (1920x1080px recomendado)
- `daniel-profile.png` - Foto de perfil (800x800px recomendado)
- `trust-badges.png` - Insignias (1200x400px recomendado)
- `success-chart.png` - Gráfico (1200x600px recomendado)

---

## 📊 Tracking y Analíticas

### Google Analytics

Añade antes de `</head>` en ambos HTML:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TU_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TU_ID');
</script>
```

### Facebook Pixel

Añade antes de `</head>`:

```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'TU_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

Y en `thank-you.html` añade evento de conversión:
```html
<script>
  fbq('track', 'Lead');
</script>
```

---

## 💰 Optimización de Conversión

### A/B Testing

Prueba diferentes versiones de:
- ✅ Títulos (H1)
- ✅ Subtítulos
- ✅ Texto del botón CTA
- ✅ Colores del botón
- ✅ Imágenes

### Mejores Prácticas

1. **Velocidad de Carga**
   - Optimiza imágenes (usa TinyPNG.com)
   - Minimiza CSS/JS para producción
   - Usa CDN para assets

2. **Mobile First**
   - El diseño ya es responsive
   - Prueba en diferentes dispositivos
   - Verifica que el formulario funcione en móvil

3. **Trust Signals**
   - Añade testimonios reales cuando los tengas
   - Muestra resultados verificables
   - Incluye certificaciones si las tienes

4. **Urgencia y Escasez**
   - Considera añadir countdown timer
   - "Solo X cupos disponibles"
   - Ofertas por tiempo limitado

---

## 🔒 Cumplimiento Legal

### GDPR / Privacidad

Añade al formulario:

```html
<div class="form-group">
  <label>
    <input type="checkbox" name="privacy" required>
    Acepto la <a href="privacy.html">Política de Privacidad</a> 
    y <a href="terms.html">Términos de Servicio</a>
  </label>
</div>
```

### Disclaimer

Ya incluido en el footer, pero considera añadir página dedicada con:
- Advertencia de riesgos del trading
- Resultados no garantizados
- Responsabilidad del usuario

---

## 📧 Secuencia de Emails Recomendada

Ver archivo completo: `brevo-email-templates.md`

**Resumen:**
1. **Día 0:** Bienvenida + Recursos gratis
2. **Día 1:** Estrategia de gestión de riesgo
3. **Día 3:** Historia personal + Lección
4. **Día 5:** CTA principal (Mentoría/Curso)
5. **Día 7:** Urgencia/Última oportunidad
6. **Día 10+:** Contenido semanal continuo

---

## 🎯 Métricas de Éxito

### KPIs a Monitorear

| Métrica | Objetivo | Herramienta |
|---------|----------|-------------|
| Tráfico | 1000+ visitas/mes | Google Analytics |
| Conversion Rate | 15-25% | Formspree Dashboard |
| Email Open Rate | >25% | Brevo Analytics |
| Email Click Rate | >5% | Brevo Analytics |
| Sales Conversion | 2-5% | Manual/CRM |

### Optimización Continua

1. **Semana 1-2:** Recopilar datos
2. **Semana 3-4:** Identificar puntos de fuga
3. **Mes 2:** Implementar mejoras
4. **Mes 3:** Escalar tráfico

---

## 🆘 Soporte y Recursos

### Recursos Útiles

- [Formspree Docs](https://help.formspree.io/)
- [Brevo Academy](https://academy.brevo.com/)
- [Google Analytics Academy](https://analytics.google.com/analytics/academy/)
- [Netlify Docs](https://docs.netlify.com/)

### Checklist de Lanzamiento

- [ ] Configurar Formspree
- [ ] Configurar Brevo
- [ ] Conectar Formspree → Brevo
- [ ] Crear plantillas de email
- [ ] Configurar automation workflow
- [ ] Personalizar contenido
- [ ] Reemplazar imágenes (si necesario)
- [ ] Añadir tracking (GA, FB Pixel)
- [ ] Probar formulario end-to-end
- [ ] Verificar emails en spam
- [ ] Probar en móvil
- [ ] Subir a hosting
- [ ] Configurar dominio
- [ ] Probar todo de nuevo
- [ ] ¡Lanzar y promocionar!

---

## 🚀 Próximos Pasos

1. **Configurar todo** siguiendo esta guía
2. **Probar el funnel** tú mismo
3. **Generar tráfico:**
   - Anuncios en Facebook/Instagram
   - Google Ads
   - Contenido orgánico en redes sociales
   - YouTube
   - TikTok
4. **Analizar resultados** y optimizar
5. **Escalar** lo que funciona

---

## 📞 Contacto

Para soporte técnico o preguntas:
- Email: [tu-email@ejemplo.com]
- WhatsApp: [tu-número]

---

**¡Éxito con tu funnel! 🚀📈**
