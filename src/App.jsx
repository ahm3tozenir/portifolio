import { Routes,Route, Navigate} from "react-router-dom";
import Index from "./pages/index";
import Projects from "./pages/projects"
import Index404 from "./pages/404"

import 'bootstrap/dist/css/bootstrap.min.css';




function App() {


  return (
    <>
      <Routes>
        <Route path="/portifolio/" element={<Index/>} />
        <Route path="/portifolio/projects" element={<Projects/>} />
        <Route path="/portifolio/404" element={<Index404/>}/>
        <Route path="*" element={<Navigate to={'/portifolio/404'}/>}/>
      </Routes>

    </>
  )
}

export default App
