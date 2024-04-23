import { useContext, useEffect, useState } from "react";
import { Authentication } from "../main";

export const About = () => {

  const {users, loading, error, setAuthState} = useContext(Authentication)
  
  console.log(users, "users");
  console.log(loading, "loading");
  console.log(error, "error");

  const [storeusers, setStoreUsers] = useState([]);

  useEffect(() => {
    fetchData();
    console.log("ddddddddd");
  }, []);

 
  const fetchData = async () => {
    try {
      setAuthState({
        users: [],
        loading: true,
        error: false,
      });

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = await response.json();
      // console.log(result, "rrrrrrrrrrrrrr");
      setStoreUsers(result);
      
    } catch (error) {
      console.error("Error fetching data:", error);

      setAuthState({
        users: [],
        loading: false,
        error: true,
      });
    } finally {
      setAuthState({
        users: [],
        loading: false,
        error: false,
      });
    }
  };

   if (loading) {
    return <h1>Loading......</h1>;
  }

  return (
    <>
      {storeusers.map((a) => {
        return (
          <div className="list-container">
            <div className="content-container">
              <p>id{a.id}</p>
              <p>title{a.title}</p>
              <p>body{a.body}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};


