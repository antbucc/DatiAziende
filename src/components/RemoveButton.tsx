import { FieldArrayRenderProps } from "formik";

const RemoveButton = ({ arrayHelpers, text, index }: { arrayHelpers: FieldArrayRenderProps, text: string, index: number }) => (
  <button
    className="bg-red-500 rounded-md ml-1 p-2 text-white"
    type="button"
    onClick={() => arrayHelpers.remove(index)}
  >
    {text}
  </button>
)

export default RemoveButton;