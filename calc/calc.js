let numbers = [];

// Operations
$('.plus').on(    'click',    () => { numbers.push('+'); document.querySelector('#output').innerHTML = `${num2string()}`; });
$('.minus').on(   'click',    () => { numbers.push('-'); document.querySelector('#output').innerHTML = `${num2string()}`; });
$('.multiply').on('click',    () => { numbers.push('*'); document.querySelector('#output').innerHTML = `${num2string()}`; });
$('.divide').on(  'click',    () => { numbers.push('/'); document.querySelector('#output').innerHTML = `${num2string()}`; });

/////
function num2string() {
    let i = 0;
    let x = '';
    console.log(numbers);
    while (i < numbers.length) {
        x += numbers[i];
        i++;
    }
    console.log(x);
    return x;
}

// Numbers
function setNumber(number) {
    numbers.push(number);
    document.querySelector('#output').innerHTML = `${num2string()}`;
}

$('.1').on('click', () => { setNumber(1); });
$('.2').on('click', () => { setNumber(2); });
$('.3').on('click', () => { setNumber(3); });

$('.4').on('click', () => { setNumber(4); });
$('.5').on('click', () => { setNumber(5); });
$('.6').on('click', () => { setNumber(6); });

$('.7').on('click', () => { setNumber(7); });
$('.8').on('click', () => { setNumber(8); });
$('.9').on('click', () => { setNumber(9); });

$('.0').on('click', () => { setNumber(0); });

$('.c').on('click', () => { numbers = []; num2string(); document.querySelector('#output').innerHTML = `${num2string()}`; });
$('.equals').on('click', () => {
   let output = eval(num2string());
   document.querySelector('#output').innerHTML = output;
});
