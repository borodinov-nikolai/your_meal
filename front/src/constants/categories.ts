import img_burgers from '@/public/icons/Бургеры.png'
import img_snacks from '@/public/icons/Закуски.png'
import img_hotdogs from '@/public/icons/Хот-доги.png'
import img_combos from '@/public/icons/Комбо.png'
import img_shawarma from '@/public/icons/Шаурма.png'
import img_pizza from '@/public/icons/Пицца.png'
import img_wok from '@/public/icons/Вок.png'
import img_deserts from '@/public/icons/Десерты.png'
import img_souses from '@/public/icons/Соусы.png'
import { StaticImageData } from 'next/image'



type Category = {
    id: number,
    icon?: StaticImageData,
    name: string
}


const categories : Category[] = [
    {id:1, icon:img_burgers, name:'Бургеры'},
    {id:2, icon:img_snacks, name:'Закуски'},
    {id:3, icon:img_hotdogs, name:'Хот-доги'},
    {id:4, icon:img_combos, name:'Комбо'},
    {id:5, icon:img_shawarma, name:'Шаурма'},
    {id:6, icon:img_pizza, name:'Пицца'},
    {id:7, icon:img_wok, name:'Вок'},
    {id:8, icon:img_deserts, name:'Десерты'},
    {id:9, icon:img_souses, name:'Соусы'},
]


export default categories