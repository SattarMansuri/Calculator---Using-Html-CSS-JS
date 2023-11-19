let equation = "";
let buttons = document.querySelectorAll('button');
const input = document.querySelector('input')

function multiply(){
    return '*'
  }

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (a)=>{
      if(a.target.innerHTML == '='){
        equation = eval(equation);
        input.value = equation;
      }

      else if(a.target.innerHTML == 'RESET'){
        equation = ""
        input.value = equation;
      }

      else if(a.target.innerHTML == 'DEL'){
        equation = equation.toString().slice(0,-1)
        input.value = equation;
      }

      else if(a.target.innerHTML == 'x'){
        equation = equation + multiply()
        input.value = equation
      }

      else{ 
      console.log(a.target)
      equation = equation + a.target.innerHTML;
      input.value = equation;
        }
    })
  }) 
