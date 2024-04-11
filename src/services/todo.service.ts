import { axiosClassic } from "@/api/interceptors"
import { ITodoResponse, TypeTodoFormState } from "@/types/todo.types"

class TodoService {
  private BASE_URL = '/todos'

  async getTodos() {
    const response = await axiosClassic.get<ITodoResponse[]>(`${this.BASE_URL}`)
    return response
  }

  async createTodo(data: TypeTodoFormState) {
    const response = await axiosClassic.post(`${this.BASE_URL}`, data)
    return response
  }

  async updateTodo(id: string, data: TypeTodoFormState) {
    const response = await axiosClassic.put(`${this.BASE_URL}/${id}`, data)
    return response
  }

  async deleteTodo(id: string) {
    const response = await axiosClassic.delete(`${this.BASE_URL}/${id}`)
    return response
  }
}

export const todoService = new TodoService()