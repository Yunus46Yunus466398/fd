



const wrapper = document.getElementById('wrapper')




    fetch('https://dummyjson.com/products')
    .then(dior => dior.json())
    .then(data => {
        console.log(data.products);
        renderList(data.products)
    }


)


function renderList(item){
    item.map(product =>{
        const div = document.createElement('div')
        div.innerHTML = `
   <div class="card bg-base-100 w-96 shadow-sm">
  <figure> <img  src=""  alt="Shoes" />  </figure>
  <div class="card-body">
    <h2 class="card-title">${product.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        
        `
        wrapper.append(div)
    })
}