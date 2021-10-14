import React, { useState, Fragment } from 'react';
import './StudentProfile.css'
import { Select, Table, Tag, Modal, DatePicker, Input, Pagination, InputNumber, Menu, Dropdown, Checkbox, Col, Row } from 'antd';
import {
    IconPlus,
    IconTrash,
    IconUn2,
    IconUpdate,
    IconEyesOr,
    IconUpload,
    IconDownload,
} from "../../../assets/svg/index";


const { Option } = Select;

const ProfileStudent = (): JSX.Element => {
    const columns = [
        {
            title: 'Mã học viên',
            dataIndex: 'id',
        },
        {
            title: 'Tên học viên',
            dataIndex: 'name',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Ngày sinh',
            dataIndex: 'date',
        },
        {
            title: 'Giới tính',
            dataIndex: 'sex',
        },
        {
            title: 'Dân tộc',
            dataIndex: 'nation',
        },
        {
            title: 'Lớp',
            dataIndex: 'class',
        },
        {
            title: 'Tình trạng',
            dataIndex: 'status',
            render: (tag: string) => {
                const color = tag.includes('Đang theo học') ? "green" : tag.includes('Đã chuyển lớp') ? "orange" : tag.includes('Đã chuyển trường') ? "default" : tag.includes('Đã thôi học') ? "red" : "blue"
                return <Tag color={color} key={tag}>{tag}</Tag>
                // return <Tag color={color} key={tag}><img src={ellipseIcon} alt="" /> {tag}</Tag>
            }
        },
        {
            title: '',
            render: () => (
                <Fragment>
                    <button className="btnView" >
                        <img src={IconEyesOr} alt="IconEdit" />
                        <a href="/boxdatasubject"></a>
                    </button>
                    <button className="btnUpdate" >
                        {/* <img src={IconUpdate} alt="IconTrash" /> */}
                        <Dropdown overlay={menuUpdate} trigger={['click']} >
                            <a className="ant-dropdown-link" >
                                <img src={IconUpdate} alt="IconTrash" onClick={e => e.preventDefault()} />
                            </a>
                        </Dropdown>
                    </button>
                    <button className="btnTrash" onClick={showDelModal}>
                        <img src={IconTrash} alt="IconTrash" />
                    </button>
                </Fragment>
            ),
        },
    ];

    const data: DataType[] = [
        {
            key: '1',
            id: '2020-6A',
            name: 'Nguyễn Văn A',
            date: '12/02/1998',
            sex: 'Nam',
            nation: 'Kinh',
            class: '6A',
            status: 'Đang theo học',
        },
        {
            key: '1',
            id: '2020-6A',
            name: 'Nguyễn Văn A',
            date: '12/02/1998',
            sex: 'Nam',
            nation: 'Kinh',
            class: '6A',
            status: 'Đã chuyển lớp',
        },
        {
            key: '1',
            id: '2020-6A',
            name: 'Đã thôi học',
            date: '12/02/1998',
            sex: 'Nam',
            nation: 'Kinh',
            class: '6A',
            status: 'Đã tốt nghiệp',
        },
        {
            key: '1',
            id: '2020-6A',
            name: 'Nguyễn Văn A',
            date: '12/02/1998',
            sex: 'Nam',
            nation: 'Kinh',
            class: '6A',
            status: 'Đã chuyển trường',
        },
        {
            key: '1',
            id: '2020-6A',
            name: 'Nguyễn Văn A',
            date: '12/02/1998',
            sex: 'Nam',
            nation: 'Kinh',
            class: '6A',
            status: 'Đang theo học',
        },
        {
            key: '1',
            id: '2020-6A',
            name: 'Nguyễn Văn A',
            date: '12/02/1998',
            sex: 'Nam',
            nation: 'Kinh',
            class: '6A',
            status: 'Đang theo học',
        },
        {
            key: '1',
            id: '2020-6A',
            name: 'Nguyễn Văn A',
            date: '12/02/1998',
            sex: 'Nam',
            nation: 'Kinh',
            class: '6A',
            status: 'Đang theo học',
        },
    ]; //
    interface DataType {
        key: React.Key;
        id: string;
        name: string;
        date: string;
        sex: string;
        nation: string;
        class: string;
        status: string;
    }

    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record: DataType) => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };


    // upload file
    const [uploadModalVisible, setUploadModalVisible] = useState(false);
    const showUploadModal = () => {
        setUploadModalVisible(true);
    };
    const handleUploadOk = () => {
        setUploadModalVisible(false);
    };
    const handleUploadCancel = () => {
        setUploadModalVisible(false);
    }
    // delete   
    const [delModalVisible, setDelModalVisible] = useState(false);
    const showDelModal = () => {
        setDelModalVisible(true);
    };
    const handleDelOk = () => {
        setDelModalVisible(false);
    };
    const handleDelCancel = () => {
        setDelModalVisible(false);
    }
    // update change class   
    const [changeClassModalVisible, setChangeClassModalVisible] = useState(false);
    const showChangeClassModal = () => {
        setChangeClassModalVisible(true);
    };
    const handleChangeClassOk = () => {
        setChangeClassModalVisible(false);
    };
    const handleChangeClassCancel = () => {
        setChangeClassModalVisible(false);
    }
    // update change school   
    const [changeSchoolModalVisible, setChangeSchoolModalVisible] = useState(false);
    const showChangeSchoolModal = () => {
        setChangeSchoolModalVisible(true);
    };
    const handleChangeSchoolOk = () => {
        setChangeSchoolModalVisible(false);
    };
    const handleChangeSchoolCancel = () => {
        setChangeSchoolModalVisible(false);
    }
    // update change reserve   
    const [changeReserveModalVisible, setChangeReserveModalVisible] = useState(false);
    const showChangeReserveModal = () => {
        setChangeReserveModalVisible(true);
    };
    const handleChangeReserveOk = () => {
        setChangeReserveModalVisible(false);
    };
    const handleChangeReserveCancel = () => {
        setChangeReserveModalVisible(false);
    }
    // update change discount   
    const [changeDiscountModalVisible, setChangeDiscountModalVisible] = useState(false);
    const showChangeDiscountModal = () => {
        setChangeDiscountModalVisible(true);
    };
    const handleChangeDiscountOk = () => {
        setChangeDiscountModalVisible(false);
    };
    const handleChangeDiscountCancel = () => {
        setChangeDiscountModalVisible(false);
    }
    // update change reward   
    const [changeRewardModalVisible, setChangeRewardModalVisible] = useState(false);
    const showChangeRewardModal = () => {
        setChangeRewardModalVisible(true);
    };
    const handleChangeRewardOk = () => {
        setChangeRewardModalVisible(false);
    };
    const handleChangeRewardCancel = () => {
        setChangeRewardModalVisible(false);
    }
    // update change Rules   
    const [changeRulesModalVisible, setChangeRulesModalVisible] = useState(false);
    const showChangeRulesModal = () => {
        setChangeRulesModalVisible(true);
    };
    const handleChangeRulesOk = () => {
        setChangeRulesModalVisible(false);
    };
    const handleChangeRulesCancel = () => {
        setChangeRulesModalVisible(false);
    }

    // dropdown update
    const menuUpdate = (
        <Menu className="section8-dropdown-update">
            <Menu.Item key="0">
                <button className="section8-dropdown-update-btn">Sửa hồ sơ</button>
            </Menu.Item>
            <Menu.Item key="1">
                <button className="section8-dropdown-update-btn" onClick={showChangeClassModal}>Chuyển lớp</button>
            </Menu.Item>
            <Menu.Item key="2">
                <button className="section8-dropdown-update-btn" onClick={showChangeSchoolModal}>Chuyển trường</button>
            </Menu.Item>
            <Menu.Item key="3">
                <button className="section8-dropdown-update-btn" onClick={showChangeReserveModal}>Bảo lưu</button>
            </Menu.Item>
            <Menu.Item key="4">
                <button className="section8-dropdown-update-btn" onClick={showChangeDiscountModal}>Cập nhật miễn giảm</button>
            </Menu.Item>
            <Menu.Item key="5">
                <button className="section8-dropdown-update-btn" onClick={showChangeRewardModal}>Cập nhật khen thưởng</button>
            </Menu.Item>
            <Menu.Item key="6">
                <button className="section8-dropdown-update-btn border-btn" onClick={showChangeRulesModal}>Cập nhật kỷ luật</button>
            </Menu.Item>
        </Menu >
    );
    // dropdown upload
    const menu = (
        <Menu className="section8-dropdown-cre">
            <Menu.Item key="0">
                <button className="section8-dropdown-cre-btn" onClick={showUploadModal}>Tải file lên</button>
            </Menu.Item>
            <Menu.Item key="1">
                <button className="section8-dropdown-cre-btn" >Nhập thủ công</button>
            </Menu.Item>
        </Menu>
    );

    return (
        <Fragment>
            <div className="section-8">
                <div className="box__title">
                    <h1>Hồ sơ học viên</h1>
                </div>
                <div className="box__btn">
                    <Row>
                        <Col className="box__btn-blk" span={6}>
                            <div className="box__btn-block">
                                <Select className="box__btn-block_select" placeholder="Tất cả khối">
                                    <Option value="7">Khối 6</Option>
                                    <Option value="8">Khối 7</Option>
                                    <Option value="8">Khối 8</Option>
                                </Select>
                            </div>
                            <div className="box__btn-class">
                                <Select className="box__btn-class_select" placeholder="2020-2021">
                                    <Option value="6A2">2019-2020</Option>
                                    <Option value="6A3">2018-2019</Option>
                                    <Option value="6A3">2017-2018</Option>
                                </Select>
                            </div>
                        </Col>
                        <Col className="box__btn-tag" span={11}>
                            <button className="box__btn-tag-active">Tất cả hồ sơ</button>
                            <button className="box__btn-tag-none">Khen thưởng</button>
                            <button className="box__btn-tag-none">Kỷ luật</button>
                        </Col>
                        <Col className="box__btn-button" span={7}>
                            <button className="box__btn-button_del" onClick={showDelModal}>
                                <img className="box__btn-button_del-icon" src={IconUn2} alt="" />
                            </button>
                            <Modal className="box__btn-del" visible={delModalVisible} onOk={handleDelOk} onCancel={handleDelCancel}>
                                <h1>Xóa</h1>
                                <p>Xác nhận muốn xóa những thông tin đã chọn? Sau khi xóa sẽ không thể hoàn tác.</p>
                                <button className="box__btn-del-cancel" onClick={handleDelCancel}>Hủy</button>
                                <button className="box__btn-del-acp" onClick={handleDelCancel}>Lưu</button>
                            </Modal>

                            <button className="box__btn-button_export">
                                Xuất File
                            </button>

                            <Dropdown className="box__btn-button_cre" overlay={menu} trigger={['click']} >
                                <a className="ant-dropdown-link" >
                                    <img className="box__btn-button_cre-icon" src={IconPlus} alt="" onClick={e => e.preventDefault()} />
                                    Thêm mới
                                </a>
                            </Dropdown>
                            {/* upload file */}
                            <Modal className="section-6-modal1" visible={uploadModalVisible} onOk={handleUploadOk} onCancel={handleUploadCancel}>
                                <h1>Tải lên file</h1>
                                <div className="box__btn-upload-fileattach">
                                    <p>Tệp đính kèm:</p>
                                    <button className="box__btn-upload-fileattach__btn1">
                                        <img src={IconUpload} alt="" />
                                    </button>
                                    <button className="box__btn-upload-fileattach__btn2">Chọn tệp tải lên...</button>
                                </div>
                                <div className="box__btn-upload-filesamp">
                                    <p>Tải file mẫu:</p>
                                    <img src={IconDownload} alt="" />
                                    <i>[Tải xuống file mẫu]</i>
                                </div>
                                <button className="box__btn-upload-cancel" onClick={handleUploadCancel}>Hủy</button>
                                <button className="box__btn-upload-acp" onClick={handleUploadOk}>Tải lên</button>
                            </Modal>

                        </Col>
                    </Row>
                </div>
                <div className="box__sbj">
                    <div className="box__sbj-stu">
                        <p>Loại điểm</p>
                        {/* <img className="box__sbj-search__icon" src={searchIcon} alt="" /> */}
                        <input className="box__sbj-search__input" type="search" placeholder="Tìm kiếm" />
                    </div>
                    <div className="table-list">
                        <Table
                            rowSelection={{
                                type: selectionType,
                                ...rowSelection,
                            }}
                            columns={columns}
                            dataSource={data}
                            pagination={false}
                        />
                        {/* view */}

                        {/* update */}
                        {/* update change class */}
                        <Modal className="section8-update-change" visible={changeClassModalVisible} onOk={handleChangeClassOk} onCancel={handleChangeClassCancel}>
                            <h1>Cập nhật chuyển lớp</h1>
                            <Row>
                                <Col className="text-update-left" span={5}>Tên học viên:</Col>
                                <Col className="text-update-right" span={19}>Nguyễn Ngọc Tuyết</Col>
                            </Row>
                            <Row>
                                <Col className="text-update-left" span={5}>Lớp hiện tại:</Col>
                                <Col className="text-update-right" span={19}>10A1</Col>
                            </Row>
                            <Row>
                                <Col className="text-update-left" span={5}>Ngày chuyển lớp:</Col>
                                <Col className="text-update-right" span={19}>
                                    <DatePicker placeholder="dd/mm/yy" />
                                    <Input className="text-update-right-input-class" value="Học kì I" readOnly />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-update-left" span={5}>Chuyển đến lớp:</Col>
                                <Col className="text-update-right" span={19}>
                                    <Select className="text-update-right-class" defaultValue="0">
                                        <Option value="0">Chọn lớp</Option>
                                        <Option value="1">10A3</Option>
                                        <Option value="2">10A4</Option>
                                        <Option value="2">10A5</Option>
                                    </Select>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-update-left" span={5}>Lý do chuyển lớp:</Col>
                                <Col className="text-update-right" span={19}>
                                    <Input.TextArea />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-update-left" span={5}>Tệp đính kèm:</Col>
                                <Col className="text-update-right" span={19}>
                                    <button className="text-update-right-upload1">
                                        <img src={IconUpload} alt="" />
                                    </button>
                                    <button className="text-update-right-upload2">Chọn tệp tải lên...</button>
                                    <p>Kiểu file .pdf .jpeg .png .jpg với dung lượng tối đa là 100 MB.</p>
                                </Col>
                            </Row>
                            <Row >
                                <Col span={24} className="update-change-btn">
                                    <button className="update-change-btncancel" onClick={handleChangeClassCancel}>Hủy</button>
                                    <button className="update-change-btnacp" onClick={handleChangeClassCancel}>Lưu</button>
                                </Col>
                            </Row>
                        </Modal>

                        {/* update change school */}
                        <Modal className="section8-update-change" visible={changeSchoolModalVisible} onOk={handleChangeSchoolOk} onCancel={handleChangeSchoolCancel}>
                            <h1>Cập nhật chuyển trường</h1>
                            <Row>
                                <Col className="text-update-left" span={5}>Tên học viên:</Col>
                                <Col className="text-update-right" span={19}>Nguyễn Ngọc Tuyết</Col>
                            </Row>
                            <Row>
                                <Col className="text-update-left" span={5}>Lớp hiện tại:</Col>
                                <Col className="text-update-right" span={19}>10A1</Col>
                            </Row>
                            <Row>
                                <Col className="text-update-left" span={5}>Ngày chuyển trường:</Col>
                                <Col className="text-update-right" span={19}>
                                    <DatePicker placeholder="dd/mm/yy" />
                                    <Input className="text-update-right-input-class" value="Học kì I" readOnly />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-update-left" span={5}>Chuyển đến trường:</Col>
                                <Col className="text-update-right" span={19}>
                                    <Input className="text-update-right-inputform-school" placeholder="Nhập tên trường" />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-update-left" span={5}>Địa chỉ trường:</Col>
                                <Col className="text-update-right" span={19}>
                                    <Input className="text-update-right-inputadd-school" />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-update-left" span={5}>Lý do chuyển trường:</Col>
                                <Col className="text-update-right" span={19}>
                                    <Input.TextArea />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-update-left" span={5}>Tệp đính kèm:</Col>
                                <Col className="text-update-right" span={19}>
                                    <button className="text-update-right-upload1">
                                        <img src={IconUpload} alt="" />
                                    </button>
                                    <button className="text-update-right-upload2">Chọn tệp tải lên...</button>
                                    <p>Kiểu file .pdf .jpeg .png .jpg với dung lượng tối đa là 100 MB.</p>
                                </Col>
                            </Row>
                            <Row >
                                <Col span={24} className="update-change-btn">
                                    <button className="update-change-btncancel" onClick={handleChangeSchoolCancel}>Hủy</button>
                                    <button className="update-change-btnacp" onClick={handleChangeSchoolCancel}>Lưu</button>
                                </Col>
                            </Row>
                        </Modal>

                        {/* update change reserve */}
                        <Modal className="section8-update-change" visible={changeReserveModalVisible} onOk={handleChangeReserveOk} onCancel={handleChangeReserveCancel}>
                            <h1>Cập nhật bảo lưu</h1>
                            <Row>
                                <Col className="text-update-left" span={5}>Tên học viên:</Col>
                                <Col className="text-update-right" span={19}>Nguyễn Ngọc Tuyết</Col>
                            </Row>
                            <Row>
                                <Col className="text-update-left" span={5}>Lớp hiện tại:</Col>
                                <Col className="text-update-right" span={19}>10A1</Col>
                            </Row>
                            <Row>
                                <Col className="text-update-left" span={5}>Ngày bảo lưu:</Col>
                                <Col className="text-update-right" span={19}>
                                    <DatePicker placeholder="dd/mm/yy" />
                                    <Input className="text-update-right-input-class" value="Học kì I" readOnly />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-update-left" span={5}>Thời hạn bảo lưu:</Col>
                                <Col className="text-update-right" span={19}>
                                    <Input className="text-update-right-inputform-school" />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-update-left" span={5}>Lý do chuyển bảo lưu:</Col>
                                <Col className="text-update-right" span={19}>
                                    <Input.TextArea />
                                    <p>Kết quả học tập của học viên sẽ được bảo lưu trong hồ sơ học viên.</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-update-left" span={5}>Tệp đính kèm:</Col>
                                <Col className="text-update-right" span={19}>
                                    <button className="text-update-right-upload1">
                                        <img src={IconUpload} alt="" />
                                    </button>
                                    <button className="text-update-right-upload2">Chọn tệp tải lên...</button>
                                    <p>Kiểu file .pdf .jpeg .png .jpg với dung lượng tối đa là 100 MB.</p>
                                </Col>
                            </Row>
                            <Row >
                                <Col span={24} className="update-change-btn">
                                    <button className="update-change-btncancel" onClick={handleChangeReserveCancel}>Hủy</button>
                                    <button className="update-change-btnacp" onClick={handleChangeReserveCancel}>Lưu</button>
                                </Col>
                            </Row>
                        </Modal>

                        {/* update change discount */}
                        <Modal className="section8-update-change" visible={changeDiscountModalVisible} onOk={handleChangeDiscountOk} onCancel={handleChangeDiscountCancel}>
                            <h1>Cập nhật miễm giảm</h1>
                            <Row>
                                <Col className="text-update-left" span={6}>Tên học viên:</Col>
                                <Col className="text-update-right" span={18}>Nguyễn Ngọc Tuyết</Col>
                            </Row>
                            <Row>
                                <Col className="text-update-left" span={6}>Lớp hiện tại:</Col>
                                <Col className="text-update-right" span={18}>10A1</Col>
                            </Row>
                            <Row>
                                <Col className="text-update-left" span={6}>Đổi tượng miễn giảm:</Col>
                                <Col className="text-update-right" span={18}>
                                    <Select className="text-update-right-discount">
                                        <Option value="1">Con thương binh</Option>
                                        <Option value="2">Sổ hộ nghèo</Option>
                                    </Select>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-update-left" span={6}>Hình thức miễn giảm:</Col>
                                <Col className="text-update-right" span={18}>
                                    <Input className="text-update-right-inputform-school" />
                                </Col>
                            </Row>
                            <Row >
                                <Col span={24} className="update-change-btn">
                                    <button className="update-change-btncancel" onClick={handleChangeDiscountCancel}>Hủy</button>
                                    <button className="update-change-btnacp" onClick={handleChangeDiscountCancel}>Lưu</button>
                                </Col>
                            </Row>
                        </Modal>

                        {/* update change reward */}
                        <Modal className="section8-update-change" visible={changeRewardModalVisible} onOk={handleChangeRewardOk} onCancel={handleChangeRewardCancel}>
                            <h1>Cập nhật khen thưởng</h1>
                            <Row>
                                <Col className="text-update-left" span={5}>Tên học viên:</Col>
                                <Col className="text-update-right" span={19}>Nguyễn Ngọc Tuyết</Col>
                            </Row>
                            <Row>
                                <Col className="text-update-left" span={5}>Lớp hiện tại:</Col>
                                <Col className="text-update-right" span={19}>10A1</Col>
                            </Row>
                            <Row>
                                <Col className="text-update-left" span={5}>Ngày khen thưởng:</Col>
                                <Col className="text-update-right" span={19}>
                                    <DatePicker placeholder="dd/mm/yy" />
                                    <Input className="text-update-right-input-class" value="Học kì I" readOnly />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-update-left" span={5}>Nội dung:</Col>
                                <Col className="text-update-right" span={19}>
                                    <Input.TextArea />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-update-left" span={5}>Tệp đính kèm:</Col>
                                <Col className="text-update-right" span={19}>
                                    <button className="text-update-right-upload1">
                                        <img src={IconUpload} alt="" />
                                    </button>
                                    <button className="text-update-right-upload2">Chọn tệp tải lên...</button>
                                    <p>Kiểu file .pdf .jpeg .png .jpg với dung lượng tối đa là 100 MB.</p>
                                </Col>
                            </Row>
                            <Row >
                                <Col span={24} className="update-change-btn">
                                    <button className="update-change-btncancel" onClick={handleChangeRewardCancel}>Hủy</button>
                                    <button className="update-change-btnacp" onClick={handleChangeRewardCancel}>Lưu</button>
                                </Col>
                            </Row>
                        </Modal>

                        {/* update change Rules */}
                        <Modal className="section8-update-change" visible={changeRulesModalVisible} onOk={handleChangeRulesOk} onCancel={handleChangeRulesCancel}>
                            <h1>Cập nhật kỷ luật</h1>
                            <Row>
                                <Col className="text-update-left" span={5}>Tên học viên:</Col>
                                <Col className="text-update-right" span={19}>Nguyễn Ngọc Tuyết</Col>
                            </Row>
                            <Row>
                                <Col className="text-update-left" span={5}>Lớp hiện tại:</Col>
                                <Col className="text-update-right" span={19}>10A1</Col>
                            </Row>
                            <Row>
                                <Col className="text-update-left" span={5}>Ngày kỷ luật:</Col>
                                <Col className="text-update-right" span={19}>
                                    <DatePicker placeholder="dd/mm/yy" />
                                    <Input className="text-update-right-input-class" value="Học kì I" readOnly />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-update-left" span={5}>Nội dung:</Col>
                                <Col className="text-update-right" span={19}>
                                    <Input.TextArea />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-update-left" span={5}>Tệp đính kèm:</Col>
                                <Col className="text-update-right" span={19}>
                                    <button className="text-update-right-upload1">
                                        <img src={IconUpload} alt="" />
                                    </button>
                                    <button className="text-update-right-upload2">Chọn tệp tải lên...</button>
                                    <p>Kiểu file .pdf .jpeg .png .jpg với dung lượng tối đa là 100 MB.</p>
                                </Col>
                            </Row>
                            <Row >
                                <Col span={24} className="update-change-btn">
                                    <button className="update-change-btncancel" onClick={handleChangeRulesCancel}>Hủy</button>
                                    <button className="update-change-btnacp" onClick={handleChangeRulesCancel}>Lưu</button>
                                </Col>
                            </Row>
                        </Modal>

                        {/* delete */}
                        <Modal className="box__btn-del" visible={delModalVisible} onOk={handleDelOk} onCancel={handleDelCancel}>
                            <h1>Xóa</h1>
                            <p>Xác nhận muốn xóa những thông tin đã chọn? Sau khi xóa sẽ không thể hoàn tác.</p>
                            <button className="box__btn-del-cancel" onClick={handleDelCancel}>Hủy</button>
                            <button className="box__btn-del-acp" onClick={handleDelCancel}>Lưu</button>
                        </Modal>
                    </div>
                    <div className="box__sbj-pagtion">
                        <div className="box__sbj-pagtion-txt">
                            <p>Hiển thị</p>
                            <InputNumber min={1} max={10} defaultValue={3} />
                            <p> hàng trong mỗi trang</p>
                        </div>
                    </div>
                    <div className="box__sbj-pagin">
                        <Pagination
                            showSizeChanger
                            defaultCurrent={8}
                            total={100}
                        />
                    </div>
                </div>
            </div>
        </Fragment >
    );
}

export default ProfileStudent;