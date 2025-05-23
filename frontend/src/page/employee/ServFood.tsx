import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, CssBaseline, Paper, Typography, Grid, Card, CardContent, Button, Tabs, Tab, Divider } from '@mui/material';

import OrderDetailsCard from './componentEmployee/OrderDetailsCard';
import ServFoodList from './componentEmployee/servFoodList';


const orderedItems = [
  { name: 'สเต็ก', quantity: 2, price: 150 },
  { name: 'ข้าวผัด', quantity: 1, price: 60 },
  { name: 'ก๋วยเตี๋ยว', quantity: 3, price: 50 },
];

// คำนวณราคารวม
const totalPrice = orderedItems.reduce((total, item) => total + item.quantity * item.price, 0);

const ServFood = () => {
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
        <Typography variant="h4" gutterBottom>รายการอาหารที่ต้องเสิร์ฟ</Typography>
        {/* Tabs */}
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="รายการที่เสิร์พ" />
          <Tab label="ประวัติการเสิร์พ" />
        </Tabs>

        {tabIndex === 0 ? (
          <div>
            <ServFoodList/>
          </div>

        ) : tabIndex === 1 ? (
          <div>

          </div>
        ) : (
          <div>ไม่มีเนื้อหา</div>
        )}


      </>

    </div>
  );
};

export default ServFood;

