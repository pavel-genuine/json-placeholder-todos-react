

const browserDb = (id) => {

    let ratingObj={}
 
    const localRating = localStorage.getItem('rating') 

    if(localRating){
       ratingObj=JSON.parse(localRating)

    }
 

   
   const rateQuantity= ratingObj[id]

   if(rateQuantity){
       const newRate = rateQuantity+1
       ratingObj[id] = newRate
   }
   else{
   ratingObj[id]=1
   }
 
   const ratingString= JSON.stringify(ratingObj)
   localStorage.setItem('rating',ratingString)
   
  



   
};


const removeDb=id=>{

    const rating = JSON.parse(localStorage.getItem('rating'))


    if(rating[id]){

        delete rating[id]

        const ratingString= JSON.stringify(rating)
        localStorage.setItem('rating',ratingString)
        

    }

}

export {browserDb, removeDb};