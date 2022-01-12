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

//7 Functions
function hello(){
    console.log("hello! C");
}

hello("youki");
//어떻게 hello괄호안에 있는 것을 넣을 수 있을까 데이터를 function에 넣는 법
// function hello()안에 변수를 넣고 console.log()안에 넣는다
//한개뿐만아니라 여러개 넣을 수 있다
function hello(smooth, age){
    console.log(smooth);
}

hello("youki", 15);
// 문장으로 만드는 법 : +로 연결
function hello(smooth, age){
    console.log("hey!" + smooth + age);
}

hello("youki", 15);

function plus(a,b){
    console.log(a + b);
}

plus(10,11);// 이 plust는 function에서 a = 10 , b = 11로 받아들이고 더한다
plus(12,12)// 이 plust는 function에서 a = 12 , b = 12로 받아들이고 더한다

function divide(a,b){
    console.log(a / b);
}
divide(100,52);
// function에 사용된 a,b는 저 안에서만 작동한다


//player라는 변수를 설정하고 그 안에 name이라는 이름 변수와 sayhello라는 function을 만들었다
//player.sayhello는 player안에 sayhello라는 function을 쓸 수 있게 한다
const player2 = {
    name: "youka",
    sayhello:function(otherPersonName){
        console.log("hello" + otherPersonName + " zz");

    },
};

player2.sayhello("sss");
player2.sayhello("aaa")

const CL = {
    plus : function(a,b){
        console.log(a + b);},
    minus : function(a,b){
        console.log(a - b);
    }


    
};

CL.plus(5,1);
CL.minus(8,1);
//8.returns
const age = 97;//age 에 97저장
function CL2(ageofforeigner){
   return ageofforeigner + 2;
}
// CL2라는 function을 만들어서 ()안에 아무거나 들어갈 수 있게함

const GA = CL2(age);
//GA라는 변수에 CL2 펑션을 넣음
console.log(GA);
//console로 GA를나오게함

//9 Conditionals
const age2 = parseInt(prompt("How old are you"));//prompt 는 빈 공간에 글같은 것을 넣을 수 있게함

//타입을 바꾸는 법 : parseInt()


console.log(typeof "15",parseInt("14"));

//if문
if(isNaN(age2)){
    console.log("please put a number here");//else if : if가 false이면 한가지 조건을 더 사용하게해줌
} else if(age2 < 18){
    console.log("you are too young");
   
} else if(age2 >= 18 && age2 <= 50) {
    console.log("you can also drink");// && = and, || = or
} else{
    console.log("you can't drink"); //else가 작동되기 위해서는 if와 elseif모두 false여야 한다
}

