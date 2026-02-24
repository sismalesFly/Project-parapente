import { useRef } from "react"
import SignatureCanvas from "react-signature-canvas"
import { useSearchParams } from "react-router-dom"

export default function Firma() {
  const sigRef = useRef<any>(null)
  const [params] = useSearchParams()

  const id = params.get("id")

  const guardarFirma = async () => {
    const firmaBase64 = sigRef.current
      .getTrimmedCanvas()
      .toDataURL("image/png")

    await fetch(`http://TU_API:1337/api/clientes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: {
          firma_imagen: firmaBase64,
          firmado: true
        }
      })
    })

    alert("Firma guardada correctamente")
  }

  return (
    <div>
      <h2>Firma aquí</h2>

      <SignatureCanvas
        ref={sigRef}
        penColor="black"
        canvasProps={{ width: 400, height: 200 }}
      />

      <button onClick={guardarFirma}>
        Guardar Firma
      </button>
    </div>
  )
}