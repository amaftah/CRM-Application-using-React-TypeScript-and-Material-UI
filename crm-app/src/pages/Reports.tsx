import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const salesData = [
  { name: 'January', value: 4000 },
  { name: 'February', value: 3000 },
  { name: 'March', value: 5000 },
  { name: 'April', value: 2000 },
];

const colors = ['#FFD700', '#1E90FF', '#FF6347', '#32CD32'];

const Reports: React.FC = () => (
  <Container
    sx={{
      background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
      color: '#FFFFFF',
      minHeight: '100vh',
      padding: 4,
      borderRadius: '20px',
      boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.5)',
    }}
  >
    <Typography variant="h3" gutterBottom>
      Reports
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
      Analyze your business performance with visual insights.
    </Typography>

    {/* Charts */}
    <Grid container spacing={4} mt={4}>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            background: 'rgba(255, 255, 255, 0.1)',
            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '20px',
          }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Monthly Revenue
            </Typography>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={salesData}>
                <XAxis dataKey="name" stroke="#FFFFFF" />
                <YAxis stroke="#FFFFFF" />
                <Tooltip />
                <Bar dataKey="value" fill="#FFD700" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            background: 'rgba(255, 255, 255, 0.1)',
            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '20px',
          }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Sales Breakdown
            </Typography>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={salesData} dataKey="value" cx="50%" cy="50%" outerRadius={80} label>
                  {salesData.map((entry, index) => (
                    <Cell key={index} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Container>
);

export default Reports;
