import { ArrowBackButton } from '@/components/arrowBack'
import { routes } from '@/routing/router'

interface IPolicyLayout {
  title: string
  text: string
}
export const PolicyLayout = ({ title, text }: IPolicyLayout) => {
  return (
    <div className="relative">
      <ArrowBackButton title={'Back to sign in'} href={routes.auth.login} />
      <section className="xsm:px-4 xsm:py-4 py-[71px] px-[161px] flex flex-col items-center gap-5">
        <h2 className="xsm:text-lg leading-9 font-semibold text-xl">{title}</h2>
        <article className="text-sm font-normal line-6 text-justify">{text}</article>
      </section>
    </div>
  )
}
