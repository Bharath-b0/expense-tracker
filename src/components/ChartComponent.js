import React, { useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import {  Stack } from '@mui/material';


export default function ChartComponent({ income, expense }) {
  const [identifier, setIdentifier] = useState(null);
  const [id, setId] = useState(undefined);

  const items = [
    { id: 'income', value: income, label: 'Income' },
    { id: 'expense', value: expense, label: 'Expense' },
  ];

  const handleClick = (event, itemIdentifier, item) => {
    setId(item.id);
    setIdentifier(itemIdentifier);
  };

  return (
    <>
    <h2 style={{marginLeft : "25px"}}>Income vs Expense</h2>
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      alignItems={{ xs: 'flex-start', md: 'center' }}
      justifyContent="space-between"
      sx={{ width: '100%' }}
    >

      <PieChart
        series={[
          {
            data: items,
          },
        ]}
        onItemClick={handleClick}
        width={400}
        height={200}
        margin={{ right: 200 }}
      />
    </Stack>
    </>
  );
}
