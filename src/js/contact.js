class FormSubmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.form) {
            this.url = this.form.getAttribute("action");
        }
        this.sendForm = this.sendForm.bind(this);
    }

    displaySuccess() {
        this.form.innerHTML = this.settings.success;
    }

    displayError() {
        this.form.innerHTML = this.settings.error;
    }

    async sendForm(event) {
        this.onSubmission(event); // Muda o botão para "Enviando..."
        this.form.submit(); // Envia o formulário normalmente
    }

    onSubmission(event) {
        this.formButton.disabled = true;
        this.formButton.innerText = "Enviando...";
    }

    init() {
        if (this.form) this.form.addEventListener("submit", this.sendForm);
        return this;
    }
}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem enviada!</h1>",
    error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
});

formSubmit.init();