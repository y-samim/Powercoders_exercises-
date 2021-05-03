countdown(10);

function countdown(num) {
  if (num >= 5) {
    console.log(num);
    num = num -1;
    countdown(num);
  }
}

