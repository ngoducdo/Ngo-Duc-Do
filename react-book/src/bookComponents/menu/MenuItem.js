import React, {useEffect, useState} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./style.css";
import {FcFlashOn} from "react-icons/fc";
import {RiCoupon3Line} from "react-icons/ri";
import {BiTrendingUp,BiHomeAlt,BiBook} from "react-icons/bi";
import {MdOutlineNewLabel} from "react-icons/md";
import {AiTwotoneBook,AiFillStar} from "react-icons/ai";
import {BsBookHalf} from "react-icons/bs";
import {IoMdContact} from "react-icons/io";



const MenuItem = () => {
    const [data, setData] = useState()
    let url = 'https://62baa4fb573ca8f832881fa9.mockapi.io/category'
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((item) => {
                setData(item);
            });
    }, [data]);
    const listCategory = []
    if (data != null) {
        data.map((c, id) => {
            return listCategory.push(
                <Nav.Link>   <Link to="" className="nav-link"> {c.name} </Link> </Nav.Link>
            );
        });
    }
    return (
      <div class="row cms-icon-menu">
        <div class="col-sms-3 col-sm-3 col-md-1">
          <div>
            <a href="/flashSale">
                  <FcFlashOn class="icon-menu-item"/>
            </a>
          </div>
          <div class="cms-icon-menu-item-name">Flash Sale</div>
        </div>
        &emsp;&ensp;
        <div class="col-sms-3 col-sm-3 col-md-1">
          <div>
            <Link to="/coupon">
                <RiCoupon3Line class="icon-menu-item"/>
            </Link>
          </div>
          <div class="cms-icon-menu-item-name">Coupon</div>
        </div>
        &emsp;&ensp;
        <div class="col-sms-3 col-sm-3 col-md-1">
          <div>
            <a href="/trending">
                <BiTrendingUp class="icon-menu-item"/>
            </a>
          </div>
          <div class="cms-icon-menu-item-name">Xu Hướng</div>
        </div>
        &emsp;&ensp;
        <div class="col-sms-3 col-sm-3 col-md-1">
          <div>
            <a href="/marketBook">
                <BiHomeAlt class="icon-menu-item"/>
            </a>
          </div>
          <div class="cms-icon-menu-item-name">
            Phiên Chợ <br />
            Sách Cũ
          </div>
        </div>
        &emsp;&ensp;
        <div class="col-sms-3 col-sm-3 col-md-1">
          <div>
            <a href="newBook">
                <MdOutlineNewLabel class="icon-menu-item"/>
            </a>
          </div>
          <div class="cms-icon-menu-item-name">
            Sản Phẩm <br />
            Mới
          </div>
        </div>
        &emsp;&ensp;
        <div class="col-sms-3 col-sm-3 col-md-1">
          <div>
            <a href="/bestSeller">
                <AiTwotoneBook class="icon-menu-item"/>
            </a>
          </div>
          <div class="cms-icon-menu-item-name">
           Sách <br />
           bán chạy
          </div>
        </div>
        &emsp;&ensp;
        <div class="col-sms-3 col-sm-3 col-md-1">
          <div>
            <a href="/reviewBook">
                <BsBookHalf class="icon-menu-item"/>
            </a>
          </div>
          <div class="cms-icon-menu-item-name">
            Review Book
          </div>
        </div>
        &emsp;&ensp;
        <div class="col-sms-3 col-sm-3 col-md-1">
          <div>
            <a href="/bestSeller">
                <AiFillStar class="icon-menu-item"/>
            </a>
          </div>
          <div class="cms-icon-menu-item-name">Best Seller Book</div>
        </div>
        &emsp;&ensp;
        <div class="col-sms-3 col-sm-3 col-md-1">
          <div>
            <a href="/manga">
                <BiBook class="icon-menu-item"/>
            </a>
          </div>
          <div class="cms-icon-menu-item-name">
            Manga - Comic
          </div>
        </div>
        &emsp;&ensp;
        <div class="col-sms-3 col-sm-3 col-md-1">
          <div>
            <a href="/about">
                <IoMdContact class="icon-menu-item"/>
            </a>
          </div>
          <div class="cms-icon-menu-item-name">About</div>
        </div>
      </div>
    );
};

export default MenuItem;