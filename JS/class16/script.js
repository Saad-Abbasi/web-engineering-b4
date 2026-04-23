let myForm = document.getElementById("myForm")

myForm.addEventListener('submit',(e)=>{

    e.preventDefault();
    console.log('user clicked on submit -------------')

    firstName = document.getElementById("firstName").value
    lastName = document.getElementById("firstName").value
    email = document.getElementById("email").value
    password = document.getElementById("pasword").value
    city = document.getElementById("city").value
    address = document.getElementById("address").value

    console.log(firstName,lastName,email,city,address)

})











const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // 1. Create a FormData instance from the form
    const data = new FormData(form);

    // 2. Convert it to a readable object and log it
    const formValues = Object.fromEntries(data.entries());
    console.log("Captured Form Data:", formValues);
    
    // Alternatively, use console.table for a neat view
    console.table(formValues);
});
