import Head from 'next/head'

import { LOREM_TEXT } from '@/common/constants/LOREM_TEXT'
import { getLayoutWithHeader } from '@/components/layout'
import { PolicyLayout } from '@/components/layout/PolicyLayout'

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <PolicyLayout title={'Privacy Policy'} text={LOREM_TEXT} />
    </>
  )
}

PrivacyPolicy.getLayout = getLayoutWithHeader

export default PrivacyPolicy
