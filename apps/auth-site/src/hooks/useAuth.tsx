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

    // Finally, just signal the component that the initial load is over.
    useEffect(() => {
        getCurrentUser()
            .then((user) => setUser(user.idToken.payload))
            .catch((_error) => console.error(_error)) // TODO seems jank kek? maybe actually set the error? idfk
            .finally(() => setLoadingInitial(false));
        console.log(user)
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

    // TODO add a performLogout ere
    function performLogout() {
        setLoading(true)
        logout()
            .then(() => { navigate('/') })
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
            {/* {!loadingInitial && children} */}
            {children}
        </AuthContext.Provider>
    );
}

export default function useAuth() {
    return useContext(AuthContext)
}