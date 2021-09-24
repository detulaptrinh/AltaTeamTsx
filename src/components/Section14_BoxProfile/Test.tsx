import React, { Component } from 'react'
import { 
  Row,
  Col,
  Button,
  Select,
  Table, 
  Space,
  Divider, 
  Checkbox,
  Pagination, 
  InputNumber,
  Modal,
  Input,
  Upload
} from 'antd';
import { 
  FormOutlined,
  DeleteOutlined, 
  ContainerOutlined,
  UploadOutlined,
  DownloadOutlined,
} from '@ant-design/icons';
import {Link} from "react-router-dom"
import './profile.css'

const { Option } = Select;

//   tao bang
  const columns =  [ 
    {
      title: '',
      dataIndex: 'row',
      render: () => (
        <Space>
          <Checkbox/>
        </Space>
      ),
    },
    {
      title: 'Mã lớp',
      dataIndex: 'ma',
      
    },
    {
      title: 'Tên lớp',
      dataIndex: 'name',
    },
    {
      title: 'Ngày bắt đầu',
      dataIndex: 'datebatdau',
    },
    {
    title: 'Ngày kết thúc',
    dataIndex: 'dateketthuc',
    },
    {
    title: 'Danh sách chủ đề',
    dataIndex: 'danhsach',
    render: () => <ContainerOutlined style={{ fontSize: '32px' , color: '#FF7506' }}/>,
  
    },
    {
    title: '',
    dataIndex: 'icon',
    render: () => (
      <Space >
        <FormOutlined style={{ fontSize: '32px' , color: '#FF7506' }}/>,
        <DeleteOutlined style={{ fontSize: '32px' , color: '#FF7506' }}/>,
      </Space>
    ),
    },
    
  ]; 
  const data= [
    {
      key: '1',
      ma: '123 456 789',
      name: '6A',
      datebatdau: '01/01/2021',
      dateketthuc: '30/12/2021',
      danhsach: '',
      icon: '',
    },
    {
      key: '2',
      ma: '123 456 789',
      name: '6A',
      datebatdau: '01/01/2021',
      dateketthuc: '30/12/2021',
      danhsach: '',
      icon: '',
    },
    {
      key: '3',
      ma: '123 456 789',
      name: '6A',
      datebatdau: '01/01/2021',
      dateketthuc: '30/12/2021',
      danhsach: '',
      icon: '',
    },
    {
      key: '4',
      ma: '123 456 789',
      name: '6A',
      datebatdau: '01/01/2021',
      dateketthuc: '30/12/2021',
      danhsach: '',
      icon: '',
    },
  ]; 

  export default class Boxphancong extends Component {
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