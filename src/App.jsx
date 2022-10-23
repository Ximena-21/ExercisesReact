import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { PageLayout } from "./components/PageLayout";
import { Feed } from "./pages/Feed";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";



function App() {
  //const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/feed" element={<Feed />}/>

          <Route element={<PageLayout />}>
            <Route path="/privacy" element={<h1>prueba 1</h1>} />
            <Route path="/tos" element={<h1>prueba 2</h1>} />
          </Route>
        </Routes>

      </BrowserRouter>
  )
}

export default App
