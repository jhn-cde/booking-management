import { useState } from "react"

interface Target{
  name: string,
  value: any
}

const useForm = (initialState: any) => {
  const [values, setValues] = useState(initialState)
  const [initialValues, setInitialValues] = useState(initialState)

  const handleInputChange = (target: Target) => {
    setValues({
      ...values,
      [ target.name ]: target.value
    })
  }

  const toInitialState = () => {
    setValues(initialValues)
  }

  const setState = (target: any) => {
    setInitialValues(target)
    setValues(target)
  }

  return[values, handleInputChange, setState]
}

export default useForm