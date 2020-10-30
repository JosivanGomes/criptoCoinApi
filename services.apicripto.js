const apikey = {
    key: "71dc8a40-1f88-41e7-8efd-097a8fb42659"
}

fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${apikey.key}`)
    .then((response) => {
        if(!response.ok) throw new Error(`Erro ao executar requisição, status ${response.status}`);
        return response.json()
    })
    .then((api)=>{

        let texto = ""
        for(let i = 0; i<10; i++){
            let date = new Date(api.data[i].first_historical_data)
            texto += `
                <div class="media">
                    <img src="coin.jpg" class="align-self-center mr-3" alt="coin" width="100" heigth="60">
                    <div class="media-body">
                        <h5 class="mt-2">${api.data[i].name}</h5>
                        <p>${api.data[i].symbol} - ${date.toLocaleString("pt-br")}</p>
                        
                    </div>
                </div>
            `

            console.log(api.data[i])

            document.querySelector('#coins').innerHTML = texto
        }
    })
    .catch((error) => {
        console.error(error.message)
    })

    