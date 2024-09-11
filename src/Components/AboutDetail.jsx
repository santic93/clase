import React from "react";
import { useParams } from "react-router-dom";

export default function AboutDetail() {
  const { id } = useParams();
  return <div style={{marginTop:350}}>AboutDetail: {id}</div>;
}
