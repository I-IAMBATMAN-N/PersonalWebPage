function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "emaaailtest@gmail.com",
        Password : "EmailGoogleTest123",
        To : "jakub.briza.1992@seznam.cz",
        From : document.getElementById("email").value,
        Subject : "New email from CV page",
        Body : "Name: " + document.getElementById("name").value
            + "</br>email: " + document.getElementById("email").value
            + "</br>phone no: " + document.getElementById("number").value
            + "</br>message: " + document.getElementById("textarea").value,
    }).then(
        alert("Message Sent Succesfuly")
    );
}