import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TypeTodoFormState } from '@/types/todo.types'

import { todoService } from '@/services/todo.service'

export function useCreateTodo() {
	const queryClient = useQueryClient()

	const { mutate: createTodo } = useMutation({
		mutationKey: ['create todo'],
		mutationFn: (data: TypeTodoFormState) => todoService.createTodo(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['todos']
			})
		}
	})

	return { createTodo }
}
