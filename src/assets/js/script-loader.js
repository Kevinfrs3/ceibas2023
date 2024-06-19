function Carga(archivos) {
  for (let archivo of archivos) {
    let script = document.createElement("script");
    script.src = "./assets/js/" + archivo + ".js";
    script.type = "text/javascript";
    let body = document.getElementsByTagName("body")[0];
    body.appendChild(script);
  }
}
