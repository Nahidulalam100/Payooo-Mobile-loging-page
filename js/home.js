document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const amountAdded = document.getElementById('amount-added').value ;
    const pinNumberInpt = document.getElementById('input-pin-number').value;


    // wrong way to validate pin  Number
    if (pinNumberInpt === '1234') {
        console.log('added money to account');
        const blance = document.getElementById('acount-blance').innerText;
        // console.log(blance);
        const addMoneyNumber = parseFloat(amountAdded);
        const addBlanceNumver = parseFloat(blance)
        const newBlance = addMoneyNumber + addBlanceNumver ;


        // Update the blance in the  ui/Dom
        document.getElementById('acount-blance').innerText = newBlance;



        
        
        
        
        
        
    }
    else{
        alert('Fail to added money try again')
    }
    
    
    
})
