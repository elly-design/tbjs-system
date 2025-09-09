import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  CircularProgress,
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

// Create a styled component for the calendar container
const CalendarContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0, 6, 0),
  minHeight: 'calc(100vh - 400px)',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(8, 1, 4, 1),
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(10),
  },
  '& .fc': {
    '--fc-border-color': theme.palette.divider,
    '--fc-page-bg-color': theme.palette.background.paper,
    '--fc-now-indicator-color': theme.palette.error.main,
    '--fc-today-bg-color': theme.palette.action.hover,
    '--fc-event-bg-color': theme.palette.primary.main,
    '--fc-event-border-color': theme.palette.primary.dark,
    '--fc-event-text-color': theme.palette.primary.contrastText,
    '& .fc-event': {
      cursor: 'pointer',
      transition: 'all 0.2s',
      '&:hover': {
        opacity: 0.9,
        transform: 'translateY(-1px)',
        boxShadow: theme.shadows[2],
      },
    },
    '& .fc-day-today': {
      backgroundColor: `${theme.palette.action.selected} !important`,
    },
    '& .fc-timegrid-now-indicator-line': {
      borderColor: theme.palette.error.main,
    },
  },
  '& .fc-daygrid-event': {
    borderRadius: theme.shape.borderRadius,
    padding: '2px 4px',
    margin: '1px 2px',
  },
  '& .fc-timegrid-event': {
    borderRadius: theme.shape.borderRadius,
    padding: '2px 4px',
  },
}));

