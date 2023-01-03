
const search=document.querySelector('.text').addEventListener('change',getData)



 function getData(e){
  const re=e.target.value

    




  fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${upperCaseLe(re)}/?unitGroup=us&key=VX3JYXTWW8AWHCWSCGP3URKRR&contentType=json
  `)
  .then(res=>res.json())
  .then(data=>displayData(data) )
  
 }





//Displaying data func
function displayData(data){
console.log(data)
document.querySelector('.city-name').innerHTML=data.address;
//converting to celsius
const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9
document.querySelector('.temp').innerHTML=`${Math.trunc(fahrenheitToCelsius(data.currentConditions.temp))} °C`
const wCondition=document.querySelector('.weather-type').innerHTML=data.currentConditions.conditions
document.querySelector('.huminity-per').innerHTML=  `${Math.trunc(data.currentConditions.humidity)} %`
document.querySelector('.wind-per').innerHTML=  data.currentConditions.windspeed +' '+ 'km'
backImg(wCondition)

}

//set backimages depending on weather condition
function backImg(condition){
    console.log(condition)
    const icon=document.getElementById('img-icon');
if (condition.includes('Clear')||condition.includes('Sunny'))
{document.body.style.backgroundImage = "url('sunny.jpg')"
icon.src='icon-sunny.webp'

}

else if(condition.includes('Rain') && condition.includes('Partially cloudy'))
{ document.body.style.backgroundImage = "url('raining.jpg')"
icon.src='icon-rain.webp'
}

else if (condition.includes('Partially cloudy')||condition.includes('Overcast'))
{document.body.style.backgroundImage = "url('clouds.jpg')"
icon.src='icon-cloud.webp'
} 
}




// change firtst letter touppercase

function upperCaseLe(leter){

  
    if(!isNaN(leter)){
        
        
            document.getElementById('error').classList.add('error')
            document.getElementById('error').innerText='Invalid'
             document.querySelector('.text').setAttribute(disabled)="disabled"
           }
              else{ 
                document.getElementById('error').classList.remove('error')
                document.getElementById('error').innerText=''
               const res=leter.replace(leter[0],leter[0].toUpperCase())
               
               return res
       
    }

}

