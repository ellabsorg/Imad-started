import React, { useEffect, useState } from "react";
import "./jokesFilteringStyles.css";
import axios from "axios";

// https://v2.jokeapi.dev/joke/   Programming?  lang=fr   &   blacklistFlags=religious &  type=twopart
function MainCode() {
  const [joke, setJoke] = useState({
    setup: "",
    delivery: "",
    singleJoke: "",
  });
  const [parameters, setParameters] = useState({
    category: "Any",
    language: "",
    flags: "",
    flags: "",
    joketype: "",
    flags: "",
  });
  const [status, setStatus] = useState({
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  });

  const handleParameterChange = (e) => {
    const parameterName = e.target.name;
    const parameterValue = e.target.id;
    setParameters({ ...parameters, [parameterName]: parameterValue });
  };

  const URL = `https://v2.jokeapi.dev/joke/${parameters?.category}`;

  async function fetchData() {
    try {
      const params = {
        lang: parameters.language,
        blacklistFlags: parameters.flags,
      };

      setStatus({
        ...status,
        isLoading: true,
        isSuccess: false,
        isError: false,
      });

      const { data } = await axios.get(URL, { params: params });
      // const response = await fetch(URL);
      // const data = await response.json();
      console.log("data = ", data);
      console.log("error = ", data.error);

      if (data.error) {
        setStatus({
          ...status,
          isLoading: false,
          isSuccess: false,
          isError: true,
          message: data.message,
        });
        return;
      }
      setJoke({
        ...joke,
        setup: data.setup,
        delivery: data.delivery,
        singleJoke: data.joke,
      });
      setStatus({
        ...status,
        isLoading: false,
        isSuccess: true,
        isError: false,
      });
    } catch {}
  }

  // useEffect(() => {
  //   fetchData();
  //   console.log(status);
  // }, [parameters]);

  const handleJokeButton = (e) => {
    fetchData();
    console.log(status);
    console.log(parameters);
    console.log(URL);
  };

  return (
    <div className="returnDiv">
      <h1>Joke API</h1>
      <button onClick={handleJokeButton}> Generate Joke </button>

      {!status.isError && !status.isLoading && (
        <h3>
          {joke?.setup || joke?.singleJoke}
          {joke?.delivery}
        </h3>
      )}
      {status.isError && <h3 className="error"> Error: "{status.message}" </h3>}
      {status.isLoading && <h3> Loading... </h3>}

      {/* ===================================CATEGORY ========================= */}
      <div className="category">
        <b>Category : </b>
        <div className="categoryElement">
          <input
            type="radio"
            name="category"
            id="Any"
            onChange={handleParameterChange}
            checked={parameters.category === "Any"} // Check This !!!!!!!!!!!
          />
          <label htmlFor="Any">Any</label>
        </div>
        <div className="categoryElement">
          <input
            type="radio"
            name="category"
            id="programming"
            onChange={handleParameterChange}
          />
          <label htmlFor="programming">Programming</label>
        </div>
        <div className="categoryElement">
          <input
            type="radio"
            name="category"
            id="dark"
            onChange={handleParameterChange}
          />
          <label htmlFor="dark">Dark</label>
        </div>
        <div className="categoryElement">
          <input
            type="radio"
            name="category"
            id="christmas"
            onChange={handleParameterChange}
          />
          <label htmlFor="christmas">Christmas</label>
        </div>
        <div className="categoryElement">
          <input
            type="radio"
            name="category"
            id="misc"
            onChange={handleParameterChange}
          />
          <label htmlFor="misc">Misc</label>
        </div>
        <div className="categoryElement">
          <input
            type="radio"
            name="category"
            id="pun"
            onChange={handleParameterChange}
          />
          <label htmlFor="pun">Pun</label>
        </div>
      </div>

      {/* ===================================LANGUAGE ========================= */}
      <div className="language">
        <b>Language : </b>
        <div className="languageElement">
          <input
            type="radio"
            name="language"
            id="en"
            onChange={handleParameterChange}
          />
          <label htmlFor="en">English</label>
        </div>
        <div className="languageElement">
          <input
            type="radio"
            name="language"
            id="fr"
            onChange={handleParameterChange}
          />
          <label htmlFor="fr">Frensh</label>
        </div>
        <div className="languageElement">
          <input
            type="radio"
            name="language"
            id="de"
            onChange={handleParameterChange}
          />
          <label htmlFor="de">German</label>
        </div>
        <div className="languageElement">
          <input
            type="radio"
            name="language"
            id="es"
            onChange={handleParameterChange}
          />
          <label htmlFor="de">Spanish</label>
        </div>
        <div className="languageElement">
          <input
            type="radio"
            name="language"
            id="pt"
            onChange={handleParameterChange}
          />
          <label htmlFor="de">Portuguese</label>
        </div>
      </div>

      {/* ===================================FLAGS ========================= */}
      <div className="flags">
        <b>Flags : </b>
        <div className="flagElement">
          <input
            type="radio"
            name="flags"
            id="religious"
            onChange={handleParameterChange}
          />
          <label htmlFor="religious">Religious</label>
        </div>
        <div className="flagElement">
          <input
            type="radio"
            name="flags"
            id="political"
            onChange={handleParameterChange}
          />
          <label htmlFor="political">Political</label>
        </div>
        <div className="flagElement">
          <input
            type="radio"
            name="flags"
            id="racist"
            onChange={handleParameterChange}
          />
          <label htmlFor="racist">Racist</label>
        </div>
        <div className="flagElement">
          <input
            type="radio"
            name="flags"
            id="explicit"
            onChange={handleParameterChange}
          />
          <label htmlFor="explicit">Explicit</label>
        </div>
        <div className="flagElement">
          <input
            type="radio"
            name="flags"
            id="sexist"
            onChange={handleParameterChange}
          />
          <label htmlFor="sexist">Sexist</label>
        </div>
      </div>

      {/* ===================================TYPE ========================= */}
      <div className="type">
        <b>Type : </b>
        <div className="typeElement">
          <input
            type="radio"
            name="joketype"
            id="single"
            onChange={handleParameterChange}
          />
          <label htmlFor="single">Single</label>
        </div>
        <div className="typeElement">
          <input
            type="radio"
            name="joketype"
            id="twopart"
            onChange={handleParameterChange}
          />
          <label htmlFor="twopart">Two Part</label>
        </div>
      </div>
    </div>
  );
}

export default MainCode;
