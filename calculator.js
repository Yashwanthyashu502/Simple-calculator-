function add(){
    var a=0,b=0;
    a=f.d.value;
    b=a.charAt(a.length-1);
    if(b=='+'||b=='-'||b=='/'||b=='*')
    {
        f.d.value=a.substring(0,a.length-1);
        f.d.value+='+';
    }
    else{
        f.d.value+='+';
    }    
}
function sub(){
    var a=0,b=0;
    a=f.d.value;
    b=a.charAt(a.length-1);
    if(b=='+'||b=='-'||b=='/'||b=='*')
    {
        f.d.value=a.substring(0,a.length-1);
        f.d.value+='-';
    }
    else{
        f.d.value+='-';
    }    
}
function mul(){
    var a=0,b=0;
    a=f.d.value;
    b=a.charAt(a.length-1);
    if(b=='+'||b=='-'||b=='/'||b=='*')
    {
        f.d.value=a.substring(0,a.length-1);
        f.d.value+='*';
    }
    else{
        f.d.value+='*';
    }    
}
function div(){
    var a=0,b=0;
    a=f.d.value;
    b=a.charAt(a.length-1);
    if(b=='+'||b=='-'||b=='/'||b=='*')
    {
        f.d.value=a.substring(0,a.length-1);
        f.d.value+='/';
    }
    else{
        f.d.value+='/';
    }    
}