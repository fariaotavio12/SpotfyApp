

export default async function getToken(): Promise<string | undefined> {
 

    const data = {
        grant_type: 'client_credentials',
        client_id: "ccb7c561b1ce4df09adc4c3f78b407f3",
        client_secret: "231c498939364d9bb6b749a86e11d29b"
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
