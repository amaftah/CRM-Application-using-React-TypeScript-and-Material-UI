import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Avatar, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const customers = [
  { name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
  { name: 'Jane Smith', email: 'jane.smith@example.com', phone: '234-567-8901' },
];

const Customers: React.FC = () => (
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
      Customers
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
      Manage your customer information effectively.
    </Typography>

    {/* Add New Customer Section */}
    <Button
      variant="contained"
      sx={{
        background: '#FFD700',
        color: '#000',
        marginBottom: 4,
        '&:hover': { background: '#FFC107' },
      }}
    >
      Add New Customer
    </Button>

    {/* Customers Table */}
    <Card
      sx={{
        background: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '20px',
        padding: 2,
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: '#FFD700' }}>Avatar</TableCell>
            <TableCell sx={{ color: '#FFD700' }}>Name</TableCell>
            <TableCell sx={{ color: '#FFD700' }}>Email</TableCell>
            <TableCell sx={{ color: '#FFD700' }}>Phone</TableCell>
            <TableCell sx={{ color: '#FFD700' }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer, index) => (
            <TableRow key={index}>
              <TableCell>
                <Avatar sx={{ bgcolor: '#FFD700' }}>{customer.name.charAt(0)}</Avatar>
              </TableCell>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.phone}</TableCell>
              <TableCell>
                <Button variant="contained" size="small" sx={{ marginRight: 1, background: '#1E90FF', color: '#FFFFFF' }}>
                  Edit
                </Button>
                <Button variant="contained" size="small" sx={{ background: '#FF6347', color: '#FFFFFF' }}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  </Container>
);

export default Customers;
