import { Routes,Route, Navigate} from "react-router-dom";
import Index from "./pages/index";

import 'bootstrap/dist/css/bootstrap.min.css';






function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Index/>} />
      </Routes>

    </>
  )
}

export default App
