//num 1 : kilometer ToMeter

function kilometerToMeter(kilo){
    if(kilo<=0){
        return "Error! This is not equl"
    }
    else{
        var meter = kilo * 1000;
        
    }
    return meter;
}



// num 2 : budgetCalculator
function budgetCalculator(watch,mobile,laptop){
    if(watch <= 0 || mobile <= 0 || laptop <= 0){
        return "error!!"
    }

    else{
        var watchPrice = watch * 50;
        var mobilePrice = mobile * 100;
        var laptopPrice = laptop * 500;
    
        mainPrice = watchPrice+mobilePrice+laptopPrice;
    }
    return mainPrice
}






// num 3 : Hotel Cost
function hotelCost(tour){
    var day = 0;
    if(tour<=10){
        day =tour * 100;
    }
    else if(tour <= 20){
        var firsttenday = 10 * 100;
        var everytime = tour - 10;
        var secoendtenday = everytime * 80;
        day = firsttenday + secoendtenday;
    }
    else{
        var firsttenday = 10 * 100;
        var secoendtenday = 10 * 80;
        var everytime = tour - 20;
        var thierdeveryday =everytime * 50;
        day = firsttenday + secoendtenday + thierdeveryday;
    }

   return day 
}

// num 4: magaFriend
var myfirendname = ["masud", "emon","mishal","roki","MdSultan"]
function magaFriend(firendnameof){
    var mainfirendname = firendnameof[0]
    for(var i = 0; i < firendnameof.length;i++){
        var element = firendnameof[i];
    }
    if(element.length<=0){
        return "Error!!"
    }
    else if(mainfirendname.length < element.length){
        mainfirendname = element;
 
   }
   return mainfirendname;
}




