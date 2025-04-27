import './style.css'
import './../public/lordg.js'
 






function templates_a(img,acta,actb,actc){
    return `
    <div class="flex-shrink-0 w-full h-[90vh] bg-base-300 flex card items-center justify-center snap-start relative overflow-hidden">
        <img src="../public/stores/${img}.png" class="absolute object-cover top-0 left-0 h-full w-full bg-cover bg-center" alt="">
        
        <div class="absolute top-[3%] left-[3%] badge badge-neutral font-bold">${acta}</div>
      
        <div class="absolute bottom-[0%] left-[0%] px-[25px] py-[10px] bg-base-300">
            <h1 class="text-lg font-bold">${actb}</h1>
            <p class="italic opacity-[.7]">${actc}</p>
        </div>
    </div>
    `
  }
  
  
   let store_achivements = [
    {
      img:"12",
      build:"GAS PIPELINE",
      store:"MCDONALD’S ORORAMA",
      location:"RORAMA COGON CDO"
    },
    {
      img:"1",
      build:"AKSS",
      store:"WOOSOO KOREAN RESTAURANT",
      location:"SM CITY BUTUAN"
    },
    {
      img:"2",
      build:"AKSS",
      store:"MANDARIN TEA GARDEN",
      location:"ORORAMA COGON CDO"
    },
    {
      img:"3",
      build:"AKSS",
      store:"MACKGAB CONSTRUCTION SUPPLY",
      location:"BUTUAN CITY"
    },
    {
      img:"4",
      build:"AKSS",
      store:"BL & SG RESTAURANT",
      location:"ROBINSONS BUTUAN"
    },
    {
      img:"5",
      build:"AKSS",
      store:"PEDRO’S KITCHENETTE",
      location:"LIMKETKAI MALL CDO"
    },
    {
      img:"6",
      build:"GAS PIPELINE",
      store:"SIARGAO DEL PALMAS",
      location:"SM CITY BUTUAN"
    },
    {
      img:"7",
      build:"GAS PIPELINE",
      store:"MANDARIN TEA GARDEN",
      location:"SM CITY BUTUAN"
    },
    {
      img:"8",
      build:"GAS PIPELINE",
      store:"YOSHI MEAT-SU",
      location:"AYALA MALL CDO"
    },
    {
      img:"9",
      build:"GAS PIPELINE",
      store:"828 BUILDING",
      location:"CDO"
    },
    {
      img:"10",
      build:"GAS PIPELINE",
      store:"LECHON HOUSE",
      location:"SM DOWNTOWN CDO"
    },
    {
      img:"11",
      build:"GAS PIPELINE",
      store:"MANDARIN TEA GARDEN",
      location:"RORAMA COGON CDO"
    }
   ]
  
   
   for (let index = 0; index < store_achivements.length; index++) {
    
    $("#scrollContainer").append(templates_a(
      store_achivements[index].img,
      store_achivements[index].build,
      store_achivements[index].store,
      store_achivements[index].location
    ))
    
   }
  
  