"use client";
import { products } from "@/data/products";
import Image from "next/image";
import { useState } from "react";

export default function ProductDetails({ id }) {
  const singleProduct = products.find((product) => product.id == id);
  const {
    thumbnail: thmb,
    images,
    category,
    title,
    discountPercentage,
    price,
    description,
  } = singleProduct || {};
  const [thumbnail, setThumbnail] = useState(thmb);

  return (
    <main className="h-screen">
      <section className="bg-[#fafaf2] h-full py-20">
        <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-6 lg:flex-row items-center justify-between">
          <div className="w-[60%] border border-slate-500/20 p-4">
            <Image
              src={thumbnail}
              className="w-[400px] h-[500px] mx-auto object-cover"
              alt="iphone image"
              height={400}
              width={400}
            />

            <div className="flex mt-4">
              {images.map((image) => (
                <Image
                  onClick={() => setThumbnail(image)}
                  key={image}
                  src={image}
                  className="w-[100px] h-[100px] mx-auto border object-cover"
                  alt={image}
                  height={400}
                  width={400}
                />
              ))}
            </div>
          </div>
          <div className="w-[40%]">
            <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
              {title}
            </h1>
            <span className="text-[#919090] my-3">{category}</span>
            <div className="mt-3 flex items-center justify-start gap-1">
              <Image src="/star.svg" alt="" height={20} width={20} />
              <Image src="/star.svg" alt="" height={20} width={20} />
              <Image src="/star.svg" alt="" height={20} width={20} />
              <Image src="/star.svg" alt="" height={20} width={20} />
              <Image src="/star.svg" alt="" height={20} width={20} />
            </div>
            <hr className="my-5 bg-black" />

            <div>
              <p className="my-3 space-x-1">
                <span className="text-rose-600 opacity-60 line-through">
                  ${discountPercentage}
                </span>
                <span className="font-bold text-2xl">${price}</span>
              </p>
            </div>
            <div>
              <p className="leading-7">{description}</p>

              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                Add To Cart - ${price}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
