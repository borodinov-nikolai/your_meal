import Cart from "../components/client/cart";
import Product_card from "../components/client/product_card";


export default function Home() {

const cards = [];
let quantity = 10;

while(quantity) {
  cards.push(<Product_card/>);
  quantity--
  }

  return (
    <main className={" h-[200vh]"}>
      <div
        data-tid="container"
        className={"mx-auto px-[10px] pt-[30px] xl:container"}
      >
        <div data-tid="wrapper" className={"flex flex-col"}>
          <div data-tid="cart_holder">
            <Cart />
          </div>
          <div data-tid="products" className={"pt-[30px]"}>
            <h1 data-tid="title" className={"text-[28px] font-semibold"}>
              Бургеры
            </h1>
            <div data-tid='product_cards_holder' className={''} >
              {cards}
              
              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
