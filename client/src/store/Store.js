import { makeAutoObservable } from "mobx";

class Store {
    constructor() {
        this._column = 'Choose column'
        this._condition = 'Choose condition'
        this._columnArr = ['Label', 'Quantity', 'Distance']
        this._conditionArr = ['More', 'Less', 'Include', 'Equals']
        this._term = ''
        this._data = []
        this._currentPage = 1
        makeAutoObservable(this)
    }

    setColumn = (data) => {
        this._column = data
        this.setCondition('Choose condition')
    }
    setCondition = (data) => {
        this._condition = data
    }
    setTerm = (data) => {
        this._term = data
    }
    setData = (data) => {
        this._data = data
    }
    setCurrentPage = (data) => {
        this._currentPage = data
    }

    get table() {
        return this._table
    }

    get column() {
        return this._column
    }
    get condition() {
        return this._condition
    }
    get term() {
        return this._term
    }
    get data() {
        return this._data
    }
    get currentPage() {
        return this._currentPage
    }
    get columnArr() {
        return this._columnArr
    }
    get conditionArr() {
        if (this._column === 'Label') {
            return ['Include', 'Equals']
        }
        else return this._conditionArr 
    } // Нелогично сортировать текст по принципу "больше—меньше", поэтому оставляем для сортировки только поля "включает" и "равен"
}

export default new Store()

