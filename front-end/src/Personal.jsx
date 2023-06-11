import { FaSignInAlt } from "react-icons/fa"
import { useContext } from "react"
import ProjectContext from "./ProjectContent/ProjectContext"
import { Link } from "react-router-dom"


const Personal = () => {

  const {email, setEmail, password, setPassword, username, setUsername, addUser} = useContext(ProjectContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!username, !email, !password) return
    addUser(username, email, password)
    setUsername("")
    setEmail("")
    setPassword("")
    setFetchError(null)
  }
  

  return (
    <main>
        <h1 className="text-red-400 justify-center flex pt-20">WELCOME TO LOGIN RHEACT</h1>
        <hr />
        <p className="flex justify-center text-white mt-10">Kindly input your username, email, password to sign in</p>
        <form className="flex flex-col justify-center mt-5 items-center" onSubmit={handleSubmit}>
          <section className="block">
            <label htmlFor="username" className="text-red-300 block mb-2">Username:</label>
            <input 
              type="text"
              id="username"
              required
              autoFocus
              placeholder="wixwiz"
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
              className="h-7 rounded"
            />
          </section>
          <section className="block mt-5">
            <label htmlFor="email" className="text-red-300 block mb-2">Email:</label>
            <input 
              type="email"
              id="email"
              required
              placeholder="wixwiz"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              className="h-7 rounded"
              />
          </section>
          <section className="block mt-5">
          <label htmlFor="password" className="text-red-300 block mb-2">Password:</label>
          <input 
            type="password"
            id="password"
            required
            placeholder="wixwiz"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            className="h-7 rounded"
            />
          </section>
          {username && email && password &&
            <button className="h-10 w-20 mt-16 ml-[450px]"><Link to={"market"}><FaSignInAlt className="h-8 w-8 hover:text-red-400" type="submit"/></Link></button>
          }
        </form>
    </main>
  )
}

export default Personal