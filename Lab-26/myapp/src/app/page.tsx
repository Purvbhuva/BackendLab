import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1>
        Home Page - Database Demo Application
      </h1>
      <p>Welcome to the NextJS Multi-Database Application Demo</p>
      
      <nav>
        <ul>
          <li><a href="/mysql">MySQL Database Demo</a></li>
          <li><a href="/mongodb">MongoDB Database Demo</a></li>
        </ul>
      </nav>
      
      <section>
        <h2>Available Demos:</h2>
        <h3>1. MySQL Demo (/mysql)</h3>
        <p>Demonstrates fetching and displaying users from a MySQL database with:</p>
        <ul>
          <li>Get all users from database</li>
          <li>Get specific user by ID</li>
        </ul>
        
        <h3>2. MongoDB Demo (/mongodb)</h3>
        <p>Demonstrates fetching and displaying users from a MongoDB database with:</p>
        <ul>
          <li>Get all users from database</li>
          <li>Get specific user by ID</li>
        </ul>
      </section>
    </>
  );
}
