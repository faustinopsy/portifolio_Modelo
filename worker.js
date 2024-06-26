self.addEventListener('message', (event) => {
    const { type } = event.data;
    
    if (type === 'fetchData') {
      const urls = [
        '/assets/js/json/blogPosts.json',
        '/assets/js/json/Clientes.json',
        '/assets/js/json/ContactsList.json',
        '/assets/js/json/education.json',
        '/assets/js/json/experience.json',
        '/assets/js/json/projects.json',
        '/assets/js/json/Services.json',
        '/assets/js/json/skills.json',
        '/assets/js/json/SocialLinks.json',
        '/assets/js/json/testimonials.json'
      ];
  
      Promise.all(urls.map(url => fetch(url)))
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(jsonData => {
          const data = {
            urls: [
              jsonData[0], jsonData[1], jsonData[2], jsonData[3],
              jsonData[4], jsonData[5], jsonData[6], jsonData[7],
              jsonData[8], jsonData[9]
            ]
          };
          self.postMessage({ type: 'dadosJson', data });
        })
        .catch(error => {
          self.postMessage({ type: 'error', error: error.message });
        });
    }
  });
  