import useFetch from "../hooks/useFetch"
import ProductCard from "../components/Card"
import { Riple, ThreeDot } from "react-loading-indicators"

function Product() {

    const [data, error, loading] = useFetch("https://dummyjson.com/products")

    return (
        <>
            <div className="flex justify-center flex-wrap gap-12 my-12">
                {data &&
                    data.products.map((items) => {

                        return (
                            <div key={items.id} >
                                <ProductCard image={items.thumbnail} title={items.title} description={items.description} price={items.price} id={items.id} />

                            </div>

                        )
                    })}
            </div>
            {data && console.log(data)}
            {error &&
                <div className="flex flex-col items-center justify-center p-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-600 mb-4 text-center mt-35">
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
                <div className="flex h-[75vh] justify-center items-center my-11">
                    <Riple color="blue" size="large" text="" textColor="" />
                </div>
            }
        </>
    )

}

export default Product