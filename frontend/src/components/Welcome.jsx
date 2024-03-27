import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Welcome Back, <strong>{user && user.name} as {user && user.role}</strong></h1>
    </div>
  );
};

export default Welcome;