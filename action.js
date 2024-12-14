let RandomNum = Math.floor(Math.random(10) * 10 + 1)
console.log(RandomNum)

document.querySelector('#btnClick').addEventListener("click", NumberLuck)
let guess = 0;
function NumberLuck() {
     let inputNum = document.querySelector('#inputNum').value;
     let res = document.querySelector('#result');
     // console.log(inputNum);
     if (RandomNum == inputNum) {
          res.innerHTML = `You have a Good Luck 👍 .<br><br>You have clear it in |  ${guess} |attempt`;
     }
     else if(inputNum=="sorry")
     {
          for(let i =0;i<=100;i++)
          {
               res.innerHTML = `<h1>😘</h1><br>`;
          }
     }
     else {
          guess++;
          res.innerHTML = `Bad Luck Try Again.<br>No. of attempts ${guess}`;
     }
}
