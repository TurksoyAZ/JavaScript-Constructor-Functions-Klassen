//Lev1_1_js-vertiefung_classes_constructor_argument_ball
// class Ball {

//     constructor(parametr = 'regular') {
//         this.ballType = parametr
//     }
// }

// let ball1 = new Ball()
// console.log(ball1.ballType);

// let ball2 = new Ball('super')
// console.log(ball2.ballType);

//Lev1_2_js-vertiefung_classes_constructor_argument_person

// class Person {
//     constructor(name, alter) {
//         this.name = name
//         this.alter = alter
//     }
//     info = function () {
//         console.log(`${this.name} is ${this.alter} years ol `);
//     }
// }

// let test = new Person('Emanuela', 18)
// test.info()

// Lev1_3_js - vertiefung_classes_constructor_argument_person

//output
let result = document.querySelector('#result');

//inputs
let textInput = document.querySelector('#name')
let numberInput = document.querySelector('#age')
let checkbox = document.querySelector('#examCheck')

//button
let btn = document.querySelector('#button')

class Person {
    constructor(name, alt) {
        this.name = name
        this.alt = alt
    }
    write = () => {
        let list = document.createElement('li')
        list.innerHTML = `${this.name} ${this.alt} year old.`
        result.appendChild(list)
        if (checkbox.checked === false) {
            list.style.color = 'red'
        } else {
            return
        }

        if (textInput.value === '') {
            result.innerHTML = ''
        } else if (numberInput.value === '') {
            result.innerHTML = ''
        }

    }
}

btn.addEventListener('click', () => {
    let people = new Person(textInput.value, numberInput.value)
    people.write()
})

