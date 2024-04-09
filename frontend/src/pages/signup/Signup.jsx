import React from 'react'
import GenderCheakBox from './GenderCheakBox';

const Signup = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="w-full p-6 rounded-lg shadow-md bg-black bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
                <h1 className="text-3xl font-semibold text-center text-gray-300">Sign-up to <span className="text-sky-300 border-slate-50">Chat App</span></h1>

                <form action="" className="mt-2">
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Full Name</span>
                        </label>
                        <input type="text" placeholder='Heet Vavadiya' className='w-full input input-bordered h-10 ' />

                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Username</span>
                        </label>
                        <input type="text" placeholder='heetvavadiya007' className='w-full input input-bordered h-10' />

                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">New Password</span>
                        </label>
                        <input type="text" placeholder='Enter new password' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Confirm Password</span>
                        </label>
                        <input type="text" placeholder='Enter  confirm password' className='w-full input input-bordered h-10' />
                    </div>

                    {/* Gender Cheak Box */}
                    <GenderCheakBox />


                    <a href="#" className='text-sm hover:underline hover:text-sky-300 mt-1 inline-block'>Already have an acoount?</a>


                    <div>
                        <button className='btn btn-block bg-sky-600 btn-sm mt-3 border-solid border-spacing-1 border-slate-600 font-bold'>Sign-up</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Signup
