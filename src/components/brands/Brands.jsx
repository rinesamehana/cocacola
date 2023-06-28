import React from 'react';
import './brands.css';
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

const Brands = () => {
  return (
   <>
   <div class="container">
   <div class="line">
   <NavLink to="/spritepage">
   <img src="https://www.freepnglogos.com/uploads/sprite-png-logo/sprite-lemon-lime-soda-png-logo-4.png" class='lineUp'/>
   </NavLink>
</div>

  <div class="line">
  <NavLink to="/fantapage">
    <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/Fanta_logo_%282018%29.png" class='lineUp'/>
    </NavLink>
  </div>

  <div class='line'>
  <NavLink to="/schweppespage">
  <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Schweppes_Logo_2016.png" class='lineUp'/>
  </NavLink>
  </div>


  <div class='line'>
  <NavLink to="/fuzeteapage">
  <img src="https://www.coca-cola-france.fr/content/dam/one/fr/fr/logo-color/fuzetea-logo.png" class='lineUp'/>
  </NavLink>
  </div>

  </div>


  <div class="container">
   <div class="line">
   <NavLink to="/adespage">
   <img src="https://seeklogo.com/images/A/Ades-logo-7677395FC3-seeklogo.com.png" class='lineUp'/>
   </NavLink>
</div>

  <div class="line">
    <img src="https://seeklogo.com/images/C/ciel-logo-992909D409-seeklogo.com.png" class='lineUp'/>
  </div>

  <div class='line'>
  <NavLink to="/dietcokepage">
  <img src="../../images/dietcokee.png" class='lineUp'/>
  </NavLink>
  </div>


  <div class='line'>
  <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/d/d9/Logo_Glac%C3%A9au_vitaminwater.png/1200px-Logo_Glac%C3%A9au_vitaminwater.png" class='lineUp'/>
  </div>

  </div>

  

   
   
   </>
  );
};

export default Brands;