import React, { Fragment, useState } from "react";
import { Row, Col, Table, Input, Space, Modal } from "antd";
import { IconPlus, IconTrash, IconEdit } from "../../../assets/svg";
import { Woking1 } from "../../../data";
import "./woking.css";

interface ICourse {
  unit: string;
  position: string;
  datestart: string;
  dateend: string;
  object: string;
}

const data: ICourse[] = Woking1;

const WokingPage1 = (): JSX.Element => {
  const [isModalDel, setIsModalDel] = useState<boolean>(false);
  const [isModalEdit, setIsModalEdit] = useState<boolean>(false);

  const columns = [
    {
      title: 'Cơ quan/ Đơn vị',
      dataIndex: 'unit',
      
    },
    {
      title: 'Tổ/ Bộ môn',
      dataIndex: 'object',
      
    },
    {
      title: 'Chức vụ',
      dataIndex: 'position',
    },
    {
        title: 'Ngày bắt đầu',
        dataIndex: 'datestart',
    },
    {
        title: 'Ngày kết thúc',
        dataIndex: 'dateend',
    },
    {
      title: "",
      render: () => (
        <><button className="btn__img" onClick={showModalDel}>
          <img src={IconEdit} alt="IconEdit" />
        </button>
        <button className="btn__img" onClick={showModalEdit}>
            <img src={IconTrash} alt="IconTrash" />
        </button></>
      

      ),
    },
  ];

  const showModalDel = (): void => {
    setIsModalDel(true);
  };

  const handleOkDel = (): void => {
    setIsModalDel(false);
  };

  const handleCancelDel = (): void => {
    setIsModalDel(false);
  };
  const showModalEdit = (): void => {
    setIsModalEdit(true);
  };

  const handleOkEdit = (): void => {
    setIsModalEdit(false);
  };

  const handleCancelEdit = (): void => {
    setIsModalEdit(false);
  };

  return (
    <><Fragment>
      <>
        <Row className="ant-row__fix">
          <Col span={6}>
            <Input className="input__process" placeholder="Tìm kiếm" />
          </Col>
          <Col span={3} offset={14}>
            <button className="btn__process__add">
              <img src={IconPlus} />
              Thêm
            </button>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Table
              className="table__process"
              columns={columns}
              dataSource={data}
              pagination={false} />
          </Col>
        </Row>
      </>
    </Fragment>
      {/*    */}
      <Modal
        className="box__btn__profile"
        visible={isModalDel}
        onOk={handleOkDel}
        onCancel={handleCancelDel}
      >
        <h1>Xóa</h1>
        <p>
          Xác nhận muốn xóa những thông tin đã chọn? Sau khi xóa sẽ
          không thể hoàn tác.
        </p>

        <button
          className="box__btn-del-cancel"
          onClick={handleCancelDel}
        >
          Hủy
        </button>
        <button className="box__btn-del-acp" onClick={handleOkDel}>
          Lưu
        </button>
      </Modal></>
  );
};

export default WokingPage1;
