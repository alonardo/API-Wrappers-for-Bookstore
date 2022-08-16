import { registerUser, editUser, deleteUser } from './api/user.js'
import { getUser } from './api/basicauth.js'
import { getBook } from './api/book.js'
import { CancelToken } from 'apisauce'

const token = 'aJWrL7Wnd10_bpbXUjWj-upgNRuwH3v5dR1dhGxp'
const source = CancelToken.source()

const newUser = async (cancelToken)=>{
    const user = {
        'email': 'please@gmail.com',
        'first_name': 'I miss',
        'last_name': 'Python',
        'password': '123'
    }
    const {error} = await registerUser(user, cancelToken)
    console.log(error?error: 'Registration successful.')
}

const login = async (cancelToken) =>{
    let email = 'please@gmail.com'
    let password = '123'
    const {user, error} = await getUser(email, password, cancelToken)
    console.log(error?error:'Login successful.')
    console.log(user)
}

const modUser = async (cancelToken) =>{
    const userEdit = {
        'email': '123@gmail.com',
        'last_name': 'EDIT'
    }
    const {error} = await editUser(token, userEdit, cancelToken)
    console.log(error?error:'Edit successful.')
}

const removeUser = async (cancelToken) =>{
    const {error} = await deleteUser(token, cancelToken)
    console.log(error?error: 'User successfully deleted.')
}

const book = async (cancelToken)=>{
    const {book, error} = await getBook(44, cancelToken)
    console.log(error?error:'Success.')
    console.log(book)
}

// newUser(source.token)
// login(source.token)
// modUser(source.token)
// removeUser(source.token)
// book(source.token)