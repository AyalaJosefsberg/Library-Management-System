let books=[
    {id:1,name:"isterak",category:"emotion",price:120,IsBorrowed:true},
    {id:2,name:"damKar",category:"tension",price:100,IsBorrowed:false},
    {id:3,name:"shalvaBachava",category:"children",price:32,IsBorrowed:false},
    {id:4,name:"putch",category:"children",price:22,IsBorrowed:false},
    {id:5,name:"the frog",category:"babies",price:15,IsBorrowed:true},
    {id:6,name:"wonderfull",category:"tension",price:96,IsBorrowed:false},
    {id:7,name:"the big house",category:"children",price:52,IsBorrowed:true}

]
let arrBooks1 = [2, 3, 4];
let arrBooks2 = [7, 4, 5, 1];

let users=[
    {id:12,name:"hj",email:"gh@bj",password:123,arrBooks:arrBooks1},
    {id:456,name:"fd",email:"gh@fdsj",password:1236,arrBooks:arrBooks1}

]
let borrowings=[
    {borrowDate:'1.8.2026',customerCode:20},
    {borrowDate:'25.8.2026',customerCode:54},
    {borrowDate:'2.9.2026',customerCode:101},
    {borrowDate:'1.9.2026',customerCode:87}
]

module.exports = { books, borrowings };