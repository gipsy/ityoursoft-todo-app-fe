import { useMutation, useQueryClient } from '@tanstack/react-query'

import { todoService } from '@/services/todo.service'

export function useDeleteTodo() {
	const queryClient = useQueryClient()

	const { mutate: deleteTodo, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete todo'],
		mutationFn: (id: string) => todoService.deleteTodo(id),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['todos']
			})
		}
	})

	return { deleteTodo, isDeletePending }
}
