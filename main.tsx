
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Agents from './pages/Agents'
import Reports from './pages/Reports'
import Webhooks from './pages/Webhooks'
import Files from './pages/Files'
import Routing from './pages/Routing'
import TURNCheck from './pages/extra/TURNCheck'
import AdminConsole from './pages/extra/AdminConsole'
import Admin from "./pages/extra/Admin"
import Cost from "./pages/extra/Cost"
import Observability from "./pages/extra/Observability"
import Playbooks from "./pages/extra/Playbooks"
import Policies from "./pages/extra/Policies"
import Compliance from "./pages/extra/Compliance"
import DisasterRecovery from "./pages/extra/DisasterRecovery"
import MultiCloud from "./pages/extra/MultiCloud"
import Leadership from "./pages/extra/Leadership"
import Rewards from "./pages/extra/Rewards"
import Scores from "./pages/extra/Scores"
import TeacherLearner from "./pages/extra/TeacherLearner"
import AgentTeams from "./pages/extra/AgentTeams"
import Settings from "./pages/extra/Settings"
import Integrations from "./pages/extra/Integrations"
import Files from "./pages/extra/Files"
import EvalRuns from "./pages/extra/EvalRuns"
import RoutingMatrix from "./pages/extra/RoutingMatrix"
import XRAvatars from "./pages/extra/XRAvatars"
import RoomsAdvanced from "./pages/extra/RoomsAdvanced"
import Memory from './pages/Memory'
import Rooms from './pages/Rooms'
import XR from './pages/XR'

