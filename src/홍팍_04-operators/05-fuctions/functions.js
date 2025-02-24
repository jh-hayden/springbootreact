// JavaScript 관련 구글링
// 👉 site:developer.mozilla.org {연관_키워드}
"use strict";

// 1. 함수, 리뷰!
// ① 일련의 코드 묶음(코드 재사용성 증가 🔺)
// ② 입력에 따른 결과 반환(like a 자판기)
// ③ 함수 호출 시, 실행 흐름은 함수 내부로 이동
// ④ 함수 종료 시, 실행 흐름은 이전 위치로 되돌아감

// 선언부(function declation): 함수를 정의한 영역
function sayHi(username) {
  console.log(`안녕하세요, ${username}입니다.`);
}

//console.log(sayHi("홍팍"));

//호출부(fucntion call): 함수를 사용(실행)하는 영역
sayHi("홍팍"); // -> 호출
sayHi("호크"); // -> 호출
sayHi("쿠마"); // -> 호출

// 선언부: 입력값 세제곱을 반환하도록 함수를 정의
function cube(num) {
  return num * num * num;
}

const a = cube(2); // 2 * 2 * 2
const b = cube(3); // 3 * 3 * 3
console.log(`a = ${a}, b= ${b}`);

console.log(cube(5));

// 2. 파라미터, 입력값을 저장하는 변수!
// 👉 필요에 따라 개수 조절 가능

// 라면 생성 자판기(함수): 선택 불가(파라미터: 0개)
function createRamen() {
  return "라면은 너구리";
}
const ramen = createRamen();
console.log(ramen);

// 만두 생성 자판기(함수): 재료 1개 선택 가능(파라미터: 1개)
function createMandoo(ingredient) {
  return `${ingredient} 만두`;
}
let mandoo1 = createMandoo("고기");
let mandoo2 = createMandoo("김치");
console.log(mandoo1);
console.log(mandoo2);

// 김밥 생성 자판기(함수): 재료 2개 선택 가능(파라미터: 2개)
function createKimbap(a, b) {
  return `${a}, ${b} 김밥`;
}
let kimbap1 = createKimbap("참치", "김치");
console.log(kimbap1);

// 3. return, 함수 종료와 동시에 값을 반환!
// ① return => 우측 값을 반환
// ② return 생략하면? => undefined를 자동 반환
function test() {
  console.log("나는 값을 반환하지 않아..!");
}
const result = test();
console.log(result);

// 4. 스코프(scope), 변수의 활동 범위
// ① 프로그램은 실행 흐름에 따라 변수를 관리함
//  > 함수 호출 => 파라미터와 지역변수를 만듦
//  > 함수 종료 => 파라미터와 지역변수를 제거
function changeParmeterX(x) {
  x = x + 3;
  console.log(`x = ${x}`);
}

console.log(changeParmeterX(30));
//console.log(x); // x를 쓸 수 없는 이유 이미 위 함수 내부에서 파라미터로 사용
// 했기 때문에 함수 외부에서는 사용 불가능

function changeLocalVariableY(n) {
  let y = n + 1; //  ② 지역변수란, 함수 또는 블럭(중괄호) 내부에 선언된 변수
  console.log(`y = ${y}`);
}
changeLocalVariableY(20);
// console.log(y); // 위 함수내부에서만 사용가능 따라서 에러

// ③ 이름이 같지만 스코프가 다른 경우,
function changeLocalVariableZ(n) { // n = 3
    let z = n;                     // z = 3
    console.log(`local z = ${z}`); // z = 3
}

let z = 7;
console.log(`global z = ${z}`); // 7
changeLocalVariableZ(3);
console.log(`global z = ${z}`); // 7