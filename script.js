fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
  .then(res => res.json())
  .then(data => {
    const names = data.slice(0, 10).map(c => c.name);
    const prices = data.slice(0, 10).map(c => c.current_price);
    new Chart(document.getElementById('cryptoChart'), {
      type: 'bar',
      data: {
        labels: names,
        datasets: [{ label: 'Price in USD', data: prices, backgroundColor: 'orange' }]
      }
    });
  });
