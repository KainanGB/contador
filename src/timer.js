const counter = document.querySelector(".sub-btn")

counter.addEventListener('click', ()=>{
  const nums = document.querySelector(".counter").value
  const err = document.querySelector('.err')
        
  let days = Number(nums.slice(0,2))
  let month = Number(nums.slice(3,5))
  let year = Number(nums.slice(6,10))

  if(month < 10) { month = `0${month}`}
  if(days < 10 ) { days = `0${days}` }

  const today = moment()
  const inputDate = moment(`${days}-${month}-${year}`, "DD/MM/YYYY")
  const seconds = inputDate.diff(today, 'seconds')

  if(!seconds) { 
    err.style.color = "red"
    return err.innerHTML = "Preencha as datas corretamente"
    }
  localStorage.setItem('sec', seconds)

  window.location.href = "contador.html"
})