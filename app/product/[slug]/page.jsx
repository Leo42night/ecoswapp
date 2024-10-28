"use client";
import React, { useEffect, useState } from 'react';
import { productBySlug } from '@/app/constant';
import { UserAuth } from "./../../context/authContext";
import { useRouter } from 'next/navigation';

const page = ({params}) => {
  const { currentUser } = UserAuth();
  const router = useRouter();

  useEffect(() => {
    // Check if there is no currentUser
    if (!currentUser) {
      router.push('/'); // Redirect to the home page
    }
  }, [currentUser, router]);

  // If currentUser is null, you can optionally return null or a loading state
  if (!currentUser) {
    return <p>Redirecting...</p>; // Optional: Show a message or loading state
  }

  const unwrappedParams = React.use(params);
// Find the product data based on params.slug
const productData = productBySlug.find((product) => product.slug === unwrappedParams.slug);
const product = productData ? productData.product : null;
  
  
  // State to manage the active image index
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const handleBack = () => {
    window.history.back(); // Navigate back to the previous page
  };

  // function to change active image index
  const changeActiveImageIndex = (index) => {
    setActiveImageIndex(index);
  };

  // State to manage how many reviews are shown initially
  const [visibleReviews, setVisibleReviews] = useState(1);

  // Function to load more reviews
  const loadMoreReviews = () => {
    setVisibleReviews((prev) => prev + 2); // Increase the number of visible reviews by 2 each time
  };

  // function to load less reviews
  const loadLessReviews = () => {
    setVisibleReviews(1); // Decrease the number of visible back to 1
  };

  

  if(!productData) {
    return (
      <div className='h-screen w-full flex justify-center items-center'>
        <p className='text-3xl font-extrabold'>Data product tidak ditemukan 🙇‍♂️</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 p-4 md:p-8">
      {/* Header */}
      <div className="flex items-center text-lg font-semibold text-gray-600 mb-4">
        <button onClick={handleBack} className="mr-2 text-2xl">
          &larr; Back
        </button>
        <h1>Detail Produk</h1>
      </div>

      {/* Product Section */}
      <div className="bg-white shadow-md rounded-lg p-6 md:flex md:space-x-6">
        <div className="basis-1/3 flex flex-wrap">
          {product.image && (
            <>
              {/* Main image */}
              <img
                loading={
                  product.image[activeImageIndex].url.length > 1000
                    ? "lazy"
                    : undefined
                }
                src={product.image[activeImageIndex].url}
                srcSet={
                  product.image[activeImageIndex].url.length > 1000
                    ? product.image[activeImageIndex].url
                    : undefined
                }
                alt={`${product.name} image`}
                className="w-full aspect-video object-cover rounded-md"
              />

              {/* Additional images */}
              <div className="mt-2 w-full max-w-full flex overflow-hidden focus:overflow-x-scroll hover:overflow-x-scroll justify-between gap-2">
                {product.image.map((image, index) => (
                  <img
                    key={index}
                    onClick={() => changeActiveImageIndex(index)}
                    loading={image.url.length > 1000 ? "lazy" : undefined}
                    src={image.url}
                    srcSet={image.url.length > 1000 ? image.url : undefined}
                    alt={`${product.name} image ${index + 1}`}
                    className={`${
                      activeImageIndex === index ? "border-4" : ""
                    } h-16 w-16 rounded-md`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        <div className="basis-2/3 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <div className="text-green-600 font-medium mb-2">
            {product.category}
          </div>
          <div className="flex items-center text-gray-500 mb-2">
            <span>{product.transactionCount} Terjual &nbsp;•&nbsp;</span>
            <span>{product.rating} ⭐ &nbsp;•&nbsp;</span>
            <span>{product.reviews.length} Ulasan</span>
          </div>
          <p className="text-3xl font-semibold text-green-700 mb-4">
            Rp {product.price}/{product.qty_per_unit} {product.unit}
          </p>
          <p className="text-red-500 mb-2">
            Minimal pembelian {product.qty_per_unit} {product.unit}
          </p>

          <div className="flex items-center space-x-2">
            <input
              type="number"
              className="w-16 p-1 border rounded text-center"
              defaultValue="10"
            />
            <span>{product.unit}</span>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md">
              Beli
            </button>
          </div>

          <p className="mt-4 text-gray-500 leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>

      {/* Seller Section */}
      <div className="bg-green-100 mt-6 p-4 rounded-lg flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-gray-300" />
        <div>
          <div className="flex items-center">
            <h3 className="font-bold">{product.shop.name}</h3>{" "}
            <span className="text-opacity-70 text-xs italic">
              {" "}
              • {product.shop.followers} Followers
            </span>
          </div>
          <p className="text-gray-600">{product.shop.address}</p>
        </div>
        <div className="ml-auto space-x-2">
          <button className="bg-white border border-green-600 text-green-600 px-4 py-1 rounded-md">
            Follow
          </button>
          <button className="bg-green-600 text-white px-4 py-1 rounded-md">
            Chat
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Penilaian</h2>

        {/* Review */}
        {product.reviews.slice(0, visibleReviews).map((review, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-300" />
              <div>
                <p className="font-semibold">{review.username}</p>
                <div className="text-sm text-gray-500 flex items-center">
                  <span>{`⭐`.repeat(Math.round(review.rating))} </span>
                  <span className="ml-2">{review.datetime}</span>
                </div>
              </div>
            </div>
            <p className="mt-2 text-gray-600">{review.comment}</p>

            {/* Seller Reply */}
            {review.replies.length > 0 &&
              review.replies.map((reply, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-3 rounded-md mt-4 text-sm transition-all duration-300 ease-in-out"
                >
                  <p className="font-semibold">
                    {reply.shop_name}{" "}
                    <span className="text-gray-500">Seller</span>
                  </p>
                  <p className="text-gray-600">{reply.reply}</p>
                </div>
              ))}
          </div>
        ))}

        {/* Load More Button */}
        {visibleReviews < product.reviews.length ? (
          <button
            onClick={loadMoreReviews}
            className="text-green-600 font-medium mt-4 transition-all duration-300 ease-in-out hover:text-green-800 hover:scale-105"
          >
            Ulasan Lainnya
          </button>
        ) : (
          <button
            onClick={loadLessReviews}
            className="text-green-600 font-medium mt-4 transition-all duration-300 ease-in-out hover:text-green-800 hover:scale-105"
          >
            Tutup Ulasan
          </button>
        )}
      </div>
    </div>
  );
}

export default page