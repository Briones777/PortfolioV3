gsap.registerPlugin(ScrollTrigger);

// CURSOR
const curDot=document.getElementById('cur-dot'),curRing=document.getElementById('cur-ring'),curEl=document.getElementById('cur');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
(function tick(){
  rx+=(mx-rx)*0.12;ry+=(my-ry)*0.12;
  curEl.style.left=mx+'px';curEl.style.top=my+'px';
  curRing.style.left=(rx-mx)+'px';curRing.style.top=(ry-my)+'px';
  requestAnimationFrame(tick);
})();
document.querySelectorAll('a,button,.proj,.tech-item,.contact-link').forEach(el=>{
  el.addEventListener('mouseenter',()=>{curDot.style.transform='translate(-50%,-50%) scale(2.5)';curRing.style.width='54px';curRing.style.height='54px';curRing.style.borderColor='rgba(57,255,20,0.75)';});
  el.addEventListener('mouseleave',()=>{curDot.style.transform='translate(-50%,-50%) scale(1)';curRing.style.width='34px';curRing.style.height='34px';curRing.style.borderColor='rgba(57,255,20,0.5)';});
});

// HERO ANIMATION
window.addEventListener('load',()=>{
  const tl=gsap.timeline({delay:0.15});
  tl.fromTo('nav',{y:-60,opacity:0},{y:0,opacity:1,duration:0.9,ease:'power3.out'})
    .fromTo('.hero-index',{y:20,opacity:0},{y:0,opacity:1,duration:0.6,ease:'power3.out'},'-=0.4')
    .fromTo('.hero-name .first',{y:'110%'},{y:'0%',duration:0.9,ease:'expo.out'},'-=0.3')
    .fromTo('.hero-name .last',{y:'110%'},{y:'0%',duration:0.9,ease:'expo.out'},'-=0.7')
    .fromTo('.hero-role',{y:25,opacity:0},{y:0,opacity:1,duration:0.7,ease:'power3.out'},'-=0.4')
    .fromTo('.hero-ctas > *',{y:20,opacity:0},{y:0,opacity:1,duration:0.6,stagger:0.12,ease:'power3.out'},'-=0.4')
    .fromTo('.hero-bio',{y:20,opacity:0},{y:0,opacity:1,duration:0.6,ease:'power3.out'},'-=0.5')
    .fromTo('.stat',{y:20,opacity:0},{y:0,opacity:1,duration:0.5,stagger:0.1,ease:'power3.out'},'-=0.4')
    .fromTo('.marquee-wrap',{opacity:0},{opacity:1,duration:0.5},'-=0.2');
});

