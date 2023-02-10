document.addEventListener('DOMContentLoaded', () => {

    function pad(n){
        return n > 9 ? "" + n: "0" + n;
    }

    setInterval(() => {
        const date = new Date();
        const seconds = date.getSeconds();
        const minutes = date.getMinutes();
        const hour = date.getHours();
        document.querySelectorAll(".current_date").forEach((dateElement) => {
            dateElement.innerHTML = `${pad(hour)}:${pad(minutes)}:${pad(seconds)}`;
        });
    }, 100)

    const tokens = document.querySelectorAll('.token');
    const cryptoCards = document.querySelectorAll('.crypto-card');
    const backButton = document.querySelector('#back-button i');
    const chartPeriods = document.querySelectorAll('.chart-period');
    const currentStockPrice = document.querySelector('#current-stock-price');

    tokens.forEach(token => {
        token.addEventListener('click', () => {
            let currentPath = window.location.pathname;
            window.location.assign(currentPath.replace('index.html', 'price.html'));
        })
    });

    cryptoCards.forEach(card => {
        card.addEventListener('click', () => {
            let currentPath = window.location.pathname;
            window.location.assign(currentPath.replace('index.html', 'token.html'));
        })
    })

    backButton && backButton.addEventListener('click', () => window.history.back());

    chartPeriods.forEach(chartPeriod => {
        chartPeriod.addEventListener('click', (e) => {
            chartPeriods.forEach(cp => cp.classList.remove('selected'))
            e.target.classList.add('selected');
        })
    });

    function animateStockPrice () {
        let startValue = 0.00;
        let finalValue = 1579.88;
        let duration = 0;
        let counter = setInterval(function(){
            startValue += 15.10;
            currentStockPrice.textContent = `$ ${startValue.toFixed(2)}`;
            if(startValue>=finalValue) {
                currentStockPrice.textContent = `$ ${finalValue}`;
                clearInterval(counter);
            }
        },duration)
    }
    currentStockPrice && animateStockPrice();
})