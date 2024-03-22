import { Box,Button , Grid,styled, Paper, alpha} from '@mui/material';
import Sidebar from "../components/SideBar"
import { useTheme, } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import OpportunityReviewCard from '../components/OpportunityReviewCard';
import OpportunityReviewCard1 from '../components/OpportunityReviewCard1';
import OpportunityReviewCard2 from '../components/OpportunityReviewCard2';
import OpportunityReviewCard3 from '../components/OpportunityReviewCard3';
import OpportunityReviewCard4 from '../components/OpportunityReviewCard4';
import OpportunityReviewCard5 from '../components/OpportunityReviewCard5';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '10px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  border: '1px solid grey',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


const Opportunities = () => {
  const theme = useTheme();
  return (
  <Box m="20px">
    <Box height="75vh">
      <Sidebar/>
    </Box>
    
    
    <Box display="flex" justifyContent="space-between" alignItems="center" ml={32} p={2} mt={-58}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
    </Box>
      <Box>  

      <Grid container spacing={3} >
        <Grid item xs={8} sx={{  textAlign: 'left' , height: 300, width:200, }}>
          <div>      
            <OpportunityReviewCard />      
          </div>

          <div>      
             <OpportunityReviewCard1 />
      
          </div>

          <div>      
             <OpportunityReviewCard2 />
      
          </div>
  
      </Grid>
          
          <Grid item xs={3} sx={{ marginTop: '-19rem',marginLeft: 'auto', textAlign: 'right' , height: 400, width:100,marginLeft:'34rem'}}>
          <div>      
            <OpportunityReviewCard3 />            
          </div>

          <div >      
            <OpportunityReviewCard4 />            
          </div>

          <div>      
             <OpportunityReviewCard5 />
      
          </div>
            
          </Grid>
  
        </Grid>

      </Box>
    </Box>
  )
}

export default Opportunities;