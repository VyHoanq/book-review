
import NewCategoryForm from "@/components/backoffice/forms/NewCategoryForm";
import FormHeader from '@/components/backoffice/model/FormHeader'

export default function NewCategory() {
  return (
    <div>
      <FormHeader title="New Categories" />
      <NewCategoryForm />
    </div>
  )
}
