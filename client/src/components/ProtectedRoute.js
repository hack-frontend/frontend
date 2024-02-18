import { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../store/user-context";
import Auth from "../Auth/Auth";
const useAuth = () => {
  const { isLoggedIn } = useContext(UserContext);
  return isLoggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Navigate to="/" /> : <Auth />;
};
export default ProtectedRoutes;
