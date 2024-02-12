/* -------Decodifica la respuesta de la api haciendo que los caracteres sean legibles */
export function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}