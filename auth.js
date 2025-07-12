const CLIENT_ID = "140938689096-9bmpdvn640s6234st32dc06o4gn8rr72.apps.googleusercontent.com";
window.accessToken = "";

window.onload = () => {
    const loginBtn = document.getElementById("login");

    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            const tokenClient = google.accounts.oauth2.initTokenClient({
                client_id: CLIENT_ID,
                scope: "https://www.googleapis.com/auth/calendar.events",
                callback: (response) => {
                    window.accessToken = response.access_token;
                    console.log("✅ Access Token:", window.accessToken);

                    const tokenDisplay = document.getElementById("token");
                    if (tokenDisplay) {
                        tokenDisplay.innerText = "🔑 Token: " + window.accessToken;
                    }


                },
            });

            tokenClient.requestAccessToken();
        });
    }
};
