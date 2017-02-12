import { Link  } from 'inferno-router';
import { connect } from 'inferno-mobx';

@connect(['store'])
class About extends Inferno.Component {
        constructor(props) {
                super(props);
                this.params = props.params;
                this.store = props.store;
        }

        render() {
                return(
                        <div>
                                <h2>{ "About: " + this.params.id +'  '+ this.store.cadena }</h2><br />
                                <Link to="/" >Home</Link>
                        </div>
                )
        }
}

module.exports = About;
