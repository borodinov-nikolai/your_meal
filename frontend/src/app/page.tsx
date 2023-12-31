import Cart from "../components/client/cart";
import Product_card from "../components/client/product_card";
import Modal_window from "../components/client/ui/modal_window";
import Product_description from "../components/client/product_description";
import { get_products } from "../api/cms_api";
import { Product } from "../interfaces/products";

export default async function Home() {
  const products = await get_products("burgers");

  const title = products?.data[0].attributes.category.data.attributes.title;

  return (
    <main>
      <div
        data-tid="container"
        className={" container  min-h-screen pb-[80px] pt-[30px] lg:pt-[50px] "}
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
              {title}
            </h1>
            <div
              data-tid="grid_wrapper"
              className={
                " mt-4 grid grid-cols-2 justify-items-center gap-[10px] sm:grid-cols-3 md:grid-cols-4 md:gap-5 lg:mt-6 lg:grid-cols-2 lg:gap-[30px]  xl:grid-cols-3"
              }
            >
              {products?.data?.map((item: Product) => {
                const { id, attributes } = item;
                const {
                  name,
                  weight,
                  price,
                  description,
                  composition,
                  energy_value,
                } = attributes;
                const image = item.attributes.image.data.attributes.url;
                return (
                  <div className={"w-full"} key={item.id}>
                    <Modal_window
                      content={
                        <Product_description
                          product={{
                            id,
                            image,
                            name,
                            price,
                            weight,
                            description,
                            energy_value,
                            composition,
                          }}
                        />
                      }
                    >
                      <Product_card
                        product={{ id, image, price, name, weight }}
                      />
                    </Modal_window>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
