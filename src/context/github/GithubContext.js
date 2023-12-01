import { createContext,useReducer } from "react"
import githubReducer from "./GithubReducer"
import { type } from "@testing-library/user-event/dist/type"


const GithubContext = createContext()

const GITHUB_LINK = "https://api.github.com"
const GITHUB_TOKEN = "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"

export const GithubProvider = ({children}) => {

    const initialState = {
        users : [],
        user:{},
        loading : false
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)

    // const fetchUsers = async () => {
    //     setLoading()
    //     const response = await fetch(`${GITHUB_LINK}/users`,{
    //         headers:{
    //             Authorization:`token${GITHUB_TOKEN}`,
    //         },
    //     })


    //     const data = await response.json()
    //    dispatch({
    //     type: 'GET_USERS',
    //     payload:data,
    //    })
    // }
// ----------------------------------------------------------------------------------------


const SearchUsers = async (text) => {
    setLoading()

    const params = new URLSearchParams({
        q:text
    })

    const response = await fetch(`${GITHUB_LINK}/search/users?${params}`,{
        headers:{
            Authorization:`token${GITHUB_TOKEN}`,
        },
    })


    const {items} = await response.json()
   dispatch({
    type: 'GET_USERS',
    payload:items,
   })
}


const getUser  = async (login) => {
    setLoading()

    

    const response = await fetch(`${GITHUB_LINK}/users/${login}`,{
        headers:{
            Authorization:`token${GITHUB_TOKEN}`,
        },
    })
    if(response.status === 404 ){
        window.location('/notfount')
    }
    else{
        const data = await response.json()
            dispatch({
            type: 'GET_USER',
            payload:data,
            })
    }

    
}

const clearUser = () => dispatch ({
    type: 'CLEAR_USERS'
})

// --------------------------------------------------------------------------------
    const setLoading = () => dispatch({
        type:'SET_LOADING'
    })

    return <GithubContext.Provider value={
        {
            users:state.users,
            loader:state.loader,
            user:state.user,
            SearchUsers,
            clearUser,
            getUser
        }
    }>{children}</GithubContext.Provider>
}

export default GithubContext