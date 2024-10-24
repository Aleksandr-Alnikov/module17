import {removeItem} from "../../effector/store.js";

export const List = ({items}) => {

    const handleRemove = (id) => {
        removeItem(id);
    };

    return (
        <section>
            <ul className="list">
                {items.map(item =>
                    <li key={item.id}>
                        <p>{item.name}</p>
                        <div className="filter">
                            <button onClick={() => handleRemove(item.id)}>Удалить</button>
                        </div>
                    </li>)}
            </ul>
        </section>
    );
};