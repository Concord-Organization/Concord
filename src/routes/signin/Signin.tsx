import Layout from '@src/components/Layout'
import SigninViewModel from '@src/viewModel/signin/SigninViewModel'

export default function Signin() {
  return (
    <Layout header={false}>
      <SigninViewModel />
    </Layout>
  )
}
