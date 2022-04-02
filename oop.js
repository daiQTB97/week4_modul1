/* function Mobile(){
    this.battery = 100;
    this.messaging = "";
    this.inbox = "";
    this.sent = "";
    this.status = false;

    this.checkStatus = function (){
        if(this.status==true){
            console.log("Phone is turn on");
            return true;
        }
        console.log("Phone is turn off");
        return false;
        //return this.status;
    }

}


let iphone = new Mobile();
iphone.checkStatus();
 */
function Mobile(name, bat,messaging, ib, sent, status ){
    this.name = name;
    this.battery = bat;
    this.messaging = messaging;
    this.inbox = ib;
    this.sent = sent;
    this.status = status;

    this.checkStatus = function (){
        if(this.status==true){
            console.log(this.name + " is turn on");
            return true;
        }
        console.log(this.name + " is turn off");
        return false;
        //return this.status;
    }

    this.turnOnOff = function(stat){
        if(stat=="On"){
            this.status = true;
        }else{
            this.status = false;
        }
    }

    this.charging = function(number){
        this.battery = this.battery + number;
        console.log(this.name + " battery is " + this.battery);
        return this.battery;
    }

    this.receivedMessage = function (mobileTo, message){
        this.inbox = this.inbox + " " + message;
        mobileTo.sent = mobileTo.sent  + message;
    }
    this.viewInbox = function(){
        //console.log("Doing view inbox task...");
        return this.inbox;
    }

}
window.setInterval(changingyourphone, 1000)
function changingyourphone(){
    console.log("charging....");
    Iphone.charging
}

//name, bat,messaging, ib, sent, status 
/* let samsung = new Mobile("Samsung", 80, "Toi la Dai", "Samsung inbox:", "Samsung sent: ", false);
samsung.checkStatus();
samsung.turnOnOff("On");
samsung.checkStatus();
samsung.charging(1);

//name, bat,messaging, ib, sent, status 
let nokia = new Mobile("Nokia", 90, "", "Nokia inbox:", "Nokia sent: ", true);
nokia.checkStatus();
nokia.turnOnOff("On");
nokia.checkStatus();

console.log(nokia.charging(5));
nokia.charging(5);


nokia.receivedMessage(samsung, "xxx");
console.log(nokia.inbox);
let ib = nokia.viewInbox();
console.log(ib);


console.log(samsung.sent);
 */
let samsung = new Mobile("Samsung", 80, "Toi la Dai", "Samsung inbox:", "Samsung sent: ", false);
let nokia = new Mobile("Nokia", 90, "", "Nokia inbox:", "Nokia sent: ", true);
let Iphone = new Mobile("Iphone", 80, "Toi la Dai", "Samsung inbox:", "Samsung sent: ", false);
let Iphone6 = new Mobile("Iphone 6", 90, "", "Nokia inbox:", "Nokia sent: ", true);
nokia.receivedMessage(samsung, "xxx");
let ib = nokia.viewInbox();
console.log(ib);


let listPhones = [samsung, nokia, Iphone, Iphone6 ];
viewListPhone1(listPhones);


function viewListPhone(){
    let str = "";
    for(let i=0;i<listPhones.length;i++){
        str = str + listPhones[i].name + "\n";
    }
    console.log(str);
}
function viewListPhone1(lists){
    let str = "";
    for(let i=0;i<lists.length;i++){
        str = str + "*** " + lists[i].name + "\n";
    }
    console.log(str);
}