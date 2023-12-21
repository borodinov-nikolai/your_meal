import Cart from "../components/client/cart";

export default function Home() {
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
          </div>
        </div>
      </div>
    </main>
  );
}
