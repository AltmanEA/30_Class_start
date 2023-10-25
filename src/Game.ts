import { State } from "./State"

// Класс служит для определения типа объекта game из предыдущей работы с дополнительными методами.
export class Game {
    // Состояния игры
    steps: State[]
    // Текущее состояние игры
    current: number

    constructor(
        steps: State[] = [new State()],
        current: number = 0
    ) {
        // TODO
        // Корректно инициализируйте переменные:
        this.steps = []
        this.current = 0
    }

    get state(): State {
        // TODO
        // Сеттер должен возвращать текущее состояние игры
        return new State()
    }

    clone() {
        // TODO
        // Функция должна вернуть копию объекта
        return this        
    }

    move(index: number): boolean {
        // TODO
        // Если ячейка this.cell[index] занята - возвращает false
        // Записывает в ячейку cell и возвращает true
        return true        
    }

    toStep(step: number) {
         // TODO
        // Проверяет, что в steps есть элемент с индексом step,
        //  если нет то возвращает false
        // Делает current равным step и обновляет свойство cell в board
        return true       
    }
}