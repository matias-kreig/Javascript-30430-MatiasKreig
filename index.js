/* Ciclo FOR que da turnos para ingresar a una sala de juegos. Utilizo la sentencia Break, para que a la hora de llegar a 5 jugadores, no deje ingresar a nadie mas. */  

for(let i = 1; i <= 5; i++) {
    
    let nombreUsuario = prompt("Ingresar Nombre de Usuario").toLowerCase();
    
    alert(`Bienvenido ${nombreUsuario} eres el Jugador N° ${i}.`);

    if(i==5){
        
        let nombreUsuario = prompt("Ingresar Nombre de Usuario").toLowerCase();
        
        alert(`Lo sentimos ${nombreUsuario}. La Sala esta Llena.`)
    
    }
}