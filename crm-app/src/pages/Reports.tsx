import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  MenuItem,
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
} from 'recharts';

// Mock Data
const salesData = [
  { name: 'January', value: 4000 },
  { name: 'February', value: 3000 },
  { name: 'March', value: 5000 },
  { name: 'April', value: 2000 },
];

const revenueTrends = [
  { month: 'January', revenue: 4000 },
  { month: 'February', revenue: 5000 },
  { month: 'March', revenue: 7000 },
  { month: 'April', revenue: 6000 },
  { month: 'May', revenue: 8000 },
];

const colors = ['#FFD700', '#1E90FF', '#FF6347', '#32CD32'];

const Reports: React.FC = () => {
  const [selectedReport, setSelectedReport] = React.useState('monthly');

  const handleReportChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedReport(event.target.value);
  };

  return (
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
      {/* Header Section */}
      <Typography variant="h3" gutterBottom>
        Reports
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Analyze your business performance with visual insights.
      </Typography>

      {/* Filter Section */}
      <Grid container spacing={2} alignItems="center" sx={{ marginBottom: 4 }}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            select
            label="Select Report Type"
            value={selectedReport}
            onChange={handleReportChange}
            sx={{
              background: '#FFFFFF',
              borderRadius: '5px',
            }}
          >
            <MenuItem value="monthly">Monthly Reports</MenuItem>
            <MenuItem value="yearly">Yearly Reports</MenuItem>
            <MenuItem value="custom">Custom Date Range</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
          <Button
            variant="contained"
            sx={{
              background: '#FFD700',
              color: '#000',
              '&:hover': { background: '#FFC107' },
            }}
          >
            Generate Report
          </Button>
        </Grid>
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={4}>
        {/* Revenue Chart */}
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
                Revenue Trends
              </Typography>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={revenueTrends}>
                  <XAxis dataKey="month" stroke="#FFFFFF" />
                  <YAxis stroke="#FFFFFF" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#1E90FF" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Sales Breakdown */}
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

      {/* Additional Reports */}
      <Grid container spacing={4} mt={4}>
        {/* Monthly Revenue Chart */}
        <Grid item xs={12}>
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
                Monthly Revenue Comparison
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
    </Container>
  );
};

export default Reports;
