function bars(){
    document.getElementById('mini-menus').classList.toggle('active');
}
function cart(){
   
   document.getElementById('cart-slider').classList.toggle('cart-active');
}
function log(){
   
   document.getElementById('sign-form').style.display="none";
   document.getElementById('log-forms').style.display="block";
   document.getElementById('logbtns').style.display="flex";
}
function sign(){
   
   document.getElementById('sign-form').style.display="flex";
   document.getElementById('log-forms').style.display="none";
   document.getElementById('logbtns').style.display="none";
}

// function view(){
//     document.querySelectorAll("#view").classList.toggle("views");
// }
// function view(){

//     document.getElementsByid('sorts').style.display="none";
//     }
function view(){
    document.getElementById('sorts').style.display="none";
    document.getElementById('less').style.display="flex";
    document.getElementById('fashion').style.display="none";
    var all=document.querySelectorAll('#view');
     for(var i=0; i<=all.length; i++){
   all[i].style.display="block";
     }
   
    }
function viewless(){
    document.getElementById('sorts').style.display="flex";
    document.getElementById('less').style.display="none";
    document.getElementById('fashion').style.display="block";
    var all=document.querySelectorAll('#view');
     for(var i=0; i<=all.length; i++){
   all[i].style.display="none";
     }
   
    }

    function search(){
      var searchdata=document.getElementById('top-input').value.toLowerCase();
      var allproducts=document.querySelectorAll('#cards');
     
    
      for (i=0 ; i < allproducts.length;i++){
        var match=allproducts[i].textContent.toLowerCase();
      
          if(match.includes(searchdata)){
            allproducts[i].style.display="flex";
            
          }
            else{
              allproducts[i].style.display="none";
            
            }
          }
        }



// cart

	  
	 const products = document.querySelectorAll('.card');
	  const addToCartButtons = document.querySelectorAll('.add-to-cart');
	  const cartList = document.querySelector('.modal-size');
	  const cartTotal = document.querySelector('.cart p');
	  
	  let cartItems = [];
	  let total =0;
	  
	  products.forEach((product,index) => {
		const productName = product.querySelector('.name').innerText;
		const productage = product.querySelector('.age').innerText;
		const productgen = product.querySelector('.gene').innerText;
		const productPrice = product.querySelector('.pri').innerText;
	  
		addToCartButtons[index].addEventListener('click', () => {
	  
          cartList.innerHTML= cart()
          function cart(){
            return(`
   

        <div class="fath-cart">
          <div class="cart-img">
            <div class="img-three">
              <img src="https://media.istockphoto.com/id/1144491656/photo/mens-summer-casual-clothes-flat-lay.jpg?s=1024x1024&w=is&k=20&c=eNdzOb9bddMiQ80D4JvatafCeX3deh2g_qPX57TRr0w="  class="cart-photo" id="cart-img" alt="" srcset="">
              <img src="https://media.istockphoto.com/id/1144491656/photo/mens-summer-casual-clothes-flat-lay.jpg?s=1024x1024&w=is&k=20&c=eNdzOb9bddMiQ80D4JvatafCeX3deh2g_qPX57TRr0w=" alt=""  id="cart-img1"  srcset="">
              <img src="https://images.unsplash.com/photo-1594750863984-8be99377ce41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"  id="cart-img2" alt="" srcset="">
              <img src="https://media.istockphoto.com/id/1400254177/photo/wooden-hangers-with-sweaters-over-beige-background-with-copy-space-clothing-donations.jpg?s=1024x1024&w=is&k=20&c=WbJwBkHFF6lV6mxacO1ZxLF_ucXYxl7rQUUBzAGIvvE=" id="cart-img3" alt="" srcset="">
            </div>
              <div class="sel-img">
                  <img src="https://media.istockphoto.com/id/1144491656/photo/mens-summer-casual-clothes-flat-lay.jpg?s=1024x1024&w=is&k=20&c=eNdzOb9bddMiQ80D4JvatafCeX3deh2g_qPX57TRr0w=" class="sel-img1" id="mini1" alt="" srcset="">
                  <img src="https://images.unsplash.com/photo-1594750863984-8be99377ce41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"  class="sel-img2" id="mini2" alt="" srcset="">
                  <img src="https://media.istockphoto.com/id/1400254177/photo/wooden-hangers-with-sweaters-over-beige-background-with-copy-space-clothing-donations.jpg?s=1024x1024&w=is&k=20&c=WbJwBkHFF6lV6mxacO1ZxLF_ucXYxl7rQUUBzAGIvvE=" class="sel-img3" id="mini3" alt="" srcset="">
              </div>
          </div>
          <div class="cart-sec">
            <div class="cart-half1">
              <div class="half1-ch1">
              <div class="pname"><h1>${productName}</h1></div>
              <div class="detail">
            <label>lorem ipusm</label>
            <label >-</label>
            <label>${productage}</label>
            <label >-</label>
            <label>${productgen}</label>
              </div>
              <div class="stock">
               <ul>
                <li>In stock</li>
               </ul>
               <label >Upto 2 weeks</label>
               
              </div>
              <h1 class="pkr">${productPrice}</h1>
            </div>
            <div class="half1-ch2"> 
          <div class="size">
          <p>Size</p>
          <select>
            <option >small</option>
            <option >smedium</option>
            <option >large</option>
          </select>
          <p> Quantity</p>
          <div class="quantity">
          <label class="plus">-</label><label>1</label><label class="plus">+</label>
        </div>
          </div>
        </div>
      </div>
        <div class="cart-half2">
          <div class="end">
            <div class="label">
          <label >Estimated Shipping Date : <span class="date">jul 29, 2023</span></label>
          </div>
          <input type="button" value="Add to Cart">
          <ul class="ul-1" >
            <li><label>Product Description</label><label>></label>
            <ul class="dis-drop">
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam temporibus cupiditate odit. Exercitationem qui placeat, cumque architecto cum consequatur eaque? Inventore sed soluta illum ducimus fugiat nemo qui id dolorum!</li>
            </ul></li>
          </ul>
          <ul class="ul-2">
            <li><label>Product Description</label><label>></label>
            <ul class="dis-drop">
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam temporibus cupiditate odit. Exercitationem qui placeat, cumque architecto cum consequatur eaque? Inventore sed soluta illum ducimus fugiat nemo qui id dolorum!</li>
            </ul></li>
          </ul>
          </div>
        </div>
          </div>
                </div>



          `);
          }

		});
	  });