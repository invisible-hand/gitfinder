import React from 'react'
import {useState, useContext } from "react"
import GithubContext from '../../context/github/GithubContext'



function UserSearch() {
    const [text, setText] = useState("")

    const {users, searchUsers, clearUsers} = useContext(GithubContext)

    const handleChange = (e) => setText(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (text === "") {
            alert("please enter text")
        }
        else {
            // search for users
            searchUsers(text)
        }
    }


    return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input type="text" className='w-full pr-40 bg-gray-200 input input-lg text=black' 
                        placeholder="Search"
                        value={text}
                        onChange={handleChange}
                        />
                        <button className='absolute top-0 right-0 rounded w-36 btn-lg bg-gray-200' type="submit">
                            Go
                        </button>
                    </div>
                </div>
            </form>
        </div>
        {users.length > 0 && (
                    <div>
                    <button 
                    onClick={clearUsers}
                    className="btn btn-ghost rounded btn-lg bg-gray-200">
                        Clear
                    </button>
                </div>
        )}


        
    </div>
  )
}

export default UserSearch