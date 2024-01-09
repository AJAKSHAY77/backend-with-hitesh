import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// allowing app to communicate to all origins
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//allowing app to accept json data
app.use(express.json({ limit: "16kb" }));

//allowing server to understand url
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

//allowing app to keep photos,files 
app.use(express.static("public"))

//allowing app to perform crud ops on user browser's cookie
app.use(cookieParser())

export { app };
