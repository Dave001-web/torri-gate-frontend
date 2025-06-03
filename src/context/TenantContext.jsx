import { createContext, useEffect } from "react";
import { useAppContext } from "../hooks/useAppContext";
import { axiosInstance } from "../utils/axiosInstance";
export const TenantContext = createContext()

const TenantProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [properties, setProperties] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [total, setTotal] = useState(0);
  const {token} = useAppContext();
  const [locValue, setLocValue] = useState('')
  const [budget, setBudget] = useState('');
  const [type, setType] = useState('');

  const fetchProperties = async () => {
    if(token) {
      try {
        setIsLoading(true); 
        const { data } = await axiosInstance.get(`/property?page=${page}&location=${locValue}&budget=${budget}&type=${type}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProperties(data.properties);
        setPage(data.currentPage);
        setTotalPage(data.totalPages);
        setTotal(data.totalProperties);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  }
   
  useEffect(() => {
    fetchProperties()
  },[token, page, locValue])

  const resetFilters = () => {
    setLocValue("");
    setPage(1);
    setBudget("");
    setType("");
  }
  
  return <TenantContext.Provider value={{
    isLoading,
     properties, 
     page, 
     setPage, 
     totalPage, 
     total, 
     setLocValue, 
     resetFilters, 
     setBudget, 
     setType
  }}>
      {children}
    </TenantContext.Provider>
}
export default TenantProvider