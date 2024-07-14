document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    fetch(form.action, {
        method: form.method,
        body: new FormData(form)
    }).then(response => {
        if (response.ok) {
            window.location.href = window.location.href;
        } else {
            alert('Hubo un error al enviar el formulario');
        }
    }).catch(error => {
        console.error('Error:', error);
    });
});