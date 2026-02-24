export default function Step6({ formData }) {

  const enviar = async () => {
    await fetch("http://TU_API:1337/api/declaracions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: formData })
    })

    alert("Declaración enviada correctamente")
  }

  return (
    <div>
      <h2>Confirmar envío</h2>
      <button onClick={enviar}>Enviar Declaración</button>
    </div>
  )
}