import React, {useState} from 'react';
import { Space, Table, Tag, Button } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
  isEditable?: boolean;
}


const data: DataType[] = [
  {
    
    key: '1',
    name: 'John Brown',
    age: 30,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    isEditable: false
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
    isEditable: true
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    isEditable: false
  },
];

//const Demo2103: React.FC = () =><Table columns={columns} dataSource={data} />;
const Demo2103: React.FC = () =>{
  const [searchData, setsearchData] =useState(data)
  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,

    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      render:(key, record, index)=>{
        return(
          <>
          {!record.isEditable?
          <a onClick={()=>{
            alert(record.address)
          }}> {record.address}</a>
            :<input value={record.address}/>
          }
          </>
        )
      }
    },
    {
      title:'Action',
      dataIndex:'action',
      key:'key',
      render:(key, record, index)=>{
        return(
          <Button type='primary' onClick={()=>{
            const newData = [...searchData]; 
            const updatedData = newData.filter(x => x.name !== record.name); 
            setsearchData(updatedData);
          }}> Delete</Button>
        )
      }
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
        </Space>
      ),
    },
  ];
  return(
    <div>
      <select onChange={(e)=>{
        setsearchData(data.filter(x=>x.age===Number(e.currentTarget.value)))
      }}>
        <option value={32} >Under 32</option>
        <option value={30} >Under 30</option>
        <option value={42} >Under 42</option>s
      </select>
      <Table columns={columns} dataSource={searchData}/>
      <button onClick={()=>{
        localStorage.clear();
        window.location.reload();
      }}>Logout</button>
    </div>
  )
}
export default Demo2103;