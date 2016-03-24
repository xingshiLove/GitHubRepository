//
//var person = {
//  name:'Bob',
//    age:20,
//    tags:['js','web','mobile'],
//    city:'shanghai',
//    hasCar:true,
//    zipCode:null,
//    'specialattr':'attr'
//};
//person.age;
//person.zipCode;
//
//var str='this is my string';
//var strupp=str.toUpperCase();
//console.log(strupp);
//console.log(person);
//var arr = ['a','b','c','d'];
//console.log(arr.join('-'));
//console.log(person.specialattr);
//for (var i=0;i<10;i++){
//
//}
//console.log(Math.max(3,4,2));
//console.log(Math.call(null,3,4,5));
//console.log(Math.max.apply(null,[1,4,5]));
//function pow(x){
//    return x*x;
//
//}
//function addpow(x,b){
//    return x+b;
//
//}
//
//var arr=[1,2,4,5];
//console.log(arr.map(pow));
//console.log(arr.reduce(addpow))

//function count() {
//    var arr = [];
//    for (var i=1; i<=3; i++) {
//        arr.push((function (n) {
//            return function () {
//                return n * n;
//            }
//        })(i));
//    }
//    return arr;
//}

//·â×°Ë½ÓÐ
function create_counter(initial){
    var x=initial ||0;
    return{
        inc:function(){
            x+=1;
            return x;
        }
    }
}

var c1=create_counter();
console.log(c1.inc());
console.log(c1.inc());console.log(c1.inc());

var fn = x => x * x;
(fn)(1);