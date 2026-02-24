import { useState } from "react"
import { generateClientId } from "../utils/generateClientId"
import QRCard from "../components/QRCard"

export default function CreateTurn() {
  const [turnId] = useState("LCZ-240218-AM")
  const [names, setNames] = useState<string[]>([])

  function addPerson() {
    setNames([...names, ""])
  }

  function updateName(index: number, value: string) {
    const copy = [...names]
    copy[index] = value
    setNames(copy)
  }

  return (
    <div>
      <h1>Crear turno</h1>
      <button onClick={addPerson}>Agregar cliente</button>

      {names.map((name, i) => {
        const clientId = generateClientId(turnId, i)

        return (
          <div key={clientId}>
            <input
              placeholder="Nombre cliente"
              value={name}
              onChange={(e) => updateName(i, e.target.value)}
            />

            <QRCard clientId={clientId} turnId={turnId} />
          </div>
        )
      })}
    </div>
  )
}
