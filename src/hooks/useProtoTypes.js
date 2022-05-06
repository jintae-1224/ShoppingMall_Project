import { useContext } from "react";
import AppStateContext from "../context/AppStateContext";

export default function useProtoTypes(){
    const {prototypes} = useContext(AppStateContext)

    return prototypes
}