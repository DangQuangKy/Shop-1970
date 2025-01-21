import React, { useEffect, useState } from 'react';
import './Search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Search() {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3002/products")
        .then((response) => response.json())
        .then(data => {
            setFilterData(data);
        })
        .catch(err => console.log(err));
    }, []);
    const debounce = (func, delay) => {
        let debounceTimer;
        return function(...args) {
            const context = this;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        };
    };

    const handleFilter = (value) => {
        const response = filterData.filter(f => f.name.toLowerCase().includes(value.toLowerCase()));
        setData(response);
        if (value === "") {
            setData([]);
        }
    };
    // set time tìm kiếm 
    const debouncedHandleFilter = debounce(handleFilter, 500);

    const handleProductClick = (id) => {
        window.location.href = `/SanPham/${id}`;
      };

    return (
        <div className='search-top'>
            <div className='search'>
                <div className='search-input-icon'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Tìm sản phẩm..."
                    onChange={e => debouncedHandleFilter(e.target.value)}
                />
            </div>
            <div className='search-result'>
                {data.map((d, i) => (
                    <div key={i} onClick={() => handleProductClick(d.id)} className="search-result-item">
                        <img src={d.image} alt={d.name} className="product-image" />
                        <div className="product-name">{d.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;
