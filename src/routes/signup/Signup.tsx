import Layout from '@src/components/Layout'
import SignupViewModel from '@src/viewModel/signup/SignupViewModel'

export default function Signup() {
  return (
    <Layout header={false}>
      <SignupViewModel />
    </Layout>
  )
}
