import React, { Component } from 'react'
import { 
  Row,
  Col,
  Button,
  Select,
  Table, 
  Space,
  Pagination, 
  InputNumber,
  Modal,
  Input,
  Upload
} from 'antd';
import { 
  UploadOutlined,
  DownloadOutlined,
} from '@ant-design/icons';
import {Link} from "react-router-dom"
import './profile.css'
import IconEyes from '../../assets/avg/eyeIcon.svg'
import IconReload from '../../assets/avg/reload.svg'
import IconTrash from '../../assets/avg/trashicon.svg'

const { Option } = Select;

//   tao bang
const columns = [
  {
    title: 'Mã giảng viên',
    dataIndex: 'id',
    sorter: {
      compare: (a:any, b:any) => a.id - b.id,
      multiple: 3,
    },

  },
  {
    title: 'Tên giảng viên',
    dataIndex: 'name',
    sorter: {
      compare: (a:any,b:any) => a.name - b.name,
      multiple: 3,
    },

  },
  {
    title: 'Ngày sinh',
    dataIndex: 'date',
    sorter: {
      compare: (a:any,b:any) => a.date - b.date,
      multiple: 3,
    },

  },
  {
    title: 'Giới tính',
    dataIndex: 'sex',
    sorter: {
      compare: (a:any,b:any) => a.sex - b.sex,
      multiple: 3,
    },

  },
  {
    title: 'Tổ - Bộ môn',
    dataIndex: 'object',
    sorter: {
      compare: (a:any,b:any) => a.object - b.object,
      multiple: 3,
    },

  },
  {
    title: 'Chức vụ',
    dataIndex: 'position',
    sorter: {
      compare: (a:any,b:any) => a.position - b.position,
      multiple: 3,
    },

  },
  {
    title: 'Tình trạng',
    dataIndex: 'status',
    render: (btn:any) => <button className="btn__status">{btn}</button>,
    sorter: {
      compare: (a:any,b:any) => a.status - b.status,
      multiple: 3,
    },

  },
  {
    title: ' ',
    dataIndex: 'icon',
    render: () => (
      <Space >
        <img src={IconEyes} alt=""/>
        <img src={IconReload} alt=""/>
        <img src={IconTrash} alt=""/>
      </Space>
    ),
  }

];
  const data = [
    {
      key: '1',
      id: '2020-6A',
      name: 'Nguyễn Văn A',
      date: '12/02/1998',
      sex: 'Nam',
      object: 'Toán',
      position: 'Giáo viên',
      status: 'Đang hoạt động',
      buttonview: 'Xem',
      buttonreload: 'Load',
      buttondelete: 'Xóa'
  
    },
    {
      key: '1',
      id: '2020-6A',
      name: 'Nguyễn Văn A',
      date: '12/02/1998',
      sex: 'Nam',
      object: 'Toán',
      position: 'Giáo viên',
      status: 'Đã nghỉ việc'
    },
    {
      key: '1',
      id: '2020-6A',
      name: 'Nguyễn Văn A',
      date: '12/02/1998',
      sex: 'Nam',
      object: 'Toán',
      position: 'Giáo viên',
      status: 'Tạm nghỉ'
    },
    {
      key: '1',
      id: '2020-6A',
      name: 'Nguyễn Văn A',
      date: '12/02/1998',
      sex: 'Nam',
      object: 'Toán',
      position: 'Giáo viên',
      status: 'Nghỉ hưu'
    },
    {
      key: '1',
      id: '2020-6A',
      name: 'Nguyễn Văn A',
      date: '12/02/1998',
      sex: 'Nam',
      object: 'Toán',
      position: 'Giáo viên',
      status: 'Đang hoạt động'
    }
  ];

  export default class Profile extends Component {
    render() {

      return (
        <>
          <Row>
            <Col span={24}>
              <div className="title">
                <span>Hồ sơ giảng viên</span>
                <i className="bx bx-chevron-right" />
                <div className="title-info-student">Tất cả hồ sơ</div>
              </div>
            </Col>
          </Row>
          <Row>
            
            <Col span={8}>
              <Select id="school_year" defaultValue="2020-2021">
                <Option value="2017-2018">2017-2018</Option>
                <Option value="2017-2018">2018-2019</Option>
                <Option value="2017-2018">2019-2020</Option>
                <Option value="2017-2018" selected>2020-2021</Option>
              </Select>
            </Col>
            <Col className="right-btn" span={8} offset={8}>
              <div className="box">
                <div className="btn-delete">
                  <button /* onClick={showModal} */>
                    <i className='bx bx-trash' />
                  </button>
                  <Modal 
                  className="box__btn-del" 
                  /* visible={isModalVisible} 
                  onOk={handleOk} 
                  onCancel={handleCancel} */>
                    <h1>Xóa</h1>
                    <p>Xác nhận muốn xóa những thông tin đã chọn? Sau khi xóa sẽ không thể hoàn tác.</p>
                    
                    <button className="box__btn-del-cancel" /* onClick={handleCancel} */>Hủy</button>
                    <button className="box__btn-del-acp" /* onClick={handleOk} */>Lưu</button>
                  </Modal>
                </div>
    
                <div className="btn-excel">
                  <button className="btn-bk-ffffff" /* onClick={showModals} */>Xuất file</button>
                  <Modal 
                    className="box__excel" 
                   /*  visible={isModalVisibles} 
                    onOk={handleOks} 
                    onCancel={handleCancels} */>
                    <form>
                      <h1>Tải lên file</h1>
                      <label>Tệp đính kèm: </label>
                      <Upload>
                      <Button className="bgef" icon={<UploadOutlined />}><input className="input__fixsize"></input></Button>
                      <Button className="btn__upload btn__link">Chọn tệp ảnh gửi lên</Button>
                      </Upload>
                      <label>Tải file mẫu: </label>
                      <Button icon={<DownloadOutlined />}></Button>
                      <p>[tải xuống file mẫu]</p>
                      <br/>
                      <div className="mlist_btn">
                        <button className="box__btn-del-cancel" /* onClick={handleCancels} */>Hủy</button>
                        <button className="box__btn-del-acp" /* onClick={handleOks} */>Lưu</button>
                      </div>
                    </form>
                  </Modal>
                </div>
                <div className="btn-edit">
                  <button /* onClick={showModalss} */ className="btn-bk-ff7506">
                  <Link to="profile-teacher"><i className='bx bx-plus' />Thêm mới</Link>
                  </button>
                  
                </div>
              </div>
            </Col>
          </Row>
          <div className="box_list">
            <Row>
              <Col className="mlist" span={12}>
                <span className="list_title">Danh sách giảng viên</span>
              </Col>
              <Col className="mlist" span={9} offset={12}>
                <Input className="input__search" defaultValue="Tìm kiếm"></Input>
              </Col>
            </Row>
            <Row>
              <Col className="mlist" span={22}>
                <Table
                  className="table__page"
                 /*  rowSelection={rowSelection} */
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                />
              </Col>
              <Col span={12}>
                <div className="box__inputnumber">
                  <div className="box__inputnumber-txt">
                    <p>Hiển thị</p>
                    <InputNumber min={1} max={10} defaultValue={3} />
                    <p> hàng trong mỗi trang</p>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div className="box__pagnation">
                  <Pagination
                    showSizeChanger
                    defaultCurrent={8}
                    total={50}
                  />
                </div>
              </Col>
    
    
            </Row>
          </div>
        </>
      )
}

}