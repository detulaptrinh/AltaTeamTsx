import { Space } from 'antd';
import { IconEdit, IconTrash } from '../assets/svg';
import { Modal } from 'antd';

const { confirm } = Modal;

function showDeleteConfirm() {
    confirm({
      title: 'Xóa thông tin',
      content: 'Xác nhận muốn xoá thông tin này và toàn bộ thông tin bên trong? Sau khi xoá sẽ không thể hoàn tác.',
      okText: 'Xác nhận',
      okType: 'danger',
      cancelText: 'Hủy',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
}

const columnsGroupUser = [
    {
        title: 'Tên nhóm',
        dataIndex: 'name',
        sorter: true,
        width: '15%'
    },
    {
        title: 'Tổng số thành viên',
        dataIndex: 'member',
        sorter: true,
        width: '25%'
    },
    {
        title: 'Ghi chú',
        dataIndex: 'ghichu',
        width: '50%'
    },
    {       
        render: () => (
            <Space size="middle">
              <a><img src={IconEdit} className="edit__icon" alt="" style={{width:32,height:32}}/></a>
              <a onClick={showDeleteConfirm}><img src={IconTrash} className="delete__icon" alt="" style={{width:32,height:32}}/></a>
            </Space>
          ),
    },
];


const dataGroupUser = [
    {
        name: 'Quản trị viên',
        member: 6,
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.'
    },
    {
        name: 'Học sinh tiểu học',
        member: 8,
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.'
    },
    {
        name: 'Phòng hành chính',
        member: 7,
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.'
    },
    {
        name: 'Nhân viên',
        member: 6,
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.'
    },
    {
        name: 'Nhân viên',
        member: 6,
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.'
    },
    {
        name: 'Nhân viên',
        member: 6,
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.'
    },
    {
        name: 'Nhân viên',
        member: 6,
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.'
    },
    {
        name: 'Nhân viên',
        member: 6,
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.'
    },

];


export {
    columnsGroupUser,
    dataGroupUser
}