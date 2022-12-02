import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import Loading from "../../Shared/Loading/Loading";
// import Product from "./Product";

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const {
        data: products,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            try {
                const res = await fetch(
                    `http://localhost:5000/books/email/${user.email}`,
                    {
                        headers: {
                            // authorization: `bearer ${localStorage.getItem(`accessToken`)}`,
                        },
                    }
                );
                const data = await res.json();
                return data;
            } catch (error) {
                console.log(error);
            }
        },
    });
    console.log(products)
    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div className="p-2 lg:p-10">
            {/* {products.map((x) => (
                <Product key={x._id} data={x} refetch={refetch}></Product>
            ))} */}
        </div>
    );
};

export default MyProducts;