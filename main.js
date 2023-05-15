let outputscreen = document.getElementById('output-screen');


function display(num) {
  outputscreen.value += num
}


function calculate() {
 
    outputscreen.value = eval(outputscreen.value)
  }
  

function clr() {
  outputscreen.value = ''
}

function del() {
  outputscreen.value = outputscreen.value.slice(0, -1)
}