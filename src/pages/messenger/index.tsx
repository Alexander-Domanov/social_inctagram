import Head from 'next/head'

import { getGlobalLayout } from '@/components/layout'
import { useTranslation } from '@/components/translation'

const Messenger = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t.messenger.headTitle}</title>
      </Head>
      <div className="text-light-100 w-full pt-3 font-normal leading-6 flex justify-center">
        <span>There is a development on messenger</span>
      </div>
    </>
  )
}

Messenger.getLayout = getGlobalLayout
export default Messenger
