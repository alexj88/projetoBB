import { TabelaBancos } from './TabelaBancos';
import { Nav } from './components/NavPagHome';
import { Rodape } from './FooterPagHome';
import { Cartao } from './components/card';




export function App() {
  return (
    <div>
      <Nav/>
      <Cartao width='50px'/>
      <div class="imagem">
        <h2>O seu jeito novo de Investir</h2>
        <img class="imagem" src="https://www.nuinvest.com.br/hero_background-3.webp"  ></img>
      </div>
      
      <TabelaBancos/>
      <div class="imagem">
        
      <img class="imagem" src="https://www.toroinvestimentos.com.br/assets-next/images/lp-parceiros-trader/n-profit-2x.webp"  ></img>
      
      
      
        
      <img class="imagem" display="flex" src="https://files.sunoresearch.com.br/p/uploads/2019/09/grandes-investidores.jpg"  ></img>
      </div>
      <Rodape/>
      
    </div>
    
)
}


