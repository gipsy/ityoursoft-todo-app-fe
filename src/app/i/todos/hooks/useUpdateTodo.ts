import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TypeTodoFormState } from '@/types/todo.types'

import { todoService } from '@/services/todo.service'

export function useUpdateTodo(key?: string) {
	const queryClient = useQueryClient()

	const { mutate: updateTodo } = useMutation({
		mutationKey: ['update todo', key],
		mutationFn: ({ id, data }: { id: string; data: TypeTodoFormState }) =>
			todoService.updateTodo(id, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['todos']
			})
		}
	})

	return { updateTodo }
}
