let estadoLicuadora  = "apagado";
let licuadora = document.getElementById("blender");
let sonidoLicuadora = document.getElementById("blender-sound");
let sonidoBoton = document.getElementById("blender-button-sound");

function controlarLicuadora()
{
    if(estadoLicuadora === 'apagado')
    {
        estadoLicuadora = "encendido";
        licuadora.classList.add("active");        
        hacerBrrBrr();
    }
    else
    {
        estadoLicuadora = "apagado";
        licuadora.classList.remove("active");
        hacerBrrBrr();
    }
}

function hacerBrrBrr()
{
    if(sonidoLicuadora.paused)
    {
        sonidoBoton.play();
        sonidoLicuadora.play();
    }
    else
    {
        sonidoBoton.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}