import Cart from "../components/client/cart";
import Product_card from "../components/client/product_card";


export default function Home() {

const cards = [];
let quantity = 6;

while(quantity) {
  cards.push(<Product_card/>);
  quantity--
  }

  return (
    <main >
      <div
        data-tid="container"
        className={"mx-auto xl:px-0 pb-[80px] md:px-[64px] lg:px-[32px] px-[10px] pt-[30px] lg:pt-[50px] xl:container"}
      >
        <div data-tid="flex_wrapper" className={"flex flex-col lg:flex-row lg:gap-[30px]"}>
          <div data-tid="cart_holder" className={'mt-[72px]'}>
            <Cart />
          </div>
          <div data-tid="products" className={"pt-[30px] w-full lg:pt-0"}>
            <h1 data-tid="title" className={"text-[28px] lg:text-[40px] lg:leading-[48px] font-semibold"}>
              Бургеры
            </h1>
            <div data-tid='grid_wrapper' className={' xl:grid-cols-3 lg:gap-[30px] lg:grid-cols-2 md:gap-5 sm:grid-cols-3 justify-items-center md:grid-cols-4 grid grid-cols-2 gap-[10px] lg:mt-6  mt-4'} >
              {cards}
              
              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
