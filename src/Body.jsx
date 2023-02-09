import Word from './Word';
import Menu from './Menu';



function Body () {
    return (
        <div className="body">
            <div className="body-left">
                <Word />
            </div>
            <div className="body-right">
                <Menu />
            </div>
        </div>
    );
}


export default Body;