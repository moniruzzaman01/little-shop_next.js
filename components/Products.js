import Link from "next/link";

export default function Products() {
  return (
    <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
        <div>
          <div className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-[url('/iphone.jpg')] bg-cover bg-center transition-all duration-3000 ease-in-out transform"></div>
          <h2 className="text-sm lg:text-base mt-2">
            <Link className="text-base font-bold" href="/products/{id}">
              iPhone 9
            </Link>
            <span className="text-[#919090]">
              <Link href="/category/:categoryName">(Smartphones)</Link>
            </span>
          </h2>
          <p className="text-[#919090] text-sm">
            An apple mobile which is nothing like apple
          </p>

          <p className="text-rose-600 text-sm mt-4">
            <span className="text-[#919090] line-through">$205.00</span> $195.00
          </p>
        </div>

        <div>
          <div className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-[url('/macbook-pro.png')] bg-cover bg-center transition-all duration-3000 ease-in-out transform"></div>
          <h2 className="text-sm lg:text-base mt-2">
            <Link className="text-base font-bold" href="./productPage.html">
              MacBook Pro
            </Link>
            <span className="text-[#919090]">
              <Link href="./category.html">(Laptops)</Link>
            </span>
          </h2>
          <p className="text-[#919090] text-sm">
            MacBook Pro 2021 with mini-LED display may launch between September,
            November
          </p>

          <p className="text-rose-600 text-sm mt-4">
            <span className="text-[#919090] line-through">$205.00</span> $195.00
          </p>
        </div>

        <div>
          <div className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-[url('/samsung-galaxy-book.jpg')] bg-cover bg-center transition-all duration-3000 ease-in-out transform"></div>
          <h2 className="text-sm lg:text-base mt-2">
            <Link className="text-base font-bold" href="./productPage.html">
              Samsung Galaxy Book
            </Link>
            <span className="text-[#919090]">
              <Link href="./category.html">(Laptops)</Link>
            </span>
          </h2>
          <p className="text-[#919090] text-sm">
            Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB
            of RAM Launched
          </p>

          <p className="text-rose-600 text-sm mt-4">
            <span className="text-[#919090] line-through">$205.00</span> $195.00
          </p>
        </div>

        <div>
          <div className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-[url('/perfume.jpg')] bg-cover bg-center transition-all duration-3000 ease-in-out transform"></div>
          <h2 className="text-sm lg:text-base mt-2">
            <Link className="text-base font-bold" href="./productPage.html">
              Brown Perfume
            </Link>
            <span className="text-[#919090]">
              <Link href="./category.html">(Fragrances)</Link>
            </span>
          </h2>
          <p className="text-[#919090] text-sm">
            Royal_Mirage Sport Brown Perfume for Men & Women - 120ml
          </p>

          <p className="text-rose-600 text-sm mt-4">
            <span className="text-[#919090] line-through">$205.00</span> $195.00
          </p>
        </div>
      </div>
    </section>
  );
}
