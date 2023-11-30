import { createContext,useState } from "react"


const GithubContext = createContext()

const GITHUB_LINK = "https://api.github.com"
const GITHUB_TOKEN = "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"

export const GithubProvider = ({children}) => {

    const [users, setUsers] = useState([])
    const [loader, setLoader] = useState(true)

    const fetchUsers = async () => {
        const response = await fetch(`${GITHUB_LINK}/users`,{
            headers:{
                Authorization:`token${GITHUB_TOKEN}`,
            },
        })


        const data = await response.json()
        setUsers(data) 
        setLoader(false)
    }
    return <GithubContext.Provider value={
        {
            users,
            loader,
            fetchUsers,
        }
    }>{children}</GithubContext.Provider>
}

export default GithubContext