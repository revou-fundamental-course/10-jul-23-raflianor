let result = document.getElementById("result");
let resultArea = document.querySelector(".result");
let error = document.querySelector(".error");
function calculate(){
    let age = document.getElementById("umur");
    let male = document.getElementById("l");
    let female = document.getElementById("p");
    let height = document.getElementById("tinggi-badan");
    let weight = document.getElementById("berat-badan");
    if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
        error.style.display = "block";
      error.innerHTML = "Semua kolom harus di isi";
        setTimeout(()=>{
            error.style.display = "none";
        },2000)
    }else{
      calculateBmi();
    }
  
  }
  
function calculateBmi(){
    let height = parseFloat(document.getElementById("tinggi-badan").value);
    let weight = parseFloat(document.getElementById("berat-badan").value);
    let bmi = weight/(height/100)**2;
    let bmirange = bmi.toFixed(2);

    let comment = '';
    if(bmirange < 18.5){
        comment = 'Kurus';
    }else if(bmirange > 18.5 && bmirange < 24.9){
        comment = 'Normal';
    }else if(bmirange > 25 && bmirange < 29.9){
        comment = 'Gemuk';
    }else if(bmirange > 30){
        comment = 'Kegemukan';
    }
    resultArea.style.display = "block";
    document.querySelector(".comment").innerHTML = `Anda <span id="comment">${comment}</span>`;
    result.innerHTML= "BMI anda adalah : "+bmirange;
    
}