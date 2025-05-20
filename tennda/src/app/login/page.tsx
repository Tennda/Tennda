'use client';
import React from 'react';
import Navbar from '@/components/ui/navbar';
import { Box, Container } from '@chakra-ui/react';
import DashboardLayout from '@/layouts/loginLayout';
import { Input, Stack, Select, Button } from '@chakra-ui/react'
import Link from 'next/link';
import Image from 'next/image';
import Icon from '../../../assets/images/img_4211112_2.png'

export default function Students() {
    return (
        <div className=" min-h-screen">
            <DashboardLayout title='Students Registration'>
                <div className=' flex items-center justify-center py-1.5 relative '>

                    <section className='z-20 w-full md:w-[1000px]   px-4 overflow- md:px-10 morphic2 flex flex-col gap-5  py-10'>
                        <div className=' flex flex-col md:flex-row items-center justify-between px-4'>
                            <div className=' flex justify-center items-center text-3xl font-bold text-[#1E1E1E]  gap-2'>
                                <div className=' hidden md:block'>

                                    <Image
                                        src={Icon}
                                        alt='dfdfd'
                                        height={50}
                                        width={50}
                                        className=' hidden md:block'
                                    />
                                </div>

                                <p className='text-[#6C63FF] text-center  text-xl md:text-3xl'>
                                    Register as a Student
                                </p>
                            </div>
                            <p className=' text-[#1E1E1E] text-center text-sm md:text-lg'>Fill in your details to register in the system</p>
                        </div>

                        <form className=' morphic md:py-2 md:px-10  w-full self-center ' action="">
                            <div className='flex flex-col gap-8 md:gap-10' >
                                <div className='grid md:grid-cols-2 gap-5 '>
                                    <Input variant='filled' placeholder='Enter your matric number'
                                        _placeholder={{ color: '#000000B2', fontSize: '16px', fontWeight: '500' }}
                                        color='' background='#D7D7D7BF'
                                        size={'lg'}
                                    /> <Input variant='filled' placeholder='Enter your full name'
                                        _placeholder={{ color: '#000000B2', fontSize: '16px', fontWeight: '500' }}
                                        color='' background='#D7D7D7BF'
                                        size={'lg'}
                                    />
                                    <Select variant='filled' background='#D7D7D7BF' size='lg' _placeholder={{ color: '#000000B2', fontSize: '16px', fontWeight: '500' }} placeholder='Select your faculty' />
                                    <Select variant='filled' background='#D7D7D7BF' size='lg' _placeholder={{ color: '#000000B2', fontSize: '16px', fontWeight: '500' }} placeholder='Select your department' />
                                    <Select variant='filled' background='#D7D7D7BF' size='lg' _placeholder={{ color: '#000000B2', fontSize: '16px', fontWeight: '500' }} placeholder='Select  semester' />
                                    <Select variant='filled' background='#D7D7D7BF' size='lg' _placeholder={{ color: '#000000B2', fontSize: '16px', fontWeight: '500' }} placeholder='Select section' />
                                    <Select variant='filled' background='#D7D7D7BF' size='lg' _placeholder={{ color: '#000000B2', fontSize: '16px', fontWeight: '500' }} placeholder='Select Level' />
                                    <Input type='file' variant='filled' placeholder=''
                                        _placeholder={{ color: '#000000B2', fontSize: '16px', fontWeight: '500' }}
                                        color='' background='#D7D7D7BF'
                                        size={'lg'}
                                    />
                                </div>
                                <Select variant='filled' background='#D7D7D7BF' size='lg' _placeholder={{ color: '#000000B2', fontSize: '16px', fontWeight: '500' }} placeholder='Select your courses' />
                                <div className='flex items-center justify-center'>
                                    <Button backgroundColor='#6C63FF' size='md' variant='solid'
                                        height='48px'
                                        width='200px'
                                        className=''
                                        rounded='none'
                                    >
                                        Register
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                        </svg>

                                    </Button>
                                </div>

                                <div className=' self-center '> Already Registered?  <Link className=' text-[#6C63FF]' href='/login'>login here</Link></div>
                            </div>

                        </form>
                    </section>
                </div>

            </DashboardLayout>



        </div>

    );
}