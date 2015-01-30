function MiniCrypt () {
    this.checkOver = function (value) {
        if (value > 255) {
            value -= 254;
        } else if (value < 1) {
            value += 254;
        }
        return value
    }
}
/*******
 * stechKey adjust key length
 */
MiniCrypt.prototype.strechKey = function fn0(key,length) {
    var longKey ="";
    if (length < key.length) {
        longKey = key.slice(0,length);
    }
    if (length == key.length) {
        longKey = key;
    }
    if (length > key.length) {
        var rounds = length/key.length;
        var rounds = Math.floor(rounds);
        var rest = length % key.length;
        
        for(var i = 0;i<rounds;i++) {
            longKey += key;
        }
        if (rest > 0) {
            longKey += key.slice(0,rest);
        }
    }
    //console.log("longKey= "+longKey);
    return longKey;
}
/****
 * DE = decrypt
 */
MiniCrypt.prototype.DE = function fn1 (key, text) {
    var message = "", currentChar ="", currentKeyChar = "";
    var strechedKey = this.strechKey(key, text.length);
    
    /******
     * I think a error can happen when x raise over 256
     */
    for (i = 0;i < text.length ;i++) {
        currentKeyChar = strechedKey.charCodeAt(i);
        currentChar = text.charCodeAt(i);
        x = parseInt(currentKeyChar) + parseInt(currentChar);
        x = this.checkOver(x);
        message += String.fromCharCode(x);
    }
    
    return message;
}
/*****
 * EN = encrypt
 */
MiniCrypt.prototype.EN = function fn2 (key,text) {
    var message = "", currentChar ="", currentKeyChar = "";
    var strechedKey = this.strechKey(key, text.length);
    
    for (i = 0;i < text.length ;i++) {
        currentKeyChar = strechedKey.charCodeAt(i);
        currentChar = text.charCodeAt(i);
        x = parseInt(currentKeyChar) - parseInt(currentChar);
        x = -1*x;
        x = this.checkOver(x);
        message += String.fromCharCode(x);
    }
    
    return message;
}