import { useNavigate } from "react-router-dom";
import React from "react";
import Button from "@mui/material/Button";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="Home-container">
      <div className="container-h1">
      <header className="py-5 bg-image-full" style={{ 
      backgroundImage: `url('https://img.freepik.com/free-photo/assortment-cinema-elements-red-background-with-copy-space_23-2148457848.jpg?w=740&t=st=1674694635~exp=1674695235~hmac=59154cc74bd76ac32f894637f1d5b5c82547e2650dba2122a35f77af7d2e5ef0')` 
    }}>
            <div className="text-center my-5">
                
                <h1 className="text-white fs-3 fw-bolder">Movies are change the perspective of your life</h1>
                
            </div>
        </header>
      </div>

      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/movies")}
      >
        Get Started
      </Button>
    </div>
  );
}
