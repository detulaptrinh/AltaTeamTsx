import { Space } from 'antd';
import { IconEdit, IconTrash } from '../assets/svg';


const columnsClassroomSetting = [
    {
        title: 'Loại lớp',
        dataIndex: 'class',
        sorter: true,
        width: '10%'
       
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        width: '30%'
        
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
              <a><img src={IconTrash} className="delete__icon" alt="" style={{width:32,height:32}}/></a>
            </Space>
          ),
    },
];

const dataClassroomSetting = [
    {
        class: 'Căn bản',
        status: 'Đã vô hiệu hóa',
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
    },
    {
        class: 'Nâng cao',
        status: 'Đang hoạt động',
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
    },
    {
        class: 'Tăng cường',
        status: 'Đang hoạt động',
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
    },
    {
        class: 'Phụ đạo',
        status: 'Đang hoạt động',
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
    },
    {
        class: 'Phụ đạo',
        status: 'Đang hoạt động',
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
    },
    {
        class: 'Phụ đạo',
        status: 'Đang hoạt động',
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
    },
    {
        class: 'Phụ đạo',
        status: 'Đang hoạt động',
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
    },
    {
        class: 'Phụ đạo',
        status: 'Đang hoạt động',
        ghichu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada posuere justo.',
    },

];

export { columnsClassroomSetting, dataClassroomSetting}