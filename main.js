// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
   $("#email_form").validate({
        rules: {
            "firstname": {
                required: true,
            }, 
            "lastname":{
                required: true
            },
            "Email": {
                required: true,
                email: true
            },
            
            
            
        },
        messages: {
            "email_1": {
                required: "Enter your Name." 
            },
            "lastname":{
                required: "Enter your Last Name."
            },
            "Email":{
                required: "Enter your Email."
            }
        }
        
    });

});