import React from "react";
import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alerts/AlertContext";


function UserSearch() {
    const [text, setText] = useState("");
    const handleChange = (e) => setText(e.target.value)
    const {users,SearchUsers, clearUser} = useContext(GithubContext)
    const {setAlert} = useContext(AlertContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(text===''){
            setAlert("Please type somthing",'error')
        }
        else{
            SearchUsers(text)

            setText('')
        }
    }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-1 lg:grid-cols-1 md: grid-cols-1 mb-8 gap-8 p-2">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text
                "
                className="w-full pr-40 bg-gray-200 input input-md text-black"
                placeholder="Search" value={text} onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-md"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length>0 && (<div>
        <button onClick={clearUser} className="btn btn-ghost btn-lg">Clear</button>
      </div>)}
    </div>
  );
}

export default UserSearch;
