import {Injectable} from '@angular/core';

export class item {
  id: number
  title: string
  completed: boolean

  constructor(id: number, title: string, completed: boolean) {
    this.id = id
    this.title = title
    this.completed = completed
  }
}


@Injectable({
  providedIn: 'root'
})
export class AppstorService {
  items: item[] = [
    {id: Math.random(), title: "Learn Angular", completed: false},
    {id: Math.random(), title: "Learn React", completed: true},
    {id: Math.random(), title: "Learn Redux", completed: true},
    {id: Math.random(), title: "Learn JS", completed: true}
  ]

  onAdd(text: string) {

    return this.items.push({
      id: Math.random(),
      title: text,
      completed: false
    })
  }

  onDelete(id: number) {
    return this.items = this.items.filter((item) => item.id !== id)
  }

  claere() {
    return this.items = this.items.filter((item) => !item.completed)
  }

  getTodo() {
    return this.items
  }

  getCount() {
    return this.items.filter((i) => i.completed).length
  }

  constructor() {
  }
}
