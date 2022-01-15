import React from "react";

const Form = () => {
    return (
        <>
            <div className="bg-slate-200 w-full h-full pl-80 py-7 pb-0">

                <div className="bg-white  px-28 py-10 h-full w-2/3 shadow-lg rounded-md">

                    <div className="border-4 p-1 bg-gradient-to-r from-gray-200 to-blue-700">
                        <div className="h-full flex-col  p-14 border-4 bg-white rounded-2xl ">

                            <h1 className="text-2xl font-bold">
                                Tell us about you
                            </h1>

                            <p className="text-lg text-slate-600 mt-4 mb-7">
                                Please tell a bit about you as that we can personalize your onboarding experience
                            </p>
                            <p className=" text-slate-600 mt-4 mb-10">
                                You are looking for
                            </p>

                            <div className="mb-12 space-x-6">

                                <a href="./index.js" className="border-2 px-10 py-6 text-lg hover:text-blue-700 hover:border-blue-700
                            active:text-blue-900 hover:bg-neutral-100">
                                    <span className="mx-4 text-xl">
                                        <i className="fas fa-magic"></i>
                                    </span>
                                    Designs</a>
                                <a href="./index.js" className="border-2 px-10 py-6 text-lg hover:text-blue-700 hover:border-blue-700
                            active:text-blue-900 hover:bg-neutral-100">
                                    <span className="mx-4 text-xl">
                                        <i className="fas fa-file-alt"></i>
                                    </span>
                                    Projects</a>
                            </div>
                            <form className="flex-col">
                                <label for="fullname" className="block my-4 text-slate-600">Full name</label>
                                <input type="text" id="fullname" placeholder="Elizabeth Fionsa" className="block my-4 outline-blue-700 py-4 px-2 w-full text-x border-2" />

                                <label for="location" className="block my-4 text-slate-600">Location</label>

                                <input type="text" id="location" placeholder="Los Angeles" className="block my-4 outline-blue-700 py-4 px-2 w-full text-xl border-2" />

                                <label for="phone" className="block my-4 text-slate-600">Phone Number</label>

                                <input type="text" id="phone" placeholder="Enter Phone Number" className="block my-4 outline-blue-700 py-4 px-2 w-full text-xl border-2 " />

                                <button type="submit" className="block bg-blue-700 text-white py-4 px-24 w-full text-xl my-10 hover:bg-blue-600 active:bg-blue-900 outline-none">
                                    Proceed to next step
                                    <i class="fas fa-arrow-right ml-4"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form;