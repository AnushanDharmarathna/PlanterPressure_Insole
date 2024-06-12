import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";

import { projectFirestore } from "../components/firebase-config";
import { ref, onValue, set, update } from "firebase/database";
import MyLineChart from "./Charts/MyLinechartSport";

function Interface4() {
  const location = useLocation();
  const event = location.state.sportId;
  const navigate = useNavigate();
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [sensorData1, setSensorData1] = useState([]);
  const [sensorData2, setSensorData2] = useState([]);
  const [sensorData3, setSensorData3] = useState([]);
  const [sensorData4, setSensorData4] = useState([]);
  const [sensorData5, setSensorData5] = useState([]);
  const [picsensorData1, setpicSensorData1] = useState();
  const [picsensorData2, setpicSensorData2] = useState();
  const [picsensorData3, setpicSensorData3] = useState();
  const [picsensorData4, setpicSensorData4] = useState();
  const [picsensorData5, setpicSensorData5] = useState();
  const [thisid, setThisId] = useState();
  const [sensorData, setSensorData] = useState([]);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      // Add a new sport to the Firestore collection
      await set(ref(projectFirestore, `sensor/startStop`), {
        value: 0,
        sportId: 0,
      });
      await update(ref(projectFirestore, `sensor/FootType/${event}`), {
        runtime: secondsElapsed, // Add or update the RunTime field
      });
      // Optionally, you can clear the form after submitting
      alert("Foot Mode Ended Successfully!"); // Set the success message
      // Optionally, you can clear the success message after a few seconds
      navigate("/interface7", {
        state: {
          sportId: event,
        },
      });
      // Optionally, you can navigate to a different page or show a success message
    } catch (error) {
      // Handle the error (you can show an error message to the user)
      console.error("Error Ending data collection:", error.message);
    }
  };
  useEffect(() => {
    const fetchData = () => {
      const picsensorRef = ref(projectFirestore, "pic-sensor");
      onValue(picsensorRef, (snapshot) => {
        const picdata = snapshot.val();
        if (picdata) {
          setpicSensorData1(picdata.sensor1);
          setpicSensorData2(picdata.sensor2);
          setpicSensorData3(picdata.sensor3);
          setpicSensorData4(picdata.sensor4);
          setpicSensorData5(picdata.sensor5);
        }
      });
      const sensorRef1 = ref(
        projectFirestore,
        `/sensor/Sport/${event}/sensor1`
      );
      onValue(
        sensorRef1,
        (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const oneMinuteAgo = Date.now() - 60000;
            const convertedData = Object.entries(data).map(([key, value]) => {
              // Parse the timestamp string to a Date object

              const timestamp = new Date(value.timestamp);

              // Convert the timestamp to Sri Lankan time
              const options = { timeZone: "Asia/Colombo", hour12: false };

              // Extract hours, minutes, and seconds
              const hours = timestamp.getHours();
              const minutes = timestamp.getMinutes();
              const seconds = timestamp.getSeconds();

              // Format the time as "HH:mm:ss"
              const formattedTime = `${hours}:${minutes}:${seconds}`;

              return {
                time: formattedTime,
                sensor1: value.value + "N",
              };
            });
            setSensorData1(convertedData);
          } else {
            console.log("No data available");
          }
        },
        (error) => {
          console.error("Error fetching data:", error);
        }
      );
      const sensorRef2 = ref(
        projectFirestore,
        `/sensor/Sport/${event}/sensor2`
      );
      onValue(
        sensorRef2,
        (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const oneMinuteAgo = Date.now() - 60000;
            const convertedData = Object.entries(data).map(([key, value]) => {
              // Parse the timestamp string to a Date object

              const timestamp = new Date(value.timestamp);

              // Convert the timestamp to Sri Lankan time
              const options = { timeZone: "Asia/Colombo", hour12: false };

              // Extract hours, minutes, and seconds
              const hours = timestamp.getHours();
              const minutes = timestamp.getMinutes();
              const seconds = timestamp.getSeconds();

              // Format the time as "HH:mm:ss"
              const formattedTime = `${hours}:${minutes}:${seconds}`;

              return {
                time: formattedTime,
                sensor2: value.value + "N",
              };
            });
            setSensorData2(convertedData);
          } else {
            console.log("No data available");
          }
        },
        (error) => {
          console.error("Error fetching data:", error);
        }
      );
      const sensorRef3 = ref(
        projectFirestore,
        `/sensor/Sport/${event}/sensor3`
      );
      onValue(
        sensorRef3,
        (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const oneMinuteAgo = Date.now() - 60000;
            const convertedData = Object.entries(data).map(([key, value]) => {
              // Parse the timestamp string to a Date object

              const timestamp = new Date(value.timestamp);

              // Convert the timestamp to Sri Lankan time
              const options = { timeZone: "Asia/Colombo", hour12: false };

              // Extract hours, minutes, and seconds
              const hours = timestamp.getHours();
              const minutes = timestamp.getMinutes();
              const seconds = timestamp.getSeconds();

              // Format the time as "HH:mm:ss"
              const formattedTime = `${hours}:${minutes}:${seconds}`;

              return {
                time: formattedTime,
                sensor3: value.value + "N",
              };
            });
            setSensorData3(convertedData);
          } else {
            console.log("No data available");
          }
        },
        (error) => {
          console.error("Error fetching data:", error);
        }
      );
      const sensorRef4 = ref(
        projectFirestore,
        `/sensor/Sport/${event}/sensor4`
      );
      onValue(
        sensorRef4,
        (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const oneMinuteAgo = Date.now() - 60000;
            const convertedData = Object.entries(data).map(([key, value]) => {
              // Parse the timestamp string to a Date object

              const timestamp = new Date(value.timestamp);

              // Convert the timestamp to Sri Lankan time
              const options = { timeZone: "Asia/Colombo", hour12: false };

              // Extract hours, minutes, and seconds
              const hours = timestamp.getHours();
              const minutes = timestamp.getMinutes();
              const seconds = timestamp.getSeconds();

              // Format the time as "HH:mm:ss"
              const formattedTime = `${hours}:${minutes}:${seconds}`;

              return {
                time: formattedTime,
                sensor4: value.value + "N",
              };
            });
            setSensorData4(convertedData);
          } else {
            console.log("No data available");
          }
        },
        (error) => {
          console.error("Error fetching data:", error);
        }
      );
      const sensorRef5 = ref(
        projectFirestore,
        `/sensor/Sport/${event}/sensor5`
      );
      onValue(
        sensorRef5,
        (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const oneMinuteAgo = Date.now() - 60000;
            const convertedData = Object.entries(data).map(([key, value]) => {
              // Parse the timestamp string to a Date object

              const timestamp = new Date(value.timestamp);

              // Convert the timestamp to Sri Lankan time
              const options = { timeZone: "Asia/Colombo", hour12: false };

              // Extract hours, minutes, and seconds
              const hours = timestamp.getHours();
              const minutes = timestamp.getMinutes();
              const seconds = timestamp.getSeconds();

              // Format the time as "HH:mm:ss"
              const formattedTime = `${hours}:${minutes}:${seconds}`;

              return {
                time: formattedTime,
                sensor5: value.value + "N",
              };
            });
            setSensorData5(convertedData);
          } else {
            console.log("No data available");
          }
        },
        (error) => {
          console.error("Error fetching data:", error);
        }
      );
    };
    fetchData();

    const interval = setInterval(() => {
      setSecondsElapsed((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
    // Update chartData if sensorData changes and it's not equal to the current chartData
  }, []);
  useEffect(() => {
    // Merge data from sensorData1, sensorData2, and sensorData3
    const mergedData = sensorData1.map((data1, index) => ({
      ...data1,
      ...sensorData2[index],
      ...sensorData3[index],
      ...sensorData4[index],
      ...sensorData5[index],
    }));
    setSensorData(mergedData);
  }, [sensorData1, sensorData2, sensorData3, sensorData4, sensorData5]);
  if (sensorData1.length === 0) {
    return (
      <div style={{ textAlign: "center" }}>
        <div className="loading-spinner"></div>
        <div>Loading...</div>
      </div>
    );
  }
  return (
    <div className="maindiv">
      <Header />
      <p className="fontHeading">FOOT CONDITION DETECTION</p>
      <div className="maindiv1">
        <div className="maindiv9">
          <div className="imagediv">
            <div className="foottype">
              <div className="sensor-reading">{picsensorData1}</div>
              <div className="sensor-reading">{picsensorData3}</div>
              <div className="sensor-reading">{picsensorData5}</div>
            </div>
            <div className="foot2">
              <div className="sensor">1</div>
              <div className="sensor">3</div>
              <div className="sensor">5</div>
            </div>
            <div className="foot3-reading">
              <div className="sensor-reading">{picsensorData2}</div>
              <div className="sensor-reading">{picsensorData4}</div>
            </div>
            <div className="foot3">
              <div className="sensor">2</div>
              <div className="sensor">4</div>
            </div>
          </div>
          <div className="maindive10">
            <div className="maindiv11">
              <p className="font2">TIME</p>
              <div className="maindive12">
                <p className="font3">{secondsElapsed} seconds</p>
              </div>
              <button className="button2" onClick={handleClick}>
                STOP
              </button>
            </div>
            <div className="maindiv13">
              <MyLineChart sensorData={sensorData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interface4;
