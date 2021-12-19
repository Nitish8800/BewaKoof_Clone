// To get images in the mainBox

document.getElementById("thumb1").addEventListener("click",imgSlide1)
 function imgSlide1(){
document.getElementById('mainImg').setAttribute("src","https://images.bewakoof.com/t540/modern-noise-red-checks-shirts-427965-1636955546-1.jpg");
 }

 document.getElementById("thumb2").addEventListener("click",imgSlide2)
 function imgSlide2(){
document.getElementById('mainImg').setAttribute("src","https://images.bewakoof.com/t540/modern-noise-red-checks-shirts-427965-1636955549-2.jpg");
 }

 document.getElementById("thumb3").addEventListener("click",imgSlide3)
 function imgSlide3(){
document.getElementById('mainImg').setAttribute("src","https://images.bewakoof.com/t540/modern-noise-red-checks-shirts-427965-1636955560-5.JPG");
 }

 document.getElementById("thumb4").addEventListener("click",imgSlide4)
 function imgSlide4(){
document.getElementById('mainImg').setAttribute("src","https://images.bewakoof.com/t540/modern-noise-red-checks-shirts-427965-1636955553-3.JPG");
 }

 document.getElementById("thumb5").addEventListener("click",imgSlide5)
 function imgSlide5(){
document.getElementById('mainImg').setAttribute("src","https://images.bewakoof.com/t540/modern-noise-red-checks-shirts-427965-1636955557-4.JPG");
 }

