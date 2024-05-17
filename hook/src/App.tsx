import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Dashboard from "./pages/dashboard"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dash" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
