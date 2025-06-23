import { useState } from 'react';
import { Step1 } from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const initialState = {
    name: '',
    email: '',
    phone: '',
    skills: ''
}

const MultistepForm = () => {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState(initialState)

    const next = () => {
        setStep(step + 1)
    }
    const prev = () => {
        setStep(step - 1)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSkills: ${formData.skills}`
        );
        handleReset()
    }

    const handleReset = () => {
        setFormData(initialState)
        setStep(1)
    }

    switch (step) {
        case 1:
            return <Step1 formData={formData} step={step} next={next} handleChange={handleChange} />
        case 2:
            return <Step2 formData={formData} step={step} next={next} prev={prev} handleChange={handleChange} />
        case 3:
            return <Step3 formData={formData} step={step} prev={prev} handleChange={handleChange} handleSubmit={handleSubmit} handleReset={handleReset} />
        default:
            return null
    }
}

export default MultistepForm;
