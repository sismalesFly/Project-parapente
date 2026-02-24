import QRCode from "qrcode"
import { useEffect, useRef } from "react"

type Props = {
  clientId: string
  turnId: string
}

export default function QRCard({ clientId, turnId }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const url = `http://192.168.1.4:3000/form?c=${clientId}&t=${turnId}`
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, url, { width: 220 })
    }
  }, [clientId, turnId])

  return (
    <div style={{ border: "1px solid #ccc", padding: 10 }}>
      <canvas ref={canvasRef} />
      <p>{clientId}</p>
    </div>
  )
}
