import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MmFkMTlkMzg3NmQxNzRjMTYzMmI2NyIsImlhdCI6MTY5NzkyMzYyNCwiZXhwIjoxNzAwNTE1NjI0fQ.0DVM7FomEcxFgecvS3Iz6Ocv0JAFUq4-4J5gHgHBpT0",
    "Content-Type": "application/json",
  },
});

export default api;
