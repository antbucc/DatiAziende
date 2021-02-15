import { Field } from 'formik';


const InputText = ({type, name} : {type: string, name: string}) => {
  return (
    <Field type={type} name={name} className="pl-2 rounded py-2 bg-blue-100 text-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-700 border border-blue-600" />
  )
}

export default InputText;