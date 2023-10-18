import Head from 'next/head'

import { LOREM_TEXT } from '@/common/constants/LOREM_TEXT'
import { getLayoutWithHeader } from '@/components/layout'
import { PolicyLayout } from '@/components/layout/PolicyLayout'

const TermsOfService = () => {
  return (
    <>
      <Head>
        <title>Terms of Service</title>
      </Head>
      <PolicyLayout title={'Terms of Service'} text={LOREM_TEXT} />
    </>
  )
}

TermsOfService.getLayout = getLayoutWithHeader

export default TermsOfService
