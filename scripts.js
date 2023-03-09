let insert = (num) => {
  let number = document.getElementById('result').innerHTML;
  document.getElementById('result').innerHTML = number + num;
};

let clearP = () => (document.getElementById('result').innerHTML = '');
let backSpace = () => {
  let result = document.getElementById('result').innerHTML;
  document.getElementById('result').innerHTML = result.substring(
    0,
    result.length - 1,
  );
};

let calc = () => {
  let result = document.getElementById('result').innerHTML;
  if (result) {
    document.getElementById('result').innerHTML = eval(result);
  } else {
    alert('Nada para calcular!');
  }
};
