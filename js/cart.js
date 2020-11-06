const theparent = document.querySelector("#parentproducts");
theparent.addEventListener("click",loadimage,false);



function loadimage(e){
  if(e.target !== e.currentTarget)
  {
     const clickedItem = e.target.id;
     localStorage.setItem('value',clickedItem);
  }
  e.stopPropagation();

}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var count=0;
const product_image = new Array(); 
const product_title = new Array(); 
const product_price = new Array(); 

/*
if(count>5)
{
 // count =0;
  //alert("Can't store more than 5 products in the cart!!");
}
*/

////////////////////////////////////////////////////////////////////////////////////////////



const cartBtn = document.querySelectorAll(".btn");
      
cartBtn.forEach(function(btn) {

  btn.addEventListener("click",function(event){

    const cart_image_source = event.target.parentElement.parentElement.previousElementSibling.children[0].src;
    sessionStorage.setItem("cart_image_source",cart_image_source);
    
    const cart_title = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
    //console.log(cart_title);
    sessionStorage.setItem("cart_title",cart_title);

    const cart_price = event.target.parentElement.previousElementSibling.previousElementSibling.innerText;
    //console.log(cart_title);
    //localStorage.setItem("cart_price",cart_price);
    sessionStorage.setItem("cart_price",cart_price);



///////////////////////////////////////////////////////////////
/*
    if(product_title[count] === product_title[count+1])
    {
      alert('This item is already added to the cart');
    }
  */

    product_image[count]=cart_image_source.toString();
    product_title[count]=cart_title;
    product_price[count]=cart_price;

    count++;


    localStorage.setItem("per_image",product_image);
    localStorage.setItem("per_title",product_title);
    localStorage.setItem("per_price",product_price);

   // console.log(product_image);hd

////////////////////////////////////////////////////////////////

  });
});



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

