'use client'

import { DragDropContext } from '@hello-pangea/dnd'

import { COLUMNS } from './columns.data'
import { useTodoDnd } from './hooks/useTodoDnd'
import { useTodos } from './hooks/useTodos'

import { ListRowParent } from './ListRowParent'
import styles from './ListView.module.scss'

export function TodosView() {
	const { items, setItems } = useTodos()
	const { onDragEnd } = useTodoDnd()

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className={styles.table}>
				<div className={styles.header}>
					<div>Todo name</div>
					<div>Status</div>
					<div></div>
				</div>

				<div className={styles.parentsWrapper}>
					{COLUMNS.map(column => (
						<ListRowParent
							items={items}
							label={column.label}
							value={column.value}
							setItems={setItems}
							key={column.value}
						/>
					))}
				</div>
			</div>
		</DragDropContext>
	)
}