let boton= document.getElementById("boton")

boton.addEventListener("click", () => {
    Toastify({

        text: "se agrego correctamente",
        
        duration: 3000
        
        
    }).showToast();
})