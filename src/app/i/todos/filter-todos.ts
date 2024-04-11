import type { ITodoResponse } from '@/types/todo.types'

export const filterTodos = (
	todos: ITodoResponse[] | undefined,
	value: string
) => {
	switch (value) {
		case 'pending':
			return todos?.filter(item => item.status === 'pending')

		case 'progress':
			return todos?.filter(item => item.status === 'progress')

		case 'completed':
			return todos?.filter(item => item.status === 'completed')

		default:
			return []
	}
}
