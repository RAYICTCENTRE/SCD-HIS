
function showToast(message){
  const t=document.getElementById('toast');
  if(!t)return;
  t.textContent=message;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2600);
}
function toggleSidebar(){
  const s=document.querySelector('.sidebar');
  if(s)s.classList.toggle('open');
}
function logout(){
  localStorage.removeItem('scdUser');
  window.location.href='index.html';
}
function fakeSave(message){
  showToast(message || 'Saved successfully.');
}
document.addEventListener('DOMContentLoaded',()=>{
  const current=location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a[data-page]').forEach(a=>{
    if(a.getAttribute('data-page')===current)a.classList.add('active');
  });
  document.querySelectorAll('[data-menu]').forEach(b=>b.addEventListener('click',toggleSidebar));
  document.querySelectorAll('form.demo-form').forEach(form=>{
    form.addEventListener('submit',e=>{
      e.preventDefault();
      fakeSave(form.dataset.message || 'Information saved successfully.');
      form.reset();
    });
  });
});
