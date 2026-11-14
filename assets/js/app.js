const body = document.body;
document.querySelectorAll('.social-links a').forEach(link => {
  const label = link.textContent.trim();
  if (label === 'in') {
    link.href = 'https://www.linkedin.com/in/sai-shanmukh-habbar-kalle/'; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.setAttribute('aria-label', 'LinkedIn'); link.title = 'LinkedIn';
  }
  if (label === 'GH') {
    link.href = 'https://github.com/shanmukh06/'; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.classList.add('social-icon'); link.setAttribute('aria-label', 'GitHub'); link.title = 'GitHub';
    link.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .3Z"/></svg>';
  }
  if (label === '@') {
    link.classList.add('social-icon'); link.setAttribute('aria-label', 'Gmail'); link.title = 'Email with Gmail'; link.href = 'mailto:saishanmukhhk@gmail.com';
    link.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M24 5.46v13.91c0 .9-.73 1.63-1.64 1.63h-4.54v-9.27L12 16.09l-5.82-4.36V21H1.64A1.64 1.64 0 0 1 0 19.37V5.46c0-2.03 2.31-3.18 3.93-1.97l2.25 1.69L12 9.55l5.82-4.37 2.25-1.69C21.69 2.28 24 3.43 24 5.46Z"/></svg>';
  }
  if (label === '𝕏') {
    link.href = 'https://x.com/SSHKonX'; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.classList.add('social-icon', 'x-icon'); link.setAttribute('aria-label', 'X'); link.title = 'X';
    link.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';
  }
});
document.querySelectorAll('.main-nav a').forEach(link => {
  if (['Travel', 'Projects'].includes(link.textContent.trim())) link.remove();
});
document.querySelector('.pdf-actions')?.remove();
document.querySelectorAll('.intro-copy p').forEach(paragraph => { if (paragraph.textContent.trim().startsWith('Previously, I worked as a Research Intern')) paragraph.remove() });
document.querySelectorAll('.experience-item').forEach(item => { if (item.querySelector('h2')?.textContent.trim() === 'University of Petroleum and Energy Studies') item.remove() });
document.querySelectorAll('a').forEach(link => { if (link.textContent.trim() === 'Prof. Deepu Vijayasenan') link.href = 'https://ece.nitk.ac.in/faculty/deepu-vijayasenan' });
const homepageFocus = document.querySelector('.intro-copy strong');
if (homepageFocus?.textContent.includes('Natural Language Understanding')) homepageFocus.textContent = 'Speech AI and Deep Learning';
const homepageHighlights = document.querySelector('.highlights');
if (homepageHighlights) {
  const label = document.createElement('strong'); label.textContent = 'Highlights:';
  const separator = document.createElement('span'); separator.className = 'dot'; separator.textContent = '•';
  homepageHighlights.replaceChildren(label, document.createTextNode(' Speaker profiling research '), separator, document.createTextNode(' Efficient deep learning'));
}
const descriptionMeta = document.querySelector('meta[name="description"]');
if (descriptionMeta?.content.includes('natural language understanding')) descriptionMeta.content = 'Sai Shanmukh Habbar Kalle — researcher in speech AI and deep learning.';
document.querySelectorAll('.area').forEach(area => { if (area.querySelector('h3')?.textContent.trim() === 'Natural Language Understanding') area.remove() });
const remainingResearchAreas = document.querySelectorAll('.areas .area');
remainingResearchAreas.forEach((area, index) => { const number = area.querySelector('.num'); if (number) number.textContent = String(index + 1).padStart(2, '0') });
const researchAreasGrid = document.querySelector('.areas');
if (researchAreasGrid && remainingResearchAreas.length) researchAreasGrid.classList.add(`area-count-${remainingResearchAreas.length}`);
document.querySelectorAll('.page-head p,.news-item p').forEach(paragraph => {
  if (paragraph.textContent.includes('speech, language understanding, and deep neural models.')) paragraph.textContent = 'I work on practical and efficient learning systems, with a focus on speech and deep neural models.';
  if (paragraph.textContent.includes('speech AI, natural language understanding, and efficient learning.')) paragraph.textContent = 'Continued research across speech AI and efficient deep learning.';
});
const newsBox = document.querySelector('.news-box');
if (newsBox) {
  const item = document.createElement('div'); item.className = 'news-item';
  const date = document.createElement('time'); date.textContent = '2026';
  const news = document.createElement('p'); news.append(document.createTextNode('Paper accepted at '));
  const conference = document.createElement('a'); conference.className = 'accent-link'; conference.href = 'https://www.icon2026.org/'; conference.target = '_blank'; conference.rel = 'noopener noreferrer'; conference.textContent = 'ICON 2026';
  news.append(conference, document.createTextNode('.'));
  item.append(date, news); newsBox.replaceChildren(item);
}
const motionStyle = document.createElement('style'); motionStyle.textContent = 'body.leaving{opacity:0;transform:translateY(-4px);transition:opacity .12s ease,transform .12s ease}.social-links .social-icon{display:inline-flex;align-items:center;justify-content:center}.social-links .social-icon svg{display:block;width:16px;height:16px}footer{display:flex;align-items:center;justify-content:space-between;gap:24px}.footer-owner{white-space:nowrap}.footer-credit{margin-left:auto;text-align:right}.footer-credit a{color:var(--accent);background:linear-gradient(var(--accent),var(--accent)) 0 100%/0 1px no-repeat;transition:color .2s,background-size .25s}.footer-credit a:hover,.footer-credit a:focus-visible{color:var(--accent-soft);background-size:100% 1px}.areas.area-count-2{grid-template-columns:repeat(2,minmax(0,1fr))}@media(max-width:560px){.areas.area-count-2{grid-template-columns:1fr}footer{align-items:flex-start;flex-direction:column;gap:6px}.footer-credit{margin-left:0;max-width:none;text-align:left}}'; document.head.append(motionStyle);
const publicationsHeading = [...document.querySelectorAll('.section h2')].find(node => node.textContent.trim() === 'Publications'); if (publicationsHeading) { publicationsHeading.closest('.section').id = 'publications'; if (location.hash === '#publications') requestAnimationFrame(() => publicationsHeading.scrollIntoView({ behavior: 'smooth' })) }
const selectedResearchHeading = [...document.querySelectorAll('.section-title')].find(node => node.textContent.trim().toLowerCase() === 'selected research');
if (selectedResearchHeading) {
  const section = selectedResearchHeading.closest('.section');
  const lead = section.querySelector('.section-lead p:not(.section-title)');
  if (lead) lead.textContent = 'Recent work in speech AI and efficient learning.';
  const allResearchLink = section.querySelector('.text-link');
  if (allResearchLink) allResearchLink.href = '/research.html';
  const list = document.createElement('div'); list.className = 'list';
  const article = document.createElement('article'); article.className = 'row publication selected-publication';
  const thumbnail = document.createElement('div'); thumbnail.className = 'thumb paper';
  const content = document.createElement('div');
  const meta = document.createElement('p'); meta.className = 'row-meta'; meta.textContent = 'ICON 2026';
  const title = document.createElement('h3'); title.textContent = 'Parameter Efficient Speaker Profiling using Mixture of Recursion';
  const authors = document.createElement('p'); authors.className = 'authors'; authors.textContent = 'Sai Shanmukh Habbar Kalle, Pratik Ranjan Roy Chowdhuri, Deepu Vijayasenan, Shareef Babu Kalluri';
  const description = document.createElement('p'); description.textContent = 'Parameter-efficient multi-task estimation of speaker attributes from speech.';
  content.append(meta, title, authors, description); article.append(thumbnail, content); list.append(article);
  section.querySelector('.list')?.replaceWith(list);
}
const themeButton = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'light') body.classList.add('light');
themeButton?.addEventListener('click', () => { body.classList.toggle('light'); localStorage.setItem('portfolio-theme', body.classList.contains('light') ? 'light' : 'dark'); themeButton.textContent = body.classList.contains('light') ? '☾' : '☀' });
if (themeButton) themeButton.textContent = body.classList.contains('light') ? '☾' : '☀';
const menu = document.querySelector('.main-nav');
const menuButton = document.querySelector('.menu-toggle');
const closeMenu = () => {
  menu?.classList.remove('open');
  body.classList.remove('menu-open');
  menuButton?.setAttribute('aria-expanded', 'false');
};
if (menuButton) {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.addEventListener('click', () => {
    const open = menu?.classList.toggle('open') ?? false;
    body.classList.toggle('menu-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
  });
}
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeMenu();
    menuButton?.focus();
  }
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 900) closeMenu();
});
const homepageEmail = document.querySelector('.contact-line a');
if (homepageEmail) { homepageEmail.textContent = 'saishanmukhhk[at]gmail[dot]com'; homepageEmail.href = 'mailto:saishanmukhhk@gmail.com' }
document.querySelector('a[aria-label="Email"]')?.setAttribute('href', 'mailto:saishanmukhhk@gmail.com');
const currentYear = String(new Date().getFullYear());
document.querySelectorAll('footer').forEach(footer => {
  const owner = document.createElement('span'); owner.className = 'footer-owner';
  const year = document.createElement('span'); year.dataset.year = ''; year.textContent = currentYear;
  owner.append(document.createTextNode('© '), year, document.createTextNode(' Sai Shanmukh Habbar Kalle'));
  const credit = document.createElement('span'); credit.className = 'footer-credit'; credit.append(document.createTextNode('Design inspired by '));
  const creator = document.createElement('a'); creator.href = 'https://sahilg06.github.io/'; creator.target = '_blank'; creator.rel = 'noopener noreferrer'; creator.textContent = 'Sahil Goyal';
  credit.append(creator); footer.replaceChildren(owner, credit);
});
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } }), { threshold: .08 });
document.querySelectorAll('.reveal').forEach(node => observer.observe(node));
window.addEventListener('pageshow', () => body.classList.remove('leaving'));
document.querySelectorAll('a[href]').forEach(link => link.addEventListener('click', event => { const href = link.getAttribute('href'); if (!href || !href.startsWith('/') || event.metaKey || event.ctrlKey || link.target === '_blank') return; event.preventDefault(); body.classList.add('leaving'); setTimeout(() => location.href = href, 120) }));
