
import React, { useState } from 'react'
export default function AdminConsole(){
  const [policy, setPolicy] = useState<any>(null)
  const [token, setToken] = useState('')
  const [risk, setRisk] = useState('0.2')
  async function load(){
    const r = await fetch('http://localhost:8000/v1/admin/policy', {headers:{Authorization:'Bearer '+token}})
    setPolicy(await r.json())
  }
  async function save(){
    const body = {orange_threshold:0.4, red_threshold:0.7, auto_shutdown_on_red:true}
    const r = await fetch('http://localhost:8000/v1/admin/policy', {method:'POST', headers:{'Content-Type':'application/json', Authorization:'Bearer '+token}, body: JSON.stringify(body)})
    setPolicy((await r.json()).policy)
  }
  async function evalRisk(){
    const r = await fetch('http://localhost:8000/v1/admin/evaluate', {method:'POST', headers:{'Content-Type':'application/json', Authorization:'Bearer '+token}, body: JSON.stringify({risk_score: parseFloat(risk)})})
    alert('Flag: '+(await r.json()).flag)
  }
  return <div style={{padding:16}}>
    <h2>Admin Console</h2>
    <input placeholder="JWT" value={token} onChange={e=>setToken(e.target.value)} style={{width:'100%'}}/>
    <div style={{marginTop:8}}>
      <button onClick={load}>Load Policy</button>
      <button onClick={save}>Save Default Policy</button>
    </div>
    <pre>{policy? JSON.stringify(policy,null,2): null}</pre>
    <h3>Evaluate Risk</h3>
    <input value={risk} onChange={e=>setRisk(e.target.value)} />
    <button onClick={evalRisk}>Evaluate</button>
  </div>
}
