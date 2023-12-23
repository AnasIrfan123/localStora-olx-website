getData();

function getData(){
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res => {
        const products = res.products
        console.log(products);
        const container = document.getElementById('container')
        
        //hoisting 
        // var globally ha is lye let use kia ha loop me
        for (let i = 0; i < products.length; i++){          //mne products par loop is leye chlaya kyun k import dta produts me ha to api ko phly consol me check kren k dta khn ha kis tahn sy ha
        const card = document.createElement('div')
         card.className = 'card'         //card class styl.css sy styling ki
         card.onclick = function(){    //1 function onlick bna jo produt pr click krte he pdetail par le jayega
        window.location.href = '../product-detail/detail.html?productId=' + products[i].id
         }
          //jb ap 1 card par clic krogy to detal pr le jayega to onlick func pr windoe loc hrf me path dia p-deta ka agy ? produtIId +concate kr k  products[i].id
           //api sy id ati ha wo product detail ki hoti ha id sy ap us detal prod par detail ati han

        //item category
        const category = document.createElement('h3')
        category.innerHTML = products[i].category

        // create image
        const img = document.createElement('img')
        img.src = products[i].thumbnail
        img.style.width = '300px'
        img.style.height = '200px'

       // create price
       const price = document.createElement('p')
       price.innerHTML = products[i].price

        // create title
        const title = document.createElement('h4')
        title.innerHTML = products[i].title

        //create brand 
        const brand = document.createElement('h4')
        brand.innerHTML = products[i].brand

        //create discou pri
        const discPri = document.createElement('h5')
        discPri.innerHTML = products[i].discountPercentage

        // create descr
        const descrip = document.createElement('p')
        descrip.innerHTML = products[i].description

        card.append(category)
        card.append(img)
        card.append(price)
        card.append(title)
        card.append(brand)
        card.append(discPri)
       // card.append(descrip)

       
        container.append(card)
        }
    })
}

// dummy son api


// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(res => console.log(res));
            