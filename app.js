var openform = document.querySelector("#button-wrapper button");

openform.addEventListener('click', function (e) {

    if (document.querySelector("#add-mentee-details").style.display == 'none') {
        document.querySelector("#add-mentee-details").style.display = "block";

        document.querySelector("#button-wrapper button").innerHTML = "Close";
    } else if (document.querySelector("#add-mentee-details").style.display == 'block') {
        document.querySelector("#add-mentee-details").style.display = "none";

        document.querySelector("#button-wrapper button").innerHTML = "Add Mentee ";
        document.querySelector("#button-wrapper button").innerHTML = "Add Mentee Details";
    }
});

const ul = document.querySelector("#display-list ul");

ul.addEventListener('click', function (e) {
        if (e.target.className == "delete") {
            var li = e.target.parentElement;
            li.parentElement.removeChild(li);
            console.log(e.target);
    }else if(e.target.className!="delete"){        if(e.target.parentElement.tagName.toLowerCase()==="li"){
             if(e.target.parentElement.children[3].style.display=='none') {e.target.parentElement.children[3].style.display='block';}
        else if(e.target.parentElement.children[3].style.display=='block') {e.target.parentElement.children[3].style.display='none';}
          }
     if(e.target.tagName.toLowerCase()==="li"){
         
         if(e.target.parentElement.children[3].style.display=='none') {e.target.parentElement.children[3].style.display='block';}else if(e.target.parentElement.children[3].style.display=='block') {e.target.parentElement.children[3].style.display='none';}
     }
    } 
});

const form = document.forms["inputform"];
const rates =form.querySelectorAll('input[type="checkbox"]');
var rating;

rates.forEach(function(rate){
    rate.addEventListener('change',function(e){
       if(rate.checked){
            rating = e.target.getAttribute('name');
       }
    });
});

form.addEventListener('submit',function(e){
    e.preventDefault();
    
    const name = form.querySelector("#inputname").value;
    const rno = form.querySelector("#rno").value;
    const dep = form.querySelector("#dep").value;
    const com = form.querySelector("#comments").value;
    
    const li = document.createElement('li');
    
    const namediv = document.createElement('div');
    namediv.innerHTML= name;
    namediv.classList.add("name");
    
    const rollnodiv = document.createElement('div');
    rollnodiv.innerHTML=rno;
    rollnodiv.classList.add("rollno");
    
    const deletediv = document.createElement('div');
    deletediv.innerHTML='Delete';
    deletediv.classList.add("delete");
    
    const span = document.createElement('span');
    span.classList.add("hidden");
    span.style.display='none';
    
    const depdiv = document.createElement('div');
    depdiv.classList.add("department");
    depdiv.innerHTML=dep;
    
    const ratediv = document.createElement('div');
    ratediv.classList.add('rating');
    ratediv.innerHTML=rating;
    
    const commentdiv = document.createElement('div');
    commentdiv.classList.add("comments");
    commentdiv.innerHTML=com;
    
    li.appendChild(namediv);
    li.appendChild(rollnodiv);
    li.appendChild(deletediv);
    span.appendChild(depdiv);
    span.appendChild(ratediv);
    span.appendChild(commentdiv);
    li.appendChild(span);
    
    ul.appendChild(li);
});


