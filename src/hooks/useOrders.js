import { useContext } from "react";
import AppStateContext from "../context/AppStateContext";

export default function useOrders(){
    const {orders} = useContext(AppStateContext)

    return orders
}