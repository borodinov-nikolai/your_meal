import { get_products } from "@/src/api/cms_api";
import Cart from "@/src/components/client/cart";
import Modal_window from "@/src/components/client/ui/modal_window";
import Product_card from "@/src/components/server/product_card";
import Product_description from "@/src/components/server/product_description";
import { Product } from "@/src/interfaces/products";




const Page = async ({ params }: { params: { slug: string } }) => {

  const products = await get_products(params.slug)

  const title = products?.data[0]?.attributes.category.data.attributes.title




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
              {title}
            </h1>
            <div
              data-tid="grid_wrapper"
              className={
                " mt-4 grid grid-cols-2 justify-items-center gap-[10px] sm:grid-cols-3 md:grid-cols-4 md:gap-5 lg:mt-6 lg:grid-cols-2 lg:gap-[30px]  xl:grid-cols-3"
              }
            >
              {products?.data?.map((item: Product) => {
                const { name, weight, image, price, description, composition, energy_value } = item.attributes
                const img = image.data.attributes.url
                return (<div key={item.id} >
                  < Modal_window content={<Product_description image={img} name={name} price={price} weight={weight}
                    description={description} energy_value={energy_value} composition={composition}
                  />}>
                    <  Product_card image={img} price={price} name={name} weight={weight} />
                  </Modal_window>
                </div>)
              })}

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page