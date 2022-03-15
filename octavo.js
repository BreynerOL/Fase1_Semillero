let base64String = 'aHR0cHM6Ly9jLnRlbm9yLmNvbS96OGpyelM3Zm11b0FBQUFkL25vdC1hLXJpY2stcm9sbC1yaWNrLXJvbGwuZ2lm';

let decodificado = window.atob(base64String);
let iframe = document.createElement('iframe');
iframe.height = 500;
iframe.width = 500;
iframe.allow= 'autoplay';
iframe.src =  decodificado;
document.body.appendChild(iframe)
iframe.innerHTML ="Hola mundo";