// Wishlist Button
 document.querySelector('#heartbottom').addEventListener('click', changeColor);
 function changeColor(){
    document.querySelector('#heartbottom').setAttribute("src","data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjE5NyAtODYuNzIgODE0LjA5NSA3NjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMTk3IC04Ni43MiA4MTQuMDk1IDc2ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6IzIwMjAyMDt9DQoJLnN0MXtmaWxsOiNDQUQ3NDc7fQ0KPC9zdHlsZT4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02MDQuMDQ3LDY4MS4yOGMtMy44NCwwLTkuNi0xLjkyLTEzLjQ0LTMuODRjLTEzLjQ0LTExLjUyLTMzNi0yNDkuNi0zODUuOTItNDUzLjEyDQoJYy0xOS4yLTgyLjU2LTEuOTItMTY4Ljk2LDQ2LjA4LTIzMC40YzQyLjI0LTUxLjg0LDEwMS43Ni04MC42NCwxNjguOTYtODAuNjRjOTYsMCwxNTMuNiw0OS45MiwxODQuMzIsOTcuOTINCgljMzAuNzItNDgsOTAuMjQtOTcuOTIsMTg0LjMyLTk3LjkyYzY3LjIsMCwxMjYuNzIsMjguOCwxNjguOTYsODIuNTZjNDgsNjEuNDQsNjUuMjgsMTQ3Ljg0LDQ2LjA4LDIzMC40DQoJYy00OCwyMDEuNi0zNzAuNTYsNDM5LjY4LTM4NCw0NTEuMkM2MTUuNTY4LDY3OS4zNiw2MDkuODA3LDY4MS4yOCw2MDQuMDQ3LDY4MS4yOHoiLz4NCjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00MTkuNzI4LTM4LjcyYy02Ny4yLDAtMTA5LjQ0LDM0LjU2LTEzMC41Niw2My4zNmMtMzguNCw0OS45Mi01My43NiwxMjIuODgtMzYuNDgsMTkwLjA4DQoJYzQwLjMyLDE2My4yLDI4OS45MiwzNjQuOCwzNTMuMjgsNDEyLjhjNjMuMzYtNDgsMzEyLjk2LTI1MS41MiwzNTMuMjgtNDEyLjhjMTUuMzYtNjcuMiwxLjkyLTE0MC4xNi0zNi40OC0xODguMTYNCgljLTI0Ljk2LTMwLjcyLTY3LjItNjUuMjgtMTM0LjQtNjUuMjhjLTEyOC42NCwwLTE2MS4yOCwxMDkuNDQtMTYxLjI4LDExMS4zNmMtMS45Miw5LjYtMTEuNTIsMTcuMjgtMjMuMDQsMTcuMjhsMCwwDQoJYy0xMS41MiwwLTE5LjItNy42OC0yMy4wNC0xNy4yOEM1ODEuMDA4LDY4LjgsNTQ4LjM2Ny0zOC43Miw0MTkuNzI4LTM4LjcyeiIvPg0KPC9zdmc+DQo=");
    
    
//  document.querySelector('#hearttop').setAttribute("src","data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjE5NyAtODYuNzIgODE0LjA5NSA3NjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMTk3IC04Ni43MiA4MTQuMDk1IDc2ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6IzIwMjAyMDt9DQoJLnN0MXtmaWxsOiNDQUQ3NDc7fQ0KPC9zdHlsZT4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02MDQuMDQ3LDY4MS4yOGMtMy44NCwwLTkuNi0xLjkyLTEzLjQ0LTMuODRjLTEzLjQ0LTExLjUyLTMzNi0yNDkuNi0zODUuOTItNDUzLjEyDQoJYy0xOS4yLTgyLjU2LTEuOTItMTY4Ljk2LDQ2LjA4LTIzMC40YzQyLjI0LTUxLjg0LDEwMS43Ni04MC42NCwxNjguOTYtODAuNjRjOTYsMCwxNTMuNiw0OS45MiwxODQuMzIsOTcuOTINCgljMzAuNzItNDgsOTAuMjQtOTcuOTIsMTg0LjMyLTk3LjkyYzY3LjIsMCwxMjYuNzIsMjguOCwxNjguOTYsODIuNTZjNDgsNjEuNDQsNjUuMjgsMTQ3Ljg0LDQ2LjA4LDIzMC40DQoJYy00OCwyMDEuNi0zNzAuNTYsNDM5LjY4LTM4NCw0NTEuMkM2MTUuNTY4LDY3OS4zNiw2MDkuODA3LDY4MS4yOCw2MDQuMDQ3LDY4MS4yOHoiLz4NCjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00MTkuNzI4LTM4LjcyYy02Ny4yLDAtMTA5LjQ0LDM0LjU2LTEzMC41Niw2My4zNmMtMzguNCw0OS45Mi01My43NiwxMjIuODgtMzYuNDgsMTkwLjA4DQoJYzQwLjMyLDE2My4yLDI4OS45MiwzNjQuOCwzNTMuMjgsNDEyLjhjNjMuMzYtNDgsMzEyLjk2LTI1MS41MiwzNTMuMjgtNDEyLjhjMTUuMzYtNjcuMiwxLjkyLTE0MC4xNi0zNi40OC0xODguMTYNCgljLTI0Ljk2LTMwLjcyLTY3LjItNjUuMjgtMTM0LjQtNjUuMjhjLTEyOC42NCwwLTE2MS4yOCwxMDkuNDQtMTYxLjI4LDExMS4zNmMtMS45Miw5LjYtMTEuNTIsMTcuMjgtMjMuMDQsMTcuMjhsMCwwDQoJYy0xMS41MiwwLTE5LjItNy42OC0yMy4wNC0xNy4yOEM1ODEuMDA4LDY4LjgsNTQ4LjM2Ny0zOC43Miw0MTkuNzI4LTM4LjcyeiIvPg0KPC9zdmc+DQo=");
     
   document.querySelector('#hearttop').innerHTML="<i class='fas fa-heart' style='font-size:22px;color:red'></i>";
}

