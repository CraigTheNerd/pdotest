export function showViewport() {

    //  When page loads call page load function
    window.addEventListener('load', viewPortFunction);
    //  Page load function
    function viewPortFunction() {
        //  Create the element on the page
        const sizeDiv = document.createElement("div");
        //  Add an id to the element so that we can style the element
        sizeDiv.setAttribute("id", "viewPort");
        //  Style the viewPort element
        sizeDiv.style.position = 'fixed';
        sizeDiv.style.bottom = '0';
        sizeDiv.style.right = '0';
        sizeDiv.style.padding = '10px 10px 7px 10px';
        sizeDiv.style.opacity = '0.4';
        sizeDiv.style.backgroundColor = '#000000';
        sizeDiv.style.fontFamily = 'sans-serif';
        sizeDiv.style.fontSize = '1rem';
        sizeDiv.style.color = '#ffffff';
        sizeDiv.style.zIndex = '999999999';
        //  Display the element on the page
        document.body.appendChild(sizeDiv);
        //  Add the page width and height to the element
        sizeDiv.append(window.innerWidth + ' x ' + window.innerHeight);
    }

    //  When page is resized call the page resize function
    window.addEventListener('resize', resizeFunction);
    //  Page resize function
    function resizeFunction() {
        //  Get the viewPort div element
        const viewPort = document.querySelector('#viewPort');
        //  Update the viewPort size values
        viewPort.innerHTML = window.innerWidth + ' x ' + window.innerHeight;
    }

}