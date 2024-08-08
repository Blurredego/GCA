'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ApplicationForm = () => {
    const [page, setPage] = useState(1);
    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission
    };

    const nextPage = async () => {
        const result = await trigger(); // Trigger validation
        if (result) {
            setPage(page + 1);
        }
    };

    const prevPage = () => {
        setPage(page - 1);
    };

    return (
        <div className=" container  mt-5   rounded ">
            <div className="flex flex-col justify-center gap-5 text-center">
                <h3>Types of Membership</h3>
                <span className="flex items-center justify-center gap-2">
                    <p className="text-nowrap font-bold">Membership to Enroll</p>
                    <select className="red form-select w-[120px]  border p-2  text-white">
                        <option>Ordinary</option>
                        <option>Approve</option>
                        <option>Classics</option>
                    </select>
                </span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-[60px] space-y-6 p-5 shadow-lg  lg:p-20">
                {page === 1 && (
                    <>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="underline_select" className="sr-only">
                                    Underline select
                                </label>
                                <select
                                    {...register('industryClassification', { required: 'Industry Classification is required' })}
                                    id="underline_select"
                                    className="peer block w-full appearance-none border-b-2 border-gray-600 bg-transparent px-0 py-2.5 text-sm text-gray-500 focus:border-gray-200 focus:outline-none focus:ring-0"
                                >
                                    <option value="">Industry Classification</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                                {errors.industryClassification && <p className="text-red-500">{errors.industryClassification.message}</p>}
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input type="text" {...register('staffStrength')} className="input-Style peer w-full" placeholder="Staff Strength of Company" />
                                <label className="input-style-label">Staff Strength of Company</label>
                            </div>
                            <h3 className="mb-6 text-2xl font-bold">Details of Applicant Company</h3>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input type="text" {...register('contactPerson1', { required: 'Contact Person 1 is required' })} className="input-Style peer w-full" placeholder="Contact Person 1*" />
                                <label className="input-style-label">
                                    Contact Person 1<span className="text-red-500"> *</span>
                                </label>
                                {errors.contactPerson1 && <p className="text-red-500">{errors.contactPerson1.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="underline_select_2" className="sr-only">
                                    Underline select
                                </label>
                                <select
                                    {...register('companyType', { required: 'Company Type is required' })}
                                    id="underline_select_2"
                                    className="peer block w-full appearance-none border-b-2 border-gray-600 bg-transparent px-0 py-2.5 text-sm text-gray-500 focus:border-gray-200 focus:outline-none focus:ring-0"
                                >
                                    <option value="">Company Type</option>
                                    <option value="Private">Private</option>
                                    <option value="Public">Public</option>
                                </select>
                                {errors.companyType && <p className="text-red-500">{errors.companyType.message}</p>}
                            </div>

                            <div className="relative h-11 w-full min-w-[200px]">
                                <input type="text" {...register('designation1', { required: 'Designation is required' })} className="input-Style peer w-full" placeholder="Designation*" />
                                <label className="input-style-label">
                                    Designation<span className="text-red-500"> *</span>
                                </label>
                                {errors.designation1 && <p className="text-red-500">{errors.designation1.message}</p>}
                            </div>

                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    type="text"
                                    {...register('Ref1', { required: 'Name of Applicant Company is required' })}
                                    className="input-Style peer w-full"
                                    placeholder="Name of Applicant Company"
                                />
                                <label className="input-style-label">Name of Applicant Company</label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    type="email"
                                    {...register('email1', {
                                        required: 'Email Address is required',
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: 'Invalid email address',
                                        },
                                    })}
                                    className="input-Style peer w-full"
                                    placeholder="Email Address*"
                                />
                                <label className="input-style-label">
                                    Email Address<span className="text-red-500"> *</span>
                                </label>
                                {errors.email1 && <p className="text-red-500">{errors.email1.message}</p>}
                            </div>

                            <div className="relative h-11 w-full min-w-[200px]">
                                <input type="text" {...register('mainOfficeAddress')} className="input-Style peer w-full" placeholder="Address of Main Office" />
                                <label className="input-style-label">Address of Main Office</label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input type="text" {...register('office1')} className="input-Style peer w-full" placeholder="Office" />
                                <label className="input-style-label">Office</label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input type="text" {...register('billingAddress')} className="input-Style peer w-full" placeholder="Billing Address" />
                                <label className="input-style-label">Billing Address</label>
                            </div>

                            <div className="relative h-11 w-full min-w-[200px]">
                                <input type="tel" {...register('mobile1', { required: 'Mobile is required' })} className="input-Style peer w-full" placeholder="Mobile*" />
                                <label className="input-style-label">
                                    Mobile<span className="text-red-500"> *</span>
                                </label>
                                {errors.mobile1 && <p className="text-red-500">{errors.mobile1.message}</p>}
                            </div>

                            <div className="flex w-full flex-col items-start justify-start gap-4">
                                <span className="flex w-full">
                                    <input type="checkbox" {...register('sameAsMainAddress')} className="mr-2" />
                                    <label className="text-sm text-gray-700">Same as Main Address</label>
                                </span>

                                <span className="relative h-11 w-full min-w-[200px]">
                                    <input type="text" {...register('correspondenceAddress')} className="input-Style peer w-full" placeholder="Correspondence Address (if differs from above)" />
                                    <label className="input-style-label">Correspondence Address (if differs from above)</label>
                                    {errors.correspondenceAddress && <p className="text-red-500">{'Correspondence Address required'}</p>}
                                </span>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input type="text" {...register('contactPerson2')} className="input-Style peer w-full" placeholder="Contact Person 2" />
                                <label className="input-style-label">Contact Person 2</label>
                            </div>
                        </div>

                        <h2 className="mb-6 mt-8 text-2xl font-bold">Contact Details</h2>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input type="tel" {...register('telephoneNumber')} className="input-Style peer w-full" placeholder="Telephone Number" />
                                <label className="input-style-label">Telephone Number</label>
                            </div>

                            <div className="relative h-11 w-full min-w-[200px]">
                                <input type="email" {...register('email2')} className="input-Style peer w-full" placeholder="Email Address" />
                                <label className="input-style-label">Email Address</label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input type="tel" {...register('faxNumber')} className="input-Style peer w-full" placeholder="Fax " />
                                <label className="input-style-label">Fax </label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input type="text" {...register('containerTrading')} className=" input-Style peer w-full" placeholder="Are you involved in container trading?" />
                                <label className="input-style-label">Are you involved in container trading?</label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    type="email"
                                    {...register('companyEmail', { required: 'Company Email is required' })}
                                    className=" input-Style peer w-full"
                                    placeholder="Email Address of Company*"
                                />
                                <label className="input-style-label">
                                    Email Address of Company <span className="text-red-500"> *</span>
                                </label>
                                {errors.companyEmail && <p className="text-red-500">{errors.companyEmail.message}</p>}
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input type="text" {...register('socContract')} className=" input-Style peer w-full" placeholder="Do you have SOC contract with Shipping line?" />
                                <label className="input-style-label">Do you have SOC contract with Shipping line?</label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    type="text"
                                    {...register('companyInfo', { required: 'company Information is required' })}
                                    className=" input-Style peer w-full"
                                    placeholder="Company Information*"
                                />
                                <label className="input-style-label">
                                    Company Information <span className="text-red-500"> *</span>
                                </label>
                                {errors.companyInfo && <p className="text-red-500">{errors.companyInfo.message}</p>}
                            </div>
                           
                            <div className=" flex justify-center space-x-4 max-sm:hidden">
                                <div className="flex flex-col items-center">
                                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-300">
                                        <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-gray-600 px-3 text-center">Company's Business Registration Certificate*</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-300">
                                        <svg className="h-6 w-6 text-gray-600 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-gray-600 px-3 text-center">ID Of The Beneficial Owner</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-300">
                                        <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-gray-600  text-center ">Logo<br/><span className='text-nowrap'> Of Company*</span></span>
                                </div>
                            </div>
                            <div className="relative max-sm:mt-1 -mt-5 h-11 w-full min-w-[200px]">
                                <input
                                    type="url"
                                    {...register('companyWebsite', { required: 'company website is required' })}
                                    className=" input-Style peer w-full"
                                    placeholder="Website Address of Company*"
                                />
                                <label className="input-style-label">
                                    Website Address of Company <span className="text-red-500"> *</span>
                                </label>
                                {errors.companyWebsite && <p className="text-red-500">{errors.companyWebsite.message}</p>}
                            </div>
                        </div>
                    </>
                )}
                {page === 2 && (
                    <>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <h2 className="mb-6 text-2xl font-bold">Reference 1</h2>
                            <h2 className="mb-6 text-2xl font-bold">Reference 2</h2>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input type="text" {...register('companyNameRef1')} className=" input-Style peer w-full" placeholder="company Name" />
                                <label className="input-style-label">company Name</label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input type="text" {...register('companyNameRef2')} className=" input-Style peer w-full" placeholder="company Name" />
                                <label className="input-style-label">company Name</label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input type="email" {...register('emailRef1')} className=" input-Style peer w-full" placeholder="Email" />
                                <label className="input-style-label">Email</label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input type="email" {...register('emailRef2')} className=" input-Style peer w-full" placeholder="Email" />
                                <label className="input-style-label">Email</label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input type="number" {...register('numberRef1')} className=" input-Style peer w-full" placeholder="Number" />
                                <label className="input-style-label">Number</label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input type="number" {...register('numberRef2')} className=" input-Style peer w-full" placeholder="Number" />
                                <label className="input-style-label">Number</label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input type="text" {...register('contactPersonRef1')} className=" input-Style peer w-full" placeholder="Contact Person" />
                                <label className="input-style-label">Contact Person</label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input type="text" {...register('contactPersonRef2')} className=" input-Style peer w-full" placeholder="Contact Person" />
                                <label className="input-style-label">Contact Person</label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input type="text" {...register('designationRef1')} className=" input-Style peer w-full" placeholder="Designation" />
                                <label className="input-style-label">Designation</label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input type="text" {...register('designationRef2')} className=" input-Style peer w-full" placeholder="Designation" />
                                <label className="input-style-label">Designation</label>
                            </div>
                        </div>
                    </>
                )}

                <div className="mt-28 flex justify-between">
                    {page > 1 && (
                        <button type="button" onClick={prevPage} className="rounded-md bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400">
                            Previous
                        </button>
                    )}
                    <div className={`flex w-full  ${page < 2 ? 'justify-end ' : 'justify-center max-md:justify-end'} `}>
                        {page < 2 ? (
                            <button type="button" onClick={nextPage} className="w-1/2 rounded-md red px-4 py-3 max-md:py-2 font-bold text-white hover:bg-red-700">
                                Next
                            </button>
                        ) : (
                            <button type="submit" className="w-1/2 rounded-md red px-4 py-3 max-md:py-2  text-white hover:bg-red-700">
                                Submit
                            </button>
                        )}
                    </div>
                </div>
            </form>
            <div className="mt-16 flex  justify-center gap-2">
                <div className={`h-4 w-4 ${page < 2 ? 'red' : 'bg-gray-400'}  rounded-full`}></div>
                <div className={`h-4 w-4 ${page > 1 ? 'red' : 'bg-gray-400'} rounded-full`}></div>
            </div>
        </div>
    );
};

export default ApplicationForm;
