
    document.getElementById("show-form").innerHTML = document.getElementById("adopt").innerHTML;

    function bgButtonform() {
    let button = document.getElementById("adopt-btn");
    button.classList.remove("default");
}

    function bgOnOffAdopt() {
    let labelAdopt = document.getElementById("adopt-btn");
    labelAdopt.classList.add("bg-toggle");
    let labelDonate = document.getElementById("donate-btn");
    labelDonate.classList.remove("bg-toggle");
}

    function bgOnOffDonate() {
    let labelDonate = document.getElementById("donate-btn");
    labelDonate.classList.add("bg-toggle");
    let labelAdopt = document.getElementById("adopt-btn");
    labelAdopt.classList.remove("bg-toggle");
}

    function showAdopt(){
    document.getElementById("show-form").innerHTML = document.getElementById("adopt").innerHTML;
    bgButtonform();
    bgOnOffAdopt();
}

    function showDonate(){
    document.getElementById("show-form").innerHTML = document.getElementById("donate").innerHTML;
    bgButtonform();
    bgOnOffDonate();
}

    function fishername(){
    document.getElementById("place-name-fisherbot").innerHTML = document.getElementById("nome-fisherbot").value;;
}

