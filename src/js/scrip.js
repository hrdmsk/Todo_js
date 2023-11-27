document.querySelector('input[name="CoName"]').addEventListener('change', function(){
    var value1 = this.value
    var input1 = document.getElementById('company')

    if (value1 === 'on') {
        input1.style.display = 'block';                                      
    } else if(value === 'off'){
        input1.style.display = 'none';                   
    }
})
document.querySelector('input[name="phoneOnOff"]').addEventListener('change', function(){
    var value2 = this.value
    var input2 = document.getElementById('phoneNo')

    if (value2 === 'on') {
        input2.style.display = 'block';                                      
    } else if(value === 'off'){
        input2.style.display = 'none';                   
    }
})
document.querySelector('input[name="toritugiOnOff"]').addEventListener('change', function(){
    var value3 = this.value
    var input3 = document.getElementById('toritugi')

    if (value3 === 'on') {
        input3.style.display = 'block';                                      
    } else if(value === 'off'){
        input3.style.display = 'none';                   
    }
})