const Calendar = () => {
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const calendarRef = useRef(null);
  
  // Dynamic styles that depend on isMobile
  const calendarStyles = {
    '& .fc-toolbar': {
      flexDirection: isMobile ? 'column' : 'row',
      gap: theme.spacing(1),
      '& .fc-toolbar-title': {
        fontSize: isMobile ? '1.5rem' : '2rem',
        margin: theme.spacing(1, 0),
      },
      '& .fc-button': {
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
        },
        '&.fc-button-active': {
          backgroundColor: theme.palette.primary.dark,
        },
      },
    },
  };

  // Load configuration from environment variables
  const calendarId = import.meta.env.VITE_GOOGLE_CALENDAR_ID || 'primary';
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY || '';
  
  // Initialize with an empty events array
  const events = [];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleEventClick = (clickInfo) => {
    // Handle event click
    const event = clickInfo.event;
    const title = event.title;
    const start = event.start ? event.start.toLocaleString() : 'No start time';
    const end = event.end ? event.end.toLocaleString() : 'No end time';
    const description = event.extendedProps.description || 'No description';
    
    // You can replace this with a custom modal or dialog
    alert(`Event: ${title}\nStart: ${start}\nEnd: ${end}\n\n${description}`);
    
    // Prevent default browser behavior
    clickInfo.jsEvent.preventDefault();
  };

  const handleDateClick = (arg) => {
    // Handle date click
    console.log('Date clicked:', arg.date);
  };

  const renderEventContent = (eventInfo) => {
    return (
      <div style={{ padding: '2px 4px' }}>
        <b>{eventInfo.timeText}</b>
        <div>{eventInfo.event.title}</div>
      </div>
    );
  };

  return (
    <CalendarContainer>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          component="h1" 
          align="center" 
          sx={{
            mb: 6,
            fontWeight: 700,
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            position: 'relative',
            display: 'inline-block',
            width: '100%',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              background: theme.palette.primary.main,
              borderRadius: '2px',
            },
            [theme.breakpoints.down('sm')]: {
              fontSize: '2rem',
              mb: 4,
            }
          }}
        >
          School Calendar
        </Typography>
        
        <Paper elevation={0} sx={{
          p: { xs: 1, sm: 2, md: 3 },
          mb: 4,
          background: 'transparent',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: '12px',
          backgroundImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.8), rgba(248, 249, 250, 0.9))',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease',
          
          overflow: 'hidden',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          }
        }}>
          {loading ? (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
              <CircularProgress />
            </Box>
          ) : (
            <Box sx={[{
              '& .fc': { 
                fontFamily: 'inherit',
                '--fc-page-bg-color': 'transparent',
                '--fc-neutral-bg-color': 'rgba(0, 0, 0, 0.02)',
                '--fc-border-color': 'rgba(0, 0, 0, 0.08)',
                '--fc-now-indicator-color': theme.palette.error.main,
                '--fc-today-bg-color': 'rgba(25, 118, 210, 0.04)',
                '--fc-list-event-hover-bg-color': 'rgba(0, 0, 0, 0.03)',
                '--fc-event-bg-color': theme.palette.primary.main,
                '--fc-event-border-color': theme.palette.primary.dark,
                '--fc-event-text-color': theme.palette.primary.contrastText,
                '--fc-button-bg-color': 'transparent',
                '--fc-button-border-color': 'transparent',
                '--fc-button-hover-bg-color': 'rgba(0, 0, 0, 0.04)',
                '--fc-button-active-bg-color': 'rgba(0, 0, 0, 0.08)',
                '& .fc-button': {
                  textTransform: 'none',
                  borderRadius: '6px',
                  padding: '6px 12px',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-1px)'
                  },
                  '&:active': {
                    transform: 'translateY(0)'
                  }
                },
                '& .fc-day-today': {
                  backgroundColor: 'rgba(25, 118, 210, 0.04)',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '2px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '24px',
                    height: '4px',
                    borderRadius: '2px',
                    background: theme.palette.primary.main,
                  }
                },
                '& .fc-daygrid-day-number': {
                  color: 'rgba(0, 0, 0, 0.7)',
                  padding: '8px',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: theme.palette.primary.main,
                    transform: 'scale(1.1)'
                  }
                },
                '& .fc-daygrid-day-top': {
                  justifyContent: 'center',
                  padding: '4px 0'
                },
                '& .fc-daygrid-day.fc-day-today .fc-daygrid-day-number': {
                  fontWeight: 700,
                  color: theme.palette.primary.main
                },
                '& .fc-col-header-cell-cushion': {
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                  padding: '12px 4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  fontSize: '0.8rem',
                  textDecoration: 'none',
                  '&:hover': {
                    color: theme.palette.primary.main
                  }
                },
                '& .fc-col-header': {
                  border: 'none',
                  '& th': {
                    borderLeft: 'none',
                    borderRight: 'none',
                    borderTop: 'none',
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    background: 'transparent'
                  }
                },
                '& .fc-timegrid-slot': {
                  borderColor: 'rgba(0, 0, 0, 0.03)'
                },
                '& .fc-timegrid-now-indicator-line': {
                  borderColor: theme.palette.error.main
                }
              }
            }, calendarStyles]}>
              <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, googleCalendarPlugin]}
                initialView={isMobile ? 'dayGridMonth' : 'dayGridMonth'}
                headerToolbar={{
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                events={events}
                eventColor={theme.palette.primary.main}
                eventTimeFormat={{
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true,
                  meridiem: 'short'
                }}
                eventDisplay="block"
                eventClick={handleEventClick}
                dateClick={handleDateClick}
                eventContent={renderEventContent}
                height={isMobile ? 'auto' : '800px'}
                contentHeight="auto"
                dayMaxEventRows={true}
                eventMaxStack={3}
                firstDay={1} // Start week on Monday
                slotMinTime="06:00:00"
                slotMaxTime="22:00:00"
                allDaySlot={false}
                nowIndicator={true}
                editable={false}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                weekends={true}
                initialDate={new Date()}
                timeZone="Africa/Nairobi"
                themeSystem="standard"
                eventBackgroundColor={theme.palette.primary.main}
                eventBorderColor={theme.palette.primary.dark}
                eventTextColor={theme.palette.primary.contrastText}
                eventClassNames="custom-event"
                dayHeaderClassNames="custom-day-header"
              />
            </Box>
          )}
        </Paper>
        
      </Container>
    </CalendarContainer>
  );
};

export default Calendar;
