import React, { useState } from 'react';
import { Modal } from 'antd';

import './ModalDelete.css';

const ModalDelete = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <i className='bx bx-trash' onClick={showModal}></i>
            <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <h3>Xóa</h3>
                <p>Xác nhận muốn xoá những thông tin đã chọn? Sau khi xoá sẽ không thể hoàn tác.</p>
            </Modal>
        </div>
    );
};

export default ModalDelete;
