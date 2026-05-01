// Sélectionne tous les formulaires
const forms = document.querySelectorAll(".order-form");

forms.forEach(form => {
    form.addEventListener("submit", function(e) {
        e.preventDefault(); // empêche le rechargement

        // récupérer les valeurs
        const nom = form.querySelector("[name='nom']").value.trim();
        const email = form.querySelector("[name='email']").value.trim();
        const quantite = form.querySelector("[name='quantite']").value;

        // vérification simple
        if (nom === "" || email === "") {
            alert("Veuillez remplir le formulaire !");
            return;
        }

        // message de confirmation
        alert(`Merci ${nom} ! Votre commande de ${quantite} menu(x) est enregistrée.`);

        // reset du formulaire
        form.reset();
    });
});