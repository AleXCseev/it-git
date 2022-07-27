import {Link} from "react-router-dom"

function Main() {
    return (
        <div className="row">
            <div className="col-12">
                <div className="text">
                    <ul className="row button-list">
                        <li className="col-6"><Link to="/create" type=" button" className="btn btn-primary">Создать note</Link></li>
                        <li className="col-6"><Link to="/note" type=" button" className="btn btn-primary">Просмотреть note</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Main;