fetch('https://api.nomics.com/v1/markets/interval?key=5338f664f16533a31f3c9c5f642b0d6b&currency=BTC&start=2017-01-01T00%3A00%3A00Z&end=2018-10-03T00%3A00%3A00Z')
.then(r => r.json())
.then(data => console.log(data)) 
