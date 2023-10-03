import axios from "axios"
import { useState } from "react"


const Register = () => {
    const [register, setRegister] = useState({ username: "", email: "", mobile: "", password: "" })

    const handleChange = (e) => {
        setRegister((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }
    const fetchRegister = async () => {
        try {
            const response = await axios.post("http://localhost:5000/api/users/register", { ...register })
            if (response) {
                console.log(response.data);
            }
        } catch (error) {
            console.log("Error in fetch register");
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetchRegister()

    }


    return (
        <>
            <h1>Register Form</h1>

            <div className="form" >
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username :</label>
                        <input typr="text" placeholder="Enter your name" name="username" value={register.username} onChange={handleChange} ></input>
                    </div>
                    <div>
                        <labe>Email  : </labe>
                        <input type="email" placeholder="Enter email" name="email" value={register.email} onChange={handleChange}></input>
                    </div>
                    <div>
                        <label>Mobile : </label>
                        <input type="number" placeholder="Mobile number" name="mobile" value={register.mobile} onChange={handleChange}></input>
                    </div>
                    <div>
                        <label>Password :</label>
                        <input type="password" placeholder="Enter Password" value={register.password} name="password" onChange={handleChange}></input>
                    </div>
                    <button type="Submit"> Submit</button>
                </form>
            </div>

        </>
    )
}





export default Register