import './globals.css'

export const metadata = {
  title: 'ToxiCheck',
  description: 'Detector de mensajes tóxicos - PTIA Grupo 3',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
