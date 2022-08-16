import React, { useEffect, useState } from "react";
import data from "./data.json";

export default function Table(props) {
  const [contacts, newContacts] = useState(data);

  useEffect(() => {
    const url = "https://api.covidtracking.com/v1/states/current.json";
    const fetchData = async () => {
      try {
        const dtaa = await fetch(url);
        const pras = await dtaa.json();
        console.log(pras);
        newContacts(pras);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <table className="table my-5 ">
        <thead>
          <tr>
            <th scope="col">State</th>
            <th id="two" scope="col">
              recovered
            </th>
            <th scope="col">positive cases</th>
            <th scope="col">death</th>
          </tr>
        </thead>
        <tbody id="tbody">
          {contacts.map((contact) => (
            <tr>
              <th scope="row">{contact.state}</th>
              <td>{contact.onVentilatorCurrently} </td>
              <td>{contact.positive}</td>
              <td>{contact.death}</td>
            </tr>
          ))}
          {/* <tr>
            <th scope="row">1</th>
            <td>{props.one}</td>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>{props.two}</td>
            <td>2</td>
            <td>1</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>{props.three}</td>
            <td>3</td>
            <td>2</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
