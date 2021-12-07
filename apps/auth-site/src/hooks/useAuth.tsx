import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { signup, login, logout, getCurrentUser } from '../utils/auth'

interface AuthContextType {
    user?: any, //TODO: type this out!
    loading: boolean,
    error?: any,
    performLogin: (email: string, password: string) => void
    performSignup: (email: string, password: string, username: string) => void
    performLogout: () => void
}

const AuthContext = createContext<AuthContextType>(
    {} as AuthContextType //TODO wtf is this jank
);

export function AuthProvider({
    children
}: {
    children: ReactNode
}): JSX.Element {
    const [user, setUser] = useState<any>(); //TODO type this with <User>
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingInitial, setLoadingInitial] = useState<boolean>(true);
    const navigate = useNavigate();
    const location = useLocation();

    // If we change page, reset the error state.
    useEffect(() => {
        if (error) setError(null);
    }, [location.pathname]);

    // Check for a user only once on initial load
    useEffect(() => {
        getCurrentUser()
            .then((user) => {
                console.log('inneruser', user)
                setUser(user)
            })
            .catch((err) => setError(err))
            .finally(() => setLoadingInitial(false));

    }, []);

    // perform login and set state
    function performLogin(email: string, password: string) {
        setLoading(true);

        login(email, password)
            .then((user) => {
                setUser(user);
                navigate("/");
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }

    // perform signup and set state
    function performSignup(email: string, name: string, password: string) {
        setLoading(true);

        signup(email, name, password)
            .then((user) => {
                setUser(user);
                navigate("/");
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }

    // log user out and clear cookies
    function performLogout() {
        setLoading(true)
        logout()
            .then(() => {
                setUser(undefined)
                navigate('/')
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }
    //use useMemo to stop unneeded re-renders
    const memoedValue = useMemo(
        () => ({
            user,
            loading,
            error,
            performLogin,
            performSignup,
            performLogout,
        }),
        [user, loading, error]
    );

    // we only want re-render the app affter we have a currentUser
    return (
        <AuthContext.Provider value={memoedValue}>
            {!loadingInitial && children}
        </AuthContext.Provider>
    );
}

export default function useAuth() {
    return useContext(AuthContext)
}