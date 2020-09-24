document.addEventListener("DOMContentLoaded", function (event){
    
    let chat = document.getElementById("chatInput");
    let chatBtn = document.getElementById("chatBtn")
    let chatBox = document.getElementById("chatRuta");
    chatBtn.addEventListener("click", function(e)
    {   
        if( chat.value != "")
        {
        let msg = document.createElement("p");
        msg.innerHTML = chat.value;
        let br = document.createElement("br");
        
        msg.classList.add("msg");
        
        chatBox.appendChild(msg);
        chatBox.appendChild(br);
        chat.value=null;
        }
        })

    addEventListener("keyup", function(e)
    { if((e.key === "Enter") && (chat.value != ""))
    {
        let msg = document.createElement("p");
        msg.innerHTML = chat.value;
        let br = document.createElement("br");
        
        msg.classList.add("msg");
        chat.value="";
        
        chatBox.appendChild(msg);
        chatBox.appendChild(br);

    }

    })

})