$(document).ready(function(){


 $.getJSON('https://fakestoreapi.com/products',function(data){


        
        

        $.each(data,function(key,value){

            

            $('#cardContainer').append(`
            <div class="card">
                <div class="carousel" data-flickity>
                    
                    <div class="img-box">
                    <img src="${value.image}" width="100%">
                    </div>
                    
                </div>
                <div class="card-body d-flex justify-content-between mt-4">
                    <div id="card-head" class="head">
                        
                        <div  id="card-title" class="card-title">

                            <h6 id="productTitle">${value.title}</h6>
                            <i id="productCategory">${value.category}</i>
                            
                        </div>
                        <div class="price d-flex align-items-start">
                            <strong id="productPrice">${value.price} $</strong>
                        </div>
                    </div>
  
                </div>
                <button id="cartButton" class="btn btn-warning">Add Cart</button> 
            </div>
            
            `)




        })


 });


   $("#cartButton").click(function(){
       alert('seks')
   })

})


