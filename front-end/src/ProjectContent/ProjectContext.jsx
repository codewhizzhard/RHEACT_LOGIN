import { createContext } from "react";
import { useState, useEffect } from "react";
import api from "../api/posts"
import PRODUCTS from "../products";

const ProjectContext = createContext({})

export const ContextProvider = ({children}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [users, setUsers] = useState([])
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/users")
        setUsers(response.data)
      } catch (err) {
          if (err.response) {console.log(err.response.message)
          } 
          }
      }
    fetchData()
  }, [])

  const addUser = async (username, email, password) => {
    const id = users.length ? users[users.length - 1].id + 1 : 1
    const myNewUser = { id, username, email, password }

    try {
      const response = await api.post("/users", myNewUser) 
      const listUsers = [...users, response.data]
      setUsers(listUsers)
    } catch (err) {
      if (response) setFetchError(err.response)
    }
  }

  const getDefaultProduct = () => {
    let product = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      product[i] = 0
    }
    return product
  }

  const [products, setProducts] = useState(getDefaultProduct())

  const getTotalAmount = () => {
    let totalAmount = 0
    for (const item in products) {
      if (products[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
        totalAmount += products[item] * itemInfo.price
    }}
    return totalAmount
  }

  const addProduct = (itemId) => {
    setProducts((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  }

  const removeProduct = (itemId) => {
    setProducts((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }

  const projectValue = {email, setEmail, password, setPassword, username, setUsername, fetchError, addUser, removeProduct, addProduct, products, getTotalAmount}


  return (
    <ProjectContext.Provider
      value={projectValue}
    >{children}</ProjectContext.Provider>
  )
}

export default ProjectContext