(function start() {
    //alert("--start--");
    init();
})();



function init() {
    var chatBoxDiv = document.createElement("div");
    var showChatDiv = document.createElement("div");
    var typeChatDiv = document.createElement("div");

    chatBoxDiv.id = "chatBoxDiv";
    showChatDiv.id = "showChatDiv";

    typeChatDiv.id = "typeChatDiv";
    typeChatDiv.contentEditable = true;

    typeChatDiv.addEventListener("keypress", handleKeyPressEvent);


    chatBoxDiv.appendChild(showChatDiv);
    chatBoxDiv.appendChild(typeChatDiv);

    document.body.appendChild(chatBoxDiv);


}

function handleKeyPressEvent(e) {
    console.log(e);
    if (e.charCode == 13) {
        var showChatDiv = document.getElementById("showChatDiv");
        var typeChatDiv = document.getElementById("typeChatDiv");

        var tempTextDiv = document.createElement("div");
        tempTextDiv.innerHTML = typeChatDiv.innerText;

        showChatDiv.appendChild(tempTextDiv);
        typeChatDiv.innerText = "";
    }
}

