function h3alignment() {
    let namePhone= document.getElementById("namePhone");
    let phoneInput= document.getElementById("phoneInput");
    let npWidth= namePhone.offsetWidth;
    let inputWidth= phoneInput.offsetWidth;
    let paddingNum= (npWidth-(inputWidth*2))/2;
    let h3Element = document.getElementById("h3Element");
    h3Element.style.marginRight= paddingNum+"px";
}
h3alignment();
window.addEventListener("resize", h3alignment)