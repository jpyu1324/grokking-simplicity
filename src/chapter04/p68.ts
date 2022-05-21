let total = 0;

// 이 함수는 액션이다.
function addToTotal(amount: number /* 인자는 명시적 입력이다. */) {
  /* 콘솔에 찍는 것은 암묵적 출력이다. */
  console.log(
    `Old total: ${total /* 전역변수를 읽는 것은 암묵적 입력이다. */}`
  );
  total += amount; // 전역변수를 바꾸는 것은 암묵적 출력이다.
  return total; // 리턴값은 명시적 출력이다.
}

// 액션: 함수에 암묵적 입력 & 출력 존재 O
// 계산: 함수에 암묵적 입력 & 출력 존재 X
