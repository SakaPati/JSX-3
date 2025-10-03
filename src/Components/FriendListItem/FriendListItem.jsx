import style from "../FriendList/FriendList.module.css"
import Friends from "../../Data/friends.json"

export const FriendListItem = () => { 
    return (
        Friends.map((item) => ( 
            <li className={style.item}>
                <span className={`${style.status} ${item.isOnline ? style.online : style.offline}`}></span>
                <img className={style.avatar} src={item.avatar} alt="User avatar" width="48" />
                <p class="name">{item.name}</p>
            </li>
        ))
    );
}