const bukhoro=document.querySelector('#UZB354'),
      khorezem=document.querySelector('#UZB355'),
      karakalpakstan=document.querySelector('#UZB356'),
      navoi=document.querySelector('#UZB357'),
      samarkand=document.querySelector('#UZB358'),
      kashkadarya=document.querySelector('#UZB361'),
      surkhandarya=document.querySelector('#UZB362'),
      andijon=document.querySelector('#UZB363'),
      farghona=document.querySelector('#UZB364'),
      namangan=document.querySelector('#UZB365'),
      jizzakh=document.querySelector('#UZB370'),
      sirdaryo=document.querySelector('#UZB371'),
      toshkent=document.querySelector('#UZB372'),
      toshkentCity=document.querySelector('#UZ828');

      let boxDistrict=document.querySelector('p');




bukhoro.addEventListener('mousedown', ()=>{
boxDistrict.innerHTML=`<ul> <li> Buxoro</li> <li> +998 99 001 02 03</li> <li> Birbalo street</li> <li>Bank roparasi</li/ul>`;
})
bukhoro.addEventListener('mouseover', ()=>{
  boxDistrict.innerHTML=`<ul> <li> Buxoro</li> <li> +998 99 001 02 03</li> <li> Birbalo street</li> <li>Bank roparasi</li/ul>`;
  })