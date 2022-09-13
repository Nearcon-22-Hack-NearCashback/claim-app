import "regenerator-runtime/runtime";
import React from 'react'
import './global.css'
import {initContract} from "./utils/utils";
import {
    Routes,
    Route, BrowserRouter,
} from "react-router-dom";
import ClaimPage from "./pages/claim";
import { createRoot } from 'react-dom/client';
import GamePage from "./pages/gamePage";

const container = document.getElementById('root');
const root = createRoot(container);

window.nearInitPromise = initContract()
  .then(() => {
    root.render(
        <BrowserRouter>
            <Routes>
                <Route path="/claim" element={<ClaimPage />} />
                <Route path="/" element={<GamePage />} />
            </Routes>
        </BrowserRouter>
    )
  })
  .catch(console.error)
