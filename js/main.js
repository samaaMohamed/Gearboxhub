    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("myHeader").style.backgroundColor = "#fff";
        document.getElementById("openNav").style.display = "none";
        document.getElementById("closeBtn").style.display = "block";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("myHeader").style.backgroundColor = "transparent";
        document.getElementById("openNav").style.display = "block";
        document.getElementById("closeBtn").style.display = "none";
    }
