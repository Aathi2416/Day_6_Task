//04.write a class to calculate the uber price 


let baseFee = 5
let cities = ["For Trichy", "For Coimbatore", "For ooty", ]
let uberRates = [150, 550, 100]


let customerName = "oodi BaBa" 
let customerCity = "For Coimbatore" 

console.log("Hello", customerName)

function getRate(customerCity) {

    function uberRate(customerCity, index) {

        let finalRate = (uberRates[index]) * baseFee
    return finalRate
  }

  console.log( customerCity, "Total Amount For this Trip is Rs:", uberRate(customerCity, cities.indexOf(customerCity)))
}

getRate(customerCity)




