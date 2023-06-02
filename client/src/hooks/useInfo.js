import { useContext } from "react";
import InfoContext from "../context/InfoProvider"

const useInfo = () => useContext(InfoContext);
export default useInfo;
