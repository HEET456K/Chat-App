import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-3xl shadow-md bg-black bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 '>
                <h1 className='text-3xl font-semibold text-center text-white'>
                    Login
                    <span className='text-white'> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text font-medium text-gray-200 mt-2'>Username</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter username'
                            className='w-full input input-bordered h-10 rounded-full font-bold transform hover:scale-105 transition duration-300 ease-in-out bg-zinc-800'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text font-medium text-gray-200 mt-2'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10 rounded-full font-bold transform hover:scale-105 transition duration-300 ease-in-out bg-zinc-800'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Link to='/signup' className='text-sm text-white hover:underline hover:text-sky-300 inline-block mt-4 mb-4'>
                        {"Don't"} have an account?
                    </Link>

                    <div>
                        <button
                            type="submit"
                            className="rounded-full overflow-hidden relative w-full p-2 h-12 bg-black text-white border-none text-xl font-bold cursor-pointer z-10 group btn-block mt-1"
                            disabled={loading}
                        >
                            Login
                            {loading ? (
                                <span className="loading loading-spinner"></span>
                            ) : (
                                <div>
                                    <span className="shadow-md bg-black bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40"></span>
                                    <span className="absolute w-full h-32 -top-10 -left-0 bg-black rotate-0 transform scale-x-0 group-hover:scale-x-110 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>

                                    <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-16 z-10 pl-4 flex">
                                        Welcome! back
                                    </span>{" "}
                                </div>
                            )}
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};
export default Login;