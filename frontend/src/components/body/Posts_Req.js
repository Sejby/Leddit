import axios from 'axios'

var polePrispevku = []

export async function nactiPrispevky() {
    axios.post("http://localhost:5000/nactiprispevky")
        .then(res => {
            polePrispevku.push(res.data)
            // console.log(polePrispevku);
        })
        .then(polePrispevku => { return polePrispevku })
        .catch(err => console.log(err))
}


