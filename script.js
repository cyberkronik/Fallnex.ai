const navs = document.querySelectorAll('.nav');
const screens = document.querySelectorAll('.screen');
const title = document.getElementById('screenTitle');

const titles = {
  ai:'Technology rooted in nature.',
  directory:'FallNex Directory preview.',
  projects:'Your FallNex ecosystem.',
  impact:'Impact at a glance.'
};

navs.forEach(btn=>{
  btn.addEventListener('click',()=>{
    navs.forEach(b=>b.classList.remove('active'));
    screens.forEach(s=>s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.screen).classList.add('active');
    title.textContent = titles[btn.dataset.screen];
  });
});

const messages = document.getElementById('messages');
const input = document.getElementById('chatInput');
const send = document.getElementById('sendBtn');

const replies = [
  "That fits FallNex. I would start with a clean directory MVP: listings, categories, search, location filters, and featured local businesses.",
  "For the eco-tech identity, keep the leaf-F as the app icon, use exactly three birds, and use circuit patterns only as accents.",
  "Smart move. Build the directory first, collect users and businesses, then the AI assistant becomes more useful because it has real local data.",
  "A strong FallNex feature would be: business profile pages, verified badges, WhatsApp contact buttons, and AI-generated business summaries."
];

function addMsg(text, type){
  const div = document.createElement('div');
  div.className = `msg ${type}`;
  div.textContent = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function ask(text){
  if(!text.trim()) return;
  addMsg(text, 'user');
  input.value = '';
  setTimeout(()=> addMsg(replies[Math.floor(Math.random()*replies.length)], 'ai'), 650);
}

send.onclick = ()=>ask(input.value);
input.addEventListener('keydown',e=>{ if(e.key==='Enter') ask(input.value); });
document.querySelectorAll('.quick button').forEach(b=>b.onclick=()=>ask(b.dataset.prompt));
document.getElementById('themeBtn').onclick=()=>document.body.classList.toggle('glow');
