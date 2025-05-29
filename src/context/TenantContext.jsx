import { createContext, useEffect } from "react";
import { useAppContext } from "../hooks/useAppContext";
import { axiosInstance } from "../utils/axiosInstance";
export const TenantContext = createContext()

const TenantProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [properties, setProperties] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const {token} = useAppContext();

  const fetchProperties = async () => {
    if(token) {
      try {
        const { data } = await axiosInstance.get(`/property?page=${page}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProperties(data.properties);
        setPage(data.currentPage);
        setTotalPage(data.totalPages);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  }
   
  useEffect(() => {
    fetchProperties()
  },[token, page])

  return <TenantContext.Provider value={{
    isLoading, properties, page, setPage, totalPage
  }}>
      {children}
    </TenantContext.Provider>
}
export default TenantProvider