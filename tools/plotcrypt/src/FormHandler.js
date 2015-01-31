function FormHandler () {}
FormHandler.prototype.getInput = function fn0 (obj) {
    var input ="<input";
    for (var key in obj) {
        var value = obj[key];
        // now you can use key as the key, value as the... you guessed right, value
        input += " "+key+"='"+value+"'";
    }
    return input +" />";
}
FormHandler.prototype.getH = function fn1 (value, size) {
    var h= "<h"+size+">";
    h+=value;
    return h+"</h"+size+">";
}
FormHandler.prototype.getDiv = function fn2 (obj,value) {
    var div = "<div";
    for (var key in obj) {
        var val = obj[key];
        div += " "+key+"='"+val+"'";
    }
    div += ">"+value+"</div>";
    return div;
}