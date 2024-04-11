import debounce from 'lodash.debounce'
import { useCallback, useEffect } from 'react'
import { UseFormWatch } from 'react-hook-form'

import { TypeTodoFormState } from '@/types/todo.types'

import { useCreateTodo } from './useCreateTodo'
import { useUpdateTodo } from './useUpdateTodo'

interface IUseTodoDebounce {
	watch: UseFormWatch<TypeTodoFormState>
	itemId: string
}

export function useTodoDebounce({ watch, itemId }: IUseTodoDebounce) {
	const { createTodo } = useCreateTodo()
	const { updateTodo } = useUpdateTodo()

	const debouncedCreateTodo = useCallback(
		debounce((formData: TypeTodoFormState) => {
			createTodo(formData)
		}, 444),
		[]
	)

	// Now debouncedUpdateTodo will be saved between renders, and debounce will work as expected.
	const debouncedUpdateTodo = useCallback(
		debounce((formData: TypeTodoFormState) => {
			updateTodo({ id: itemId, data: formData })
		}, 444),
		[]
	)

	useEffect(() => {
		const { unsubscribe } = watch(formData => {
			if (itemId) {
				debouncedUpdateTodo({
					...formData,
					status: formData.status || undefined
				})
			} else {
				debouncedCreateTodo(formData)
			}
		})

		return () => {
			unsubscribe()
		}
	}, [watch(), debouncedUpdateTodo, debouncedCreateTodo])
}
