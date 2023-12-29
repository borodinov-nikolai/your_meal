'use client'
import Image from 'next/image'
import React, { FC, ReactNode, useState } from 'react'
import icon_close from '@/public/icons/close.png'


interface Props {
    children?: ReactNode,
    content?: ReactNode
}


const Modal_window: FC<Props> = ({children, content}) => {
const [show, setShow] = useState<boolean>(false)

  return (
   <div className={'w-full h-max'} >
     
      <div data-tid='modal' className={'w-full h-max'} onClick={()=> setShow(true)}>{children}</div>
         { show && <>
            <div onClick={()=> setShow(false)} className={' cursor-pointer fixed top-0 left-0 h-screen w-screen bg-black opacity-80 z-40' } ></div>
            <div className={'w-max  h-max  fixed top-1/2 left-1/2  z-50 translate-x-[-50%] translate-y-[-50%]  '} >
               <div className={'w-max h-max relative'} > 
                  <div data-tid="close_btn" onClick={()=>setShow(false)} className={' cursor-pointer absolute lg:right-6 lg-top-6 sm:right-4 sm:top-4 right-[10px] top-[10px]'} >
                     <Image src={icon_close} width={24} height={24} alt='close icon'/>
                     </div>
                  {content}
               </div>
               </div>
         </>
         }
   </div>
 

   
  )
} 

export default Modal_window 