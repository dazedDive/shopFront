import { Routes, Route } from 'react-router-dom';
import BaseScreen from './screen/BaseScreen';
import DeathMetal from './screen/DeathMetal';
import BlackMetal from './screen/BlackMetal';
import DoomMetal from './screen/DoomMetal';
import LoginScreen from './screen/LoginScreen';
import DashBoard from './screen/DashBoard';
import CartScreen from './screen/CartScreen';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BaseScreen/>}>
          <Route path="/deathmetal" element={<DeathMetal/>}/>
          <Route path="/blackmetal" element={<BlackMetal/>}/>
          <Route path="/doommetal" element={<DoomMetal/>}/>
          <Route path="/login" element={<LoginScreen/>}/>
          <Route path="/dashboard" element={<DashBoard/>}/>
          <Route path="/cart" element={<CartScreen/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
