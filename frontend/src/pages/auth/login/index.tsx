import { Link } from "react-router-dom";

export default function Login(){
    return (
        <div className="h-screen flex justify-center items-center bg-white">
            <div className="rounded-3xl w-full max-w-xl border-color g-gray-200 p-20 border border-solid border-[#EDEFF5]">
                <div className="text-center">
                    <h1 className="text-2xl">Welcome back!</h1>
                </div>
                <div className="flex flex-col mt-6 gap-5">
                    <div className="flex flex-col">
                        <span>School Url</span>
                        <input
                            type="text" 
                            className="border border-solid border-[#EDEFF5] p-3 rounded-xl mt-1"
                            placeholder="Enter school url"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span>Password</span>
                        <input
                            type="password" 
                            className="border border-solid border-[#EDEFF5] p-3 rounded-xl mt-1"
                            placeholder="Enter school url"
                        />
                    </div>
                    <div className="text-right">
                        <Link to='/forgot-password'>
                            <p className="text-[#5573EF] cursor-pointer">Forgot your pasword?</p>
                        </Link>
                    </div>
                    <div>
                        <button className="rounded-xl w-full text-[white] bg-[#5573EF] p-3">Log in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}