function getUser(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!id) {
          reject(new Error("User ID is required"));
        } else {
          resolve({ id, name: 'John Doe', location: "Jakarta" });
        }
      }, 1000);
    });
  }
  
  function getWeather(location) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!location) {
          reject(new Error("Location is required"));
        } else {
          resolve({ weather: "Sunny", temperature: 30 });
        }
      }, 1000);
    });
  }
  
  export { getUser, getWeather };