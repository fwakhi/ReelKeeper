import { useContext } from "react";
import InfoContext from "../context/InfoProvider"

const useInfo = () => {
    return useContext(InfoContext);
}
export default useInfo;
