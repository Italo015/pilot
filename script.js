function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    document.documentElement.classList.add(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }
  
  // Chamar quando a página carregar
  loadTheme()
function toggleMode() {
    const html = document.documentElement
    const isLight = html.classList.toggle('light')
    
    // Persistir preferência no localStorage
    localStorage.setItem('theme', isLight ? 'light' : 'dark')
    
    // Atualizar atributo para acessibilidade
    html.setAttribute('data-theme', isLight ? 'light' : 'dark')
    
    // Disparar evento personalizado (opcional)
    document.dispatchEvent(new CustomEvent('themeChanged', {
      detail: { theme: isLight ? 'light' : 'dark' }
    }))
  }