import { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AppShell, NavLink, Title, Group, Burger, Drawer, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconHome, IconBook, IconBrain, IconNews, IconMail } from '@tabler/icons-react';
import Home from './pages/Home';
import Kennisbank from './pages/Kennisbank';
import Quiz from './pages/Quiz';
import ApiData from './pages/ApiData';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();
  // Mantine hook om het mobiele menu open/dicht te klappen
  const [opened, { toggle, close }] = useDisclosure(false);

  // We maken een lijstje met onze navigatie-items om dubbele code te voorkomen
  const navItems = [
    { path: '/', label: 'Home', icon: IconHome },
    { path: '/kennisbank', label: 'Kennisbank', icon: IconBook },
    { path: '/quiz', label: 'Quiz', icon: IconBrain },
    { path: '/api-data', label: 'AI Nieuws', icon: IconNews },
    { path: '/contact', label: 'Contact', icon: IconMail },
  ];

  return (
    <AppShell header={{ height: 70 }} padding="xl">
      
      {/* HEADER (Horizontaal bovenaan) */}
      <AppShell.Header px="xl" bg="white">
        <Group h="100%" justify="space-between">
          
          {/* Logo gedeelte */}
          <Group gap="xs">
            <div style={{ backgroundColor: '#0ea5e9', padding: '5px 10px', borderRadius: '8px', color: 'white', fontWeight: 'bold' }}>
              AI
            </div>
            <Title order={3} c="#1e293b">Impact Platform</Title>
          </Group>

          {/* Desktop Navigatie (Verbergen op mobiel met visibleFrom) */}
          <Group gap="xs" visibleFrom="sm">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                component={Link}
                to={item.path}
                label={item.label}
                leftSection={<item.icon size="1.2rem" stroke={1.5} />}
                active={location.pathname === item.path}
                color="blue"
                variant="subtle"
                style={{ borderRadius: '8px', width: 'auto' }}
              />
            ))}
          </Group>

          {/* Mobiel Menu (Hamburgerknop, alleen zichtbaar op kleine schermen) */}
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" aria-label="Open navigatiemenu" />
        </Group>
      </AppShell.Header>

      {/* MOBIEL MENU (Schuift in beeld als je op de hamburger klikt) */}
      <Drawer opened={opened} onClose={close} title="Menu" padding="md" hiddenFrom="sm" size="xs">
        <Stack gap="sm">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              component={Link}
              to={item.path}
              label={item.label}
              leftSection={<item.icon size="1.2rem" stroke={1.5} />}
              active={location.pathname === item.path}
              color="blue"
              variant="light"
              onClick={close} // Sluit menu na klikken
              style={{ borderRadius: '8px' }}
            />
          ))}
        </Stack>
      </Drawer>

      {/* MAIN CONTENT */}
      <AppShell.Main bg="#f8fafc">
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