import InputField from "../components/InputField"

export default function Step1({ next, formData, setFormData }) {

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Información Personal
      </h2>

      <InputField label="Nombre completo" name="nombre" onChange={handleChange}/>
      <InputField label="Documento" name="documento" onChange={handleChange}/>
      <InputField label="Edad" name="edad" type="number" onChange={handleChange}/>
      <InputField label="Peso (kg)" name="peso" type="number" onChange={handleChange}/>
      <InputField label="Teléfono" name="telefono" onChange={handleChange}/>
      <InputField label="Email" name="email" type="email" onChange={handleChange}/>
      <InputField label="Dirección" name="direccion" onChange={handleChange}/>

      <div className="flex justify-end mt-6">
        <button
          onClick={next}
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-xl transition shadow-md"
        >
          Siguiente →
        </button>
      </div>
    </>
  )
}