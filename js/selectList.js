export function selectList() {

    const hostInputField = document.querySelector('.host-value');
    const hostDropDown = document.querySelector('.host-list');
    const hostDropdownArray = [... document.querySelectorAll('li.host-list-item')];

    const portInputField = document.querySelector('.port-value');
    const portDropDown = document.querySelector('.port-list');
    const portDropdownArray = [... document.querySelectorAll('li.port-list-item')];

    let hostValueArray = [];
    let portValueArray = [];

    hostDropdownArray.forEach(item => {
        hostValueArray.push(item.textContent);
    });

    portDropdownArray.forEach(item => {
        portValueArray.push(item.textContent);
    });

    const closeHostDropdown = () => {
        hostDropDown.classList.remove('open');
    }

    const closePortDropdown = () => {
        portDropDown.classList.remove('open');
    }

    hostInputField.addEventListener('input', () => {
        hostDropDown.classList.add('open');
        let hostInputValue = hostInputField.value.toLowerCase();
        let valueSubstring;
        if (hostInputValue.length > 0) {
            for (let h = 0; h < hostValueArray.length; h++) {
                if (!(hostInputValue.substring(0, hostInputValue.length) === hostValueArray[h].substring(0, hostInputValue.length).toLowerCase())) {
                    hostDropdownArray[h].classList.add('closed');
                } else {
                    hostDropdownArray[h].classList.remove('closed');
                }
            }
        } else {
            for (let i = 0; i < hostDropdownArray.length; i++) {
                hostDropdownArray[i].classList.remove('closed');
            }
        }
    });

    portInputField.addEventListener('input', () => {
        portDropDown.classList.add('open');
        let portInputValue = portInputField.value.toLowerCase();
        let valueSubstring;
        if (portInputValue.length > 0) {
            for (let j = 0; j < portValueArray.length; j++) {
                if (!(portInputValue.substring(0, portInputValue.length) === portValueArray[j].substring(0, portInputValue.length).toLowerCase())) {
                    portDropdownArray[j].classList.add('closed');
                } else {
                    portDropdownArray[j].classList.remove('closed');
                }
            }
        } else {
            for (let k = 0; k < portDropdownArray.length; k++) {
                portDropdownArray[k].classList.remove('closed');
            }
        }
    });

    hostDropdownArray.forEach(hostItem => {
        hostItem.addEventListener('click', (evt) => {
            hostInputField.value = hostItem.textContent;
            hostDropdownArray.forEach(hostDropDown => {
                hostDropDown.classList.add('closed');
            });
        });
    })

    portDropdownArray.forEach(portItem => {
        portItem.addEventListener('click', (evt) => {
            portInputField.value = portItem.textContent;
            portDropdownArray.forEach(portDropDown => {
                portDropDown.classList.add('closed');
            });
        });
    })

    hostInputField.addEventListener('focus', () => {
        hostInputField.placeholder = 'Type to filter';
        hostDropDown.classList.add('open');
        hostDropdownArray.forEach(hostDropDown => {
            hostDropDown.classList.remove('closed');
        });
    });

    portInputField.addEventListener('focus', () => {
        portInputField.placeholder = 'Type to filter';
        portDropDown.classList.add('open');
        portDropdownArray.forEach(portDropDown => {
            portDropDown.classList.remove('closed');
        });
    });

    hostInputField.addEventListener('blur', () => {
        hostInputField.placeholder = 'Select Host';
        hostDropDown.classList.remove('open');
    });

    portInputField.addEventListener('blur', () => {
        portInputField.placeholder = 'Select Port';
        portDropDown.classList.remove('open');
    });

    document.addEventListener('click', (evt) => {
        const isHostDropdown = hostDropDown.contains(evt.target);
        const isHostInput = hostInputField.contains(evt.target);
        if (!isHostDropdown && !isHostInput) {
            hostDropDown.classList.remove('open');
        }
    });

    document.addEventListener('click', (evt) => {
        const isPortDropdown = portDropDown.contains(evt.target);
        const isPortInput = portInputField.contains(evt.target);
        if (!isPortDropdown && !isPortInput) {
            portDropDown.classList.remove('open');
        }
    });

}