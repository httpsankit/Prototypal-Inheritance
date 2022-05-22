function array(){
    Object.defineProperty(this,"length",{
        value:0,
        writable:true,           //allow the array to writable 
        enumerable:false,
    })

    this.length=arguments.length;

    for(var i=0;i<arguments.length;i++)
    {
        this[i]=arguments[i]                      ////////////////this function is used for the current block only 
    }


}
var arr=new array(7,9,8);        /////creating new array 

array.prototype.pop=function(){     /// pop function 
    delete this[this.length-1];
    this.length--;
}
array.prototype.push=function(x){      ////push function 
    this[this.length]=x;
    this.length++;
}


array.prototype.top=function(){              ////top function
    console.log(this[this.length-1])
}

array.prototype.printReverse=function() ///////////reverse function 
{
    var new_array=Object.values(this)
    var new_array_2=[];
    for(var i=new_array.length-1;i>=0;i--)       //// use for loop
    {
        new_array_2.push(new_array[i])         ///// pushing data to the array 
    }
    console.log(new_array_2)
}
array.prototype.print=function(){                ////print function 
    console.log(Object.values(this))
}
array.prototype.size=function(){  ///////finding the size of the array 
    console.log(this.length)
}
arr.push(12)
arr.pop();
arr.top();
arr.print();
arr.printReverse();
arr.size();
