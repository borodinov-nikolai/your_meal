import Image from 'next/image'
import React from 'react'
import logo from '@/public/icons/logo.svg'
import img_burger from '@/public/images/g10.png'




const Header = () => {
  return  (
    <div data-tid='header' className={' bg-cover bg-bottom bg-[url("/images/bg.svg")] pt-[24px] h-[459px] w-full bg-no-repeat'} >
      <div data-tid='header_container' className={'xl:container mx-auto'} >
        <div data-tid='header_logo' >
             <Image className={'h-[29px] w-[150px] p-[0px] mx-auto'} src={logo} height={29} width={150} alt='logo'/>
             </div>
             <div data-tid='header_block' className={'mt-6'} >
                 <div data-tid="header_text" className={'text-center'} >
                        <h1 className={'text-[30px] leading-[36px] font-extrabold text-white'}  >Только самые <span className={'text-[#FF5C00]'} >сочные бургеры!</span></h1>
                        <p className={'text-xs text-white'} >Бесплатная доставка от 599₽</p>
                 </div>
                 <div data-tid='header_image'>
                 <Image className={'h-[203px] w-[176px]'} src={img_burger} height={290} width={255} alt='burger'/>
                 </div>
             </div>
      </div>
    </div>
  )
}

export default Header