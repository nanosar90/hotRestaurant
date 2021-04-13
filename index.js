
const displayResult = function(custReserve) {
    if (this.custTable < 5){
    
        document.getElementById("resName").innerHTML = " Customer Name: " + this.custName;
        document.getElementById("resPhone").innerHTML = " Customer Phone: " + this.custPhone;
        document.getElementById("resEmail").innerHTML = " Customer Email: " + this.custEmail;
        document.getElementById("resID").innerHTML = " Customer ID: " + this.custID;
        document.getElementById("resTable").innerHTML =  " Table Number: " + this.custTable;
    
    
    } else {
    
        document.getElementById("waitName").innerHTML = " Customer Name: " + this.custName;
        document.getElementById("waitPhone").innerHTML = " Customer Phone: " + this.custPhone;
        document.getElementById("waitEmail").innerHTML = " Customer Email: " + this.custEmail;
        document.getElementById("waitID").innerHTML = " Customer ID: " + this.custID;
        document.getElementById("waitTable").innerHTML =  " Wait Position: " + this.custTable;
    
        }
    }

