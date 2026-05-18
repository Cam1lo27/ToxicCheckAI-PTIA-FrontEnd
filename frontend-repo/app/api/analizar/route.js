import { NextResponse } from 'next/server'

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8000'

export async function POST(request) {
  const body = await request.json()
  const { texto } = body

  if (!texto) {
    return NextResponse.json({ error: 'No se recibió texto' }, { status: 400 })
  }

  try {
    const res = await fetch(`${BACKEND_URL}/analizar`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ texto }),
    })

    if (!res.ok) {
      const err = await res.json()
      return NextResponse.json({ error: err.detail || 'Error del backend' }, { status: res.status })
    }

    const data = await res.json()
    return NextResponse.json(data)

  } catch (error) {
    console.error('Error conectando al backend:', error)
    return NextResponse.json({ error: 'No se pudo conectar al backend' }, { status: 503 })
  }
}
