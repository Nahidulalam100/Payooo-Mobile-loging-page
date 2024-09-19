document.getElementById('button-loging').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('loging button click');
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);

    // bad way to validate 
    if (phoneNumber === '7' && pinNumber === '1234') {
        console.log('You are loging');
        window.location.href='/home.html';
        
    }
    else{
        alert('wrong phone number or pin')
    }
    
    
})