document.querySelector('#heartbottom').addEventListener("dblclick",changeColor1);
 function changeColor1(){
    document.querySelector('#heartbottom').setAttribute("src","data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0LjI1IDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQuMjUgNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yLjEyLDRDMi4xLDQsMi4wNywzLjk5LDIuMDUsMy45OEMxLjk4LDMuOTIsMC4zLDIuNjgsMC4wNCwxLjYyYy0wLjEtMC40My0wLjAxLTAuODgsMC4yNC0xLjJDMC41LDAuMTUsMC44MSwwLDEuMTYsMAoJCWMwLjUsMCwwLjgsMC4yNiwwLjk2LDAuNTFDMi4yOCwwLjI2LDIuNTksMCwzLjA4LDBjMC4zNSwwLDAuNjYsMC4xNSwwLjg4LDAuNDNjMC4yNSwwLjMyLDAuMzQsMC43NywwLjI0LDEuMgoJCUMzLjk1LDIuNjgsMi4yNywzLjkyLDIuMiwzLjk4QzIuMTgsMy45OSwyLjE1LDQsMi4xMiw0eiBNMS4xNiwwLjI1Yy0wLjM1LDAtMC41NywwLjE4LTAuNjgsMC4zM0MwLjI4LDAuODQsMC4yLDEuMjIsMC4yOSwxLjU3CgkJYzAuMjEsMC44NSwxLjUxLDEuOSwxLjg0LDIuMTVjMC4zMy0wLjI1LDEuNjMtMS4zMSwxLjg0LTIuMTVjMC4wOC0wLjM1LDAuMDEtMC43My0wLjE5LTAuOThDMy42NSwwLjQzLDMuNDMsMC4yNSwzLjA4LDAuMjUKCQljLTAuNjcsMC0wLjg0LDAuNTctMC44NCwwLjU4QzIuMjMsMC44OCwyLjE4LDAuOTIsMi4xMiwwLjkyaDBjLTAuMDYsMC0wLjEtMC4wNC0wLjEyLTAuMDlDMiwwLjgxLDEuODMsMC4yNSwxLjE2LDAuMjV6Ii8+CjwvZz4KPC9zdmc+Cg==");
    // document.querySelector('#hearttop').setAttribute("src","data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0LjI1IDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQuMjUgNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yLjEyLDRDMi4xLDQsMi4wNywzLjk5LDIuMDUsMy45OEMxLjk4LDMuOTIsMC4zLDIuNjgsMC4wNCwxLjYyYy0wLjEtMC40My0wLjAxLTAuODgsMC4yNC0xLjJDMC41LDAuMTUsMC44MSwwLDEuMTYsMAoJCWMwLjUsMCwwLjgsMC4yNiwwLjk2LDAuNTFDMi4yOCwwLjI2LDIuNTksMCwzLjA4LDBjMC4zNSwwLDAuNjYsMC4xNSwwLjg4LDAuNDNjMC4yNSwwLjMyLDAuMzQsMC43NywwLjI0LDEuMgoJCUMzLjk1LDIuNjgsMi4yNywzLjkyLDIuMiwzLjk4QzIuMTgsMy45OSwyLjE1LDQsMi4xMiw0eiBNMS4xNiwwLjI1Yy0wLjM1LDAtMC41NywwLjE4LTAuNjgsMC4zM0MwLjI4LDAuODQsMC4yLDEuMjIsMC4yOSwxLjU3CgkJYzAuMjEsMC44NSwxLjUxLDEuOSwxLjg0LDIuMTVjMC4zMy0wLjI1LDEuNjMtMS4zMSwxLjg0LTIuMTVjMC4wOC0wLjM1LDAuMDEtMC43My0wLjE5LTAuOThDMy42NSwwLjQzLDMuNDMsMC4yNSwzLjA4LDAuMjUKCQljLTAuNjcsMC0wLjg0LDAuNTctMC44NCwwLjU4QzIuMjMsMC44OCwyLjE4LDAuOTIsMi4xMiwwLjkyaDBjLTAuMDYsMC0wLjEtMC4wNC0wLjEyLTAuMDlDMiwwLjgxLDEuODMsMC4yNSwxLjE2LDAuMjV6Ii8+CjwvZz4KPC9zdmc+Cg==");
    document.querySelector('#hearttop').innerHTML="<i class='far fa-heart' style='font-size:22px;'></i>";
}
 


// Select size

var sizeSelected =0;
document.getElementById("S").addEventListener("click", selSizeS)
function selSizeS(){
    sizeSelected =  36;
   console.log(sizeSelected);

   document.getElementById("S").style.border="2px solid turquoise"
document.getElementById("M").style.border="2px solid rgba(185, 185, 185, 0.6) "
document.getElementById("L").style.border="2px solid rgba(185, 185, 185, 0.6)"
document.getElementById("XL").style.border="2px solid rgba(185, 185, 185, 0.6)"
document.getElementById("XXL").style.border="2px solid rgba(185, 185, 185, 0.6)"
document.getElementById("XXXL").style.border="2px solid rgba(185, 185, 185, 0.6)"
} 

document.getElementById("M").addEventListener("click", selSizeM)
function selSizeM(){
    sizeSelected =  38;
   console.log(sizeSelected);

   document.getElementById("M").style.border="2px solid turquoise"
document.getElementById("S").style.border="2px solid rgba(185, 185, 185, 0.6) "
document.getElementById("L").style.border="2px solid rgba(185, 185, 185, 0.6)"
document.getElementById("XL").style.border="2px solid rgba(185, 185, 185, 0.6)"
document.getElementById("XXL").style.border="2px solid rgba(185, 185, 185, 0.6)"
document.getElementById("XXXL").style.border="2px solid rgba(185, 185, 185, 0.6)"
} 


