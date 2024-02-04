//for background
const aKey = '9VH71lvLMBdCCGCrHyIX0iq6DYsGGGLuU86_xMH6fT0'
async function backGroundImage(){
    const imageGenerator = await fetch(`https://api.unsplash.com/photos/random?query=landscape&orientation=landscape&client_id=${aKey}`)
    data = await imageGenerator.json();
    const imageUrl = data.urls.full;
    document.body.style.backgroundImage = `url('${imageUrl}')`;
}

// Fetch 
// fetch(`https://api.unsplash.com/photos/random?query=landscape&orientation=landscape&client_id=${aKey}`)
//   .then(response => response.json())
//   .then(data => {
//     const imageUrl = data.urls.full;

//     // Use the image URL as needed (e.g., set it as the background)
//     document.body.style.backgroundImage = `url('${imageUrl}')`;
//   })
//   .catch(error => console.error('Error fetching random photo:', error));
// console.log(imageUrl)
backGroundImage();

// for calculator
document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display'); //display run hanna lai

    for (let i = 0; i <= 9; i++) {
        document.getElementById(`btn${i}`).addEventListener('click', function () {
            appendToDisplay(i);
        });
    }
    //button listener
    document.getElementById('btn*').addEventListener('click', function () {
        appendToDisplay('*');
    });
    document.getElementById('btn+').addEventListener('click', function () {
        appendToDisplay('+');
    });
    document.getElementById('btn-').addEventListener('click', function () {
        appendToDisplay('-');
    });
    document.getElementById('btn/').addEventListener('click', function () {
        appendToDisplay('/');
    });
    document.getElementById('btn.').addEventListener('click', function () {
        appendToDisplay('.');
    });
    document.getElementById('btnπ').addEventListener('click', function () {
        appendToDisplay(Math.PI);
    });

    document.getElementById('btnClear').addEventListener('click', function () {
        clearDisplay();
    });
    document.getElementById('btnEnter').addEventListener('click', function () {
        finalresult();
    });

    addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            finalresult();
        }
    });
    
    addEventListener('keypress', function (event) {
        if (event.key === 'Shift') {
            finalresult();
        }
    });
    function appendToDisplay(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = '';
    }
    function calculation(problem){
        return eval(problem);
    }

    function finalresult() {
        try {
            const result = calculation(display.value);
            display.value=result
            
        } catch (error) {
            display.value = 'Error';
        }
    }
});
