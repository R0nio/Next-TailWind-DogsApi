'use client'

import picture from '../img/LoadingBlurDog.jpg';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export const DogCard = ({breed}) =>{
    const [imageSrc, setImageSrc] = useState(picture);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchImage = async () =>{
            try{
                const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
                const data = await response.json();
                setImageSrc(data.message);
            } catch (error) {
                console.error('Error', error);
            } finally{
                setLoading(false);
            }
        };

        fetchImage();
    }, []);

  return(
    <div >
      <Image src={imageSrc} alt='alt' className='rounded-[50px] w-[263px] h-[189px]' width={263} height={189} />
      {loading && (
                <div className="absolute inset-0 flex items-center justify-center
                 bg-white bg-opacity-50">
                    Loading...
                </div>
            )}
    </div>
  )
}