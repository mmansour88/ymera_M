
import React, { useState } from 'react'
export default function TURNCheck(){
  const [url, setUrl] = useState('turn:YOUR-TURN:3478')
  const [user, setUser] = useState('user')
  const [pass, setPass] = useState('pass')
  const [log, setLog] = useState<string[]>([])
  function add(x:string){ setLog(l => [...l, x]) }
  async function test(){
    const pc = new RTCPeerConnection({iceServers:[{urls:[url], username:user, credential:pass},{urls:['stun:stun.l.google.com:19302']}]})
    pc.onicecandidate = e => { if(e.candidate) add('ICE: '+e.candidate.candidate) }
    const dc = pc.createDataChannel('ping')
    dc.onopen = ()=> add('DataChannel open ✅')
    dc.onclose = ()=> add('DataChannel closed')
    const offer = await pc.createOffer()
    await pc.setLocalDescription(offer)
    // In a loopback check, we won't setRemoteDescription; this just exercises ICE gathering
    setTimeout(()=> pc.close(), 5000)
  }
  return <div style={{padding:16}}>
    <h2>TURN Connectivity Check</h2>
    <input value={url} onChange={e=>setUrl(e.target.value)} style={{width:'100%'}}/>
    <input value={user} onChange={e=>setUser(e.target.value)} placeholder="username" />
    <input value={pass} onChange={e=>setPass(e.target.value)} placeholder="password" />
    <button onClick={test}>Test</button>
    <pre>{log.join('\n')}</pre>
  </div>
}
