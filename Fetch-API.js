// const url = "http://worldtimeapi.org/api/timezone/Asia/Kolkata"

// async function getData(){
//     const response = await fetch(url)
    

//     console.log(response)
// }

// getData()

// const url = "http://worldtimeapi.org/api/timezone/Asia/Kolkata"

// async function getData(){
//     const response = await fetch(url)  
//     const data = await response.json()
//     console.log(data)
// }

// getData()


// const token="BQBbeHgbPM1juxyQUDVvwzlltu6EOIT2Zo6wAkmi3KMj9IIsIrQ3O3InQm4dKJADO8UZfHZyrb3pPrXIo1CfXfVz6fxmebxkJ2b8DGV3MIJua7IB-s-OyfYXvrVqcX9oG-IgolLqjSmEX92qPqFb1Qd4Jo7I9_tb9GTHHrGWz1iH-VYPtbLdkoryZshYqDZs3-kGcW5HoVMJ6zJr5u0IG91jIJw-aKJ2FD7Yg_aLluI7CAUOwZJ_Jz4uZxUXkcqdCGI-Z6n3fCFitWbyLDM5TPpg"
// const url = "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy"

// const request = new Request(
//     url,{
//         headers:{
//             'Authorization': `Bearer ${token}`
//         },
//     })


// // async function getData(){
// //     const response = await fetch(request)  
// //     const data = await response.json()
// //     console.log(data)
// // }

// // alternate

// async function getData(){
//     try{
//         const response = await fetch(request) 
//         const data = await response.json()
//         if(response.status == 200) {
//             console.log("Success : ", data)
//         } else {
//             console.log('Server Error : ', data.error.message)
//         }
//     } catch (error) {
//         console.log('ERROR : ', error)
//     }
    
// }

// getData()


const token= 'BQBcpSpQrwyBg513J1YUnlOHilPCf7PsVFIBA0RS9rd8JLCiAA0b7hfXB9FiSoySHmG4RTmoVpBZqD3BRg9tDspturLrf0IQdwuFLlPX96mF-Schxo5RmDsfNt2aRzqxVSbIRE1oItQ2RC_XFFselwOTI2umLZSzqLeCerXKJGFYcVXc1yU6nElFsfmuKMFmmfUzZb7kqBD4FlJyX856RUAEjnlsDmIvezXS45haOrr1lmez8rfSCoeZT-L_UedfAmvv_RVN8D1DPWxrju799-0O'
const url = "https://api.spotify.com/v1/artists?ids=5sSzCxHtgL82pYDvx2QyEU,3m49WVMU4zCkaVEKb8kFW7,1qFp8zDvsXyCsC5dqz8X4S,4zCH9qm4R2DADamUHMCa6O,7qjJw7ZM2ekDSahLXPjIlN,0oOet2f43PA68X5RxKobEy,2IUtwMti1OiT3lkW6RubgH,5VVN3xZw1i2qihfITZlvCZ,2GoeZ0qOTt6kjsWW4eA6LS,2FgHPfRprDaylrSRVf1UlN,0PedzRv5oaVHXOXJzhA01t,4YRxDV8wJFPHPTeXepOstw"

const request = new Request(
    url,{
        headers:{
            'Authorization': `Bearer ${token}`
        },
    })


// async function getData(){
//     const response = await fetch(request)  
//     const data = await response.json()
//     console.log(data)
// }

// alternate

async function getData(){
    // try{
    //     const response = await fetch(request) 
    //     const data = await response.json()
    //     if(response.status == 200) {
    //         console.log("Success : ", data)
    //     } else {
    //         console.log('Server Error : ', data.error.message)
    //     }
    // } catch (error) {
    //     console.log('ERROR : ', error)
    // }
    // try {
    //     const response = await fetch(request);
    //     const data = await response.json();
    //     if (response.status === 200) {
           
    //         const dataElement = document.getElementById("data-api");
        
    //         dataElement.innerHTML = JSON.stringify(data, null, 2);
    //     } else {
            
    //         const dataElement = document.getElementById("data-api");
    //         dataElement.innerHTML = `Server Error: ${data.error.message}`;
    //     }
    // } catch (error) {
    //     console.log('ERROR: ', error);
    // }
    
    try {
        const response = await fetch(request);
        const data = await response.json();
        if (response.status === 200) {
            const dataElement = document.getElementById("data-api");

            data.artists.forEach(artist => {
                const artistlist= document.createElement("h2");
                artistlist.textContent = `${artist.name}`;
                dataElement.appendChild(artistlist);
            });
    
            // Add spaces (2 spaces in this example) between each artist
            const formattedData = JSON.stringify(data, null, 2);
            const formattedHTML = formattedData.replace(/\n/g, "<br>").replace(/  /g, "&nbsp;&nbsp;");
            dataElement.innerHTML = formattedHTML;
        } else {
            const dataElement = document.getElementById("data-api");
            dataElement.innerHTML = `Server Error: ${data.error.message}`;
        }
    } catch (error) {
        console.log('ERROR: ', error);
    }
    
}

getData()