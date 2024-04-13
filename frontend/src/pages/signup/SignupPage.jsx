import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-3xl shadow-md bg-black bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 '>
                <h1 className='text-3xl font-semibold text-center text-white mb-3'>
                    Sign-Up <span className='text-white'> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base font-medium mt-1 label-text text-gray-200'>Full Name</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter fullname'
                            className='w-full input input-bordered h-10 rounded-full font-bold transform hover:scale-105 transition duration-300 ease-in-out bg-zinc-800'
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='label p-2 '>
                            <span className='text-base font-medium mt-1 label-text text-gray-200'>Username</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter username'
                            className='w-full input input-bordered h-10 rounded-full font-bold transform hover:scale-105 transition duration-300 ease-in-out bg-zinc-800'
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base font-medium mt-1 label-text text-gray-200'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10 rounded-full font-bold transform hover:scale-105 transition duration-300 ease-in-out bg-zinc-800'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base font-medium mt-2  label-text text-gray-200'>Confirm Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            className='w-full input input-bordered h-10 rounded-full font-bold transform hover:scale-105 transition duration-300 ease-in-out mb-2 bg-zinc-800'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <Link
                        to={"/login"}
                        className='text-sm hover:underline hover:text-sky-300 text-white mt-2 mb-3 inline-block'

                    >
                        Already have an account?
                    </Link>

                    <div>
                        <button
                            type="submit"
                            className="rounded-full overflow-hidden relative w-full p-2 h-12 bg-black text-white border-none text-xl font-bold cursor-pointer z-10 group btn-block mt-1"
                            disabled={loading}
                        >
                            Sign-Up
                            {loading ? (
                                <span className="loading loading-spinner"></span>
                            ) : (
                                <div>
                                    <span className="shadow-md bg-black bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40"></span>
                                    <span className="absolute w-full h-32 -top-10 -left-0 bg-black rotate-0 transform scale-x-0 group-hover:scale-x-110 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>

                                    <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-20 z-10 pl-4 flex">
                                        Welcome! {">>>"}
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
export default SignUp;
