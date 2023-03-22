import { connect } from "react-redux";
import Card from "../Card/Card";
import styles from './favorites.module.css'

function Favorites({ myFavorites }) {
    return(
        <div className={styles.favConteiner}>
            <div className={styles.divFav}>
                {myFavorites?.map(({id, name, image}) => {
                return(
                    <div key={id}>
                        <Card id={id} name={name} image={image}/>
                    </div>
                );
                })};
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);