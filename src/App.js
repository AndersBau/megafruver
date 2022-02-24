import './App.css';
import './components/Navbar'

function App() {
  return (
    <div className='container'>
    <div className="grid-parent">
      <div className="covid">
            <p>Estamos ayudando a reducir el impacto del COVID-19  manteniendo
                nuestra comunidad segura al momento de realizar sus pedidos y compras.</p>
        </div>
        <header className="header">
          <div className="logo">
              <a href="index.html">
                <img src="./img/logoL.png" alt="logo megafruver frutas y verduras" />
              </a>
          </div>
          <nav>
              <a href="#products">Productos</a>
              <a href="#contacto">Contacto</a>
              <a href="tel:313-203-9287">Llamar</a>
          </nav>
        </header>
        <div className="banner">

          <div className="mainphrase_container">
            <p className="mainphrase">Gracias <br/>por comprar local <br/><span>y apoyar los pequeños empresarios</span></p>

            <a className="orderbtn" href="tel:313-203-9287">Ordena Aqui</a>
          </div>
        </div>

        <section className="products" id="products">
             <div className="product1">
                 <div className="fruits">
                     <img src="../../img/fruits-desktop.png" alt=""/>
                 </div>
                 <h1 className="product-title">Frutas</h1>
                 <h2 className="product-list">Papaya, Fresas, Aguacates...</h2>
             </div>
             <div className="product2">
                <div className="veggies">
                <img src="./img/veggies-desktop.png" alt=""/>
                </div>
                <h1 className="product-title">Verduras</h1>
                <h2 className="product-list">Broccoli, Apio, Tomates...</h2>
            </div>
            <div className="product3">
                <div className="pantry">
                <img src="./img/pantry-destop.png" alt=""/>
                </div>
                <h1 className="product-title">Despensa</h1>
                <h2 className="product-list">Arroz, Frijol, lentejas...</h2>
            </div>
            <div className="product4">
                <div className="package">
                <img src="./img/enlatados-desktop.png" alt=""/>
                </div>
                <h1 className="product-title">Enlatados</h1>
                <h2 className="product-list">Atun, salchichas, aceitunas...</h2>
            </div>
        </section>

        <section className="phrase">
          <p>
              <span>Siempre listos para servir!</span><br/>
              a toda la comunidad de Bucaramanga con Productos! <br/>
              nos especializamos en traer frutas y verduras de alta calidad <br/>a cada hogar de la ciudad<br/>
              Llama y haz tu pedido al <br />
              <a href="tel:313-203-9287">313-203-9287</a>
          </p>
        </section>
        <div className="bottomimg"></div>
        <footer>
            <div className="bottominfo" id="contacto">
                <p><span>Bucaramanga</span></p>
                <p>Cra 11 67-35 Barrio La Victoria</p>
                <p>whatsapp <a href="tel:313-203-9287">313-203-9287</a></p>
            </div>
            <div className="social">
                <a href="https://www.facebook.com/megafruver.casacampo" className="fa fa-facebook"></a>
                {/* <a href="#" className="fa fa-instagram"></a> */}
                <p className="copyrigth">© 2022 Megafruver shalom</p>
            </div>

        </footer>
        </div>
        </div>
  );
}

export default App;
