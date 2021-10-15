function saveSubmitForm(e) {
    valid = 1;
    //getting values
    realName = document.querySelector("#real-name").value;
    if(realName == ""){
        document.getElementById("real-name").classList.add("invalid");
        valid = 0;
    }
    else{
        document.getElementById("real-name").classList.remove("invalid");
    }

    inGameName = document.querySelector("#ingame-name").value;
    if(inGameName == ""){
        document.getElementById("ingame-name").classList.add("invalid");
        valid = 0;
    }
    else{
        document.getElementById("ingame-name").classList.remove("invalid");
    }

    email = document.querySelector("#email").value;
    if(email == ""){
        document.getElementById("email").classList.add("invalid");
        valid = 0;
    }
    else{
        document.getElementById("email").classList.remove("invalid");
    }

    videoLink = document.querySelector("#video-link").value;
    // regex2 = new Regex("");
    if(videoLink == ""){
        document.getElementById("video-link").classList.add("invalid");
        valid = 0;
    }
    else
    {
        document.getElementById("video-link").classList.remove("invalid");
    }

    videoTimestamp = document.querySelector("#video-timestamp").value;
    if(videoTimestamp == ""){
        document.getElementById("video-timestamp").classList.add("invalid");
        valid = 0;
    }
    else{
        document.getElementById("video-timestamp").classList.remove("invalid");
    }

    // videoGame = document.querySelector("#video-game").value;
    // if(videoGame == "Select Category")
    // document.getElementById("video-game").classList.add("invalid");
    // else
    // document.getElementById("video-game").classList.remove("invalid");

    videoCategory = document.querySelector("#video-category").value;
    if(videoCategory == "Select Category"){
        document.getElementById("video-category").classList.add("invalid");
        valid = 0;
    }
    else{
        document.getElementById("video-category").classList.remove("invalid");
    }

    videoDescription = document.querySelector("#video-description").value;
    if(videoDescription == ""){
        document.getElementById("video-description").classList.add("invalid");
        valid = 0;
    }
    else{
        document.getElementById("video-description").classList.remove("invalid");
    }


    if(valid == 1){
        // msgsave(
        //     realName,
        //     inGameName,
        //     email,
        //     videoLink,
        //     videoTimestamp,
        //     videoGame,
        //     videoCategory,
        //     videoDescription
        // );
        document.querySelector("#real-name").value = "";
        document.querySelector("#ingame-name").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#video-link").value = "";
        document.querySelector("#video-timestamp").value = "";
        document.querySelector("#video-game").value = "Select Category";
        document.querySelector("#video-category").value = "Select Category";
        document.querySelector("#video-description").value = "";
        showSubmitForm();
        clipSubmittedModal(1);
    }
    else
        console.log("Not Valid")
}
//save msg
function msgsave(
    videolink,
    catagory,
    ingamename,
    timestamp,
    realname,
    email,
    description
) {
    var newmsg = messageRef.push();
    newmsg.set({
        videolink: videolink,
        catagory: catagory,
        ingamename: ingamename,
        timestamp: timestamp,
        realname: realname,
        email: email,
        description: description,
    });
}
