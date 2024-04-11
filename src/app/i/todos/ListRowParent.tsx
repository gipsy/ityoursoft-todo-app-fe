import { Draggable, Droppable } from '@hello-pangea/dnd'
import type { Dispatch, SetStateAction } from 'react'

import type { ITodoResponse } from '@/types/todo.types'

import { filterTodos } from './filter-todos'

import { ListAddRowInput } from './ListAddRowInput'
import { ListRow } from './ListRow'
import styles from './ListView.module.scss'

interface IListRowParent {
	value: string
	label: string
	items: ITodoResponse[] | undefined
	setItems: Dispatch<SetStateAction<ITodoResponse[] | undefined>>
}

export function ListRowParent({
	value,
	items,
	label,
	setItems
}: IListRowParent) {
	return (
		<Droppable droppableId={value}>
			{provided => (
				<div
					ref={provided.innerRef}
					{...provided.droppableProps}
				>
					<div className={styles.colHeading}>
						<div className='w-full'>{label}</div>
					</div>

					{filterTodos(items, value)?.map((item, index) => (
						<Draggable
							key={item.id}
							draggableId={item.id.toString()}
							index={index}
						>
							{provided => (
								<div
									ref={provided.innerRef}
									{...provided.draggableProps}
									{...provided.dragHandleProps}
								>
									<ListRow
										key={item.id}
										item={item}
										setItems={setItems}
									/>
								</div>
							)}
						</Draggable>
					))}

					{provided.placeholder}

					{value !== 'completed' && !items?.some(item => !item.id) && (
						<ListAddRowInput
							setItems={setItems}
							filterStatus={value ? value : undefined}
						/>
					)}
				</div>
			)}
		</Droppable>
	)
}
