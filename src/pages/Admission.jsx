import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Paper, 
  TextField, 
  Button, 
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  Alert
} from '@mui/material';
import { 
  Person, 
  School, 
  CalendarToday,
  AttachFile,
  PhotoCamera,
  Description
} from '@mui/icons-material';

const Admission = () => {
  const [documents, setDocuments] = React.useState({
    birthCertificate: null,
    parentId: null,
    guardianId: null,
    schoolClearance: null,
    passportPhoto: null
  });

  const handleFileChange = (field) => (event) => {
    const file = event.target.files[0];
    if (file) {
      setDocuments(prev => ({
        ...prev,
        [field]: file
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', documents);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Student Admission
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Student Information
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Student Information */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                margin="normal"
                required
                InputProps={{
                  startAdornment: <Person sx={{ mr: 1 }} />,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date of Birth"
                variant="outlined"
                margin="normal"
                required
                type="date"
                InputProps={{
                  startAdornment: <CalendarToday sx={{ mr: 1 }} />,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Parent/Guardian Name"
                variant="outlined"
                margin="normal"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Contact Number"
                variant="outlined"
                margin="normal"
                required
                type="tel"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Previous School (if applicable)"
                variant="outlined"
                margin="normal"
                InputProps={{
                  startAdornment: <School sx={{ mr: 1 }} />,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Additional Information"
                variant="outlined"
                margin="normal"
              />
            </Grid>

            {/* Document Uploads */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                Required Documents
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Please upload all required documents in PDF or image format.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel htmlFor="birth-certificate">Birth Certificate</InputLabel>
                <OutlinedInput
                  id="birth-certificate"
                  type="file"
                  onChange={handleFileChange('birthCertificate')}
                  startAdornment={
                    <InputAdornment position="start">
                      <AttachFile />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel htmlFor="parent-id">Parent ID</InputLabel>
                <OutlinedInput
                  id="parent-id"
                  type="file"
                  onChange={handleFileChange('parentId')}
                  startAdornment={
                    <InputAdornment position="start">
                      <AttachFile />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel htmlFor="guardian-id">Guardian ID</InputLabel>
                <OutlinedInput
                  id="guardian-id"
                  type="file"
                  onChange={handleFileChange('guardianId')}
                  startAdornment={
                    <InputAdornment position="start">
                      <AttachFile />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel htmlFor="school-clearance">School Clearance</InputLabel>
                <OutlinedInput
                  id="school-clearance"
                  type="file"
                  onChange={handleFileChange('schoolClearance')}
                  startAdornment={
                    <InputAdornment position="start">
                      <Description />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel htmlFor="passport-photo">Passport Photo</InputLabel>
                <OutlinedInput
                  id="passport-photo"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange('passportPhoto')}
                  startAdornment={
                    <InputAdornment position="start">
                      <PhotoCamera />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Alert severity="info" sx={{ mt: 2 }}>
                Note: All documents must be clear and legible. Passport photo should be recent and meet standard passport photo requirements.
              </Alert>
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 4 }}
                type="submit"
                fullWidth
              >
                Submit Application
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Admission;
