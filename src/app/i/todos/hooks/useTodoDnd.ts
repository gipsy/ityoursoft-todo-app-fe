import { DropResult } from '@hello-pangea/dnd'

import { useUpdateTodo } from './useUpdateTodo'
import { EnumTodoStatus } from '@/types/todo.types'

export function useTodoDnd() {
	const { updateTodo } = useUpdateTodo()

	const onDragEnd = (result: DropResult) => {
		if (!result.destination) return

		const destinationColumnId = result.destination.droppableId

		if (destinationColumnId === result.source.droppableId) return

		updateTodo({
			id: result.draggableId,
			data: {
				status: destinationColumnId as EnumTodoStatus
			}
		})
	}

	return { onDragEnd }
}
