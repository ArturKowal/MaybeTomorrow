const Footer = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <footer className="container bg-light navbarFooterRadious">
      <center>
        <p className="text-muted">© {currentYear} MaybeTomorrow project.</p>
      </center>
    </footer>
  );
};

export default Footer;
