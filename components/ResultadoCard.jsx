export default function ResultadoCard({ resultado }) {
  if (!resultado) return null

  const colores = {
    toxico:   '#c0392b',
    seguro:   '#27ae60',
    moderado: '#e67e22',
  }

  const etiquetas = {
    toxico:   '⚠️ Tóxico',
    seguro:   '✅ Seguro',
    moderado: '⚡ Moderado',
  }

  const porcentaje = Math.round(resultado.confianza * 100)
  const color = colores[resultado.tipo]

  return (
    <div className="resultado">
      <h2>Resultado del análisis</h2>

      <span className={`etiqueta ${resultado.tipo}`}>
        {etiquetas[resultado.tipo]}
      </span>

      <div className="barraWrapper">
        <p>Confianza: {porcentaje}%</p>
        <div className="barraFondo">
          <div
            className="barraRelleno"
            style={{ width: `${porcentaje}%`, backgroundColor: color }}
          />
        </div>
      </div>
    </div>
  )
}
