import React from "react";
import '../components/style/detalle.css';
import { Card } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Form from "../components/Form"

export default function DetalleExperiencia() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/posts").then((response) => {
      const item = response.data.find(
        (dataItem) => dataItem.id === parseInt(id)
      );
      setData(item);
    });
  }, [id]);

  return (
    <>
    <div class="barraSuperior">
    </div>
    <div class="fatherBOX">
        <div class="boxDT">
            <p class="infoData">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quae nostrum provident commodi earum!
                Tempore quos animi dolores dolorem eveniet molestias consectetur odit similique eligendi, expedita aut
                voluptate provident sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repellendus
                accusamus temporibus iusto rem aut est. Labore suscipit, possimus iusto atque nemo alias nesciunt!
                Impedit debitis ullam obcaecati quibusdam magnam?</p>
        </div>
              <Form/>
    </div>
    </>

  );
}
