// JavaScript 관련 키워드 검색
// 👉 MDN(https://developer.mozilla.org/ko)
"use strict";

// 1. 대입 연산: 오른쪽 값을 왼쪽 변수에 대입
// 구글링 -> site:developer.mozilla.org 자바스크립트 대입(할당) 연산자
const strawberry = 200; // "=" 대입 연산자, 할당 연산자를 의미, 200원 우측 값을 좌측 변수 Strawberry에 대입
const kiwi = 800;
const banana = 500;

// 2. 문자열 덧셈: 문자열을 연결
// 구글링 -> site:developer.mozilla.org 자바스크립트 문자열 연결
console.log("🍓딸기 개당 가격: " + strawberry + " 원");
console.log("🥝키위 개당 가격: " + kiwi + " 원");
console.log(`🍌바나나 개당 가격: ${banana} 원`); // 백틱

// 3. 산술 연산, 기초 산수!
// 구글링 -> site:developer.mozilla.org 자바스크립트 산술
// 🍓 + 🥝 - 🍌 = ?
const result1 = strawberry + kiwi - banana;
console.log(result1);

// 5 x 🍓 ÷ 🍌 = ?
const result2 = (5 * strawberry) / banana;
console.log(result2);

// 🍌 - 🍓 x 5 + 🥝 = ?
const result3 = banana - strawberry * 5 + kiwi;
console.log(result3);

// 나머지 연산자 7 % 3 = 2.. 1 // %는 나머지 연산자
console.log(7 % 3);

// 제곱 연산 2 ** 3 = ?
console.log(2 ** 3);

// 4. 연산자 우선순위, 뭐를 먼저 연산?
// 구글링 -> site:developer.mozilla.org 자바스크립트 연산자,우선순위
console.log(100 + 200 / 50);
console.log(500 / (200 - 150));
console.log(500 + 2 + "3"); // 문자열과 숫자가 덧셈 할 경우 문자열로 바꿔버린다 -> "502" + "3" (문자열 연결)
console.log("3" + 500 + 2);
