function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    
    if (firstName === "" || lastName === "") {
        alert("Both first name and last name are required.");
        return false;
    }
    return true;
}

window.onload = function() {
    alert("Welcome to XYZ Corporation Ltd. - Newsletter Signup");
};