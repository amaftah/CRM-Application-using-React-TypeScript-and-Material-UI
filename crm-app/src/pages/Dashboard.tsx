import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
  AreaChart,
  Area,
} from 'recharts';

const Dashboard: React.FC = () => {
  // Mock Data
  const salesData = [
    { name: 'January', value: 4000 },
    { name: 'February', value: 3000 },
    { name: 'March', value: 5000 },
    { name: 'April', value: 2000 },
  ];

  const revenueGrowth = [
    { name: 'Q1', revenue: 15000 },
    { name: 'Q2', revenue: 20000 },
    { name: 'Q3', revenue: 18000 },
    { name: 'Q4', revenue: 25000 },
  ];

  const userEngagement = [
    { name: 'Website', engagement: 8000 },
    { name: 'Mobile App', engagement: 6000 },
    { name: 'Email Campaigns', engagement: 4000 },
  ];

  const performanceData = [
    { month: 'January', performance: 70 },
    { month: 'February', performance: 75 },
    { month: 'March', performance: 80 },
    { month: 'April', performance: 85 },
    { month: 'May', performance: 90 },
  ];

  const colors = ['#FFD700', '#1E90FF', '#FF6347', '#32CD32'];

  const taskList = [
    'Follow up with 5 customers',
    'Approve pending invoices',
    'Prepare the monthly report',
    'Plan the upcoming team meeting',
    'Check website analytics performance',
  ];

  return (
    <Container
      sx={{
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        minHeight: '100vh',
        color: '#FFFFFF',
        padding: 4,
        borderRadius: '20px',
        boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.5)',
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          py: 4,
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to Your CRM Dashboard
        </Typography>
        <Typography variant="subtitle1">
          Your daily insights and performance metrics, reimagined.
        </Typography>
      </Box>

      {/* KPIs Section */}
      <Grid container spacing={4} mt={4}>
        {[
          { title: 'Total Customers', value: '1,245', color: '#FFD700' },
          { title: 'Monthly Revenue', value: '$85,000', color: '#1E90FF' },
          { title: 'Active Campaigns', value: 12, color: '#FF6347' },
          { title: 'Team Performance', value: '95%', color: '#32CD32' },
        ].map((kpi, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Card
              sx={{
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.1)',
                boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ color: kpi.color }}>
                  {kpi.title}
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 'bold', color: kpi.color }}>
                  {kpi.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={4} mt={4}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
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
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Revenue Growth
              </Typography>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={revenueGrowth}>
                  <XAxis dataKey="name" stroke="#FFFFFF" />
                  <YAxis stroke="#FFFFFF" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#1E90FF" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                User Engagement
              </Typography>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={userEngagement}>
                  <XAxis dataKey="name" stroke="#FFFFFF" />
                  <YAxis stroke="#FFFFFF" />
                  <Tooltip />
                  <Bar dataKey="engagement" fill="#FFD700" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Team Performance
              </Typography>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={performanceData}>
                  <XAxis dataKey="month" stroke="#FFFFFF" />
                  <YAxis stroke="#FFFFFF" />
                  <Tooltip />
                  <Area type="monotone" dataKey="performance" stroke="#32CD32" fill="#32CD32" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Tasks Section */}
      <Grid container spacing={4} mt={4}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Activities
              </Typography>
              <List>
                {['New customer added: Alice Brown', 'Invoice #3456 marked as paid', 'Meeting scheduled with Team Alpha'].map(
                  (activity, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={activity} secondary="2 hours ago" />
                    </ListItem>
                  )
                )}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Today's Tasks
              </Typography>
              <List>
                {taskList.map((task, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={task} />
                  </ListItem>
                ))}
              </List>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: '#FFD700',
                  color: '#000',
                  '&:hover': { backgroundColor: '#FFC107' },
                }}
                fullWidth
              >
                Add New Task
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
