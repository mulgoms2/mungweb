//1. use strict
//ES5에서 추가 된 언어
//너무 자유로운 언어여서 규약설정 필요 
'use strict';

//2. Variable
//let 변수는  ES6에서 추가됨

//block scope
//블럭 밖에서 변수에 접근 불가
{
  let name = 'mungmung'
  console.log(name);
}

//블럭 밖에서 선언한 변수는 어디서든 호출 가능 
//글로벌 변수
//메모리를 차지 - 적게쓰는게 좋음 
let globalscope = 'global name'

//var는 쓰지마!
//var hoisting 때문 - 호이스팅은 어디 선언한지에
//상관없이 가장 위로 선언을 끌어올려주는 것

//has no blockscope

//변수 선언 전부터 호출, 값지정, 출력 가능

//3. Constant 상수
//const (locked pointer, cant mutable- immutable data type)
//  - security
//  - threaed safety
//  - reduce human mistake

// 4. Variable types
//