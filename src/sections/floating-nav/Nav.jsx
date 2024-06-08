const Nav = ({ className, item }) => {
  return (
    <li className={className}>
      <a href={item.link} aria-label={item.ariaLabel}>{item.icon}</a>
    </li>
  );
};

export default Nav;