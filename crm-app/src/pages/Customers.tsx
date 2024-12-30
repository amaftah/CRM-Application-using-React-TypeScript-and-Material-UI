import React from 'react';
import {
  Container,
  Typography,
  Avatar,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  TextField,
  Card,
  Grid,
} from '@mui/material';

const customers = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Customer ${i + 1}`,
  email: `customer${i + 1}@example.com`,
  phone: `123-456-78${i}`,
}));

const Customers: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [search, setSearch] = React.useState('');

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.email.toLowerCase().includes(search.toLowerCase()) ||
      customer.phone.includes(search)
  );

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
        Customers
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Manage your customer information effectively.
      </Typography>

      {/* Search and Add Customer Section */}
      <Grid container spacing={2} alignItems="center" sx={{ marginBottom: 4 }}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search customers..."
            value={search}
            onChange={handleSearchChange}
            sx={{
              background: '#FFFFFF',
              borderRadius: '5px',
            }}
          />
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
            Add New Customer
          </Button>
        </Grid>
      </Grid>

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
            {filteredCustomers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>
                  <Avatar sx={{ bgcolor: '#FFD700' }}>{customer.name.charAt(0)}</Avatar>
                </TableCell>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ marginRight: 1, background: '#1E90FF', color: '#FFFFFF' }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ background: '#FF6347', color: '#FFFFFF' }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <TablePagination
          component="div"
          count={filteredCustomers.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ color: '#FFFFFF' }}
        />
      </Card>
    </Container>
  );
};

export default Customers;
