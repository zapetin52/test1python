import requests;

PARTNER_SERVICE_APIROOT = "https://api.partnercenter.microsoft.com";
AUTHORITY = "https://login.windows.net";
USERNAME = "soporte@gruposegagt.onmicrosoft.com";
PASSWORD = "Sega!2017";
RESOURCE_URL = "https://api.partnercenter.microsoft.com";
CLIENT_ID = "afbda1af-5662-4364-9705-d3b5bf9e0bc9";
APPLICATION_DOMAIN = "GruposegaGT.onmicrosoft.com";

def generate_token():
    login_url = ("%s/%s/oauth2/token"  % (AUTHORITY, APPLICATION_DOMAIN));
    data_to_post = {"resource": RESOURCE_URL, "client_id": CLIENT_ID,
                    "grant_type": "password", "username": USERNAME, "password": PASSWORD,
                    "scope": "openid"}

    r = requests.post(login_url, data = data_to_post)
    return r.json();

#print(generate_token());