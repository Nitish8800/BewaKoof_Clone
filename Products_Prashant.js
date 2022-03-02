var ProductDetails = [
  {
    category:"shirt",
    image:
      "https://images.bewakoof.com/t540/modern-noise-red-checks-shirts-427965-1636955546-1.jpg",
  name: "Black Full Sleeve Shirt",
  price:"699", 
  canceledprice:"1399",
  tribe: "₹ 719 For TriBe Members",
},
{
  category:"kurta",
  image:
  "https://images.bewakoof.com/t320/teal-solid-mandarin-neck-long-kurta-437157-1637244552-1.jpg",
  name: "Men's Solid Casual Long Kurta",
  price:"799", 
  canceledprice:"1749",
  tribe: "₹ 719 For TriBe Members",
},
{
  category:"kurta",
  image:
  "https://images.bewakoof.com/t320/blue-solid-mandarin-neck-short-kurta-437151-1637246628-1.jpg",
  name: "Men's Solid Casual Short Kurta",
  price:"599", 
  canceledprice:"1549",
  tribe: "₹ 719 For TriBe Members",
},
{
  category:"shirt",
  image:
    "https://images.bewakoof.com/t320/tom-aop-half-sleeve-shirt-men-s-casual-poplin-collab-aop-shirt-351522-1630495479-1.jpg",
name: "Tom & Jerry AOP Half Sleeve Shirt",
price:"499", 
canceledprice:"1599",
tribe: "₹ 719 For TriBe Members",
},
{
  category:"shirt",
  image:
    "https://images.bewakoof.com/t320/floral-rose-white-half-sleeve-shirt-men-s-casual-poplin-aop-shirt-351521-1630409170-1.jpg",
name: "Floral Rose White Half Sleeve Shirt",
price:"499", 
canceledprice:"1599",
tribe: "₹ 719 For TriBe Members",
},
{
  category:"kurta",
  image:
  "https://images.bewakoof.com/t540/men-s-solid-festive-kurta-403790-1634201295-1.jpg",
  name: "Men's Solid Festive Kurta",
  price:"899", 
  canceledprice:"1849",
  tribe: "₹ 719 For TriBe Members",
},
{
  category:"shirt",
  image:
    "https://images.bewakoof.com/t540/men-s-printed-mandarin-collar-full-sleeves-shirt-364801-1635868893-1.jpg",
name: "Floral Rose White Half Sleeve Shirt",
price:"799", 
canceledprice:"1599",
tribe: "₹ 719 For TriBe Members",
},
{
  category:"kurta",
  image:
  "https://images.bewakoof.com/t320/men-s-solid-festive-kurta-403793-1634200561-1.jpg",
  name: "Men's Solid Festive Kurta",
  price:"1099", 
  canceledprice:"1849",
  tribe: "₹ 719 For TriBe Members",
},
{
  category:"kurta",
  image:
  "https://images.bewakoof.com/t320/hangup-3-pics-3pc-kurta-pyjama-sherwani3pc-s43greysilkkp-kurta-382994-1627126010.jpg",
  name: "Men's Solid Festive Kurta",
  price:"3499", 
  canceledprice:"5449",
  tribe: "₹ 719 For TriBe Members",
},
{
  category:"kurta",
  image:
  "https://images.bewakoof.com/t320/men-s-solid-festive-kurta-403784-1634201715-1.jpg",
  name: "Men's Solid Festive Kurta",
  price:"499", 
  canceledprice:"1549",
  tribe: "₹ 719 For TriBe Members",
},
{
  category:"shirt",
  image:
    "https://images.bewakoof.com/t320/breakbounce-men-s-orange-abstract-printed-boxy-fit-shirt-457779-1639762200-1.jpg",
name: "Floral Rose White Half Sleeve Shirt",
price:"1599", 
canceledprice:"2599",
tribe: "₹ 719 For TriBe Members",
},
{
  category:"shirt",
  image:
    "https://images.bewakoof.com/t320/javinishka-men-s-grey-striped-slim-fit-shirt-452481-1638804002-1.jpg",
name: "Floral Rose White Half Sleeve Shirt",
price:"1499", 
canceledprice:"2199",
tribe: "₹ 719 For TriBe Members",
},
{
  category:"shirt",
  image:
    "https://images.bewakoof.com/t320/breakbounce-men-s-grey-abstract-printed-shirt-457780-1639761935-1.jpg",
name: "Floral Rose White Half Sleeve Shirt",
price:"699", 
canceledprice:"2699",
tribe: "₹ 719 For TriBe Members",
},
{
  category:"kurta",
  image:
  "https://images.bewakoof.com/t540/men-s-solid-knit-black-kurta-321887-1635868802-1.jpg",
  name: "Men's Solid Festive Kurta",
  price:"799", 
  canceledprice:"1849",
  tribe: "₹ 719 For TriBe Members",
},
{
  category:"kurta",
  image:
  "https://images.bewakoof.com/t320/men-s-solid-festive-kurta-403792-1634200874-1.jpg",
  name: "Men's Solid Festive Kurta",
  price:"699", 
  canceledprice:"1099",
  tribe: "₹ 719 For TriBe Members",
},
{
  category:"shirt",
  image:
    "https://images.bewakoof.com/t320/campus-sutra-men-s-black-checkered-shirt-451291-1637612980-1.jpg",
name: "Floral Rose White Half Sleeve Shirt",
price:"1199", 
canceledprice:"1599",
tribe: "₹ 719 For TriBe Members",
},
{
  category:"kurta",
  image:
  "https://images.bewakoof.com/t540/men-s-relaxed-fit-black-solid-short-kurta-302583-1637855182-1.jpg",
  name: "Men's Solid Festive Kurta",
  price:"699", 
  canceledprice:"1099",
  tribe: "₹ 719 For TriBe Members",
},
{
  category:"shirt",
  image:
    "https://images.bewakoof.com/t320/campus-sutra-men-s-white-printed-shirt-451415-1637613922-1.jpg",
name: "Floral Rose White Half Sleeve Shirt",
price:"899", 
canceledprice:"1499",
tribe: "₹ 719 For TriBe Members",
},

];

  var count = document.querySelector("#Count_of_Products");
  count.textContent = ProductDetails.length;

  
  var box = document.querySelector("#Prashant_Product_Deatils");
  Display(ProductDetails);

  function Display(ProductDetails){
  ProductDetails.map(function (ele){
    var each = document.createElement('div')
    var image = document.createElement('img');
    var name = document.createElement('div')
    var price = document.createElement('div')
    var canceledprice = document.createElement('div')
    var last = document.createElement('div')

    each.className = "P001";
    each.addEventListener("click",function (){
      GotoCArt(ele)
    });
    image.setAttribute("src",ele.image);
    image.id = 'Prashant_widgetImg';
    image.style.height = "80%";
    image.style.width = '100%';
    name.textContent = ele.name;
    name.id = 'productName00'
    price.textContent = ele.price;
    price.id = 'Prices'
    canceledprice.textContent = ele.canceledprice;
    canceledprice.id = 'canceledpricestyle'
    last.textContent = ele.tribe;
    last.id = 'tribess'
    price.append(canceledprice);
    each.append(image,name,price,last);
    box.append(each);
  })
  }

  function call(){
    var res = document.querySelector("#sort00").value;
    var main_box = document.querySelector("#Prashant_Product_Deatils")
    main_box.textContent = "";
    if ( res == "LH" ){
      console.log("LH");
      var latestRes1  =  ProductDetails.sort(function (a,b){
        return Number(a.price) - Number(b.price);
      })
      Display(latestRes1);
    }
    else if ( res == "HL"){
      console.log("HL");
      var latestRes2 = ProductDetails.sort(function (a,b){
        return Number(b.price) - Number(a.price);
      })
      Display(latestRes2);
    }
  }

  document.querySelector("#category003").addEventListener("click",call3);
  function call3(){
    var main_box = document.querySelector("#Prashant_Product_Deatils")
    main_box.textContent = "";
    var rees = document.querySelector("#category003").textContent
    console.log(rees)
    if(rees == "Shirt"){
      var latestRes2 = ProductDetails.filter(function (ele){
        return ele.category == "shirt";
      })
      Display(latestRes2);
    }
    else if (rees == "Kurta"){
      var latestRes1 = ProductDetails.filter(function (ele){
        return ele.category == "kurta";
      })
      Display(latestRes1);
    }
  }

  document.querySelector("#category002").addEventListener("click",call2);
  function call2(){
    var main_box = document.querySelector("#Prashant_Product_Deatils")
    main_box.textContent = "";
    var rees = document.querySelector("#category002").textContent
    console.log(rees)
    if(rees == "Shirt"){
      var latestRes2 = ProductDetails.filter(function (ele){
        return ele.category == "shirt";
      })
      Display(latestRes2);
    }
    else if (rees == "Kurta"){
      var latestRes1 = ProductDetails.filter(function (ele){
        return ele.category == "kurta";
      })
      Display(latestRes1);
    }
  }

  var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}

function GotoCArt(ele){
  if ( ele.category === "shirt"){
    window.location.href = "shirt.html";
  }
  else if ( ele.category === "kurta"){
    window.location.href = "kurta.html";
  }
}