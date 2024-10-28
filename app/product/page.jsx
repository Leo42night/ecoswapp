"use client";
import Link from "next/link";
import { productCatalogs } from "../constant";
import { UserAuth } from "../context/authContext";

const page = () => {
  const { currentUser, } = UserAuth();

  if (!currentUser) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed"
          disabled
        >
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Silahkan Login Terlebih Dahulu 😎
        </button>
      </div>
    ); // Optionally, show a loading spinner here
  }

  return (
    <>
      <div className="eco_responsive pt-0">
        <h1 className="text-2xl text-center my-4 font-semibold text-shade">
          Product Catalog
        </h1>
        {productCatalogs &&
          productCatalogs.map((products, index) => (
            <div key={index} className="my-10">
              <h2 className="text-4xl font-semibold leading-110 text-shade max-md:max-w-full">
                {products.category.charAt(0).toUpperCase() +
                  products.category.slice(1)}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.value.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.product_slug}`}
                    className="card card-compact hover:bg-gray-200 rounded-lg transition-all duration-200 hover:-translate-y-1"
                  >
                    <figure className="px-4 pt-4">
                      <img
                        loading="lazy"
                        className="w-full aspect-video object-cover border-base-content bg-gray-300 rounded-lg border border-opacity-5"
                        srcSet={
                          product.images[0].url.length > 1000
                            ? product.images[0].url
                            : `${product.images[0]?.url} 1x, ${product.images[1]?.url} 2x, ${product.images[2]?.url} 3x`
                        }
                        alt={`${product.name} image`}
                      />
                    </figure>
                    <div className="p-4 text-base">
                      <h3 className="mb-1 text-xl font-bold">
                        {product.name.charAt(0).toUpperCase() +
                          product.name.slice(1)}
                      </h3>
                      <div className="flex justify-between gap-2 text-xs opacity-60 border-t border-gray-300">
                        <span className="w-1/2 text-wrap font-semibold">
                          <p className="truncate">{product.shop.name}</p>
                          <p>
                            Rp{product.price}/{product.qty_per_unit}
                            {product.unit}
                          </p>
                        </span>
                        <span className="truncate-2-lines">
                          {product.shop.address}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default page;

const hallo = () => {
  return (
    <div>
      {productCatalogs.map((category) => (
        <div key={category} className="my-10">
          <h2 className="text-4xl font-semibold leading-110 text-shade max-md:max-w-full">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {productCatalogs[category].map((product) => (
              <Link
                key={product.id}
                href={route("product.show", {
                  product_slug: product.product_slug,
                })}
                className="card card-compact hover:bg-gray-200 rounded-lg transition-all duration-200 hover:-translate-y-1"
              >
                <figure className="px-4 pt-4">
                  <img
                    loading="lazy"
                    className="w-full aspect-video object-cover border-base-content bg-gray-300 rounded-lg border border-opacity-5"
                    srcSet={
                      product.images[0].url.length > 1000
                        ? product.images[0].url
                        : `${product.images[0]?.url} 1x, ${product.images[1]?.url} 2x, ${product.images[2]?.url} 3x`
                    }
                    alt={`${product.name} image`}
                  />
                </figure>
                <div className="p-4 text-base">
                  <h3 className="mb-1 text-xl font-bold">
                    {product.name.charAt(0).toUpperCase() +
                      product.name.slice(1)}
                  </h3>
                  <div className="flex justify-between gap-2 text-xs opacity-60 border-t border-gray-300">
                    <span className="w-1/2 text-wrap font-semibold">
                      <p className="truncate">{product.shop.name}</p>
                      <p>
                        Rp{product.price}/{product.qty_per_unit}
                        {product.unit}
                      </p>
                    </span>
                    <span className="truncate-2-lines">
                      {product.shop.address}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
