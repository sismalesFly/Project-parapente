import SignatureCanvas from "react-signature-canvas"
import { useRef } from "react"

export default function Step5({ next, prev, formData, setFormData }) {

    const sigRef = useRef<any>(null)

    const guardar = () => {
        const firmaRep = sigRef.current
            .getTrimmedCanvas()
            .toDataURL("image/png")

        setFormData({ ...formData, firma_representante: firmaRep })
        next()
    }

    return (
        <div>
            <h2>Autorización Representante Legal</h2>

            <input
                placeholder="Nombre representante"
                onChange={(e) => setFormData({ ...formData, representante: e.target.value })}
            />

            <div className="border-2 border-dashed rounded-xl p-4 mb-4">
                <SignatureCanvas
                    ref={sigRef}
                    penColor="black"
                    canvasProps={{ width: 400, height: 200, className: "w-full" }}
                />
            </div>

            <button onClick={prev}>Atrás</button>
            <button onClick={guardar}>Finalizar</button>
        </div>
    )
}