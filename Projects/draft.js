console.warn('this is an warning')
console.error('error')

const name = 'Tasnim'
const age = 17
const isAdult = true
const GPA = 5.0
console.log(typeof isAdult)

const intro = `I am ${name} & I am ${age}`
console.log(intro)

const countries = ['Palestine', 'Yemen', 'Syria']
console.log(countries)
console.log(Array.isArray(countries))
console.log(typeof countries)

countries.push('Egypt')
countries.unshift('Bangladesh')
console.log(countries)

const myObject= {
    firstName: 'Tasnim',
    lastName: 'Alam',
    hobbies: ['coding', 'games', 'sports'],
    address: {
        street: '50 DIT Road',
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}

console.log(myObject)
console.log(myObject.hobbies[1])
console.log(myObject.address.city)
const {firstName: fName} = myObject
console.log(fName)


const str = 'netflix'
console.log(str.toUpperCase().split('').reverse().join(''))
console.log(str.substring(0,3).toUpperCase())

const continent = ['Asia', 'Africa', 'Europe', 'North America']
console.log(continent[1].split('').reverse().join(''))

const todos = [
    {
        id: 1,
        task: 'Meeting With Boss',
        isCompleted: true
    },
    {
        id: 2,
        task: 'Dentist Appointment',
        isCompleted: false
    },
    {
        id: 3,
        task: 'Going to Grocery Store',
        isCompleted: true
    }
]
console.log(todos)
console.log(todos[1].task)

function remainder(a, b){
    return a%b
}
console.log(remainder(100, 30))

for(let i =1; i<=10; i++){
    console.log(Math.sqrt(i*i))
}

const x = 2.5 
const y = 18
if(x>10 || y<100){
    console.log('x is greater than 10 or y is less than 100')
}

if(x>5){
    console.log('x is greater than 5')
} else{
    console.log('x is less than 5')
}

const color = x>10 ? 'yellow' : 'blue'
console.log(color)

switch(color){
    case 'yellow': console.log('Color is yellow')
    break;
    case 'blue': console.log('Color is blue')
    break;
    default: console.log('Color is neither yellow nor blue')
    break
}

function Persons(firstName, lastName, dob){
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
    /* this.getBirthYear = function(){
        return this.dob.getFullYear()
    } */
}

Persons.prototype.getBirthYear = function(){
    return this.dob.getFullYear()
}

const person1 = new Persons('Ted', 'Mosby', '10-7-1983')
const person2 = new Persons('Barney', 'Stinson', '1-19-1984')
console.log(person1)
console.log(person1.getBirthYear())

class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
    }
    getBirthYear(){
        return this.dob.getFullYear()
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const person3 = new Person('Jack', 'Smith', '2-05-1966')
console.log(person3)
console.log(person3.getFullName())

function timesTable(b){
    for(let a=1; a<=10; a++){
        console.log(a*b)
    }
}
timesTable(15)

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

const sortedAge = ages.sort(function(a,b){
    return a-b
})

console.log(sortedAge)

const sumOfAges = ages.reduce(
    function(total , sum){
        return total + sum
    },0
)
console.log(sumOfAges)

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

companies.forEach(
    function(companyName){
        console.log(companyName.name) 
    }
)

const goodCompanies = companies.filter(
    function(rate){
        return rate.ratings>=4
    }
)
console.log(goodCompanies)

const oldCompanies = companies.filter((lifetime) => lifetime.end - lifetime.start >= 15)
console.log(oldCompanies)

const getDrivingLicense = ages.filter(age => age>18)
console.log(getDrivingLicense)

const taxOfTechCompanies = companies.filter(techCompany => techCompany.category === 'Technology').map(tax => tax.netWorth*0.5 )
console.log(taxOfTechCompanies)

const sortedCompanies = companies.sort((a,b) => b.ratings-a.ratings)
console.log(sortedCompanies)

const gnp = companies.reduce(function(total, sum){
    return total + sum.netWorth
},0)

console.log(gnp)


function showTime(){
    const time = document.getElementById('time')
    const date = document.getElementById('date')

    const currentTime = new Date()

    time.innerText = `${currentTime.getHours()}: ${currentTime.getMinutes()} `
    date.innerText = currentTime.toDateString()
    setTimeout(showTime, 1000)
}

showTime()