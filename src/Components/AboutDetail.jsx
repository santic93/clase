import React from "react";
import { useParams } from "react-router-dom";

export default function AboutDetail() {
  const { id } = useParams();
  return <div >AboutDetail: {id}</div>;
}
