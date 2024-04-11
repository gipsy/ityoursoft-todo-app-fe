import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { ITodoResponse } from '@/types/todo.types'

import { todoService } from '@/services/todo.service'

export function useTodos() {
	const { data } = useQuery({
		queryKey: ['todos'],
		queryFn: () => todoService.getTodos()
	})

	const [items, setItems] = useState<ITodoResponse[] | undefined>(data?.data)

	useEffect(() => {
		setItems(data?.data)
	}, [data?.data])

	return { items, setItems }
}
