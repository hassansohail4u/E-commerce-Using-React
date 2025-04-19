import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";
import { Riple } from "react-loading-indicators";

function SingleProduct() {
    const params = useParams();
    const [data, error, loading] = useFetch(`https://dummyjson.com/products/${params.id}`);

    return (
        <>
            {data &&
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 space-y-6 my-10 ">
                    <div className="flex flex-col md:flex-row items-center ">
                        <div className="w-full md:w-1/3 mb-4 md:mb-0">
                            <img
                                className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                                src={data.thumbnail}
                                alt={data.title}
                            />
                        </div>
                        <div className="w-full md:w-2/3 md:ml-8">
                            <h1 className="text-4xl font-extrabold text-gray-800 hover:text-indigo-600 transition-colors duration-300">
                                {data.title}
                            </h1>
                            <p className="text-2xl font-semibold text-red-600 mt-2">
                                ${data.price}{" "}
                                <span className="line-through text-gray-500">
                                    ${(data.price / (1 - data.discountPercentage / 100)).toFixed(2)}
                                </span>
                            </p>
                            <p className="text-sm text-gray-600 mt-2">
                                Discount: {data.discountPercentage}% off
                            </p>
                            <div className="flex items-center mt-2">
                                <span className="text-yellow-400 text-lg">
                                    ⭐⭐⭐⭐⭐
                                </span>
                                <p className="ml-2 text-sm text-gray-600">
                                    ({data.rating} based on {data.reviews.length} reviews)
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <p className="text-gray-700 text-base">{data.description}</p>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
                        <div className="flex items-center text-sm text-gray-700">
                            <span className="font-semibold">Availability:</span>
                            <span
                                className={`ml-2 ${data.availabilityStatus === "Low Stock"
                                        ? "text-red-500"
                                        : "text-green-500"
                                    }`}
                            >
                                {data.availabilityStatus} ({data.stock} left)
                            </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                            <span className="font-semibold">Shipping Info:</span>
                            <span className="ml-2">{data.shippingInformation}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                            <span className="font-semibold">Min Order Quantity:</span>
                            <span className="ml-2">{data.minimumOrderQuantity} units</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                            <span className="font-semibold">Return Policy:</span>
                            <span className="ml-2">{data.returnPolicy}</span>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-between items-center">
                        <div className="text-sm text-gray-700">
                            <span className="font-semibold">Warranty:</span>
                            <span className="ml-2">{data.warrantyInformation}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-sm text-gray-700 font-semibold mr-2">
                                Barcode:
                            </span>
                            <img
                                className="w-16 h-auto"
                                src={data.meta.qrCode}
                                alt="QR Code"
                            />
                        </div>
                    </div>

                    <div className="mt-6 flex justify-between items-center">
                        <button
                            className={`${data.availabilityStatus === "In Stock"
                                    ? "bg-gradient-to-r from-indigo-600 to-indigo-700 hover:bg-indigo-800"
                                    : "bg-gradient-to-r from-red-600 to-red-700 hover:bg-red-800"
                                } text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg cursor-pointer`}
                        >
                            Add to Cart
                        </button>
                        <span className="text-sm text-gray-700">SKU: {data.sku}</span>
                    </div>
                </div>



            }

            {error &&
                <div className="flex flex-col items-center justify-center p-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-600 mb-4 text-center mt-60">
                        Oops! Something Went Wrong
                    </h1>
                    <p className="text-gray-600 text-base md:text-lg mb-8 max-w-xl text-center">
                        We're sorry, but an unexpected error occurred. Please try again later or contact support.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 cursor-pointer"
                    >
                        Try Again
                    </button>
                </div>
            }
            {loading &&
                <div className="flex h-[90vh] justify-center items-center">
                    <Riple color="blue" size="large" text="" textColor="" />
                </div>
            }
        </>
    )
}

export default SingleProduct


