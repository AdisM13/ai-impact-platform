import { Routes, Route, Link } from 'react-router-dom';
import { AppShell, NavLink, Title } from '@mantine/core';

// Tijdelijke placeholders
const Home = () => <Title order={2}>Home Pagina</Title>;
const Kennisbank = () => <Title order={2}>Kennisbank Pagina</Title>;
const Quiz = () => <Title order={2}>AI of Mens Quiz</Title>;
const ApiData = () => <Title order={2}>API Data Pagina</Title>;
const Contact = () => <Title order={2}>Contact Pagina</Title>;

function App() {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 250, breakpoint: 'sm' }}
      padding="md"
    >
      <AppShell.Header p="md">
        <Title order={3}>AI-Impact Platform</Title>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NavLink component={Link} to="/" label="Home" />
        <NavLink component={Link} to="/kennisbank" label="Kennisbank" />
        <NavLink component={Link} to="/quiz" label="Quiz" />
        <NavLink component={Link} to="/api-data" label="AI Nieuws" />
        <NavLink component={Link} to="/contact" label="Contact" />
      </AppShell.Navbar>

      <AppShell.Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kennisbank" element={<Kennisbank />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/api-data" element={<ApiData />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;