

export default async function getToken(): Promise<string | undefined> {
 

    const data = {
        grant_type: 'client_credentials',
        client_id: "cfaf41817ec9419badee6c303f5fa64e",
        client_secret: "1946eec6bce647e684b95b0699f9e54c"
    };

    let qsData: string[] = [];
    for (let i in data) {
        //@ts-ignore
        qsData.push(`${i}=${data[i]}`);
    }
    const queryString: string = qsData.join('&');
    console.log(queryString);
    

    try {
        const resp = await fetch('https://accounts.spotify.com/api/token', {
            method: "POST",
            headers: { "Content-type": "application/x-www-form-urlencoded"  
           },
            body: queryString
        });
        console.log("token" , resp);
        
        const token = await resp.json();
        return token.access_token as string;
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

// // Example usage:
// getToken().then(token => {
//     if (token) {
//         console.log("Access Token:", token);
//     } else {
//         console.log("Failed to retrieve access token.");
//     }
// });
