import SignatureCanvas from "react-signature-canvas"
import { useRef } from "react"

export default function Step4({ next, prev, formData, setFormData }) {

    const sigRef = useRef<any>(null)

    const guardarFirma = () => {
        const firma = sigRef.current
            .getTrimmedCanvas()
            .toDataURL("image/png")

        setFormData({ ...formData, firma_cliente: firma })
        next()
    }

    return (
        <div>
            <h2>Firma del Cliente</h2>
            <div className="border-2 border-dashed rounded-xl p-4 mb-4">
                <SignatureCanvas
                    ref={sigRef}
                    penColor="black"
                    canvasProps={{ width: 400, height: 200, className: "w-full" }}
                />
            </div>

            <button onClick={prev}>Atrás</button>
            <button onClick={guardarFirma}>Continuar</button>
        </div>
    )
}