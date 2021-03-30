function Base(){
  this.getId=function(id){
    return document.getElementById(id);
  }

}

var Base=new Base();
// console.log(Base.getId('div').innerHTML);
