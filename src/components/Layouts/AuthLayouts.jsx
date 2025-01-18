import { Link, useLocation } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  const location = useLocation();
  const isProfilePage = location.pathname === "/profile";
 
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
       
        {isProfilePage ? (
          <p className="text-sm mt-5 text-center">
            Belum punya akun?{" "}
            <Link to="/register" className="font-bold text-blue-600">
              Register
            </Link>{" "}
            atau sudah punya akun?{" "}
            <Link to="/login" className="font-bold text-blue-600">
              Login
            </Link>
          </p>
        ) : (
          <div className="text-sm mt-5 text-center space-y-2">
            <p>
              {type === "login" ? "Gapunya akun? " : "Udah punya akun? "}
              {type === "login" && (
                <Link to="/register" className="font-bold text-blue-600">
                  Register
                </Link>
              )}
              {type === "register" && (
                <Link to="/login" className="font-bold text-blue-600">
                  Login
                </Link>
              )}
            </p>
            <p>
              dan{" "}
              <Link to="/profile" className="font-bold text-blue-600">
                atur profile anda
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthLayout;