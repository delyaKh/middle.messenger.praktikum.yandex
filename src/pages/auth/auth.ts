(function () { 
  
    

    function btnHandler() {  
        const hasLogin = document.querySelector("#login").value == '';
        const hasPassword = document.querySelector("#password").value == '';
    
        if(!hasLogin && !hasPassword)
        {
            document.querySelector("#login").value = '';
            document.querySelector("#password").value = '';
            window.location.href = "/up_/chat/chat.html";
        }
    };

window.btnHandler = btnHandler;

})();