import { createContext, useState, useContext, useEffect, use } from "react";
import { useRefreshToken } from '../services/authenticate/useRefreshToken';
// import { useNavigate, useLocation } from "react-router-dom";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // const location = useLocation();
    // const path = location.pathname;
    // const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const { refreshToken } = useRefreshToken();

    useEffect(() => {
        const loadToken = async () => {
            const respone = await refreshToken(setUser);
            // if (respone.status !== 200 && path !== "/login") {
            //     navigate("/login");
            // }
        }
        loadToken();
    }, [])

    return (
        <AppContext.Provider value={{ user, setUser }}>
            {children}
        </AppContext.Provider>
    );
};

export const useUser = () => useContext(AppContext);
