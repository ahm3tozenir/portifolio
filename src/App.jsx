import { Routes,Route, Navigate} from "react-router-dom";
import Index from "./pages/index";
import Projects from "./pages/projects"
import Index404 from "./pages/404"

import 'bootstrap/dist/css/bootstrap.min.css';






function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/404" element={<Index404/>}/>
        <Route path="*" element={<Navigate to={'/404'}/>}/>
      </Routes>

    </>
  )
}

export default App
