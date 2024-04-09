import React from 'react'

const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="w-full p-6 rounded-lg shadow-md bg-black bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
                <h1 className="text-3xl font-semibold text-center text-gray-300">Login <span className="text-blue-400 ">Chat App</span></h1>

                <form action="" className="">
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-tex font-bold">Username</span>
                        </label>
                        <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' />

                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text font-bold">Password</span>
                        </label>
                        <input type="text" placeholder='Enter password' className='w-full input input-bordered h-10' />
                    </div>

                    <a href="#" className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block'>{"Don't"} have an account?</a>

                    <div>
                        <button className='btn btn-block bg-sky-600 btn-sm mt-3 border-solid border-spacing-1 border-slate-600 font-bold'>Sign-up</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login;
