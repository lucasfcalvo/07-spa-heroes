import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MarvelPage } from "../";
import { DcPage } from "../";
import { Navbar } from "../";
import { HeroPage } from "../";
import { SearchPage } from "../";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/marvel" />} />
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />

        </Routes>
      </div>
    </>
  );
};
