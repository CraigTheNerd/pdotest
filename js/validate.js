export function validate() {

    const errorMessage = document.querySelector(".error-wrapper")

    const db_hostEl = document.querySelector('#db_host')
    const db_portEl = document.querySelector('#db_port')
    const db_nameEl = document.querySelector('#db_name')
    const db_userEl = document.querySelector('#db_user')
    const db_passEl = document.querySelector('#db_pass')

    const form = document.querySelector('#pdoTest')

    const checkHost = () => {

        let valid = false;

        const min_dbHost = 3,
            max_dbHost = 255

        const db_host = db_hostEl.value.trim()

        if (!isRequired(db_host)) {
            showError(db_hostEl, 'Database Host cannot be blank.')
        } else if (!isBetween(db_host.length, min_dbHost, max_dbHost)) {
            showError(db_hostEl, `Name must be between ${min_dbHost} and ${max_dbHost} characters.`)
        } else {
            showSuccess(db_hostEl)
            valid = true;
        }

        return valid

    }

    const checkPort = () => {

        let valid = false;

        const db_port = db_portEl.value.trim()

        if (!isRequired(db_port)) {
            showError(db_portEl, 'Database Port cannot be blank.')
        } else if (!isPortValid(db_port)) {
            showError(db_portEl, 'Please enter a valid port number');
        } else {
            showSuccess(db_portEl)
            valid = true;
        }

        return valid

    }

    const checkName = () => {

        let valid = false;

        const max_dbName = 255;

        const db_name = db_nameEl.value.trim();

        if (!isRequired(db_name)) {
            showError(db_nameEl, 'Database Name cannot be blank.');
        } else if (db_name.length > max_dbName) {
            showError(db_nameEl, `Database Name cannot be more than ${max_dbName} characters.`)
        } else {
            showSuccess(db_nameEl);
            valid = true;
        }

        return valid;
    };

    const checkUser = () => {

        let valid = false;

        const min_dbUser = 2,
            max_dbUser = 255;

        const db_user = db_userEl.value.trim();

        if (!isRequired(db_user)) {
            showError(db_userEl, 'Database Username cannot be blank.');
        } else if (!isBetween(db_user.length, min_dbUser, max_dbUser)) {
            showError(db_userEl, `Database Username must be between ${min_dbUser} and ${max_dbUser} characters.`)
        } else {
            showSuccess(db_userEl);
            valid = true;
        }
        return valid;
    };

    const isPortValid = (db_port) => {
        const re = /^[0-9]{0,}$/
        return re.test(db_port)
    };

    const isRequired = value => value !== '';
    const isBetween = (length, min, max) => !(length < min || length > max);

    const showError = (input, message) => {
        // get the form-field element
        const formField = input.parentElement;
        // add the error class
        formField.classList.remove('success');
        formField.classList.add('error');

        // show the error message
        const error = formField.querySelector('small');
        error.textContent = message;
    };

    const showSuccess = (input) => {
        // get the form-field element
        const formField = input.parentElement;

        // remove the error class
        formField.classList.remove('error');
        formField.classList.add('success');

        // hide the error message
        const error = formField.querySelector('small');
        error.textContent = '';
    }

    const debounce = (fn, delay = 500) => {
        let timeoutId;
        return (...args) => {
            // cancel the previous timer
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            // setup a new timer
            timeoutId = setTimeout(() => {
                fn.apply(null, args)
            }, delay);
        };
    };

    form.addEventListener('input', debounce(function (e) {
        switch (e.target.id) {
            case 'db_host':
                checkHost()
                break
            case 'db_port':
                checkPort()
                break
            case 'db_name':
                checkName()
                break
            case 'db_user':
                checkUser()
                break
        }
    }));

    form.addEventListener('focusout', debounce(function (e) {
        switch (e.target.id) {
            case 'db_host':
                checkHost()
                break
            case 'db_port':
                checkPort()
                break
        }
    }));

}