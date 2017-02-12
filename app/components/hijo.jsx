import { Link  } from 'inferno-router';
import { connect } from 'inferno-mobx';

@connect(['store'])
class Hijo extends Inferno.Component {
        constructor(props) {
                super(props)
                this.store = props.store;
                this.store.cargando = true;
                console.log("SERVER PWN")
                setTimeout(()=>{
                        this.store.cadena = "Sync " + Math.random();
                        this.store.cargando = false;
                },1500)
        }

        render() {
                console.log("Child rendered");
                return (
                        <div>
                                <h1 >{ this.store.cargando ? 'loading': 'End... ' + Math.random() }</h1>
                                <button onClick={ ()=>{ this.store.cadena = "Sync " + Math.random() }}>change container and child from child</button><br/>

                                <Link to={'/about/'+ Math.floor(100*Math.random()) + '/' } >about</Link>
                        </div>
                )
        }

}

module.exports = Hijo;
