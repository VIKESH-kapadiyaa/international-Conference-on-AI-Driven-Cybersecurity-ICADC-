import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Community from './pages/Community.jsx'
import AdvisoryBoards from './pages/AdvisoryBoards.jsx'
import Submission from './pages/Submission.jsx'
import Editors from './pages/Editors.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/community" element={<Community />} />
        <Route path="/advisory" element={<AdvisoryBoards />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/editors" element={<Editors />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
