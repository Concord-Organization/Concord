import Layout from '@src/components/Layout'
import HomeViewModel from '@src/viewModel/home/HomeViewModel'

import React from 'react'

export default function Home() {
  return (
    <Layout header>
      <HomeViewModel />
    </Layout>
  )
}
