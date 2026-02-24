import { useSearchParams, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Registro() {
  const [params] = useSearchParams()
  const navigate = useNavigate()

  const c = params.get("c")
  const t = params.get("t")

  const [nombre, setNombre] = useState("")
  const [cedula, setCedula] = useState("")

  const guardar = async () => {
    const res = await fetch("http://TU_API:1337/api/clientes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: {
          nombre,
          cedula,
          codigo_estacion: c,
          turno: t,
          firmado: false
        }
      })
    })

    const json = await res.json()

    navigate(`/firma?id=${json.data.id}`)
  }

  return (
    <div>
      <h2>Registro</h2>

      <input
        placeholder="Nombre completo"
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        placeholder="Cédula"
        onChange={(e) => setCedula(e.target.value)}
      />

      <button onClick={guardar}>Continuar</button>
    </div>
  )
}