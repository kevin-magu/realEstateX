import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";


function App() {
  return (
    <BrowserRouter >
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/onboarding" element={<Signup/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/profile" element={<Profile/>}/>
    
    </Routes>
    </BrowserRouter>
  )
}

export default App  