import './App.css';
import table from './table.png'
import table2 from './table 2.png'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import NightlightRoundOutlinedIcon from '@mui/icons-material/NightlightRoundOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import Healthfun from './components/healthsummary';
import Web2 from './components/web2';
import Web3 from './components/web3';
import { useState } from 'react';
function App() {
  const [theme,setTheme] =useState('true')
  const [page,setPage]=useState(1)
  function setmode(){
    setTheme(!theme)
  }
  return (
    <div className="App" style={{backgroundColor:theme ? 'white':'#1f1f1f',color:theme ? 'black' : 'white'}}>
      <header className="head-1"><b style={{fontSize:'2rem'}}>evoqins</b><div className="head-input"><input className="type" placeholder="search for domain" /><SearchOutlinedIcon className='search'/></div><div style={{display: 'flex', flexDirection:'colomn',height:'100%',justifyContent: 'space-between',width:'30%',alignItems: 'center',padding:'0.7rem'}}><NotificationAddOutlinedIcon/><Person3OutlinedIcon/><ListOutlinedIcon/><KeyboardArrowDownOutlinedIcon/><ShoppingCartOutlinedIcon/><NightlightRoundOutlinedIcon onClick={()=>setmode()} className='mui-nightmode'/></div></header>
      <header className="head-2"><div className="options first" onClick={()=>setPage(1)}>Dashboard</div><div className="options" onClick={()=>setPage(2)}>Manage Domain</div><div className="options">Report</div><div className="options">Social Media Accounts</div><div className="options">Templetes</div><div className="options">Coupons</div></header>
     {
     page==1 ? <> <Healthfun theme={theme}/>
      <Web2 theme={theme}/>
      <Web3 theme={theme}/>
      </>:<>
      <div style={{display: 'flex',flexDirection: 'row',height:'2rem',padding:'2rem',justifyContent: 'center'}}><button className='web'>web 2.0</button><button className='web'>web 3.0</button></div>
      <div className='down-1'><div className='inner-down-1'><AddCircleOutlineRoundedIcon/>Add new Domain</div></div>
      <div className='down-2'><b style={{fontSize:'1.5rem'}}>Secondary Domain</b>
      <div className='table-head' style={{marginTop:'3rem'}}><div className='row-1'>Domain name</div><div className='row-1'>Status</div><div className='row-1'>Expiry</div><div className='row-1'>Redirections</div><div className='row-1'>More</div></div>
      <div className='table-head'><div className='row-2'>shop.devoniques.com</div><div className='row-2' style={{marginLeft:'-68px'}}>Active</div><div className='row-2'>25 jun 20</div><div className='row-2'>20</div><div className='row-2'>manage</div></div>
      <img src={table} style={{marginTop:'4rem'}}/>
      <img src={table2} style={{marginTop:'4rem'}}/>

      </div>
      </>}
      <footer style={{ height: 30 }} className="footer">
        <div style={{ fontSize: 'small', color: 'white' }}>Copyrigth 2023 web23 LTD</div>
        <div style={{ fontSize: 'small', color: 'white', justifyContent: 'space-between', flexDirection: 'row' ,display: 'flex' }}>
          <div style={{ fontSize: 'medium', color: 'white' ,margin:'1rem'}}>Content</div>
          <div style={{ fontSize: 'medium', color: 'white',margin:'1rem' }}>About</div>
          <div style={{ fontSize: 'medium', color: 'white',margin:'1rem' }}>Privacy polocy</div>

          <div style={{ fontSize: 'medium', color: 'white',margin:'1rem' }}>FAQ'S</div>

        </div>
        <div style={{ fontSize: 'small', color: 'white' }}>powered by Evoquins</div>

      </footer>
    </div>
  );
}

export default App;
