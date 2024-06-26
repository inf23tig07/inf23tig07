     document.getElementById("dropdownToggle").addEventListener("click", function(event) {
        event.preventDefault(); 
        var content = document.getElementById("dropdownContent");
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    });