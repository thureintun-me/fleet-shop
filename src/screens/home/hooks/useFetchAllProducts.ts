import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import axiosInstance from "@utils/axiosInstance";
import {Product} from "../../../types/ProductType";


type ProductResponse = {
    products: Product[];
    nextPage: number | null;
};

const useFetchAllProducts = () => {

    const getAllProducts = async ({ pageParam = 1 }: { pageParam?: number }): Promise<ProductResponse> => {
        try {
            const limit = 5
            // Make the API call using axiosInstance

            const skip  = limit* (pageParam)

            const response = await axiosInstance.get(`products?skip=${skip}&limit=${limit}`);

            // Check if the response contains valid data
            if (response && response.data) {
                // Assuming response.data is an array of products
                const products: Product[] = response.data.products;


                const hasMore = (skip + limit) < response.data.total;
                // Return the array of products
                return {products: products, nextPage: hasMore ? pageParam + 1 : null};

            } else {
                console.log("Invalid response data");
                return {products: [], nextPage: null};
            }
        } catch (error) {
            // Handle errors (network issues, timeout, etc.)
            console.log("Error fetching products:", error);
            return {products: [], nextPage: null};
        }
    }

 return  useInfiniteQuery({
        initialData: undefined,
        initialPageParam: undefined,
        queryKey: ['products'],
        queryFn: getAllProducts,
       getNextPageParam: (lastPage) => lastPage.nextPage // Determine the next page
    });


}

export default useFetchAllProducts
