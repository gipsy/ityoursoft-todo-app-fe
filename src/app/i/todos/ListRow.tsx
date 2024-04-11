import cn from 'clsx'
import { GripVertical, Loader, Trash } from 'lucide-react'
import type { Dispatch, SetStateAction } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { TransparentField } from '@/components/ui/fields/TransparentField'
import { SingleSelect } from '@/components/ui/todo-edit/SingleSelect'

import type { ITodoResponse, TypeTodoFormState } from '@/types/todo.types'

import { useDeleteTodo } from './hooks/useDeleteTodo'
import { useTodoDebounce } from './hooks/useTodoDebounce'

import styles from './ListView.module.scss'

interface IListRow {
	item: ITodoResponse
	setItems: Dispatch<SetStateAction<ITodoResponse[] | undefined>>
}

export function ListRow({ item, setItems }: IListRow) {
	const { register, control, watch } = useForm<TypeTodoFormState>({
		defaultValues: {
			title: item.title,
			status: item.status
		}
	})

	useTodoDebounce({ watch, itemId: item.id })

	const { deleteTodo, isDeletePending } = useDeleteTodo()

	return (
		<div
			className={cn(
				styles.row,
				watch('status') === 'completed' ? styles.completed : '',
				'animation-opacity'
			)}
		>
			<div>
				<span className='inline-flex items-center gap-2.5 w-full'>
					<button aria-describedby='todo-item'>
						<GripVertical className={styles.grip} />
					</button>

					<TransparentField {...register('title')} />
				</span>
			</div>
			<div className='capitalize'>
				<Controller
					control={control}
					name='status'
					render={({ field: { value, onChange } }) => (
						<SingleSelect
							data={['pending', 'progress', 'completed'].map(item => ({
								value: item,
								label: item
							}))}
							onChange={onChange}
							value={value || ''}
						/>
					)}
				/>
			</div>
			<div>
				<button
					onClick={() =>
						item.id ? deleteTodo(item.id) : setItems(prev => prev?.slice(0, -1))
					}
					className='opacity-50 transition-opacity hover:opacity-100'
				>
					{isDeletePending ? <Loader size={15} /> : <Trash size={15} />}
				</button>
			</div>
		</div>
	)
}
