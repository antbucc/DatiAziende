import { FieldArrayRenderProps } from "formik";

const AddButton = ({ arrayHelpers, text }: { arrayHelpers: FieldArrayRenderProps, text: string }) => (
  <button
    className="bg-blue-500 rounded-md w-64 mt-3 text-white p-2"
    type="button"
    onClick={() => arrayHelpers.push('')}>
    {text}
  </button>
)

export default AddButton;