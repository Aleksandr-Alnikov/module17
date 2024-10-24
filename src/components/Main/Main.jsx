import {List} from "../List/List";
import {useEffect, useState} from "react";
import {useUnit} from "effector-react";
import {addItem, fetch, itemsStore} from "../../effector/store.js";


export const Main = () => {
    const [task, setTask] = useState('');
    const items = useUnit(itemsStore);


    const handleSubmit = (e) => {
        e.preventDefault();
        addItem({
            id: Date.now().toString(36) + Math.random().toString(36).substr(2, 9),
            name: task,
        });
        setTask('');
    };

    const handleChange = ({target}) => {
        setTask(target.value)
    };

    useEffect(() => {
        fetch();
    }, []);

    return (
        <main className='container'>
            <section>
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className='wrapper'>
                            <label>
                                <input name="task"
                                       placeholder="Новыя задача"
                                       type="text"
                                       value={task}
                                       onChange={handleChange}
                                />
                            </label>
                            <button name="btn"
                                    type="submit">
                                Добавить
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <List items={items} />
        </main>
    );
};