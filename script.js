const container = document.getElementById("container");
const generateBtn = document.getElementById("generate");
const clearBtn = document.getElementById("clear");

function generateDivs() {
    container.innerHTML = "";

    const start = Number(document.getElementById("start").value);
    const end = Number(document.getElementById("end").value);
    const fizzVal = Number(document.getElementById("fizz").value);
    const buzzVal = Number(document.getElementById("buzz").value);

    for (let i = start; i <= end; i++) {
        const div = document.createElement("div");
        div.id = 'myid${i}';
        div.classList.add("box");

        const fizz = i % fizzVal === 0;
        const buzz = i % buzzVal === 0;

        if (fizz && buzz) {
            div.classList.add("fizzbuzz");
            div.innerText = "FizzBuzz";
        } else if (fizz) {
            div.classList.add("fizz");
            div.innerText = "Fizz";
        } else if (buzz) {
            div.classList.add("buzz");
            div.innerText = "Buzz";
        } else {
            div.classList.add("number");
            div.innerText = i;
        }

        container.appendChild(div);
    }
}

generateBtn.addEventListener("click", generateDivs);
clearBtn.addEventListener("click", () => {
    container.innerHTML = "";
});

generateDivs();
