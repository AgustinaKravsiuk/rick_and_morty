export default function validation(inputs) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const isContainsNumber = /^(?=.*[0-9])/;
    const longitude = inputs.password.length;
    const errors = {};
    
    if(!inputs.username) {
        errors.username = "El nombre de usuario no puede estar vacío";
    };
    if(!regexEmail.test(inputs.username)) {
        errors.username = "El nombre de usuario tiene que ser un email";
    };
    if(inputs.username && inputs.username.length > 35) {
        errors.username = "El nombre de usuario no puede tener  más de 35 caracteres";
    };
    if(longitude < 6 || longitude > 10) {
        errors.password = "La contraseña tiene que tener una longitud entre 6 y 10 caracteres"
    };
    if(!isContainsNumber.test(inputs.password)) {
        errors.password = "La contraseña tiene que tener al menos un número"
    };
    return errors;
}