import React from 'react'
import FormHeader from '@/components/backoffice/model/FormHeader'
import NewBannerForm from '@/components/backoffice/forms/NewBannerForm'
import { getData } from '@/lib/getData'

export default async function UpdatedBanner({params:{id}}) {
  const banner = await getData(`banners/${id}`)
  console.log(banner)
  return (
    <div>
      <FormHeader title="Updated Banner " />
      <NewBannerForm updateData={banner} />
    </div>
  )
}
