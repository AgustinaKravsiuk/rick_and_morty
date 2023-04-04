import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import styles from './favorites.module.css';
import { filterCards, orderCards } from "../../redux/actions";

function Favorites({ myFavorites }) {
    const dispatch = useDispatch();

const handleOrder = (event) => {
    dispatch(orderCards(event.target.value))
};

const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))
}

    return(
        <div className={styles.favConteiner}>
            <div>
                <select onChange={handleOrder}>
                    <optgroup label="Orden:"></optgroup>
                    <option selected value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handleFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
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