const companies = [
    {name:' Company One', category: 'Technology', start: 2011, end: 2022, netWorth: 27500000, ratings: 4.8 },
    {name:' Company Two', category: 'Retail', start: 2009, end: 2018, netWorth: 200000, ratings: 3.9  },
    {name:' Company Three', category: 'Automobile', start: 2003, end: 2010, netWorth: 1700000, ratings: 3.4  },
    {name:' Company Four', category: 'Garments', start: 1989, end: 2020, netWorth: 450000000, ratings: 4.5  },
    {name:' Company Five', category: 'Pharmaceutical', start: 2017, end: 2027, netWorth: 17000000, ratings: 4  },
    {name:' Company Six', category: 'Technology', start: 2018, end: 2021, netWorth: 17500000, ratings: 4.1  },
    {name:' Company Seven', category: 'Food', start: 2000, end: 2018, netWorth: 700000, ratings: 4.7  },
    {name:' Company Eight', category: 'Garments', start: 2000, end: 2030, netWorth: 78000000, ratings: 5  },
    {name:' Company Nine', category: 'Technology', start: 2007, end: 2018, netWorth: 9000000, ratings: 3.8  },
    {name:' Company Ten', category: 'Food', start: 2017, end: 2020, netWorth: 659000, ratings: 3.1  }
]

const ages = [5, 19, 11, 47, 21, 33, 9, 17, 40, 70, 35, 21, 18, 55]

console.log(companies[2].category.substring(4,10).toUpperCase())

//  forEach()
companies.forEach(function(type){
    console.log(type.category)
})

// companies.forEach(function(companyName){
//     console.log(companyName.name)
// })

//filter()

const goodCompanies = companies.filter(function(rate){
    if(rate.ratings> 4){
        return true
    }
})

console.log(goodCompanies)

const getDrivingLicense = ages.filter(
    function(age){
        if(age>18){
            return true
        }
    }
)

console.log(getDrivingLicense)

const companiesAfter2000s = companies.filter(function(estdYear){
    if(estdYear.start > 2000){
        return true
    }
})

console.log(companiesAfter2000s)

const techCompanies = companies.filter(function(tech){
    if(tech.category === 'Technology'){
        return true
    }
})

console.log(techCompanies)

const companiesRunningMoreThan10years = companies.filter(function(runningTime){
    if(runningTime.end - runningTime.start > 10){
        return true
    }
})

console.log(companiesRunningMoreThan10years)


companies.forEach(function(startingYear){
    console.log(startingYear.start)
})

const garmentCompany = companies.filter(function(company){
    if(company.category === 'Garments'){
        return true
    }
})

console.log(garmentCompany)

const bestTechCompanies = companies.filter(function(techCompaniesRatings){
    return techCompaniesRatings.ratings > 4.5 && techCompaniesRatings.category === 'Technology'
})

console.log(bestTechCompanies)

const taxAmount = companies.map(function(tax){
    return tax.netWorth * 0.05
})

console.log(taxAmount)

/*
const sortCompaniesByStartingYear = companies.sort(function(a, b){
    if(a.start > b.start){
        return 1
    } else {
        return -1
    }
})

console.log(sortCompaniesByStartingYear)
*/
const sortedCompanies = companies.sort(function(a, b){
    return a.start-b.start
})

console.log(sortedCompanies)

const sortedAge = ages.sort(function(a, b){
    return a-b
})

console.log(sortedAge)

const totalNetWorth = companies.reduce(function(initial, sum){
    return initial + sum.netWorth
},0)

console.log(totalNetWorth)


// combine
const taxOfTechCompanies = companies.filter(function(tech){
    return tech.category === 'Technology'
}).reduce(function(initial, total){
    return initial + total.netWorth 
},0)*0.05  // at 5% tax

console.log(taxOfTechCompanies)