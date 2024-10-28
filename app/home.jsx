import EcoFooter from "./components/EcoFooter";
// import SearchBar from "./components/SearchBar";
// import Catalog from "@/Pages/Product/Catalog";
import { Link } from "next/link";
import { productCatalogs } from "./constant";

export default function Dashboard() {
  return (
      <div className="mt-1">
        {/* Header */}

        {/* Search Bar */}
        <div className="p-4">
          <input
            type="text"
            placeholder="Mencoba mencari sesuatu?"
            className="w-full p-3 rounded-md border border-gray-300"
          />
        </div>

        {/* Banner */}
        <section className="bg-green-100 h-96 relative">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dce1f6bbe96f33f4aa0d8c1892837aa3de9fae5a6bde24715d214e473a21f914?apiKey=81aa3398288b425cae501e07d8c56af5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dce1f6bbe96f33f4aa0d8c1892837aa3de9fae5a6bde24715d214e473a21f914?apiKey=81aa3398288b425cae501e07d8c56af5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dce1f6bbe96f33f4aa0d8c1892837aa3de9fae5a6bde24715d214e473a21f914?apiKey=81aa3398288b425cae501e07d8c56af5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dce1f6bbe96f33f4aa0d8c1892837aa3de9fae5a6bde24715d214e473a21f914?apiKey=81aa3398288b425cae501e07d8c56af5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dce1f6bbe96f33f4aa0d8c1892837aa3de9fae5a6bde24715d214e473a21f914?apiKey=81aa3398288b425cae501e07d8c56af5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dce1f6bbe96f33f4aa0d8c1892837aa3de9fae5a6bde24715d214e473a21f914?apiKey=81aa3398288b425cae501e07d8c56af5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dce1f6bbe96f33f4aa0d8c1892837aa3de9fae5a6bde24715d214e473a21f914?apiKey=81aa3398288b425cae501e07d8c56af5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dce1f6bbe96f33f4aa0d8c1892837aa3de9fae5a6bde24715d214e473a21f914?apiKey=81aa3398288b425cae501e07d8c56af5&"
            className="z-0 object-cover absolute inset-0 size-full"
          />
          <div className="backdrop-blur-sm absolute flex flex-col h-full w-full items-center justify-center z-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Bagaimana Cara Mengelola Limbah?
            </h2>
            <Link href={`#`}>
              <button className="px-4 py-2 bg-green-700 text-white rounded-md">
                Lebih lanjut...
              </button>
            </Link>
          </div>
        </section>

        {/* Product Categories */}
        <section className="eco_responsive">
          {productCatalogs.map((category) => (
            <div key={category} className="my-10">
              <h2 className="text-4xl font-semibold leading-110 text-shade max-md:max-w-full">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {productsByCategory[category].map((product) => (
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
        </section>

        {/* Map Section */}
        <section className="p-4 bg-green-700 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Cari Produk Melalui Peta</h3>
          <div className="h-64 overflow-hidden bg-gray-300 rounded-md mt-4">
            <img className="w-full h-full" src="/img/under-construction.webp" alt="under construction" />
          </div>
        </section>

        {/* Community Requests */}
        <section className="p-4 bg-green-100">
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            Seseorang Mencari Limbah
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {Array(3)
              .fill()
              .map((_, index) => (
                <div key={index} className="bg-white p-4 rounded-md shadow-md">
                  <h4 className="font-semibold text-green-800">Kardus Bekas</h4>
                  <p className="text-sm text-gray-600">
                    Dibutuhkan kardus bekas untuk pengemasan...
                  </p>
                </div>
              ))}
          </div>
        </section>
        <section>
          <div className="self-stretch px-20 py-12 max-md:px-5 bg-neat-50">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto leading-[100%] max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-3 font-semibold text-neutral-800 max-md:flex-wrap">
                    <div className="text-2xl font-semibold text-accent">
                      EcoSeller’s
                    </div>
                    <div className="text-base max-md:max-w-full mt-2 text-accent">
                      Tertarik berjualan? Jadilah Penjual
                    </div>
                  </div>
                  <div className="mt-6 text-base text-accent max-md:max-w-full">
                    Cara mudah untuk menyalurkan sampah Anda ke tempat yang
                    tepat
                  </div>
                  <div className="flex gap-17 justify-between mt-6 text-base max-md:flex-wrap">
                    <a href="/seller/register">
                      <button className="justify-center px-4 py-3 font-semibold text-white rounded-xl bg-accent max-md:px-5">
                        Daftar Sekarang
                      </button>
                    </a>
                    <div className="my-auto px-20 text-neutral-800">
                      Selengkapnya
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center w-full text-2xl font-bold leading-6 whitespace-nowrap rounded-xl bg-zinc-400 text-stone-200 max-md:mt-10 max-md:max-w-full">
                  <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full min-h-[265px] max-md:px-5 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3568b84cd0c747b4f60d7f04e509968788629eb35624de8bd073de4faba6cdf1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3568b84cd0c747b4f60d7f04e509968788629eb35624de8bd073de4faba6cdf1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3568b84cd0c747b4f60d7f04e509968788629eb35624de8bd073de4faba6cdf1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3568b84cd0c747b4f60d7f04e509968788629eb35624de8bd073de4faba6cdf1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3568b84cd0c747b4f60d7f04e509968788629eb35624de8bd073de4faba6cdf1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3568b84cd0c747b4f60d7f04e509968788629eb35624de8bd073de4faba6cdf1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3568b84cd0c747b4f60d7f04e509968788629eb35624de8bd073de4faba6cdf1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3568b84cd0c747b4f60d7f04e509968788629eb35624de8bd073de4faba6cdf1?apiKey=80eb3ef8bd6249d4bcddbc661e8050c4&"
                      className="object-cover absolute inset-0 size-full"
                    />
                    <div className="flex relative gap-3 mt-5 mb-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/75495edbce83c8a2ad904e03668c08a60dd24d10dabf3ca07f04f1be91fbccd2?apiKey=81aa3398288b425cae501e07d8c56af5&"
                        className="shrink-0 aspect-[0.72] w-[46px]"
                      />
                      <div className="my-auto">EcoSell</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <EcoFooter />
      </div>
  );
}
