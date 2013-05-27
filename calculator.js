var Calculator = {
    Loading: {
        Age: {
            create: function(age){
                return {
                    age: age,
                    getLoading: function(){
                        console.log(age);
                    }
                }
            }
        }  
    }
}