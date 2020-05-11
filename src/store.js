import Vue from 'vue'
import Vuex from 'vuex'
import BookObject from "./assets/childrensbooks.json"

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        booksDB: BookObject.books
    },
    getters: {
        bookObjectList: state => {
            return state.booksDB
        },
        aBook: state => id => {
            return state.booksDB.find(book => book.id === id)
        }
    }
})