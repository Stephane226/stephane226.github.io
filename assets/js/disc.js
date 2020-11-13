


function sendForum(){
    var sendToDiscord = {
        "webhookUrl": "https://discordapp.com/api/webhooks/671048333120241705/6LJ039bbTgbOcQjBVNATw7HDJa9HKDOU0O73gJwZjK1KDZ53EDQfPf-EI6eAqP3fyVMv",
        "username": "kullanıcı adı - " + new Date().getTime(),
        "avatarUrl": "https://i.hizliresim.com/XRZuaQ.jpg",
        "message": "\n" +
            "Gönderilmek istenen mesaj buraya yazılır.\n" +
            "Satır başı oluşturmak için \"\\n\" özek karakteri kullanılır.\n" +
            "Yazı biçimlendirmeleri;\n" +
            "    *italik yazı*,\n" +
            "    **kalın yazı**,\n" +
            "    __altı çizgili__ şeklindedir.\n" +
            "Satır başına bırakılan \n" +
            " boşluk\n" +
            "    ve girintiye\n" +
            "karşı duyarlıdır.\n" +
            "Dilenirse yazı üzerine [bağlantı](http://google.com) verilebilir.",
        "run": function () {
            
    
            var request = new XMLHttpRequest();
            request.open('POST', this.webhookUrl);
            
            request.setRequestHeader('Content-type', 'application/json');
    //Form doldurma sartlari
    
            var params = {
                username: this.username,
                avatar_url: this.avatarUrl,
                content: this.message,
                
    
                
    
            }
    
            request.send(JSON.stringify(params));
        }
    }
    
    var Sender_Name = document.getElementById("nameV"); 

    /** örnek kullanım */
    sendToDiscord.webhookUrl = "https://discord.com/api/webhooks/764857541577408553/RC9x0j0qh6pjsbRcM0UUJyLyBf8adkWekbo1kWKh9YktuHyJD2Em0kfGcyG1M5j_eGjk";            // webhook url tanımlanır
    sendToDiscord.username = "yellow Dünya";   // mesajda görünecek kullanıcı adı tanımlanır
    //sendToDiscord.avatarUrl = "";             // kullanıcı profil resminin URL adresi tanımlanır
    sendToDiscord.message = Sender_Name.value;  // mesaj tanımlanır
    
    //function basvuru(){
    
    //if(Sender_Name.value == ''){
       // alert("Please enter a name")
    //}else{
    //}
    //}

var x = document.getElementById("submt");
x.addEventListener("click", function(){



})
sendToDiscord.run()
}