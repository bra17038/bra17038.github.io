// Latest DATE modified
document.querySelector('#datestamp').textContent = new Date(document.lastModified).toLocaleDateString('en-US',{weekdays: 'long', day: 'numeric', month: 'long', year: 'numeric'});
// Latest TIME modified
document.querySelector('#timestamp').textContent = new Date(document.lastModified).toLocaleTimeString('en-US');