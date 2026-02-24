import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4 from "./Step4"
import Step5 from "./Step5"
import Step6 from "./Step6"

export default function FormWizard() {
  const [step, setStep] = useState(1)

  const [formData, setFormData] = useState<any>({
    problemas_salud: {}
  })

  const totalSteps = formData.edad < 18 ? 6 : 5
  const progress = (step / totalSteps) * 100

  const next = () => setStep(step + 1)
  const prev = () => setStep(step - 1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-4">
      
      <div className="w-full max-w-2xl">

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Card */}
        <div className="bg-white shadow-xl rounded-2xl p-8">

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
            >
              {step === 1 && <Step1 next={next} formData={formData} setFormData={setFormData} />}
              {step === 2 && <Step2 next={next} prev={prev} formData={formData} setFormData={setFormData} />}
              {step === 3 && <Step3 next={next} prev={prev} formData={formData} setFormData={setFormData} />}
              {step === 4 && <Step4 next={next} prev={prev} formData={formData} setFormData={setFormData} />}
              {step === 5 && formData.edad < 18 && (
                <Step5 next={next} prev={prev} formData={formData} setFormData={setFormData} />
              )}
              {step === totalSteps && <Step6 formData={formData} />}
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </div>
  )
}