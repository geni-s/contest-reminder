const CLIENT_ID = process.env.CLIENT_ID;
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
