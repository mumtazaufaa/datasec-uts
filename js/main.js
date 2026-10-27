(() => {
  const prefix = location.pathname.includes('/chapters/') ? '../' : '';
  const current = location.pathname.split('/').pop() || 'index.html';
  const links = [
    { href: 'index.html', label: 'Overview', file: 'index.html' },
    { href: 'chapters/computer-database-security.html', label: '01 · Security Concepts', file: 'computer-database-security.html' },
    { href: 'chapters/classical-encryption.html', label: '02 · Classical Encryption', file: 'classical-encryption.html' },
    { href: 'chapters/block-cipher-des.html', label: '03 · Block Cipher & DES', file: 'block-cipher-des.html' },
    { href: 'chapters/modes-of-operation.html', label: '04 · Modes of Operation', file: 'modes-of-operation.html' }
  ];
  const nav = document.getElementById('site-nav');
  if (nav) {
    nav.innerHTML = links.map(item => `<a href="${prefix}${item.href}" class="${current === item.file ? 'active' : ''}">${item.label}</a>`).join('');
  }
  const toggle = document.getElementById('menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  if (toggle && sidebar) {
    toggle.addEventListener('click', () => sidebar.classList.toggle('open'));
    document.addEventListener('click', event => {
      if (window.innerWidth <= 680 && sidebar.classList.contains('open') && !sidebar.contains(event.target) && !toggle.contains(event.target)) sidebar.classList.remove('open');
    });
  }
})();
