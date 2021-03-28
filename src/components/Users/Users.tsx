import axios from "axios";
import React from "react";
import {UsersPropsType} from "../../redux/UsersContainer";
import us from "./users.module.css"
import userPhoto from "./../../redux/images.jpg"

class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then
        (response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
        })
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.currentPage}`).then
        (response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (<div>
            {

                pages.map(p => {
                    return  <span className={this.props.currentPage === p ? us.bold : ""} onClick={e => this.onPageChanged(p)}>{p}</span>
                })
            }
            {

                this.props.usersPage.users.map((u) => <div>

                    <div className={us.page}>
<span>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                    <div className={us.inform}>
                        <div>Имя:{u.name}</div>
                        <div>Город:{"u.location.cityName"}</div>
                        <div>Страна:{"u.location.countryName"}</div>
                    </div>
                    <br/>
                    <div className={us.button}>
                    {u.followed ? <button onClick={() => {
                        this.props.unfollow(u.id)
                    }}>Удалить из друзей</button> : <button onClick={() => {
                        this.props.follow(u.id)
                    }}>Добавить в друзья</button>}
                    </div>
                    </span>
                    </div>
                </div>)}
        </div>)
    }
}

export default Users