document.getElementById("L").addEventListener("click", selSizeL)
function selSizeL(){
    sizeSelected =  40;
   console.log(sizeSelected);

   document.getElementById("L").style.border="2px solid turquoise"
document.getElementById("M").style.border="2px solid rgba(185, 185, 185, 0.6) "
document.getElementById("s").style.border="2px solid rgba(185, 185, 185, 0.6)"
document.getElementById("XL").style.border="2px solid rgba(185, 185, 185, 0.6)"
document.getElementById("XXL").style.border="2px solid rgba(185, 185, 185, 0.6)"
document.getElementById("XXXL").style.border="2px solid rgba(185, 185, 185, 0.6)"
} 


document.getElementById("XL").addEventListener("click", selSizeXL)
function selSizeXL(){
    sizeSelected =  42;
   console.log(sizeSelected);

   document.getElementById("XL").style.border="2px solid turquoise"
document.getElementById("M").style.border="2px solid rgba(185, 185, 185, 0.6) "
document.getElementById("L").style.border="2px solid rgba(185, 185, 185, 0.6)"
document.getElementById("S").style.border="2px solid rgba(185, 185, 185, 0.6)"
document.getElementById("XXL").style.border="2px solid rgba(185, 185, 185, 0.6)"
document.getElementById("XXXL").style.border="2px solid rgba(185, 185, 185, 0.6)"
} 


document.getElementById("XXL").addEventListener("click", selSizeXXL)
function selSizeXXL(){
    sizeSelected =  44;
   console.log(sizeSelected);

   document.getElementById("XXL").style.border="2px solid turquoise"
document.getElementById("M").style.border="2px solid rgba(185, 185, 185, 0.6) "
document.getElementById("L").style.border="2px solid rgba(185, 185, 185, 0.6)"
document.getElementById("XL").style.border="2px solid rgba(185, 185, 185, 0.6)"
document.getElementById("S").style.border="2px solid rgba(185, 185, 185, 0.6)"
document.getElementById("XXXL").style.border="2px solid rgba(185, 185, 185, 0.6)"
} 


document.getElementById("XXXL").addEventListener("click", selSizeXXXL)
function selSizeXXXL(){
    sizeSelected =  46;
   console.log(sizeSelected);

   document.getElementById("XXXL").style.border="2px solid turquoise"
document.getElementById("M").style.border="2px solid rgba(185, 185, 185, 0.6) "
document.getElementById("L").style.border="2px solid rgba(185, 185, 185, 0.6)"
document.getElementById("XL").style.border="2px solid rgba(185, 185, 185, 0.6)"
document.getElementById("XXL").style.border="2px solid rgba(185, 185, 185, 0.6)"
document.getElementById("S").style.border="2px solid rgba(185, 185, 185, 0.6)"
} 

// Submit
var count =0;

var cartBtn = document.createElement("button");

cartBtn.style.backgroundColor = "yellow";
// // cartBtn.style.paddingBottom="20px";
// cartBtn.style.marginTop="-40px";
cartBtn.id="cartClassbtn";
document.querySelector('#crt').append(cartBtn);

   document.querySelector("#button").addEventListener("click",submitSize);
   function submitSize(event)
   {
       event.preventDefault();
       if(sizeSelected ==0){
        //   alert('Select Size');
        swal("Oops!", "Select Size Before Submit!", "error");
       }
       else{
     var size = localStorage.setItem("size",JSON.stringify(sizeSelected));
     count++;
    // var btd =document.querySelector('#cartBtn').textContent = count;
    // btd.style.backgroundColor = red;
    
    cartBtn.textContent=count;
    console.log(count);
       }
   }

  

//    Pin Code

// var pinCode = document.querySelector(#pincode).value;
// localStorage.setItem("pincode",JSON.stringify(pinCode));

document.querySelector("#check").addEventListener("click",checkPC);
function checkPC(event){
    event.preventDefault();
    var pinCode = document.querySelector("#pincode").value;
    localStorage.setItem("pincode", JSON.stringify(pinCode));
    if(pinCode.length == 6){
    // alert('Delivery Available!');
   
swal("Good Job!", "Delivery Availabe Here!", "success");
}
else{
    
    // alert("Delivery Not Available! or Incorrect Pincode!");
    swal("Oops!", "Delivery Not Available! or Incorrect Pincode!", "error");
}
}

