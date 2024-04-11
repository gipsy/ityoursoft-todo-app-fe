import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Heading } from '@/components/ui/Heading'

export const metadata: Metadata = {
  title: 'Dashboard',
  ...NO_INDEX_PAGE
}

export default function Page() {
  return <div>
    <Heading title='Dashboard' />
    <div>Welcome to Dashboard page</div>
  </div>
}