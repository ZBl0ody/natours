import { Foot, NavBar } from "./component";
import { Home, LogIn, NotFound, SignUp, Profile, DashBoard } from "./pages";
import { Route, Routes } from "react-router-dom";
import { AuthProvider, RequireAuth } from "react-auth-kit";

function App() {
  return (
    <AuthProvider
      authType={"cookie"}
      authName={"jwt"}
      cookieDomain={window.location.hostname}
      cookieSecure={false}
    >
      <div className="min-h-screen flex flex-col  ">
        <NavBar />
        <div className="container mx-auto flex-1 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/Profile"
              element={
                <RequireAuth loginPath={"/login"}>
                  <Profile />
                </RequireAuth>
              }
            />

            <Route path="*" element={<NotFound />} />
            <Route
              path="/DashBoard"
              element={
                <RequireAuth loginPath={"/login"}>
                  <DashBoard />
                </RequireAuth>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Foot />
      </div>
    </AuthProvider>
  );
}

export default App;
