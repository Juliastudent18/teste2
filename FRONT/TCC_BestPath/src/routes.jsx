import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import User from "./pages/user/User";
import Enem from "./pages/vestibulares/enem/Enem";
import Etec from "./pages/vestibulares/etec/Etec";
import Fatec from "./pages/vestibulares/fatec/Fatec";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/signin" element={<SignIn />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/user" element={<User />}></Route>
                <Route path="/enem" element={<Enem />}></Route>
                <Route path="/etec" element={<Etec />}></Route>
                <Route path="/fatec" element={<Fatec />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;