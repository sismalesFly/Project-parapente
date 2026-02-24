
import InputField from "../components/InputField"

export default function Step2({ next, prev, formData, setFormData }) {

  const handleCheck = (e:any) => {
    setFormData({
      ...formData,
      problemas_salud: {
        ...formData.problemas_salud,
        [e.target.name]: e.target.checked
      }
    })
  }

  return (
    <div>
      <h2>Información Médica</h2>

      <label>
        <InputField type="checkbox" name="problemas_cardiacos" onChange={handleCheck}/>
        Problemas cardíacos
      </label>

      <label>
        <InputField type="checkbox" name="presion_alta" onChange={handleCheck}/>
        Presión alta
      </label>

      <label>
        <InputField type="checkbox" name="diabetes" onChange={handleCheck}/>
        Diabetes
      </label>

      <label>
        <InputField type="checkbox" name="cirugias_recientes" onChange={handleCheck}/>
        Cirugías recientes
      </label>

      <label>
        <InputField type="checkbox" name="lesiones" onChange={handleCheck}/>
        Lesiones
      </label>

      <label>
        <InputField type="checkbox" name="embarazo" onChange={handleCheck}/>
        Embarazo
      </label>

      <label>
        <InputField type="checkbox" name="consumo_alcohol" onChange={handleCheck}/>
        Consumo de alcohol reciente
      </label>

      <button onClick={prev}>Atrás</button>
      <button onClick={next}>Siguiente</button>
    </div>
  )
}