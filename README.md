# ToxiCheck — Frontend

Interfaz web del detector de mensajes tóxicos.
**Stack:** Next.js 14 · React 18

---

## Requisitos

- Node.js 18+
- El backend corriendo en `http://localhost:8000`

---

## Correr localmente

1. Clona el repositorio:

```bash
git clone https://github.com/Cam1lo27/ToxicCheckAI-PTIA-FrontEnd.git
cd ToxicCheckAI-PTIA-FrontEnd
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea el archivo `.env.local` en la raíz con:

```
BACKEND_URL=http://localhost:8000
```

4. Levanta el servidor:

```bash
npm run dev
```

5. Abre en el navegador: http://localhost:3000

> ⚠️ El backend debe estar corriendo antes de iniciar el frontend.

---

## Variables de entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `BACKEND_URL` | URL del backend FastAPI | `https://toxicheck-api.azurewebsites.net` |

---

## Estructura del proyecto

    app/
    ├── api/
    │   └── analizar/
    │       └── route.js        # Proxy al backend
    ├── globals.css
    ├── layout.jsx
    └── page.jsx                # Página principal
    components/
    ├── Historial.jsx           # Historial de análisis
    └── ResultadoCard.jsx       # Tarjeta de resultado
    .env.local                  # Variables de entorno (no en git)
    package.json

---

## Repositorio del backend

[ToxicCheckAI-PTIA-BackEnd](https://github.com/Cam1lo27/ToxicCheckAI-PTIA-BackEnd)

---

## Autores

Andrés Camilo Vivas · Daniel Esteban Rodríguez · PTIA Grupo 3