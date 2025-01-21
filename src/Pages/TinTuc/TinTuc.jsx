import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TinTuc.scss";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
function TinTuc() {
    const[news, setNews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3002/news")
               .then(response => response.json())
               .then((data) => setNews(data))
    },[]);
    useEffect(() => {
      document.title = "Trang tin tức"
    },[])
    return ( 
        <div className="tin-tuc">
           <nav className="nav-tin-tuc">
           <a href="/">Trang chủ</a> &nbsp;
            <FontAwesomeIcon icon={faAngleRight} />
            &nbsp;
            <a href="/TinTuc" className="active">
              Danh sách bài viết
            </a>
           </nav>
           <div className="tin-tuc-list">
            <ul>
            {news.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <h4>{item.title}</h4>
                  <p>{item.date}</p>
                  <p>{item.content}</p>
                  <a href="/" className="btn-list">Xem thêm</a>
                </li>
            ))}
            </ul>
           </div>
             
        </div>
     );
}

export default TinTuc;