// SCROLL REVEALS
gsap.utils.toArray('.rv').forEach(el=>{gsap.fromTo(el,{y:45,opacity:0},{y:0,opacity:1,duration:0.85,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 87%',toggleActions:'play none none none'}});});
gsap.utils.toArray('.rv-left').forEach(el=>{gsap.fromTo(el,{x:-35,opacity:0},{x:0,opacity:1,duration:0.9,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 85%',toggleActions:'play none none none'}});});
gsap.utils.toArray('.rv-right').forEach(el=>{gsap.fromTo(el,{x:35,opacity:0},{x:0,opacity:1,duration:0.9,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 85%',toggleActions:'play none none none'}});});
gsap.utils.toArray('.exp-item').forEach((item,i)=>{gsap.fromTo(item,{y:35,opacity:0},{y:0,opacity:1,duration:0.7,ease:'power3.out',delay:i*0.08,scrollTrigger:{trigger:item,start:'top 88%',toggleActions:'play none none none'}});});

// NAV HIDE/SHOW
let prevY=0;
window.addEventListener('scroll',()=>{const y=window.scrollY;gsap.to('nav',{y:y>prevY&&y>150?-80:0,duration:0.4,ease:y>prevY?'power3.in':'power3.out'});prevY=y;});

// PARALLAX
gsap.to('.hero-big-num',{yPercent:25,ease:'none',scrollTrigger:{trigger:'#hero',start:'top top',end:'bottom top',scrub:1.5}});

// MODAL DATA
const modalData={
  p1:{tag:'Full Stack · SaaS Platform',title:'KARGO LOGISTICS PORTAL',desc:'End-to-end logistics management platform built for a regional courier company in the Philippines. Handles real-time shipment tracking with live map view, automated route optimization, driver dispatch, and client self-service portal. Replaced a spreadsheet-based workflow entirely.',impact:['60% reduction in manual processing time','Real-time tracking for 200+ daily shipments','Driver mobile app with offline support','Client portal with live ETAs'],stack:['Next.js 14','Node.js','PostgreSQL','Redis','Google Maps API','WebSockets','Prisma','Tailwind CSS']},
  p2:{tag:'Backend · API Engineering',title:'APEX PAYMENTS API',desc:'Production-grade payment processing service integrating GCash, PayMaya, and direct bank transfer for Philippine merchants. Features idempotency keys to prevent duplicate charges, webhook retry logic, and a full audit trail for compliance.',impact:['3 payment gateways unified under 1 API','Idempotent transaction handling','Full audit log for regulatory compliance','99.9% webhook delivery rate'],stack:['Node.js','TypeScript','PostgreSQL','BullMQ','Redis','Stripe','Express']},
  p3:{tag:'Frontend · Dashboard',title:'CLARA ANALYTICS',desc:'Business intelligence dashboard tailored for Filipino SMEs. Features real-time sales graphs, inventory low-stock alerts, branch-level performance comparison, and revenue forecasting using a simple moving average model.',impact:['Multi-branch support out of the box','Daily automated report emails','Mobile-first responsive design','Sub-300ms dashboard load time'],stack:['React','TypeScript','Recharts','TanStack Query','Tailwind CSS','Vite']},
  p4:{tag:'Full Stack · Civic Tech',title:'BARANGAY CONNECT',desc:'Civic technology platform that bridges barangay officials and residents. Citizens can report concerns with photo upload, track resolution status, and receive push notifications. Officials get a moderation dashboard with analytics.',impact:['Deployed to 4 barangays in pilot run','Push notification open rate 71%','Reduced complaint resolution time by 3 days','Fully accessible on low-end Android devices'],stack:['Laravel','Vue.js','MySQL','Inertia.js','FCM','Livewire']}
};

const G='#39FF14',Gd='rgba(57,255,20,0.5)',Gm='rgba(57,255,20,0.07)';
function openM(id){
  const d=modalData[id];if(!d)return;
  document.getElementById('modal-body').innerHTML=`
    <div style="font-family:'DM Mono',monospace;font-size:0.58rem;color:${G};letter-spacing:0.25em;text-transform:uppercase;margin-bottom:0.5rem;text-shadow:0 0 8px ${Gd};">${d.tag}</div>
    <h2 style="font-family:'Bebas Neue',sans-serif;font-size:2.2rem;color:#D4EDD4;letter-spacing:0.04em;margin-bottom:1.5rem;">${d.title}</h2>
    <p style="font-size:0.97rem;line-height:1.85;color:rgba(180,220,180,0.55);font-weight:300;margin-bottom:2rem;">${d.desc}</p>
    <div style="margin-bottom:2rem;">
      <div style="font-family:'DM Mono',monospace;font-size:0.58rem;color:${G};letter-spacing:0.25em;text-transform:uppercase;margin-bottom:1rem;border-bottom:1px solid rgba(57,255,20,0.14);padding-bottom:0.75rem;">Impact</div>
      ${d.impact.map(i=>`<div style="display:flex;gap:0.75rem;padding:0.6rem 0;border-bottom:1px solid ${Gm};font-size:0.92rem;color:rgba(180,220,180,0.55);font-weight:300;font-family:'Cormorant Garamond',serif;"><span style="color:${G};margin-top:2px;">→</span>${i}</div>`).join('')}
    </div>
    <div>
      <div style="font-family:'DM Mono',monospace;font-size:0.58rem;color:${G};letter-spacing:0.25em;text-transform:uppercase;margin-bottom:1rem;">Stack</div>
      <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
        ${d.stack.map(s=>`<span style="font-family:'DM Mono',monospace;font-size:0.58rem;padding:0.3rem 0.75rem;border:1px solid rgba(57,255,20,0.18);color:rgba(57,255,20,0.65);letter-spacing:0.08em;">${s}</span>`).join('')}
      </div>
    </div>`;
  document.getElementById('modal').classList.add('open');
}
function closeM(e){if(e.target===document.getElementById('modal'))document.getElementById('modal').classList.remove('open');}
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.getElementById('modal').classList.remove('open');});
