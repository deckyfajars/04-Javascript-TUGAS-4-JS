const cekTinggi = ()=>{
  var decky = 17;
  var azhar = 20;
  var fajar = 30;

  if (decky>azhar){
    if (decky>fajar){
      if(azhar>fajar){
        console.log("Decky, Azhar, Fajar");
      }
      else {
        console.log("Decky, Fajar, Azhar");
      }
    }
    else {
      if (decky>azhar){
        console.log("Fajar, Decky, Azhar");
      }
      else {
        console.log("Fajar, Azhar, Decky");
      }
    }
  }
  else {
    if (decky>fajar){
      console.log("Azhar, Decky, Fajar");
    }
    else{
        console.log("Azhar, Fajar, Decky");
      }
    }
}
cekTinggi();
