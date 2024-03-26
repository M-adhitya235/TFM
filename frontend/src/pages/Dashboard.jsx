import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import Navbar from "../components/Navbar";
import CardComponent from "../components/CardCompo";
import Welcome from "../components/Welcome"
import Footer from "../components/Footer";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  return (
    <div className="min-h-screen bg-white-200">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
      <Welcome />
        <h1 className="text-xl text-gray-800 font-bold mt-4 mb-4 ml-4">Today</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card List */}
          <CardComponent imageUrl="https://www.koreandae.com/image-product/img3413-1605778321.jpg" title="SUPER JUNIOR - ALBUM VOL.9 [TIME SLIP]" description="Rp 295.000" />
          <CardComponent imageUrl="https://www.koreandae.com/image-product/img3413-1605778321.jpg" title="SUPER JUNIOR - ALBUM VOL.9 [TIME SLIP]" description="Rp 295.000" />
          <CardComponent imageUrl="https://www.koreandae.com/image-product/img3413-1605778321.jpg" title="SUPER JUNIOR - ALBUM VOL.9 [TIME SLIP]" description="Rp 295.000" />
          <CardComponent imageUrl="https://www.koreandae.com/image-product/img3413-1605778321.jpg" title="SUPER JUNIOR - ALBUM VOL.9 [TIME SLIP]" description="Rp 295.000" />
          <CardComponent imageUrl="https://www.koreandae.com/image-product/img3413-1605778321.jpg" title="SUPER JUNIOR - ALBUM VOL.9 [TIME SLIP]" description="Rp 295.000" />
          <CardComponent imageUrl="https://www.koreandae.com/image-product/img3413-1605778321.jpg" title="SUPER JUNIOR - ALBUM VOL.9 [TIME SLIP]" description="Rp 295.000" />
          <CardComponent imageUrl="https://www.koreandae.com/image-product/img3413-1605778321.jpg" title="SUPER JUNIOR - ALBUM VOL.9 [TIME SLIP]" description="Rp 295.000" />
          <CardComponent imageUrl="https://www.koreandae.com/image-product/img3413-1605778321.jpg" title="SUPER JUNIOR - ALBUM VOL.9 [TIME SLIP]" description="Rp 295.000" />
          <CardComponent imageUrl="https://www.koreandae.com/image-product/img3413-1605778321.jpg" title="SUPER JUNIOR - ALBUM VOL.9 [TIME SLIP]" description="Rp 295.000" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
