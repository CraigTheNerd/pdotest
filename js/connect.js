export function connect() {

    const api = 'http://pdotest.lan/php/connect.php'
    const form = document.querySelector("form")
    const submitBtn = form.querySelector("button.submit-button")

    submitBtn.onclick = (e)=> {
        e.preventDefault()
    }

    submitBtn.addEventListener('click', testConnection)

    function testConnection() {

        document.querySelector(".error-busy").innerHTML = "" +
            '<span class="busy-icon">\n' +
            '<i class="fas fa-cog"></i>\n' +
            '</span>\n' +
            '<p class="error-busy-text">\n' +
            'Processing...\n' +
            '</p>\n' +
            '</div>';

        document.querySelector(".error-fail").style.display = "none"
        document.querySelector(".error-pass").style.display = "none"
        document.querySelector(".error-busy").style.display = "flex"

        let xhr = new XMLHttpRequest()
        xhr.open('POST', api, true)

        xhr.onload = function() {

            if(xhr.readyState === XMLHttpRequest.DONE) {

                if(xhr.status === 200) {

                    let data = xhr.responseText

                    if(data == "Database Connected!") {

                        setTimeout(() => {
                            document.querySelector(".error-pass").innerHTML = data
                            document.querySelector(".error-busy").style.display = "none"
                            document.querySelector(".error-fail").style.display = "none"
                            document.querySelector(".content-text").style.display = "none"
                            document.querySelector(".error-pass").style.display = "block"
                        }, 1000)

                        setTimeout(() => {
                            document.querySelector("form").reset()
                            document.querySelector(".error-pass").style.display = "none"
                            document.querySelector(".content-text").style.display = "block"
                        }, 5000)

                    } else {

                        setTimeout(() => {
                            document.querySelector(".error-fail").innerHTML = data
                            document.querySelector(".error-busy").style.display = "none"
                            document.querySelector(".error-pass").style.display = "none"
                            document.querySelector(".content-text").style.display = "none"
                            document.querySelector(".error-fail").style.display = "block"
                        }, 1000)

                    }
                }
            }

        }
        let formData = new FormData(form)
        xhr.send(formData)
    }

}

