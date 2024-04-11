import { IBase } from "./root.types"

export enum EnumTodoStatus {
  pending = 'pending',
  progress = 'progress',
  completed = 'completed'
}

export interface ITodoResponse extends IBase {
  title?: string
  status?: EnumTodoStatus
}

export type TypeTodoFormState = Partial<Omit<ITodoResponse, 'id'>>