/* ===== EDIT YOUR DETAILS HERE ===== */
const DATA = {
  name: "D Hariharan",
  short: "Hariharan",
  role: "Full Stack Developer",
  tagline: "I turn logical thinking into practical software, writing clear code and learning something new every day.",
  about: "I'm a Computer Science student and aspiring developer who enjoys turning logical thinking into practical solutions. I'm strengthening my foundations in programming and problem-solving through hands-on projects, with a focus on writing clear code, learning consistently, and building software that is useful to people.",
  email: "hariharan2662@gmail.com",
  social: [["GitHub","https://github.com/Hariharan1972"],["LinkedIn","https://www.linkedin.com/in/hariharan-dharumaraj-033810446"]],
  skills: ["C","Python","Java","JavaScript","HTML","CSS"],
  projects: [
    ["Cybersecurity Log Analyzer","A tool for examining system logs to help identify unusual activity and potential security events.","Cybersecurity"],
    ["Console Calculator","A console application that performs arithmetic operations and sharpens core programming logic.","Programming"],
    ["Student Marks Analyzer","A program that processes student marks and analyses results such as totals, averages and grades.","Data Processing"],
    ["Salary Payroll Processing & Payslip Generation","A payroll system that calculates employee salaries and generates payslips automatically.","Management System"]
  ],
  education: [
    ["Currently Pursuing · Second Year","B.Sc. Computer Science","KG College of Arts and Sciences","CGPA: 7.1"],
    ["Higher Secondary (12th)","Academic qualification","","Percentage: 71.5%"],
    ["SSLC (10th)","Academic qualification","","Percentage: 66.2%"]
  ],
  certs: [
    ["Cloud Computing & Distributed Systems","NPTEL · Online coursework"],
    ["Programming in Python","Coursera · Online coursework"],
    ["Advanced Java Development","Coursera · Online coursework"],
    ["Supermarket App Development","Coursera · App development coursework"]
  ],
  objective: "To start my career as a software developer in a supportive team where I can apply my programming and problem-solving skills, learn from experienced engineers, and grow into a dependable full stack professional.",
  services: [
    ["💻","Web Development","Building clean, responsive pages with HTML, CSS and JavaScript."],
    ["⚙️","Programming & Problem Solving","Writing logical, readable programs in C, Python and Java."],
    ["📊","Data Processing Tools","Creating programs that process, calculate and report on data."],
    ["🔐","Security Basics","Analysing logs to spot unusual activity and potential threats."]
  ],
  learning: ["Web Development","Cloud Computing","Advanced Java","Problem Solving"],
  achievements: [
    ["🤝","Collaboration & Innovation","Gaining experience in collaborative problem-solving, innovation, and project development."],
    ["🌐","Growing in Web Development","Actively improving web development skills and exploring modern software technologies."]
  ]
};
/* ===== END OF DETAILS ===== */

const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const d=DATA, first=d.short||d.name.split(" ")[0];
document.title=d.name+" | Portfolio";
$("logo").innerHTML=esc(first)+"<span>.</span>";
$("name").textContent=d.name; $("tagline").textContent=d.tagline;
$("about-text").textContent=d.about;
const hasAch=d.achievements.length>0;
if(!hasAch)$("achievements").remove();
$("links").innerHTML=["Home","About","Services","Skills","Projects","Education","Certifications",...(hasAch?["Achievements"]:[]),"Contact"]
  .map(s=>`<li><a href="#${s.toLowerCase()}">${s}</a></li>`).join("");
