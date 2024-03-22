import { Box, styled, Paper} from '@mui/material';

import Sidebar from "../components/SideBar"
import Chat from '../components/Chat';
import ChatFeed from '../components/ChatFeed'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Connect = () => {
  return (
    <Box m="20px">
        <Box height="75vh">
            <Sidebar/>
           

        </Box>
        <div style={{ marginTop:'-28.5rem', marginLeft: '18rem' }}> 
     
           <Chat />
        </div>
        
    
    
    </Box>
  )
}

export default Connect;