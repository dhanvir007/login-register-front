import axios from "axios";
import { useState } from "react";

const Login = () => {

    const [data, setData] = useState({ email: "", password: "" })

    const handleChange = (e) => {
        setData((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }))


    }
    const fetchLogin = async () => {
        try {
            const response = await axios.post("https://backenedpageenode.onrender.com/api/users/login", { ...data})
            if (response) {
                console.log(response.data);
            }
        } catch (error) {
            console.log("Error in fetch login");
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        fetchLogin()
        console.log(fetchLogin());
    }
    return (
        <>
            <h1>Login</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email : </label>
                        <input type="email" placeholder="Please enter email" name="email" value={data.email} onChange={handleChange}></input>
                    </div>
                    <div>
                        <label>Password : </label>
                        <input type="password" placeholder="Please enter password" value={data.password} name="password" onChange={handleChange}></input>
                    </div>
                    <button type="Submit"> Submit</button>
                </form>
            </div>
        </>
    );
}
export default Login;