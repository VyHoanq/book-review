import FormHeader from '@/components/backoffice/model/FormHeader'
import NewBannerForm from '@/components/backoffice/forms/NewBannerForm'

export default function NewBanner() {

  return (
    <div>
      <FormHeader title="New Banners" />
      <NewBannerForm />
    </div>
  )
}
