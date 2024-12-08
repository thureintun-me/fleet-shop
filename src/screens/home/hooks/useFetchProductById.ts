import {useQuery} from "@tanstack/react-query";
import {useCallback} from "react";
import {Product} from "../../../types/ProductType";
import axiosInstance from "@utils/axiosInstance";


const useFetchProductById = (id: number) => {

    const getProductById = async  () : Promise<Product> =>{
        const response = await axiosInstance.get(`products/${id}`);
        const product = await  response.data;
        return product;
    }
    return useQuery(
        {
            queryKey : ["product",id],
            queryFn : getProductById

        }
    )
}

export default useFetchProductById;
