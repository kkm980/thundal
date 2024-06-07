"use client";

import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';

const PlayerContainer = () => {
    useEffect(() => {
        const handleMessage = (event: any) => {
            try {
                // console.log(event,"dataa"); 
                if(event.timeStamp<=5346){
                   console.log(event,"dataa"); 
                }
                
                const data = JSON.parse(event.data);
                const iframe = document.getElementById('form-iframe');
                if (data.message === 'form-dimensions' && iframe) {
                    console.log("data", data);
                    iframe.style.width = `${data.width}px`;
                    iframe.style.height = `${data.height}px`;
                }
            } catch (e) {
                console.error('Error parsing message data:', e);
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);

    return (
        <div className='my-8 border-[8px] border-homeBg rounded-[12px] mx-auto'>
            <ReactPlayer
                url='https://vimeo.com/954249762?share=copy'
                playing={true}
                loop={true}
                controls={false}
                muted={true}
                light={false}
                className="rounded-[12px]"
                style={{ borderRadius: "12px", height: "auto" }}
                id="form-iframe"
            />
        </div>
    );
};

export default PlayerContainer;
