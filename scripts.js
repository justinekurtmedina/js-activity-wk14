document.addEventListener("DOMContentLoaded", function() {
            const button = document.getElementById("button");

            button.addEventListener("click", function() {
                let isUserReady = confirm("Are you ready?");
                console.log(isUserReady);
                if (isUserReady) {
                   document.getElementById("result").textContent = "User is Ready"
                }
                else  {
                    document.getElementById("result").textContent = "User not Ready"
                }
            });
        });