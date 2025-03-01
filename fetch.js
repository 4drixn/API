  async function fetchStats() {
    try {
      const response = await fetch('TU-URL');
      const data = await response.json();
      document.getElementById('guildCount').textContent = data.guildCount;
      document.getElementById('userCount').textContent = data.userCount;
    } catch (error) {
      console.error('Error al obtener estadísticas:', error);
    }
  }

  setInterval(fetchStats, 10000);
  fetchStats();
