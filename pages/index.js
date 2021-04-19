import { useState } from 'react';

export default function Home() {
  const [user, setUser] = useState(null);

  return <h1>Welcome to Courses Application</h1>;
}