$("social").innerHTML=d.social.map(([n,u])=>`<a href="${esc(u)}" target="_blank" rel="noopener">${esc(n)} ↗</a>`).join("")+`<a href="mailto:${esc(d.email)}">Email ↗</a>`;
$("skills-list").innerHTML=d.skills.map(s=>`<span>${esc(s)}</span>`).join("");
$("projects-list").innerHTML=d.projects.map((p,i)=>`<div class="card"><div class="num">0${i+1}</div><h3>${esc(p[0])}</h3><p>${esc(p[1])}</p><span class="tag">${esc(p[2])}</span></div>`).join("");
$("education-list").innerHTML=d.education.map(e=>`<div class="card"><small>${esc(e[0])}</small><h3>${esc(e[1])}</h3>${e[2]?`<p>${esc(e[2])}</p>`:""}<span class="tag">${esc(e[3])}</span></div>`).join("");
$("certs-list").innerHTML=d.certs.map(c=>`<div class="card"><h3>${esc(c[0])}</h3><p>${esc(c[1])}</p></div>`).join("");
if(hasAch)$("ach-list").innerHTML=d.achievements.map(a=>`<div class="card"><div style="font-size:1.8rem">${a[0]}</div><h3>${esc(a[1])}</h3><p>${esc(a[2])}</p></div>`).join("");
$("profiles-list").innerHTML=d.social.map(([n,u])=>`<a class="btn" href="${esc(u)}" target="_blank" rel="noopener">${esc(n)}: ${esc(n==="GitHub"?u.split("/").pop():"D Hariharan")} ↗</a>`).join("");
$("mail").href="mailto:"+d.email; $("mail-text").textContent=d.email;
$("footer").textContent="© "+new Date().getFullYear()+" "+d.name+". Built with HTML, CSS & JavaScript.";

$("services-list").innerHTML=d.services.map(s=>`<div class="card"><div style="font-size:1.8rem">${s[0]}</div><h3>${esc(s[1])}</h3><p>${esc(s[2])}</p></div>`).join("");
$("objective").textContent=d.objective;
$("cform").onsubmit=e=>{e.preventDefault();
  const body=`Hi ${d.short},\n\n${$("cmsg").value}\n\nRegards,\n${$("cname").value}\n${$("cemail").value}`;
  location.href=`mailto:${d.email}?subject=${encodeURIComponent($("csubject").value)}&body=${encodeURIComponent(body)}`};
$("learning-list").innerHTML=d.learning.map(s=>`<span>${esc(s)}</span>`).join("");
$("stats").innerHTML=[[d.projects.length,"Projects",0],[d.certs.length,"Certifications",0],[d.skills.length,"Languages & Skills",0],[7.1,"Current CGPA",1]]
  .map(([v,l,dec])=>`<div class="stat"><b data-to="${v}" data-dec="${dec}">0</b><span>${l}</span></div>`).join("");

/* animated counters */
function count(el){const to=+el.dataset.to,dec=+el.dataset.dec,t0=performance.now();
  (function step(t){const p=Math.min((t-t0)/1200,1);el.textContent=(to*p).toFixed(dec);if(p<1)requestAnimationFrame(step)})(t0)}

/* typing effect for role */
(function(){const full=d.role;let i=0;$("role").textContent="";
  const tick=()=>{$("role").textContent=full.slice(0,++i);if(i<full.length)setTimeout(tick,70)};tick()})();

/* scroll reveal + counters */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");
  e.target.querySelectorAll("[data-to]").forEach(count);io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll("section:not(#home), .card").forEach(el=>{el.classList.add("reveal");io.observe(el)});

/* scroll progress bar + active nav link */
const secs=[...document.querySelectorAll("section[id]")];
addEventListener("scroll",()=>{
  const h=document.documentElement;$("progress").style.width=(scrollY/(h.scrollHeight-innerHeight)*100)+"%";
  let cur="home";secs.forEach(s=>{if(scrollY>=s.offsetTop-120)cur=s.id});
  document.querySelectorAll("#links a").forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+cur));
});

const root=document.documentElement;
function setTheme(t){root.dataset.theme=t;$("theme").textContent=t==="dark"?"☾":"☀"}
setTheme(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");
$("theme").onclick=()=>setTheme(root.dataset.theme==="dark"?"light":"dark");
$("menu").onclick=()=>$("links").classList.toggle("open");
$("links").onclick=()=>$("links").classList.remove("open");
$("top").onclick=()=>scrollTo({top:0,behavior:"smooth"});
addEventListener("scroll",()=>{$("top").style.display=scrollY>400?"block":"none"});
