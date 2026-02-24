import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function FormRedirect() {
  const [params] = useSearchParams()
  const [formData, setFormData] = useState({ client: "", turn: "" })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const client = params.get("c")
    const turn = params.get("t")

    if (client && turn) {
      setFormData({ client, turn })
    }
  }, [params])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Aquí iría tu llamada al backend
      // const response = await fetch("/api/form-submit", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // })

      console.log("Formulario enviado:", formData)
      setSubmitted(true)
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>✓ Formulario enviado correctamente</h2>
        <p>Tus datos han sido registrados</p>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="client">Cliente ID:</label>
          <input
            type="text"
            id="client"
            name="client"
            value={formData.client}
            onChange={handleChange}
            required
            disabled={params.get("c") ? true : false}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="turn">Turno:</label>
          <input
            type="text"
            id="turn"
            name="turn"
            value={formData.turn}
            onChange={handleChange}
            required
            disabled={params.get("t") ? true : false}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  )
}