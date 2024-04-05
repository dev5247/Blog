import React, { useState } from "react"
import { useNavigate } from "react-router"
import googleIcon from "../../assets/icon/google-color-icon.svg"
import faceBookIcon from "../../assets/icon/facebook-app-round-white-icon.svg"
import twitterIcon from "../../assets/icon/twitter-circle.svg"
import { useData } from "../../provider/AuthContext"
import { useGoogleLogin } from "@react-oauth/google"
// import axios from "axios"

const Login = () => {
    const navigate = useNavigate()
    const { setUserData } = useData();
    const [userInf, setUserInf] = useState({ email: "", password: "" });
    // const deferrdUserData = useDeferredValue(userData);
    const handleLogin = (e) => {
        const key = e.target.name;
        const data = e.target.value;
        setUserInf({ ...userInf, [key]: data })
    }
    const loginSubmit = () => {
        setUserData(userInf);
        navigate('/blog');
    }
    function handleGoogleLoginSuccess(user) {
        console.log('user', user);
    }
    const { signIn } = useGoogleLogin(
        {
            onSuccess: (user) => handleGoogleLoginSuccess(user),
            scope: 'https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.gender.read https://www.googleapis.com/auth/userinfo.profile'
        });

    return (
        <>
            <div className="m-auto flex justify-center items-center p-4">
                <div className="bg-white shadow w-full p-4 rounded shadow-md shadow-gray-400 text-gray-700 sm:w-96 ">
                    <p className="text-center pb-2 text-3xl">Welcome</p>
                    <div className="my-5">
                        <div className="pb-5 text-sm text-center">
                            <p>You don´t have an account?
                                <a href="/" className="text-blue-500">Register now!</a>
                            </p>
                        </div>
                        <div className="pb-6">
                            <input
                                name='email'
                                type="text"
                                className="block w-full p-2 rounded shadow focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                                placeholder="Email"
                                onChange={handleLogin}
                            />
                        </div>
                        <div className="pb-6">
                            <input
                                name="password"
                                type="text"
                                className="block w-full p-2 rounded shadow focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                                placeholder="Password"
                                onChange={handleLogin}
                            />
                        </div>
                        <div className="pb-5">
                            <input type="checkbox" />
                            <label >Remember password</label>
                        </div>
                        <div className="pb-5 text-right text-sm">
                            <a href="/" className="text-blue-500">Forgot your password?</a>
                        </div>

                        <button
                            className="bg-blue-500 p-2 w-full text-white rounded hover:bg-blue-700"
                            onClick={loginSubmit}
                        >
                            LogIn
                        </button>
                    </div>
                    <hr />
                    <div className="mt-8 relative flex justify-around">
                        <div className="bg-blue-800 h-12 w-12 flex justify-center items-center rounded-full text-white">
                            <img width={30} src={faceBookIcon} alt="facebook" className="fab fa-facebook text-3xl" />
                        </div>
                        <div className="bg-blue-500 h-12 w-12 flex justify-center items-center rounded-full text-white">
                            <img className="fab fa-twitter text-3xl"  alt="twitter" src={twitterIcon} />
                        </div>

                        <div onClick={() => signIn()} className=" cursor-pointer h-12 w-12 flex justify-center items-center rounded-full text-white">
                            <img className="fab fa-google text-3xl" alt="google" src={googleIcon} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login