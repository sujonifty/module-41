import './Watch.css'

const Watch = ({watch}) => {
    const {name, price, color}= watch;
    return (
        <div className="watch-container ">
            <h3>Name:{name}</h3>
            <p>Price:{price}</p>
            <p>Color:{color}</p>
        </div>
    );
};

export default Watch;