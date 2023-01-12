

const date = new Date();
const dateDay = date.getDate() ;
const dateMonth = date.getMonth();
const currentMonth = dateMonth + 1;
const dateYear = date.getFullYear() ;

function Card(props) {
    const {titleName, title, detiles, id} = props; 
    return(
        <div key={id} className="card-parent">
            <h1 >{titleName}</h1>
            <h3 className="title">{title}</h3>
            <p className="p-tag">{detiles}</p>
            <p>{dateDay + "/" + currentMonth + "/" + dateYear}</p>
        </div>
    )
}


export default Card;

