let freshers = ['Govind', 'Kanwar', 'Saurabh', 'Pankaj'];
let text = freshers.map(x=>{

return `Name=${x}`;
});

document.getElementById("test").innerHTML=text;

console.log('fresh element=', document.getElementById("test"));
// console.log('test1 element=', document.getElementById('test'));

// // console.log(document.getElementById('test1').innerHTML);

//x='<p>Hello</p>';

let p = document.createElement("p");
p.setAttribute("id", "test6");
p.setAttribute("style", "display:block");
p.innerHTML="Hello from script";
document.body.appendChild(p);
