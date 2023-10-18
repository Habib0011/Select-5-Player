document.getElementById('btn-id').addEventListener('click',function(){
 const olContainer = document.getElementById('ol-container');
 const li = document.createElement('li');
  li.classList.add('item')
 li.innerText='Dancing Player'
 olContainer.appendChild(li)
 const ids = document.querySelectorAll('.item')
    const idsLength = ids.length
    if(idsLength === 5){
        alert('sorry U can only pick 5 players')
    }

})
document.getElementById('btn-id2').addEventListener('click',function(){
 const olContainer = document.getElementById('ol-container');
 const li = document.createElement('li');
  li.classList.add('item')
 li.innerText='Sakib al Hasan'
 olContainer.appendChild(li)
 const ids = document.querySelectorAll('.item')
    const idsLength = ids.length
    if(idsLength === 5){
        alert('sorry U can only pick 5 players')
    }

})
document.getElementById('btn-id3').addEventListener('click',function(){
 const olContainer = document.getElementById('ol-container');
 const li = document.createElement('li');
  li.classList.add('item')
 li.innerText='Ronaldo'
 olContainer.appendChild(li)
 const ids = document.querySelectorAll('.item')
    const idsLength = ids.length
    if(idsLength === 5){
        alert('sorry U can only pick 5 players')
    }

})
document.getElementById('btn-id4').addEventListener('click',function(){
 const olContainer = document.getElementById('ol-container');
 const li = document.createElement('li');
  li.classList.add('item')
 li.innerText='Lee Chong Wei'
 olContainer.appendChild(li)
 const ids = document.querySelectorAll('.item')
    const idsLength = ids.length
    if(idsLength === 5){
        alert('sorry U can only pick 5 players')
    }

})
document.getElementById('btn-id5').addEventListener('click',function(){
 const olContainer = document.getElementById('ol-container');
 const li = document.createElement('li');
  li.classList.add('item')
 li.innerText='Jokovich'
 olContainer.appendChild(li)
 const ids = document.querySelectorAll('.item')
    const idsLength = ids.length
    if(idsLength === 5){
        alert('sorry U can only pick 5 players')
    }

})
document.getElementById('btn-id6').addEventListener('click',function(){
 const olContainer = document.getElementById('ol-container');
 const li = document.createElement('li');
   li.classList.add('item')
   li.innerText='Salah'
   olContainer.appendChild(li)
   const ids = document.querySelectorAll('.item')
    const idsLength = ids.length
    if(idsLength === 5){
        alert('sorry U can only pick 5 players')
    }

})



document.getElementById('per-player-multi').addEventListener('click',function(){
    perPlayerCalculation()

})
document.getElementById('CM-calculate').addEventListener('click',function(){
    calculation()
})
