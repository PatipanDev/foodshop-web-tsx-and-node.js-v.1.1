import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, CssBaseline, Paper, Typography, Grid, Card, CardContent, Button, Tabs, Tab, Divider } from '@mui/material';

import OrderDetailsCard from './componentEmployee/OrderDetailsCard';

const OrderCheck = () => {
  const [tabIndex, setTabIndex] = useState(0); // แท็บที่เลือก
  const navigate = useNavigate();

  // const protection = useProtectedPage(getUserRole());  // เรียกใช้งานฟังก์ชัน
  // console.log('ระดับผู้ใช้',getUserRole())



  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
    // ลบส่วนที่เกี่ยวข้องกับการอัปเดต URL ออก
  };

  return (
    <div>
      <>
        <Typography variant="h4" gutterBottom>รายการที่ต้องตรวจสอบ</Typography>
        {/* Tabs */}
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="ตรวจสอบรายการอาหาร" />
          <Tab label="กำลังดำเนินการ" />
          <Tab label="รายการที่สำเร็จ" />
          <Tab label="รายการที่ยกเลิก" />
        </Tabs>

        {tabIndex === 0 ? (
          <div>
            <OrderDetailsCard/>
          </div>

        ) : tabIndex === 1 ? (
          <div>

          </div>
        ) : tabIndex === 2 ? (
          <div>เนื้อหาสำหรับ tab 3</div>
        ) : tabIndex === 3 ? (
          <div>เนื้อหาสำหรับ tab 4</div>
        ) : (
          <div>ไม่มีเนื้อหา</div>
        )}


      </>

    </div>
  );
};

export default OrderCheck;

