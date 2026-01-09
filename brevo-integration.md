# 🔗 Guía de Integración Directa con Brevo
## Conecta tu formulario sin Zapier ni intermediarios

Como Formspree no conecta directamente con Brevo en el plan gratuito y Zapier no es una opción, la mejor solución profesional es conectar tu formulario **DIRECTAMENTE** a Brevo.

Esto te permitirá:
1. Guardar los contactos automáticamente en Brevo.
2. Disparar los emails de bienvenida al instante.
3. Ahorrarte costos de herramientas extra.

---

### PASO 1: Crear el Formulario en Brevo

1. Entra a tu cuenta de **Brevo**.
2. Ve a **Contactos** > **Formularios**.
3. Crea un **Nuevo Formulario de Suscripción**.
4. Ponle de nombre "Funnel Trading".
5. En el paso de **Diseño**, asegúrate de añadir los campos que coincidan con tu web:
   - `EMAIL` (Obligatorio)
   - `NOMBRE` (Texto)
   - `TELEFONO` (Texto o SMS)
   - `EXPERIENCIA` (Texto o Selección)
   - `INTERES` (Texto o Selección)
   
   > **IMPORTANTE:** No te preocupes por el diseño en Brevo, usaremos tu diseño actual. Solo necesitamos que los campos existan backend.

6. En el paso **Configuración**:
   - Tipo de opt-in: "Simple confirmation" (recomendado para que entren directo) o "Double" si prefieres.
   - **IMPORTANTE:** En "Redireccionar URL", pon el link de tu página de gracias (ej: `tudominio.com/thank-you.html` o por ahora `http://localhost.../thank-you.html`).

7. En el paso **Mensajes**: Deja los defaults.

### PASO 2: Obtener la URL de Acción (La Clave) 🔑

1. En el paso **Compartir**, busca la pestaña o sección "HTML" o "Código simple".
2. Verás un bloque de código HTML. Busca la etiqueta `<form>`.
3. Copia la URL que aparece en `action="..."`.
   - Se verá algo así: `https://sibforms.com/serve/MUIEAD...`
   
**ESTE ES TU ENLACE MÁGICO.**

### PASO 3: Configurar tu HTML

1. Abre tu archivo `index.html`.
2. Busca la etiqueta `<form id="leadForm" ...>`.
3. Cambia el `action` por tu URL de Brevo.

```html
<!-- Ejemplo -->
<form id="leadForm" action="https://sibforms.com/serve/A1B2C3..." method="POST" class="minimal-form">
```

### PASO 4: Mapear los Campos (Vital)

Para que Brevo entienda qué es qué, los `name` de tus inputs deben coincidir con lo que Brevo espera. Usualmente Brevo usa nombres en mayúsculas.

**Edita tu `index.html` para que los inputs tengan estos `name`:**

- Nombre: `name="NOMBRE"`
- Email: `name="EMAIL"`
- Teléfono: `name="TELEFONO"` (o como lo hayas nombrado en Brevo)
- Interés: `name="INTERES"`
- Experiencia: `name="EXPERIENCIA"`

*(Puedes verificar los nombres exactos viendo el "código HTML simple" que te da Brevo en el Paso 2).*

---

### ✅ Solución Avanzada: Envío sin Recarga (AJAX)

He actualizado tu archivo `script.js` para que detecte si estás usando una URL de Brevo (`sibforms.com`) y trate de enviar los datos "silenciosamente" para que el usuario no vea la página fea de Brevo, sino que vaya directo a tu `thank-you.html`.

**Solo necesitas:**
1. Poner la URL de Brevo en el `action` del form.
2. Asegurar que los `name` de los inputs coincidan.

¡Listo! Con esto tienes una integración profesional, directa y gratis.
