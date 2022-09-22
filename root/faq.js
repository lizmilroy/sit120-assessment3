// SIT120 Assessment 3
// Elizabeth Milroy - s222075016
// faq.js - Vue applications and components specific to the faq.html page.

// Components
// Component containing the template used to conditionally render the drop-down Q&A content.
// Is an example of the use of conditional rendering and props. 
var showcontent = {
    props: ['qa'],
    template: `<div>
        <button @click="seen = !seen">
        {{ qa.question }}
        </button>
            <div>
                <p :class="{ closed: seen }" v-show="!seen"> {{ qa.answer }} </p> 
                <p :class="{ closed: seen }" v-show="seen"> </p>
            </div>
        </div>
        `,
    data: function () {
        return {
            seen: true,
        }
    }
};

// Component containing the template used to display the counter game,
// and the methods used to implement event handling and custom events. 
var counter = {
    template: `<div>
    <p>Current Count: {{ count }} </p>
    <span class="buttons"> <button @click="increase">Increase</button>
    <button @click="decrease">Decrease</button> </span>
    </div>`,
    data: function () {
        return {
            count: 0,
        }
    },
    methods: {
        decrease: function () {
            this.count -= 1;
            this.$emit("decrease");
        },
        increase: function () {
            this.count += 1;
            this.$emit("increase")
        }
    }
};

// Applications 
// Application contains the data rendered using the showcontent component.
var qna = new Vue ({
    el: "#qna",
    data: {
        qas: [
            { id: 1, question: 'What is a Mechanical Keyboard?', answer: 'A mechanical keyboard is a keyboard that uses uses spring activated switches, unlike scissor switch keyboard found on laptops, or rubber membrane keybaords found alongside most PCs. A mechanical keyboard uses parts that can customised in every way imaginable. '},
            { id: 2, question: 'What is a Key Switch?', answer: 'The mechanical aspect of a keyboard refers to the spring-activated switch. These switches are the components that bridge the keycap pressed and the circuit board that coverts key presses to digital signals. Switches play a decivise role in how a keyboard sounds and feels. '},
            { id: 3, question: 'Keyboard Cases and Layouts' , answer: 'Keyboard cases are simple! They hold together everything in your keyboard. They are made from many different materials, the most common being plastic and aluminum. You can also find cases made of acrylic and good. The material of a keyboard can change its look, feel, sound and weight, so it is an important part of your keyboard that shoul not be overlooked. Your keyboard layout will determine what size case you need. There are dozens of keyboard sizes, and what one you choose is your own personal preference. As an example, a tenkeyless keyboard does not include a number pad, and a 60% keyboard doees not have function keys or arrow keys. The smaller the layout, the more keys are removed. '},
            { id: 4, question: 'Keycap Profiles and Materials', answer: 'Keycaps are the plastic caps that cover each individual key on a keyboard, and make up much of the aesthetic of the keyboard. There are many different profiles, which refer to the overall shape of the keycap. Some are flat, some rounded, and many other shapes. Keycap profiles allow you to customise your typing experience. Keycaps are most often made out of ABS or PBT plastic. PBT plastic is of a much higher quality compared to ABS plastic, and is more durable. In the end, the choice of material comes down to personal preference.'},
            { id: 5, question: 'What is a Stabilizer?', answer: 'Stabilizers are an essential poart of a keyboard, placed under the larger keys such as the space bar and backspace, to keep the from rattling, shaking, and tilting when typing. Stabilizers keep the keys balanced so you can have a stable typing experience.'},
            { id: 6, question: 'Lube and Films' , answer: 'Key switches can be lubricated to make the typing experience smoother, and sound different. It is an intensive and rewarding process. Films are similar, and help reducde wobble, and improve the overall sound of the switch. '}
        ]
    },
    components: {
        showcontent
    }
});

// Application uses the counter component to display the counter game. 'num' equals 'count' in the counter component. 
var countButtons = new Vue ({
    el: "#count-buttons",
    components: {
        counter
    },
    data: function () {
        return {
            num: 0
        }
    }
});