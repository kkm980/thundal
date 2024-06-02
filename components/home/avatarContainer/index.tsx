import React from 'react';
import BlinkAvatar from '../blinkAvatar';
import TiltContainer from '@/components/common/TiltContainer';

/**
 * AvatarContainer Component
 * 
 * This component renders a container with BlinkAvatars inside, wrapped in a TiltContainer for parallax effect.
 * 
 * @returns {JSX.Element} The AvatarContainer component.
 */
const AvatarContainer: React.FC = (): JSX.Element => {
    return (
        <TiltContainer>
            <div className="w-[250px] h-[330px] flex justify-evenly items-between flex-wrap relative">
                {[...Array(12)].map((_, index) => {
                    // Generates a random number between 0 and 6
                    return (
                        <div key={index} className='w-[80px] h-[80px] border border-[#048c80] rounded-md'>
                            <BlinkAvatar />
                        </div>
                    );
                })}
                {/* Background overlays */}
                <div className={`w-[250px] h-[330px] rounded-md absolute`} style={{
                    backgroundImage: `url("/home/blinkIcons/overlay.svg")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}></div>
                <div className={`w-[250px] h-[330px] rounded-md absolute`} style={{
                    backgroundImage: `url("/home/blinkIcons/greyOver.svg")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}></div>
            </div>
        </TiltContainer>
    );
};

export default AvatarContainer;
