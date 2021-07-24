

function genomic () { 
var genomic = Number(document.getElementById("Genomic").value);
var subgenomic = Number(document.getElementById("Subgenomic").value);
var RPN_ct = Number(document.getElementById("RPN").value);
var delta_delta = ((subgenomic - genomic) - RPN_ct)
var fold = Math.pow(2, -delta_delta )

if (RPN_ct >= 36) { 
        document.getElementById("result").innerHTML =  "Result:" +'Invalid run due to RPN Ct values';
}  
if (RPN_ct < 36) { 
   if (genomic <= 21) { 
        document.getElementById("result").innerHTML = "Result: " +  'Sample is Positive for actively replicating SARS-CoV-2 Virus';
} else if (genomic > 40) { 
  document.getElementById("result").innerHTML = "Result: " + 'Invalid Run due to Genomic Ct value';
} else if (genomic >= 36 && genomic <= 40) { 
        document.getElementById("result").innerHTML = "Result:" + 'Sample is Negative for actively replicating SARS-CoV-2 Virus';
} else if (genomic > 21 && genomic < 36) {
    if (fold >= 2444508) { 
        document.getElementById('result').innerHTML = "Result: " + 'Sample is Positive for actively replicating SARS-CoV-2 Virus'; 
        
} else if (fold < 2444508) { 
        document.getElementById('result').innerHTML = "Result:" + 'Sample is Negative for actively replicating SARS-CoV-2 Virus';
    } 
}

  }      
}
    



