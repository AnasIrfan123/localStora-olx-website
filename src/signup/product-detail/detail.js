function getProductDetail(){
    const productId = window.location.search.split('=')[1]//ye functi k andr varib bnaya local jb click karogy to whn se function andr aya
    //or knsi locaton par lgya prodct id ki windo search kr k lya detal par or split ne tora
    
    //split ka kam ha torna ksi bh string /ETC ko 2 tokro me tordega
    fetch('https://dummyjson.com/products/' + productId)
    .then(res => res.json())
    .then(res => {
        const products = res
        console.log(products);

        const detlContainer = document.getElementById('container')

        // detail category
       const category = document.createElement('h2')
       category.innerHTML = products.category

       //detail brand
       const brand = document.createElement('h3')
       brand.innerHTML = products.brand

   //  create img
        const img = document.createElement('img')
        img.src = products.thumbnail

        img.style.width = '50em';
        img.style.height = '28em';
        img.style.marginTop = '25px'
        img.style.marginBottom = '25px'

          //  create title
        const title = document.createElement('h3')
        title.innerHTML = products.title

        //  create price
        const price = document.createElement('p')
        price.innerHTML = products.price

        //  create discountpercentage
        const discountpercentage = document.createElement('h4')
        discountpercentage.innerHTML = products.discountPercentage

        //  create description
        const description = document.createElement('p')
        description.innerHTML = products.description
        
        // create add to cart button
        const addToCartBtn = document.createElement('button')
        addToCartBtn.innerHTML = 'Add to Cart'
        //create btn styling
        addToCartBtn.style.color = '#fff';
        addToCartBtn.style.backgroundColor = '#3a77ff'
        addToCartBtn.style.width = '8em'
        addToCartBtn.style.padding = '7px'
        addToCartBtn.style.fontSize = '15px'
        addToCartBtn.style.outline = 'none'
        addToCartBtn.style.fontWeight = 'bold'
        addToCartBtn.style.border = '3px solid black'
        addToCartBtn.style.borderRadius = '20px'
        addToCartBtn.style.position = 'fixed'
        addToCartBtn.style.bottom = '100px'
        addToCartBtn.style.right = '130px'
        addToCartBtn.style.zIndex = '9999';

        addToCartBtn.onclick = () => {                                                                //is line se button par ek click event handler set kiya jata hai. Jab button par click hota hai, to niche wale code block chala jayega.
            const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'))                       //ye loclstoarge sy cart name k key se dta nikala jata ha or us dta ko json format sy parse kiya jta ha .agr phly sy cart naam key kuch dta local storge me store ha to wo lega
            const cartItems = cartFromLocalStorage || []                                              //carditem variab ko loclstorge se aane wale dta sy initialize kia jta ha agr localstorg me card key se koi dta nh ha to ye  1 empty arry lega
            cartItems.push(products)                                                                 //carditem arry me sy 1 nya item res add kia jta ha yani ab addtocart btn click par res varible ki value carditem array me add hoti h
            localStorage.setItem('cart', JSON.stringify(cartItems))                                        //card nam ki key de local storage m carditem arry me kia tha  to arry ko  jsonformt me store kia jta ha is card me add ki gayi item loclstorge me save ho jati ha

             getCartCount()
        }
        
        detlContainer.append(category)
        detlContainer.append(brand)
        detlContainer.append(img)
        detlContainer.append(title)
        detlContainer.append(price)
        detlContainer.append(discountpercentage)
        detlContainer.append(description)

        detlContainer.append(addToCartBtn)     
        
    });
}

    function getCartCount() {                                                    //yhn mne 1 function bnayaa jo loclstorag sy card itm ko html element card count k sath update krta ha 
    const cartItems = JSON.parse(localStorage.getItem('cart'))                          //yhn loclstorge sy card key k undr store kiye gye dta ko retrive kia jta ha ye dta json format me hoga is lye is ko json.parse kr k objet me parse kr k object me store kia jta ha  
    const cartNumber = document.getElementById('cart-number')                                     //yhn par html me card number id k sath dhonda jta ha cardNumber variba me store kia jta ha or is element ko carditrm ko disply par sow kia jta ha 
    cartNumber.innerHTML = cartItems ? cartItems.length + `<img src="" alt=""><i class="fa-solid fa-cart-plus"></i>` : 0 ;                                  //or is line m carditems arry k length(yani usme mojood array ko )cardNumber element innerhtml property me set kia jta ha is card numbr ko card item k sath count kia jta ha
       
}

const handleClick = () =>{
    const container = document.getElementById('container')
    container.innerHTML = " ";
   container.style.display = 'flex';
   container.style.justifyContent = 'center'
   container.style.alignItems = 'center'
   container.style.flexDirection = 'row'
    // const getData = localStorage.getItem('cart')
    // console.log(getData);
    const cartItems = JSON.parse(localStorage.getItem('cart'))
    console.log(cartItems);
    cartItems.map((item, index) => {
        const val = `
            <div class="card">
                <h3>${item.category}</h3>
                <img src="${item.images[0]}" style="width: 300px; height: 200px;">
                <p>RS: ${item.price}</p>
                <h4>${item.brand}</h4>
                <h4>${item.description
                }</h4>
                <h5>${item.rating}</h5>
            </div>
        `;
        container.innerHTML += val;
    });
    // container.innerHTML = `
    // <div class="card"><h3>smartphones</h3><img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" style="width: 300px; height: 200px;"><p>549</p><h4>iPhone 9</h4><h4>Apple</h4><h5>12.96</h5></div>`
}

    getCartCount()
getProductDetail();





















