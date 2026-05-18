export default function Historial({ items, onLimpiar }) {
  if (items.length === 0) return null

  return (
    <div className="historial">
      <div className="historialHeader">
        <h3>Historial</h3>
        <button onClick={onLimpiar}>Limpiar</button>
      </div>

      {items.map((item, index) => (
        <div key={index} className="historialItem">
          <span className={`badge ${item.tipo}`}>
            {item.tipo.toUpperCase()}
          </span>
          <span className="textoHistorial">{item.texto}</span>
        </div>
      ))}
    </div>
  )
}
