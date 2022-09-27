function updateClock(){
    var now = new Date();
    var dname = now.getDay(),
        no = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds();
    
        Number.prototype.pad = function(digits){
            for(var n = this.toString(); n.length < digits; n = 0 + n);
            return n;
        }

    var months = ["01","02","03","04","05","06","07","08","09","10","11","12"];
    var week = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
    var ids =  ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds"];
    var values = [week[dname], months[no], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2)];
    for(var i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}


function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
}