function App() {
  return (
    <BrowserRouter>
      <nav style={{display:'flex', gap:12, padding:12, borderBottom:'1px solid #eee'}}>
        <Link to="/">Dashboard</Link>
        <Link to="/agents">Agents</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/webhooks">Webhooks</Link>
        <Link to="/files">Files</Link>
        <Link to="/routing">Routing</Link>
      </nav><nav style={{display:"flex", gap:8, padding:8, borderBottom:"1px dashed #ddd"}}><Link to="/extra/TURNCheck">TURNCheck</Link></nav><nav style={{display:"flex", gap:8, padding:8, borderBottom:"1px dashed #ddd"}}><Link to="/extra/AdminConsole">AdminConsole</Link></nav><nav style={{display:"flex", gap:8, padding:8, borderBottom:"1px dashed #ddd"}}><Link to="/extra/TURNCheck">TURNCheck</Link></nav><nav style={display:'flex', flexWrap:'wrap', gap:8, padding:8, borderBottom:'1px dashed #ddd'}> <Link to="/extra/Admin">Admin</Link> <Link to="/extra/Cost">Cost</Link> <Link to="/extra/Observability">Observability</Link> <Link to="/extra/Playbooks">Playbooks</Link> <Link to="/extra/Policies">Policies</Link> <Link to="/extra/Compliance">Compliance</Link> <Link to="/extra/DisasterRecovery">DisasterRecovery</Link> <Link to="/extra/MultiCloud">MultiCloud</Link> <Link to="/extra/Leadership">Leadership</Link> <Link to="/extra/Rewards">Rewards</Link> <Link to="/extra/Scores">Scores</Link> <Link to="/extra/TeacherLearner">TeacherLearner</Link> <Link to="/extra/AgentTeams">AgentTeams</Link> <Link to="/extra/Settings">Settings</Link> <Link to="/extra/Integrations">Integrations</Link> <Link to="/extra/Files">Files</Link> <Link to="/extra/EvalRuns">EvalRuns</Link> <Link to="/extra/RoutingMatrix">RoutingMatrix</Link> <Link to="/extra/XRAvatars">XRAvatars</Link> <Link to="/extra/RoomsAdvanced">RoomsAdvanced</Link></nav><nav style={{display:"flex", gap:8, padding:8, borderBottom:"1px dashed #ddd"}}><Link to="/extra/TURNCheck">TURNCheck</Link></nav><nav style={{display:"flex", gap:8, padding:8, borderBottom:"1px dashed #ddd"}}><Link to="/extra/AdminConsole">AdminConsole</Link></nav><nav style={{display:"flex", gap:8, padding:8, borderBottom:"1px dashed #ddd"}}><Link to="/extra/TURNCheck">TURNCheck</Link></nav><nav style={{display:'flex', gap:12, padding:12, borderBottom:'1px solid #eee'}}>
<Link to="/memory">Memory</Link>
<Link to="/rooms">Rooms</Link>
<Link to="/xr">3D/XR</Link>
</nav><nav style={{display:"flex", gap:8, padding:8, borderBottom:"1px dashed #ddd"}}><Link to="/extra/TURNCheck">TURNCheck</Link></nav><nav style={{display:"flex", gap:8, padding:8, borderBottom:"1px dashed #ddd"}}><Link to="/extra/AdminConsole">AdminConsole</Link></nav><nav style={{display:"flex", gap:8, padding:8, borderBottom:"1px dashed #ddd"}}><Link to="/extra/TURNCheck">TURNCheck</Link></nav><nav style={display:'flex', flexWrap:'wrap', gap:8, padding:8, borderBottom:'1px dashed #ddd'}> <Link to="/extra/Admin">Admin</Link> <Link to="/extra/Cost">Cost</Link> <Link to="/extra/Observability">Observability</Link> <Link to="/extra/Playbooks">Playbooks</Link> <Link to="/extra/Policies">Policies</Link> <Link to="/extra/Compliance">Compliance</Link> <Link to="/extra/DisasterRecovery">DisasterRecovery</Link> <Link to="/extra/MultiCloud">MultiCloud</Link> <Link to="/extra/Leadership">Leadership</Link> <Link to="/extra/Rewards">Rewards</Link> <Link to="/extra/Scores">Scores</Link> <Link to="/extra/TeacherLearner">TeacherLearner</Link> <Link to="/extra/AgentTeams">AgentTeams</Link> <Link to="/extra/Settings">Settings</Link> <Link to="/extra/Integrations">Integrations</Link> <Link to="/extra/Files">Files</Link> <Link to="/extra/EvalRuns">EvalRuns</Link> <Link to="/extra/RoutingMatrix">RoutingMatrix</Link> <Link to="/extra/XRAvatars">XRAvatars</Link> <Link to="/extra/RoomsAdvanced">RoomsAdvanced</Link></nav><nav style={{display:"flex", gap:8, padding:8, borderBottom:"1px dashed #ddd"}}><Link to="/extra/TURNCheck">TURNCheck</Link></nav><nav style={{display:"flex", gap:8, padding:8, borderBottom:"1px dashed #ddd"}}><Link to="/extra/AdminConsole">AdminConsole</Link></nav><nav style={{display:"flex", gap:8, padding:8, borderBottom:"1px dashed #ddd"}}><Link to="/extra/TURNCheck">TURNCheck</Link></nav>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/agents" element={<Agents/>} />
        <Route path="/reports" element={<Reports/>} />
        <Route path="/webhooks" element={<Webhooks/>} />
        <Route path="/files" element={<Files/>} />
        <Route path="/routing" element={<Routing/>} />
      <Route path="/memory" element={<Memory/>} />
<Route path="/rooms" element={<Rooms/>} />
<Route path="/xr" element={<XR/>} />

<Route path="/extra/Admin" element={<Admin/>} />
<Route path="/extra/Cost" element={<Cost/>} />
<Route path="/extra/Observability" element={<Observability/>} />
<Route path="/extra/Playbooks" element={<Playbooks/>} />
<Route path="/extra/Policies" element={<Policies/>} />
<Route path="/extra/Compliance" element={<Compliance/>} />
<Route path="/extra/DisasterRecovery" element={<DisasterRecovery/>} />
<Route path="/extra/MultiCloud" element={<MultiCloud/>} />
<Route path="/extra/Leadership" element={<Leadership/>} />
<Route path="/extra/Rewards" element={<Rewards/>} />
<Route path="/extra/Scores" element={<Scores/>} />
<Route path="/extra/TeacherLearner" element={<TeacherLearner/>} />
<Route path="/extra/AgentTeams" element={<AgentTeams/>} />
<Route path="/extra/Settings" element={<Settings/>} />
<Route path="/extra/Integrations" element={<Integrations/>} />
<Route path="/extra/Files" element={<Files/>} />
<Route path="/extra/EvalRuns" element={<EvalRuns/>} />
<Route path="/extra/RoutingMatrix" element={<RoutingMatrix/>} />
<Route path="/extra/XRAvatars" element={<XRAvatars/>} />
<Route path="/extra/RoomsAdvanced" element={<RoomsAdvanced/>} />

<Route path="/extra/AdminConsole" element={<AdminConsole/>} />

<Route path="/extra/TURNCheck" element={<TURNCheck/>} />
</Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')!).render(<App/>)
