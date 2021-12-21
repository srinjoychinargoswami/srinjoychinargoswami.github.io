<script> 
function genomic () { 
var genomic = Number(document.getElementById("Genomic").value);
var subgenomic = Number(document.getElementById("Subgenomic").value);
var RPN_ct = Number(document.getElementById("RPN").value);
var delta_delta = ((subgenomic - genomic) - RPN_ct)
var fold = Math.pow(2, -delta_delta )

if (RPN_ct >= 36) { 
        document.getElementById("result").innerHTML =  "Result:" +'Invalid run due to RNAse P Ct values';
}  
if (RPN_ct < 36) { 
   if (genomic <= 23) { 
        document.getElementById("result").innerHTML = "Result: " +  'Sample is Positive for actively replicating SARS-CoV-2 Virus';
} else if (genomic >= 35 ) { 
  document.getElementById("result").innerHTML = "Result: " + 'Sample is Negative for SARS-CoV-2 Virus';
} else if (genomic >= 36 && genomic <= 40) { 
        document.getElementById("result").innerHTML = "Result:" + 'Sample is Negative for actively replicating SARS-CoV-2 Virus';
} else if (genomic > 21 && genomic < 36) {
    if (fold >= 1751090) { 
        document.getElementById('result').innerHTML = "Result: " + 'Sample is Positive for actively replicating SARS-CoV-2 Virus'; 
        
} else if (fold < 1751090) { 
        document.getElementById('result').innerHTML = "Result:" + 'Sample is Negative for actively replicating SARS-CoV-2 Virus';
    } 
}
  }      
}
    
</script>
<script>
document.addEventListener("keydown", function(e){
  // USE THIS TO DISABLE CONTROL AND ALL FUNCTION KEYS
  // if (e.ctrlKey || (e.keyCode>=112 && e.keyCode<=123)) {
  // THIS WILL ONLY DISABLE CONTROL AND F12
  if (e.ctrlKey || e.keyCode==123) {
    e.stopPropagation();
    e.preventDefault();
  }
});
</script>
