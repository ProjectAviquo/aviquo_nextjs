import React, { useState, useEffect } from 'react'
import { mapDimensions } from '../../../utils'
import Image from 'next/image'
import { Card as PostCard }  from './post_card'
import { Card as FollowingCard } from './following_card'

export interface ProfileProps {
    username: string;
    first_name: string;
    bio: string;
    num_followers: number;
    num_following: number;
    date_joined: string;
    handleEdit: () => void;
}

const Page:React.FC<ProfileProps> = ({
    username,
    first_name,
    bio,
    num_followers,
    num_following,
    date_joined,
    handleEdit
}) => {
    useEffect(() => {
        const useMD = () => mapDimensions('wrapper');

        // useMD();
        window.addEventListener('resize', useMD);


        return () => {
            window.removeEventListener('resize', useMD);

        };
    }, []);

    return (
        <main id="wrapper" className={`min-h-screen h-full w-full bg-snow text-midnightblue font-poppins flex flex-col items-center`}>
            <div className="bg-snow shadow-[0px_-10px_32px_rgba(0,_0,_0,_0.25)] w-full h-[8%] self-start" />
            <div className="grid grid-cols-2 pt-[8%] gap-x-2 h-auto w-2/3 self-justify-center">
                <div className="grid grid-cols-customA w-full h-full">
                    <img alt="pfp_spot" src="/image-11@2x.png" className="w-full"></img>
                    <div className="flex flex-col pl-[5%]">
                        <p className="text-2xl md:text-3xl font-bold">@{username}</p>
                        <p className="text-xl md:text-2xl font-semibold">{first_name}</p>
                        <p className="text-xl md:text-2xl line-clamp-2 max-w-[80%]">{bio}</p>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-between'>
                    <div className="flex flex-row items-center justify-start gap-[10px] text-center text-darkslateblue-300 text-lg md:text-2xl font-weight:700">
                        <div className="relative">
                            <b>{num_followers}</b>
                            <span> followers</span>
                        </div>
                        <div className="relative rounded-[50%] bg-darkslateblue-300 w-2 h-2" />
                        <div className="relative">
                            <b>{num_following}</b>
                            <span> following</span>
                        </div>
                    </div>
                    <div className="text-base inline-block text-darkslateblue-300 text-center"><b>Joined {date_joined}</b></div>
                    <button className="rounded-3xs bg-darkslateblue-200 w-[60%] h-[45%] text-center font-semibold text-white" onClick={handleEdit}>
                        Edit Profile
                    </button>

                </div>
            </div>
            <PostCard />
            <FollowingCard />
        </main>
    )
}

export default Page;