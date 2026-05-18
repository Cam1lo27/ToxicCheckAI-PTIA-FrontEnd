# ToxiCheck — Frontend

Interfaz web del detector de mensajes tóxicos.  
**Stack:** Next.js 14 · React 18

## Desarrollo local

```bash
npm install
# Edita .env.local y pon la URL de tu backend:
# BACKEND_URL=http://localhost:8000
npm run dev
```

Abre: http://localhost:3000

## Variables de entorno

| Variable | Descripción | Ejemplo |
|---|---|---|
| `BACKEND_URL` | URL del backend FastAPI | `https://toxicheck-api.azurewebsites.net` |

## Despliegue (Vercel)

1. Conecta este repo en vercel.com
2. Agrega la variable `BACKEND_URL` apuntando a tu backend en Azure
3. Deploy automático en cada push a `main`

## Repositorio del backend

→ [toxicheck-backend](https://github.com/TU_USUARIO/toxicheck-backend)
