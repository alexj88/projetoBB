import styles from "./Nav.module.css"
export function Nav(){
return (
    <header class="cabeçalho" >
      
      {/* <nav class="navbar bg-primary" data-bs-theme="dark" > */}
      <nav  class="menuprincipal">

        <div className={styles}>
            
          <div className={styles}>
          <span className="tituloprincipal">Bem Vindo ao AcessInvest App</span>
          <nav>
          <p><a href="">Inicio</a></p>
          <p><a href="./Sobre">Sobre</a></p>
          </nav>
          </div>
        </div>
      </nav>
    </header>
    
)

}