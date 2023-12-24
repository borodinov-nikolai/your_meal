import Cart from "../components/client/cart";
import Product_card from "../components/server/product_card";
import Modal_window from "../components/client/ui/modal_window";
import Product_description from "../components/server/product_description";

export default function Home() {
  const cards = [];
  let quantity = 6;

  while (quantity) {
    cards.push( <Modal_window content={<Product_description/>} > <Product_card /></Modal_window>);
    quantity--;
  }


  

  console.log(cards)
  return (
    <main>
      <div
        data-tid="container"
        className={" container  pb-[80px] pt-[30px] lg:pt-[50px] "}
      >
        <div
          data-tid="flex_wrapper"
          className={"flex flex-col lg:flex-row lg:gap-[30px]"}
        >
          <div data-tid="cart_holder" className={"mt-[72px]"}>
            <Cart />
          </div>
          <div data-tid="products" className={"w-full pt-[30px] lg:pt-0"}>
            <h1
              data-tid="title"
              className={
                "text-[28px] font-semibold lg:text-[40px] lg:leading-[48px]"
              }
            >
              Бургеры
            </h1>
            <div
              data-tid="grid_wrapper"
              className={
                " mt-4 grid grid-cols-2 justify-items-center gap-[10px] sm:grid-cols-3 md:grid-cols-4 md:gap-5 lg:mt-6 lg:grid-cols-2 lg:gap-[30px]  xl:grid-cols-3"
              }
            >
              {cards}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
