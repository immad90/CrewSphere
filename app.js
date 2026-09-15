window.dataLayer=window.dataLayer||[];
const params=new URLSearchParams(location.search);
const attribution={};['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid'].forEach(k=>{if(params.get(k)) attribution[k]=params.get(k)});
if(Object.keys(attribution).length) sessionStorage.setItem('fv_attribution',JSON.stringify(attribution));
document.querySelectorAll('[data-cta]').forEach(el=>el.addEventListener('click',()=>{
  window.dataLayer.push({event:'cta_click',cta_name:el.dataset.cta,page_path:location.pathname,...attribution});
}));
