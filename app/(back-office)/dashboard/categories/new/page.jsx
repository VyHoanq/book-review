
import NewCategoryForm from "@/app/components/backoffice/forms/NewCategoryForm";
import FormHeader from '@/app/components/backoffice/model/FormHeader'

export default function NewCategory() {
  return (
    <div>
      <FormHeader title="New Categories" />
      <NewCategoryForm />
    </div>
  )
}
