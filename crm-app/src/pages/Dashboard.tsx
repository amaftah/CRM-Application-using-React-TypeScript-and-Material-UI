import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, Button, List, ListItem, ListItemText } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Dashboard: React.FC = () => {
  // Mock Data
  const salesData = [
    { name: 'January', value: 4000 },
    { name: 'February', value: 3000 },
    { name: 'March', value: 5000 },
    { name: 'April', value: 2000 },
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
          color: '#FFFFFF',
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to Your CRM Dashboard
        </Typography>
        <Typography variant="subtitle1">
          Your daily insights and performance metrics, reimagined.
        </Typography>
      </Box>

      {/* Key Metrics */}
      <Grid container spacing={4} mt={4}>
        {[
          { title: 'New Customers', value: 154, color: '#FFD700' },
          { title: 'Revenue', value: '$60,000', color: '#1E90FF' },
          { title: 'Open Tickets', value: 34, color: '#FF6347' },
          { title: 'Tasks Completed', value: '85%', color: '#32CD32' },
        ].map((metric, index) => (
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
                <Typography
                  variant="h6"
                  sx={{
                    color: metric.color,
                  }}
                >
                  {metric.title}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 'bold',
                    color: metric.color,
                  }}
                >
                  {metric.value}
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
                Monthly Revenue Growth
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
      </Grid>

      {/* Tasks and Activities */}
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
                color="primary"
                fullWidth
                sx={{ mt: 2, color: '#FFFFFF', background: '#FFD700' }}
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
