import FormHeader from '@/app/components/backoffice/model/FormHeader'
import NewBannerForm from '@/app/components/backoffice/forms/NewBannerForm'

export default function NewBanner() {

  return (
    <div>
      <FormHeader title="New Banners" />
      <NewBannerForm />
    </div>
  )
}
