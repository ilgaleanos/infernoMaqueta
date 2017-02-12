const Hijo = require("./hijo.jsx");
import { connect } from 'inferno-mobx';

@connect(['store'])
class Container extends Inferno.Component {
        constructor(props) {
                super(props);
                this.store = props.store;
                console.log(this.store.cadena);
        }

        data() {
                this.store.cadena = 'Hola mundo: ' +Math.random();
        }

        render() {
                console.log("Container rendered");
                return (
                        <div>
                                <h1>{ this.store.cadena }</h1>
                                <button onclick={ this.data.bind(this) }>Change container and child from container</button>
                                <Hijo store={ this.store } />
                        </div>
                )
        }
}

module.exports = Container;
