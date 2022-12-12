(function () {  
    
    function btnHandler() {  
        const hasLogin = document.querySelector("#login").value != '';
        const hasPassword = document.querySelector("#password").value != '';
        const hasFirstName = document.querySelector("#first_name").value != '';
        const hasSecondName = document.querySelector("#second_name").value != '';
        const hasEmail = document.querySelector("#email").value != '';
        const hasPhone = document.querySelector("#phone").value != '';

        const hasData = hasEmail && hasFirstName && hasLogin && hasPassword && hasPhone && hasSecondName;
    
        if(hasData)
        {
            document.querySelector("#login").value = '';
            document.querySelector("#password").value = '';
            document.querySelector("#first_name").value = '';
            document.querySelector("#second_name").value = '';
            document.querySelector("#email").value = '';
            document.querySelector("#phone").value = '';

            window.location.href = "/up_/auth/auth.html";
        }
    };

window.btnHandler = btnHandler;

})();