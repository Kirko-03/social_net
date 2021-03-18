import * as axios from "axios";
import React from "react";
import {UsersPropsType} from "../../redux/UsersContainer";
import us from "./users.module.css"

export function Users(props: UsersPropsType) {
   if (props.usersPage.users.length === 0)
       /* {
            axios.get("https://social-network.samuraijs.com/users").then(response=>{
                        props.setUsers([])
                    })
        }*/
    {
        props.setUsers([
            {
                id: 1,
                name: "Kirik",
                followed: false,
                location: {countryName: "Russia", cityName: "Bryansk"},
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlEXzY-ureehmp1yRnE4A62g0ryu-y8hbRng&usqp=CAU"
            },
            {
                id: 2,
                name: "Dimik",
                followed: true,
                location: {countryName: "Russia", cityName: "Bryansk"},
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlqGGite7tmoh8H7WzgEGKbo6gelAOH0uXdQ&usqp=CAU"
            },
            {
                
                id: 3,
                name: "max",
                followed: true,
                location: {countryName: "Russia", cityName: "Bryansk"},
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWszI_rF_7Dk4rs65b3E1QSeye_JafCS1CkA&usqp=CAU"
            },
            {
                id: 4,
                name: "dima",
                followed: false,
                location: {countryName: "Russia", cityName: "Bryansk"},
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWszI_rF_7Dk4rs65b3E1QSeye_JafCS1CkA&usqp=CAU"
            },
            {
                id: 5,
                name: "sasha",
                followed: true,
                location: {countryName: "Russia", cityName: "Bryansk"},
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWszI_rF_7Dk4rs65b3E1QSeye_JafCS1CkA&usqp=CAU"
            }
        ])
    }
    return (
        <div>
            {props.usersPage.users.map(u => <div>
                <div className={us.page}>
<span>
                    <img src={u.image}/>
                    <div className={us.inform}>
                        <div>Имя:{u.name}</div>
                        <div >Город:{u.location.cityName}</div>
                        <div>Страна:{u.location.countryName}</div>
                    </div>
                    <br/>
                    <div className={us.button}>
                    {u.followed ? <button onClick={() => {
                        props.unfollow(u.id)
                    }}>Удалить из друзей</button> : <button onClick={() => {
                        props.follow(u.id)
                    }}>Добавить в друзья</button>}
                    </div>
                    </span>
                </div>
            </div>)}
        </div>)
}

export default Users