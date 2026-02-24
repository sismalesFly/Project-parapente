export default function Step3({ next, prev, formData, setFormData }) {

  return (
    <div>
      <h2>Declaración</h2>

      <div style={{height: 200, overflowY: "scroll", border: "1px solid gray"}}>
        Aquí va todo el texto legal completo de tu documento...
      </div>

      <label>
        <input 
          type="checkbox"
          onChange={(e)=> setFormData({...formData, acepta_terminos: e.target.checked})}
        />
        Acepto los términos y condiciones
      </label>

      <button onClick={prev}>Atrás</button>
      <button disabled={!formData.acepta_terminos} onClick={next}>
        Continuar
      </button>
    </div>
  )
}