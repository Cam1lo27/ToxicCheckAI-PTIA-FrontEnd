'use client'

import { useState } from 'react'
import ResultadoCard from '../components/ResultadoCard'
import Historial from '../components/Historial'

export default function Home() {
  const [texto, setTexto]         = useState('')
  const [resultado, setResultado] = useState(null)
  const [cargando, setCargando]   = useState(false)
  const [error, setError]         = useState(null)
  const [historial, setHistorial] = useState([])

  async function handleAnalizar() {
    if (!texto.trim()) return

    setCargando(true)
    setResultado(null)
    setError(null)

    try {
      const res = await fetch('/api/analizar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ texto }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Error al analizar el mensaje')
        return
      }

      // El backend devuelve { label, confidence, ... }
      // Lo normalizamos al formato que espera ResultadoCard
      const resultado = {
        tipo: data.label,
        confianza: data.confidence,
      }

      setResultado(resultado)
      setHistorial(prev => [
        { texto: texto.slice(0, 60), tipo: data.label },
        ...prev,
      ].slice(0, 6))

    } catch (err) {
      setError('No se pudo conectar con el servidor. Verifica que el backend esté activo.')
    } finally {
      setCargando(false)
    }
  }

  return (
    <div className="container">

      <div className="header">
        <h1>🔍 Detector de Mensajes Tóxicos</h1>
        <p>Ingresa un mensaje y el sistema detectará si contiene lenguaje ofensivo o agresivo.</p>
      </div>

      <div className="card">
        <label htmlFor="mensaje">Mensaje a analizar:</label>
        <textarea
          id="mensaje"
          value={texto}
          onChange={e => setTexto(e.target.value)}
          placeholder="Escribe o pega el mensaje aquí..."
        />
        <br />
        <button onClick={handleAnalizar} disabled={cargando || !texto.trim()}>
          {cargando ? 'Analizando...' : 'Analizar mensaje'}
        </button>
      </div>

      {error && (
        <div className="resultado" style={{ borderLeft: '4px solid #c0392b', color: '#c0392b' }}>
          ⚠️ {error}
        </div>
      )}

      <ResultadoCard resultado={resultado} />

      <Historial
        items={historial}
        onLimpiar={() => setHistorial([])}
      />

      <div className="footer">
        Andrés Camilo Vivas · Daniel Esteban Rodríguez · PTIA Grupo 3
      </div>

    </div>
  )
}
