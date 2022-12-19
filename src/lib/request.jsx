
const token = localStorage.getItem("loginToken")

async function getToken (url, data) {

    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

    const responseData = await response.json()

    return responseData
    
   // console.log('rta en formato json >>> ', responseData)
}

async function getProducts (url) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
          'content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        },
        //body: JSON.stringify(data)
      });

    const responseData = await response.json()

   // console.log('data products >>> ', responseData)
    return responseData
    
}


export {
    getToken,
    getProducts
}