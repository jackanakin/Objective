export function toFirebaseDateObject(date) {
    return { day: date.getDate(), month: date.getMonth(), year: date.getFullYear() };
}

export function clone(obj){
    if(obj == null || typeof(obj) != 'object')
        return obj;

    var temp = new obj.constructor(); 
    for(var key in obj)
        temp[key] = clone(obj[key]);

    return temp;
}