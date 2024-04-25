import React, {useState} from 'react';
import { Space, Table, Tag, Button, Input } from 'antd';
import type { title } from "process";
const Test1 =() => {
    const [searchText, setSearchText] = useState('');
    const columms = [
        {title: 'ID', dataIndex:'id', key:'id'},
        {title: 'Student Code', dataIndex:'studentCode', key:'studentCode'},
        {title: 'Student Name', dataIndex:'studentName', key:'studentName'},
        {title: 'Final Test', dataIndex:'result', key:'result'},
        {title: 'Home Town', dataIndex:'hometown', key:'hometown'},

    ]
    const data =[
        {id:1, studentCode:'0909001', studentName:'Le Van Thang', result:8 ,hometown: 'TPHCM'},
        {id:2, studentCode:'0909003', studentName:'Tran Minh Tam', result:7.5 ,hometown: 'Dong Nai'},
        {id:3, studentCode:'0909002', studentName:'Ly Uyen Nhi', result:8.6 ,hometown: 'TPHCM'},
        {id:4, studentCode:'0909004', studentName:'Trinh Thi Thu Thao', result:6 ,hometown: 'Tien Giang'},
        {id:5, studentCode:'0909005', studentName:'Le Van Thang', result:8 ,hometown: 'Khanh Hoa'},

    ]
    const [searchData, setSearchData] = useState(data);
    const myProvinces=['TPHCM', 'Dong Nai', 'Khanh Hoa','Tien Giang'];
    
    return (
        <div>
            <div style={{display:'inline'}}>
            Find student by name:<Input type="text" style={{width:'20%'}}
            value = {searchText} 
            // onChange={(e)=>setSearchText(e.currentTarget.value)}
            onChange={(e)=>{
                setSearchData(data.filter(x=>x.studentName.toLowerCase().includes(e.currentTarget.value.toLowerCase())))
                setSearchText(e.currentTarget.value)
            }}
            onKeyPress={(e)=>{
                if(e.key=='Enter'){
                    setSearchData(data.filter(x=>x.studentName.toLowerCase().includes(searchText.toLowerCase().trim())))
                }
            }}/>&nbsp;
            <input type="checkbox" onChange={(e) =>{ 
                if(e.currentTarget.checked) {
                    const newData = [...searchData]; 
                    const updatedData = newData.filter(x => x.hometown == "TPHCM"); 
                    setSearchData(updatedData);
                }else{
                    setSearchData(data);
                }
            }}/>&nbsp;TPHCM &nbsp;
            <input type="checkbox" onChange={(e) =>{ 
                if(e.currentTarget.checked) {
                    const newData = [...searchData]; 
                    const updatedData = newData.filter(x => x.hometown == "Khanh Hoa"); 
                    setSearchData(updatedData);
                }else{
                    setSearchData(data);
                }
            }}/>&nbsp;Khanh Hoa &nbsp;
            <input type="checkbox" onChange={(e) =>{ 
                if(e.currentTarget.checked) {
                    const newData = [...searchData]; 
                    const updatedData = newData.filter(x => x.hometown == "Dong Nai"); 
                    setSearchData(updatedData);
                }else{
                    setSearchData(data);
                }
            }}/>&nbsp;Dong Nai &nbsp;
            <input type="checkbox" onChange={(e) =>{ 
                if(e.currentTarget.checked) {
                    const newData = [...searchData]; 
                    const updatedData = newData.filter(x => x.hometown == "Tien Giang"); 
                    setSearchData(updatedData);
                }else{
                    setSearchData(data);
                }
            }}/>&nbsp;Tien Giang &nbsp;
            <Button type='primary' 
            onClick={()=>{

            }}>Lọc dữ Liệu</Button>
            </div>
        <Table columns={columms} dataSource={searchData}/>
        {/* <Table columns={columms} dataSource={data.filter(x=>x.studentName.includes('Thu'))}/>  */}
        <button onClick={()=>{
        localStorage.clear();
        window.location.reload();
      }}>Logout</button>
      </div>
    )
}
export default Test1;
