self.addEventListener('message', (event) => {
  const { type } = event.data;

  if (type === 'fetchData') {
      const urls = [
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
                  urls: jsonData
              };

              return fetch('/assets/js/json/blogPosts.json')
                  .then(response => response.json())
                  .then(blogIndex => {
                      const blogUrls = blogIndex.map(id => `/assets/js/json/blog/${id}.json`);
                      return Promise.all(blogUrls.map(url => fetch(url)))
                          .then(responses => Promise.all(responses.map(response => response.json())))
                          .then(blogPosts => {
                              data.urls.push(...blogPosts);
                              self.postMessage({ type: 'dadosJson', data });
                          });
                  });
          })
          .catch(error => {
              self.postMessage({ type: 'error', error: error.message });
          });
  }
});
