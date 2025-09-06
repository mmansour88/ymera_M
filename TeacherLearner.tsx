
import React, { useState } from 'react'
export default function TeacherLearner(){
  const [token, setToken] = useState('')
  const [out, setOut] = useState<any>(null)
  async function score(){
    const r = await fetch('http://localhost:8000/v1/skills/score', {method:'POST', headers:{'Content-Type':'application/json', Authorization:'Bearer '+token},
      body: JSON.stringify({agent_id:'agent-x', skill:'coding', score:0.92})})
    setOut(await r.json())
  }
  async function distill(){
    const r = await fetch('http://localhost:8000/v1/skills/distill', {method:'POST', headers:{'Content-Type':'application/json', Authorization:'Bearer '+token},
      body: JSON.stringify({teacher_id:'agent-x', learner_id:'agent-y', skill:'coding'})})
    setOut(await r.json())
  }
  async function top(){
    const r = await fetch('http://localhost:8000/v1/skills/top?skill=coding', {headers:{Authorization:'Bearer '+token}})
    setOut(await r.json())
  }
  return <div style={{padding:16}}>
    <h2>Teacher ↔ Learner</h2>
    <input placeholder="JWT" value={token} onChange={e=>setToken(e.target.value)} style={{width:'100%'}}/>
    <div>
      <button onClick={score}>POST /v1/skills/score</button>
      <button onClick={distill}>POST /v1/skills/distill</button>
      <button onClick={top}>GET /v1/skills/top</button>
    </div>
    <pre>{out? JSON.stringify(out,null,2): null}</pre>
  </div>
}
