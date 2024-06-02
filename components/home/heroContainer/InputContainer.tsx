import Button from "@/components/common/button";
import Image from 'next/image';

const InputContainer = () =>  {

  return (
    <div className="w-[434px] h-[68px] mt-12 rounded-[8px] bg-white flex justify-between items-center text-[16px] text-[black] font-regular">
      <input className="w-[220px] h-[16px] ml-[24px] text-[black] font-thin text-[16px] placeholder-black outline-none" placeholder="Enter your email"/>
      <Button text={"Sign Up"} className="w-auto h-[55px] rounded-[8px]" children={<Image src="/home/signupArrow.svg" width="24" height="24" alt="sign up" className="ml-2" />} />
    </div>
    
  )
}

export default InputContainer;