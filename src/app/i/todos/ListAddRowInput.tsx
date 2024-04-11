import { type Dispatch, type SetStateAction } from 'react'

import { EnumTodoStatus, ITodoResponse } from '@/types/todo.types'

import styles from './ListView.module.scss'

interface IListAddRowInput {
	filterStatus?: string
	setItems: Dispatch<SetStateAction<ITodoResponse[] | undefined>>
}

export function ListAddRowInput({ setItems, filterStatus }: IListAddRowInput) {
	const addRow = () => {
		setItems(prev => {
			if (!prev) return

			return [
				...prev,
				{
					id: '',
					title: '',
					status: filterStatus as EnumTodoStatus
				}
			]
		})
	}

	return (
		<div className={styles.addRow}>
			<button
				onClick={addRow}
				className='italic opacity-40 text-sm'
			>
				Add todo...
			</button>
		</div>
	)
}
