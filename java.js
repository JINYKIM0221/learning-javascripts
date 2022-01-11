//스페이스를 사용할 수없어
//1. const and let

//변수를 지정해주는 함수 : const,let
//what is the diffence between "const" and "let"?

//"const"는 constant라는 뜻이고 값이 바뀔 수없다.
//const는 절대 다른 값으로 업데이트 할 수 없다.
//ex)const a = 7;
//...
//const a = 8;
//console.long(a + b); : 오류가 난다
//let은 다른 값으로 변경 가능하다.


const a = 5;
const b = 2;
const SE = "Unique"
//2. console.log

// a를 나타나게 해주는 함수
console.log(a+b);

console.log(a/b);

console.log("she is " + SE);

//3. boolean True and False
const yyes = true;
console.log(yyes);

//4.null
//4-1 null과 false의 차이점
//null : 변수 안에 아무것도없다
// false는 값이 있고 null은 값이 없다

const yes = null;
//something이라는 것이 있지만 값이 주어지지 않아서 undefined된다
let something
console.log(yes,somthing);


//5.Arrays = []
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "the";
const fri = "fri";
const sat = "sat";
const sun = "sun";

//배열 안에는 문자,숫자 다 된다
const days = ["mon","tue","wed","thu","fri","sat","sun"];

console.log(days);

//배열 안의 요소 찾는 법 처음 : 0
console.log(days[3]); //: "thu"

//배열 안에 추가하는 법
days.push();

const to = ["A","B","c"];
to.push("D");
to = ["A","B","C","D"];


//6.Objects = {}
//const object는 안의 요소를 바꿀 수 있다.
const player = {
    name:"Uu",
    points:10,
    fat: true,

};
console.log(player);
console.log(player.name);
//object안에 추가도 가능하다 범위 써주고 .다음 추가 하고 싶은 것
player.yyyes ="OK";
//만약 숫자를 더하고 싶다면
player.points = player.points + 15;

