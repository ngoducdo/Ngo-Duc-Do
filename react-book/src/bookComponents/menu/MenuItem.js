import React, {useEffect, useState} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./style.css";



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
            <a href="#">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_FlashSale_Hot_1.png"
                class="center"
                alt=""
              />
            </a>
          </div>
          <div class="cms-icon-menu-item-name">Flash Sale</div>
        </div>
        &emsp;&ensp;
        <div class="col-sms-3 col-sm-3 col-md-1">
          <div>
            <a href="#">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_MaGiamGia_Hot_1.png"
                class="center"
                alt=""
              />
            </a>
          </div>
          <div class="cms-icon-menu-item-name">Mã Giảm Giá</div>
        </div>
        &emsp;&ensp;
        <div class="col-sms-3 col-sm-3 col-md-1">
          <div>
            <a href="#">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_Trending_Moi_1.png"
                class="center"
                alt=""
              />
            </a>
          </div>
          <div class="cms-icon-menu-item-name">Xu Hướng</div>
        </div>
        &emsp;&ensp;
        <div class="col-sms-3 col-sm-3 col-md-1">
          <div>
            <a href="#">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_PhienChoCu_Hot.png"
                class="center"
                alt=""
              />
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
            <a href="#">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_SanPhamMoi_1.png"
                class="center"
                alt=""
              />
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
            <a href="#">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/DoChoi/Thang5/Icon_DoChoi_Hot.png"
                class="center"
                alt=""
              />
            </a>
          </div>
          <div class="cms-icon-menu-item-name">
            Đồ Chơi <br />
            Giáo Dục
          </div>
        </div>
        &emsp;&ensp;
        <div class="col-sms-3 col-sm-3 col-md-1">
          <div>
            <a href="#">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_VanPhongPham_Hot_1.png"
                class="center"
                alt=""
              />
            </a>
          </div>
          <div class="cms-icon-menu-item-name">
            Văn Phòng Phẩm
          </div>
        </div>
        &emsp;&ensp;
        <div class="col-sms-3 col-sm-3 col-md-1">
          <div>
            <a href="#">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_ThieuNhi_Moi_1.png"
                class="center"
                alt=""
              />
            </a>
          </div>
          <div class="cms-icon-menu-item-name">Thiếu Nhi</div>
        </div>
        &emsp;&ensp;
        <div class="col-sms-3 col-sm-3 col-md-1">
          <div>
            <a href="#">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_MangaCommic.png"
                class="center"
                alt=""
              />
            </a>
          </div>
          <div class="cms-icon-menu-item-name">
            Manga - Comic
          </div>
        </div>
        &emsp;&ensp;
        <div class="col-sms-3 col-sm-3 col-md-1">
          <div>
            <a href="#">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_KinhTe.png"
                class="center"
                alt=""
              />
            </a>
          </div>
          <div class="cms-icon-menu-item-name">Kinh Tế</div>
        </div>
      </div>
    );
};

export default MenuItem;