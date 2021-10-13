import { IconEdit, IconTrash} from '../assets/svg';
import { Space } from 'antd';
import { Modal } from 'antd';

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

const { confirm } = Modal;

const columnsListUser = [
    {
        title: 'Tên',
        dataIndex: 'name',
        width: '15%'
    },
    {
        title: 'Email',
        dataIndex: 'email',
        width: '25%'
    },
    {
        title: 'Nhóm người dùng',
        dataIndex: 'groupuser', 
        width: '20%'
    },
    {
        title: 'Trạng thái',
        dataIndex: 'ghichu',
        width: '30%'
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

const dataListUser = [
    {
        name: 'Nguyễn Văn C',
        email: 'abcdefkdd@gmail.com',
        groupuser: 'Quản trị viên',
        ghichu: 'Đã vô hiệu hóa',
    },
    {
        name: 'Nguyễn Văn C',
        email: 'abcdefkdd@gmail.com',
        groupuser: 'Học sinh tiểu học',
        ghichu: 'Đang hoạt động'
    },
    {
        name: 'Nguyễn Văn C',
        email: 'abcdefkdd@gmail.com',
        groupuser: 'Phòng hành chính',
        ghichu: 'Đang hoạt động'
    },
    {
        name: 'Nguyễn Văn C',
        email: 'abcdefkdd@gmail.com',
        groupuser: 'Nhân viên',
        ghichu: 'Đang hoạt động'
    },
    {
        name: 'Nguyễn Văn C',
        email: 'abcdefkdd@gmail.com',
        groupuser: 'Nhân viên',
        ghichu: 'Đang hoạt động' 
    },
    {
        name: 'Nguyễn Văn C',
        email: 'abcdefkdd@gmail.com',
        groupuser: 'Nhân viên',
        ghichu: 'Đang hoạt động'
    },
    {
        name: 'Nguyễn Văn C',
        email: 'abcdefkdd@gmail.com',
        groupuser: 'Nhân viên',
        ghichu: 'Đang hoạt động'
    },
    {
        name: 'Nguyễn Văn C',
        email: 'abcdefkdd@gmail.com',
        groupuser: 'Nhân viên',
        ghichu: 'Đang hoạt động'
    },

];

export {  columnsListUser, dataListUser }

