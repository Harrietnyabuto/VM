import { Box} from '@mui/material';

import Sidebar from "../components/SideBar"
import Chat from '../components/Chat';



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