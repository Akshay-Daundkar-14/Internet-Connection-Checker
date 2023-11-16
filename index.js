

window.addEventListener('load',checkConnection);


function checkConnection(){
    console.log("LOAD");

    const status = document.getElementById("conStatus");
    const ipAdd = document.getElementById("ipAddress");
    const strength = document.getElementById("conStrength");

    if(navigator.onLine){

        // Status 
        status.textContent = 'Connected';

        // IP Address
        // https://api.ipify.org?format=json

        fetch('https://api.ipify.org?format=json').then((response)=>
           response.json() 
        ).then((data)=>{
            ipAdd.textContent = data.ip;
        }).catch(()=>{
            status.textContent = 'Disconnected';
            ipAdd.textContent = 'None';
            strength.textContent = 'None';
        })
        

        // Strength
        let str = navigator.connection.downlink;
        let str1 = str ? str+" Mbps" : "Unknown";

        strength.textContent = str1;
    }
    else{
        status.textContent = 'Disconnected';
        ipAdd.textContent = 'None';
        strength.textContent = 'None'
    }

    

}