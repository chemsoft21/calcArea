function checkgrade(score){
    //return score;
   // let score ="";

if(score >= 75 && score <= 100){
    document.write("First Class Honor");
} 
else if(score >= 65 && score <= 74){
    document.write("Second Class Upper");
} 
else if(score >= 50 && score <= 64){
    document.write("Second Class Lower");
} 
else if(score >= 41 && score <= 49){
    document.write("Third Class");
} 
else if(score >= 30 && score <= 40){
    document.write("Pass");
} 
else{
    document.write("Fail. Ask to withdraw");
}
}
document.write(checkgrade(score));