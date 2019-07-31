import {
    addUser
} from './redux/actions'

console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(addUser({name: "Test", email: "test"}))

unsubscribe()