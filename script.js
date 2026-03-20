
// Sélectionne tous les formulaires
const forms = document.querySelectorAll(".order-form");

forms.forEach(form => {
    form.addEventListener("submit", function(e) {
        e.preventDefault(); // empêche le rechargement

        // récupérer les valeurs
        const nom = form.querySelector("input[name='nom']").value;
        const email = form.querySelector("input[name='email']").value;
        const quantite = form.querySelector("input[name='quantite']").value;

        // vérification simple
        if (nom === "" || email === "") {
            alert("Veuillez remplir tous les champs !");
            return;
        }

        // message de confirmation
        alert(`Merci ${nom} ! Votre commande de ${quantite} menu(x) est enregistrée.`);

        // reset du formulaire
        form.reset();
    });
});