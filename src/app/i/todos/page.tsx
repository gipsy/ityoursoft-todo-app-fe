import type { Metadata } from 'next'

import { Heading } from '@/components/ui/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { TodosView } from './TodosView'

export const metadata: Metadata = {
	title: 'Todos',
	...NO_INDEX_PAGE
}

export default function TasksPage() {
	return (
		<div>
			<Heading title='Todos' />
			<TodosView />
		</div>
	)
}
